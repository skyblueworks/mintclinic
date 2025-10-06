import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  servicesByCategoryQuery,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; category: string }>;
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

async function getServicesByCategory(categorySlug: string) {
  try {
    return await client.fetch(
      servicesByCategoryQuery,
      { categorySlug },
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("Error fetching services by category:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const categories = await client.fetch(
    `*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`,
    {},
    { cache: "no-store" },
  );

  const locales = ["bg", "en"];
  const params: { locale: string; category: string }[] = [];

  for (const category of categories) {
    if (category.slug && typeof category.slug === "string") {
      for (const locale of locales) {
        params.push({ locale, category: category.slug });
      }
    }
  }

  return params;
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const [categoryData, services] = await Promise.all([
    getCategory(category),
    getServicesByCategory(category),
  ]);

  if (!categoryData) {
    notFound();
  }

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
        {" / "}
        <span>{categoryData.title[locale] || categoryData.title.bg}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {categoryData.title[locale] || categoryData.title.bg}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за категория услуги"
            : "Test page for service category"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Category Data */}
        <div className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            {locale === "bg" ? "Данни от категория" : "Category Data"}
          </h2>
          <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
            {JSON.stringify(categoryData, null, 2)}
          </pre>
        </div>

        {/* Services in Category */}
        {services && services.length > 0 ? (
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg"
                ? `Услуги в категория (${services.length})`
                : `Services in Category (${services.length})`}
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service: any) => (
                <a
                  key={service._id}
                  href={`/${locale}/services/${category}/${service.slug}`}
                  className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title[locale] || service.title.bg}
                  </h3>
                  {service.excerpt && (
                    <p className="text-sm text-gray-600">
                      {service.excerpt[locale] || service.excerpt.bg}
                    </p>
                  )}
                </a>
              ))}
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                {locale === "bg" ? "Данни от услуги" : "Services Data"}
              </h3>
              <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
                {JSON.stringify(services, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма налични услуги в тази категория."
                : "No services available in this category."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
