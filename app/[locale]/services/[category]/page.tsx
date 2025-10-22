import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  allCategorySlugsQuery,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { MDXRenderer } from "@/components/MDXRenderer";

type Props = {
  params: Promise<{ locale: "bg" | "en"; category: string }>;
};

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await client.fetch<{ slug: string }[]>(
    allCategorySlugsQuery,
  );
  const locales = ["bg", "en"] as const;

  return categories.flatMap((category) =>
    locales.map((locale) => ({
      locale,
      category: category.slug,
    })),
  );
}

async function getCategory(slug: string) {
  try {
    return await client.fetch(
      categoryBySlugQuery,
      { slug },
      {
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      },
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
