import { client } from "@/sanity/lib/client";
import { categoryBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { MDXRenderer } from "@/components/MDXRenderer";

type Props = {
  params: Promise<{ locale: "bg" | "en"; category: string }>;
};

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
