import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getLocalizedMDX } from "@/lib/getLocalized";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getAboutPage() {
  try {
    return await client.fetch(
      pageBySlugQuery,
      { slug: "about-us" },
      { cache: "no-store" }
    );
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const page = await getAboutPage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "За нас" : "About Us"}</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          {page?.title?.[locale] ||
            page?.title?.bg ||
            (locale === "bg" ? "За нас" : "About Us")}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {locale === "bg"
            ? "Тестова страница за 'За нас'"
            : "Test page for 'About Us'"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Page Data */}
        {page ? (
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {locale === "bg" ? "Данни от страница" : "Page Data"}
              </h2>
              <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                {JSON.stringify(page, null, 2)}
              </pre>
            </div>

            {/* Page Content Preview */}
            {page.content && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === "bg" ? "Съдържание (MDX)" : "Content (MDX)"}
                </h2>
                <article className="prose prose-lg max-w-none">
                  {(() => {
                    const content = getLocalizedMDX(page.content, locale);
                    return content ? (
                      <MDXRenderer mdxContent={content} />
                    ) : (
                      <p className="text-gray-500">
                        {locale === "bg"
                          ? "Съдържанието не е налично на този език."
                          : "Content not available in this language."}
                      </p>
                    );
                  })()}
                </article>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма данни за тази страница. Моля, добавете страница с slug 'about-us' в Sanity Studio."
                : "No page data. Please add a page with slug 'about-us' in Sanity Studio."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
