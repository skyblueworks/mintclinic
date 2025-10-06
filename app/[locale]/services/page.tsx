import { client } from "@/sanity/lib/client";
import {
  servicesListQuery,
  categoriesWithServicesListQuery,
} from "@/sanity/lib/queries";

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
      { cache: "no-store" },
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

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {locale === "bg" ? "Услуги" : "Services"}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за услуги и категории"
            : "Test page for services and categories"}
        </p>

        {/* Document Counts */}
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-50 p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {services?.length || 0}
            </div>
            <div className="text-sm text-gray-600">
              {locale === "bg" ? "Услуги" : "Services"}
            </div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 text-center">
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
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Категории" : "Categories"}
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {categories.map((category: any) => (
                <a
                  key={category._id}
                  href={`/${locale}/services/${category.slug}`}
                  className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    {category.title[locale] || category.title.bg}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-gray-600">
                      {category.description[locale] || category.description.bg}
                    </p>
                  )}
                </a>
              ))}
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold">
                {locale === "bg" ? "Данни от категории" : "Categories Data"}
              </h3>
              <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
                {JSON.stringify(categories, null, 2)}
              </pre>
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
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
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Всички услуги" : "All Services"}
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service: any) => (
                <a
                  key={service._id}
                  href={`/${locale}/services/${service.category?.slug}/${service.slug}`}
                  className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title[locale] || service.title.bg}
                  </h3>
                  {service.excerpt && (
                    <p className="mb-2 text-sm text-gray-600">
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
              {locale === "bg" ? "Няма данни за услуги." : "No services data."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
