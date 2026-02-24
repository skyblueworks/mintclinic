import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  serviceBySlugAndCategoryQuery,
  allServiceSlugsWithCategoryQuery,
} from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{
    locale: "bg" | "en";
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, slug } = await params;
  const service = await getServiceByCategory(category, slug);
  if (!service) return {};
  const title = service.title?.[locale] || service.title?.bg || "";
  const description = service.excerpt?.[locale] || service.excerpt?.bg || "";
  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates(`/services/${category}/${slug}`),
    openGraph: localeOpenGraph(
      title,
      description,
      `/services/${category}/${slug}`,
      locale as Locale,
    ),
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = await client.fetch<{ slug: string; category: string }[]>(
    allServiceSlugsWithCategoryQuery,
  );
  const locales = ["bg", "en"] as const;

  return services.flatMap((service) =>
    locales.map((locale) => ({
      locale,
      category: service.category,
      slug: service.slug,
    })),
  );
}

async function getServiceByCategory(category: string, slug: string) {
  try {
    return await client.fetch(
      serviceBySlugAndCategoryQuery,
      { category, slug },
      {
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      },
    );
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServicePage({ params }: Props) {
  const { locale, category, slug } = await params;
  const service = await getServiceByCategory(category, slug);

  if (!service) {
    notFound();
  }

  const content = getLocalizedMDX(service.content, locale);
  const title = service.title?.[locale] || service.title?.bg || "Service";

  return (
    <ServiceLayout
      title={title}
      locale={locale}
      category={category}
      currentSlug={slug}
    >
      {/* MDX Content */}
      {content && <MDXRenderer mdxContent={content} />}

      {/* Debug info in development */}
      {process.env.NODE_ENV === "development" && (
        <details className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <summary className="cursor-pointer font-semibold text-gray-700">
            Debug: Service Data
          </summary>
          <pre className="mt-4 overflow-x-auto rounded border bg-white p-4 text-xs">
            {JSON.stringify(service, null, 2)}
          </pre>
        </details>
      )}
    </ServiceLayout>
  );
}
