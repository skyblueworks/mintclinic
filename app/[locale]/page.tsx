import { client } from "@/sanity/lib/client";
import { homepageQuery, documentCountQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getHomepage() {
  try {
    return await client.fetch(homepageQuery, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

async function getDocumentCounts() {
  try {
    return await client.fetch(documentCountQuery, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Error fetching counts:", error);
    return null;
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const [homepage, counts] = await Promise.all([
    getHomepage(),
    getDocumentCounts(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {locale === "bg"
            ? "Добре дошли в Mint Clinic"
            : "Welcome to Mint Clinic"}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за проверка на маршрутите и данните"
            : "Test page to verify routes and data"}
        </p>

        {/* Document Counts */}
        {counts && (
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {counts.services}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "bg" ? "Услуги" : "Services"}
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center">
              <div className="text-3xl font-bold text-green-600">
                {counts.categories}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "bg" ? "Категории" : "Categories"}
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {counts.teamMembers}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "bg" ? "Екип" : "Team"}
              </div>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {counts.posts}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "bg" ? "Публикации" : "Posts"}
              </div>
            </div>
            <div className="rounded-lg bg-red-50 p-4 text-center">
              <div className="text-3xl font-bold text-red-600">
                {counts.pages}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "bg" ? "Страници" : "Pages"}
              </div>
            </div>
          </div>
        )}

        {/* Homepage Data */}
        {homepage ? (
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Данни от Homepage" : "Homepage Data"}
            </h2>
            <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
              {JSON.stringify(homepage, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма данни за homepage. Моля, добавете съдържание в Sanity Studio."
                : "No homepage data. Please add content in Sanity Studio."}
            </p>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">
          {locale === "bg" ? "Бързи връзки" : "Quick Links"}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href={`/${locale}/services`}
            className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">
              {locale === "bg" ? "Услуги" : "Services"}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === "bg"
                ? "Преглед на всички услуги"
                : "View all services"}
            </p>
          </a>
          <a
            href={`/${locale}/team`}
            className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">
              {locale === "bg" ? "Екип" : "Team"}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === "bg" ? "Запознайте се с екипа" : "Meet the team"}
            </p>
          </a>
          <a
            href={`/${locale}/blog`}
            className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">
              {locale === "bg" ? "Блог" : "Blog"}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === "bg" ? "Прочетете статиите ни" : "Read our articles"}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
