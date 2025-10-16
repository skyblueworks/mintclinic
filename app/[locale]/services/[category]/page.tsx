import { client } from "@/sanity/lib/client";
import { categoryBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { MDXRenderer } from "@/components/MDXRenderer";
import { SUPPORTED_LOCALES } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: "bg" | "en"; category: string }>;
};

export async function generateStaticParams() {
  try {
    const categories = await client.fetch(
      `*[_type == "category"]{ "slug": slug.current }`,
    );

    return SUPPORTED_LOCALES.flatMap((locale) =>
      categories.map((category: { slug: string }) => ({
        locale,
        category: category.slug,
      })),
    );
  } catch (error) {
    console.error("Error generating static params for categories:", error);
    return [];
  }
}

async function getCategory(slug: string) {
  try {
    return await client.fetch(
      categoryBySlugQuery,
      { slug },
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const categoryData = await getCategory(category);

  if (!categoryData) {
    notFound();
  }

  const categoryTitle =
    categoryData.title?.[locale as "bg" | "en"] || categoryData.title?.bg || "";
  const content = getLocalizedMDX(categoryData.content, locale);

  return (
    <ServiceLayout title={categoryTitle} locale={locale} category={category}>
      {content && <MDXRenderer mdxContent={content} />}
    </ServiceLayout>
  );
}
