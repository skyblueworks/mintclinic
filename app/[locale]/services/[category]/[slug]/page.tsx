import { client } from "@/sanity/lib/client";
import { serviceBySlugAndCategoryQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
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
      { cache: "no-store" }
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
    { cache: "no-store" }
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

export default async function ServiceCategoryPage({ params }) {
  const { locale, category, slug } = params;
  const service = await getServiceByCategory(category, slug);

  if (!service) {
    notFound();
  }

  const content = getLocalizedMDX(service.content, locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <a href={`/${locale}/services`} className="hover:text-blue-600">
          {locale === "bg" ? "Услуги" : "Services"}
        </a>
        {service.category && (
          <>
            {" / "}
            <a
              href={`/${locale}/services/${service.category.slug}`}
              className="hover:text-blue-600"
            >
              {service.category.title[locale] || service.category.title.bg}
            </a>
          </>
        )}
        {" / "}
        <span>{service.title[locale] || service.title.bg}</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {service.title[locale] || service.title.bg}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {locale === "bg"
            ? "Тестова страница за услуга"
            : "Test page for service"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Service Data */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === "bg" ? "Данни от услуга" : "Service Data"}
          </h2>
          <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
            {JSON.stringify(service, null, 2)}
          </pre>
        </div>

        {/* Service Content Preview */}
        {service.excerpt && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Кратко описание" : "Excerpt"}
            </h2>
            <p className="text-gray-700">
              {service.excerpt[locale] || service.excerpt.bg}
            </p>
          </div>
        )}

        {/* Service Content */}
        {content && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Съдържание (MDX)" : "Content (MDX)"}
            </h2>
            <article className="prose prose-lg max-w-none">
              <MDXRenderer mdxContent={content} />
            </article>
          </div>
        )}
      </div>
    </div>
  );
}
