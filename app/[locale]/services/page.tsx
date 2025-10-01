import { client } from "@/sanity/lib/client";
import {
  servicesListQuery,
  categoriesListQuery,
  categoriesWithServicesListQuery,
} from "@/sanity/lib/queries";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getServices() {
  try {
    return await client.fetch(servicesListQuery, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
}

async function getCategories(locale) {
  try {
    return await client.fetch(
      categoriesWithServicesListQuery,
      { locale },
      { cache: "no-store" }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const [services, categories] = await Promise.all([
    getServices(),
    getCategories(locale),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "Услуги" : "Services"}</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {locale === "bg" ? "Услуги" : "Services"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {locale === "bg"
            ? "Тестова страница за услуги и категории"
            : "Test page for services and categories"}
        </p>

        {/* Document Counts */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600">
              {services?.length || 0}
            </div>
            <div className="text-sm text-gray-600">
              {locale === "bg" ? "Услуги" : "Services"}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600">
              {categories?.length || 0}
            </div>
            <div className="text-sm text-gray-600">
              {locale === "bg" ? "Категории" : "Categories"}
            </div>
          </div>
        </div>

        {/* Categories Data */}
        {categories && categories.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Категории" : "Categories"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {categories.map((category: any) => (
                <a
                  key={category._id}
                  href={`/${locale}/services/${category.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {category.title[locale] || category.title.bg}
                  </h3>
                  {category.description && (
                    <p className="text-gray-600 text-sm">
                      {category.description[locale] || category.description.bg}
                    </p>
                  )}
                </a>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {locale === "bg" ? "Данни от категории" : "Categories Data"}
              </h3>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                {JSON.stringify(categories, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма данни за категории."
                : "No categories data."}
            </p>
          </div>
        )}

        {/* Services Data */}
        {services && services.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {locale === "bg" ? "Всички услуги" : "All Services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {services.map((service: any) => (
                <a
                  key={service._id}
                  href={`/${locale}/services/${service.category?.slug}/${service.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title[locale] || service.title.bg}
                  </h3>
                  {service.excerpt && (
                    <p className="text-gray-600 text-sm mb-2">
                      {service.excerpt[locale] || service.excerpt.bg}
                    </p>
                  )}
                  {service.category && (
                    <span className="inline-block text-xs text-blue-600">
                      {service.category.title[locale] ||
                        service.category.title.bg}
                    </span>
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
              {locale === "bg" ? "Няма данни за услуги." : "No services data."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
