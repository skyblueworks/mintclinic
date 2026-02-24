import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  allCategorySlugsQuery,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { MDXRenderer } from "@/components/MDXRenderer";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: "bg" | "en"; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = await getCategory(category);
  if (!categoryData) return {};
  const title = categoryData.title?.[locale] || categoryData.title?.bg || "";
  const description =
    categoryData.description?.[locale] || categoryData.description?.bg || "";
  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates(`/services/${category}`),
    openGraph: localeOpenGraph(
      title,
      description,
      `/services/${category}`,
      locale as Locale,
    ),
  };
}

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
