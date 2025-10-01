import { client } from "@/sanity/lib/client";
import { categoryBySlugQuery, servicesByCategoryQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

async function getCategory(slug: string) {
  try {
    return await client.fetch(categoryBySlugQuery, { slug }, { cache: "no-store" });
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
      { cache: "no-store" }
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
    { cache: "no-store" }
  );

  const locales = ["bg", "en"];
  const params: { locale: string; category: string }[] = [];

  for (const category of categories) {
    if (category.slug && typeof category.slug === 'string') {
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

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {categoryData.title[locale] || categoryData.title.bg}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
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
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === "bg" ? "Данни от категория" : "Category Data"}
          </h2>
          <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
            {JSON.stringify(categoryData, null, 2)}
          </pre>
        </div>

        {/* Services in Category */}
        {services && services.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg"
                ? `Услуги в категория (${services.length})`
                : `Services in Category (${services.length})`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {services.map((service: any) => (
                <a
                  key={service._id}
                  href={`/${locale}/services/${category}/${service.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title[locale] || service.title.bg}
                  </h3>
                  {service.excerpt && (
                    <p className="text-gray-600 text-sm">
                      {service.excerpt[locale] || service.excerpt.bg}
                    </p>
                  )}
                </a>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {locale === "bg" ? "Данни от услуги" : "Services Data"}
              </h3>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                {JSON.stringify(services, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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