import { client } from "@/sanity/lib/client";
import { pageBySlugQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getGalleryPage() {
  try {
    return await client.fetch(
      pageBySlugQuery,
      { slug: "gallery" },
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("Error fetching gallery page:", error);
    return null;
  }
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  const page = await getGalleryPage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href={`/${locale}`} className="hover:text-blue-600">
          {locale === "bg" ? "Начало" : "Home"}
        </a>
        {" / "}
        <span>{locale === "bg" ? "Галерия" : "Gallery"}</span>
      </nav>

      <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          {page?.title?.[locale] ||
            page?.title?.bg ||
            (locale === "bg" ? "Галерия" : "Gallery")}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {locale === "bg"
            ? "Тестова страница за галерия"
            : "Test page for gallery"}
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

            {/* Gallery Images */}
            {page.images && page.images.length > 0 ? (
              <div>
                <h2 className="mb-4 text-2xl font-semibold">
                  {locale === "bg"
                    ? `Изображения в галерията (${page.images.length})`
                    : `Gallery Images (${page.images.length})`}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {page.images.map((image: any, idx: number) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden rounded-lg bg-gray-200"
                    >
                      <img
                        src={image.url || "/placeholder.jpg"}
                        alt={image.alt || `Gallery image ${idx + 1}`}
                        className="h-full w-full object-cover transition hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-yellow-800">
                  {locale === "bg"
                    ? "Няма изображения в галерията."
                    : "No images in gallery."}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-yellow-800">
              {locale === "bg"
                ? "Няма данни за тази страница. Моля, добавете страница с slug 'gallery' в Sanity Studio."
                : "No page data. Please add a page with slug 'gallery' in Sanity Studio."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
