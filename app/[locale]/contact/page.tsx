import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getLocalizedMDX } from "@/lib/getLocalized";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getContactPage() {
  try {
    return await client.fetch(
      pageBySlugQuery,
      { slug: "contact" },
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("Error fetching contact page:", error);
    return null;
  }
}

export default async function ContactPage({ params }) {
  const { locale } = params;
  const page = await getContactPage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "Контакти" : "Contact"}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {page?.title?.[locale] ||
            page?.title?.bg ||
            (locale === "bg" ? "Контакти" : "Contact")}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за контакти"
            : "Test page for contact"}
        </p>

        {/* Current Locale */}
        <div className="mb-6">
          <span className="text-sm text-gray-600">Locale: </span>
          <span className="font-semibold">{locale}</span>
        </div>

        {/* Page Data */}
        {page ? (
          <div>
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold">
                {locale === "bg" ? "Данни от страница" : "Page Data"}
              </h2>
              <pre className="overflow-x-auto rounded border bg-white p-4 text-sm">
                {JSON.stringify(page, null, 2)}
              </pre>
            </div>

            {/* Page Content Preview */}
            {page.content && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
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
          <div className="mb-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма данни за тази страница. Моля, добавете страница с slug 'contact' в Sanity Studio."
                : "No page data. Please add a page with slug 'contact' in Sanity Studio."}
            </p>
          </div>
        )}

        {/* Static Contact Info */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg"
                ? "Информация за контакт"
                : "Contact Information"}
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold">
                  {locale === "bg" ? "Адрес" : "Address"}
                </h3>
                <p className="text-gray-600">
                  {locale === "bg"
                    ? "ул. Д-р Стефан Сарафов 20, 1408 София"
                    : "20 Dr. Stefan Sarafov St., 1408 Sofia"}
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold">
                  {locale === "bg" ? "Телефон" : "Phone"}
                </h3>
                <p className="text-gray-600">
                  <a href="tel:+359888436838" className="hover:text-blue-600">
                    +359 888 436 838
                  </a>
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold">
                  {locale === "bg" ? "Имейл" : "Email"}
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@mintclinic.com"
                    className="hover:text-blue-600"
                  >
                    info@mintclinic.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold">
                  {locale === "bg" ? "Работно време" : "Working Hours"}
                </h3>
                <p className="text-gray-600">
                  {locale === "bg"
                    ? "Понеделник - Петък: 09:00 - 18:00"
                    : "Monday - Friday: 09:00 - 18:00"}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === "bg" ? "Изпратете съобщение" : "Send a Message"}
            </h2>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="text-gray-600">
                {locale === "bg"
                  ? "Формата за контакт предстои да бъде добавена."
                  : "Contact form to be added."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
