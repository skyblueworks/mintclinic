import { client } from "@/sanity/lib/client";
import { serviceBySlugAndCategoryQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { notFound } from "next/navigation";
import { getLocalizedMDX } from "@/lib/getLocalized";

type Props = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

async function getServiceByCategory(category: string, slug: string) {
  try {
    return await client.fetch(
      serviceBySlugAndCategoryQuery,
      { category, slug },
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const services = await client.fetch(
    `*[_type == "service" && defined(category) && defined(slug.current) && defined(category->slug.current)]{
      "slug": slug.current,
      "category": category->slug.current
    }`,
    {},
    { cache: "no-store" },
  );

  const locales = ["bg", "en"];
  const params: { locale: string; category: string; slug: string }[] = [];

  for (const service of services) {
    if (
      service.category &&
      typeof service.category === "string" &&
      service.slug &&
      typeof service.slug === "string"
    ) {
      for (const locale of locales) {
        params.push({
          locale,
          category: service.category,
          slug: service.slug,
        });
      }
    }
  }

  return params;
}

export default async function ServicePage({ params }) {
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
