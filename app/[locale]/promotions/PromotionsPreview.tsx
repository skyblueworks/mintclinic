import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locale";

type SanityPromo = {
  _id: string;
  badge: string;
  title: { bg: string; en: string };
  description?: { bg: string; en: string };
  image?: { asset: { _id: string; url: string } };
  originalPrice?: string;
  promoPrice?: string;
  savings?: string;
  validUntil?: string;
  order: number;
};

type Props = {
  promos: SanityPromo[];
  locale: Locale;
  noPromotionsText: string;
};

const ui = {
  bg: {
    youSave: "Спестявате",
    validUntil: "Важи до",
    bookNow: "Запазете час",
    title: "Промоции",
    subtitle:
      "Сезонни оферти и специални пакети в Mint Clinic. Запазете час и спестете.",
  },
  en: {
    youSave: "You save",
    validUntil: "Valid until",
    bookNow: "Book Now",
    title: "Promotions",
    subtitle:
      "Seasonal offers and special packages at Mint Clinic. Book now and save.",
  },
};

function formatDate(dateStr: string, locale: Locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "en" ? "en-GB" : "bg-BG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PromotionsPreview({
  promos,
  locale,
  noPromotionsText,
}: Props) {
  const t = ui[locale];
  const [featured, ...rest] = promos;

  return (
    <>
      {/* Page title */}
      <section className="bg-white px-6 pb-12 pt-16 text-center lg:pb-16 lg:pt-24">
        <h1 className="font-comfortaa text-4xl font-light text-primary lg:text-5xl">
          {t.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-dm-sans text-lg leading-relaxed text-primary/80">
          {t.subtitle}
        </p>
      </section>

      {/* Content */}
      <section className="bg-gradient-to-br from-primary/[4%] to-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          {promos.length === 0 ? (
            <p className="py-16 text-center font-dm-sans text-lg text-primary/60">
              {noPromotionsText}
            </p>
          ) : (
            <div className="flex flex-col gap-8">
              {/* Featured card */}
              <div className="overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-lg shadow-primary/10">
                <div className="grid md:grid-cols-2">
                  {featured.image ? (
                    <div className="relative min-h-[280px]">
                      <Image
                        src={featured.image.asset.url}
                        alt={featured.title[locale]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex min-h-[280px] items-center justify-center bg-primary/5">
                      <span className="text-4xl font-extrabold text-primary/20">
                        {featured.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                    <span className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-white">
                      {featured.badge}
                    </span>
                    <h2 className="font-comfortaa text-3xl font-medium text-primary">
                      {featured.title[locale]}
                    </h2>
                    {featured.description?.[locale] && (
                      <p className="font-dm-sans leading-relaxed text-gray-600">
                        {featured.description[locale]}
                      </p>
                    )}
                    <div className="flex items-baseline gap-3">
                      {featured.promoPrice && (
                        <span className="text-2xl font-bold text-primary">
                          {featured.promoPrice}
                        </span>
                      )}
                      {featured.originalPrice && (
                        <span className="text-base font-medium text-gray-500 line-through">
                          {featured.originalPrice}
                        </span>
                      )}
                    </div>
                    {featured.savings && (
                      <p className="text-sm font-medium text-gray-500">
                        {t.youSave} {featured.savings}
                      </p>
                    )}
                    {featured.validUntil && (
                      <p className="text-sm font-medium text-gray-500">
                        {t.validUntil} {formatDate(featured.validUntil, locale)}
                      </p>
                    )}
                    <Link
                      href={`/${locale}/contacts`}
                      className="w-fit rounded-full bg-primary px-8 py-2.5 text-sm font-extrabold text-white hover:bg-primary/90"
                    >
                      {t.bookNow}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Smaller cards */}
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {rest.map((promo) => (
                    <div
                      key={promo._id}
                      className="flex overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-md shadow-primary/10"
                    >
                      {promo.image ? (
                        <div className="relative w-36 flex-shrink-0">
                          <Image
                            src={promo.image.asset.url}
                            alt={promo.title[locale]}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex w-36 flex-shrink-0 items-center justify-center bg-primary/5">
                          <span className="text-sm font-extrabold text-primary/30">
                            {promo.badge}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-1 flex-col justify-between gap-2 p-5">
                        <div>
                          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                            {promo.badge}
                          </span>
                          <h3 className="font-comfortaa mt-1.5 text-lg font-medium text-primary">
                            {promo.title[locale]}
                          </h3>
                          {promo.description?.[locale] && (
                            <p className="mt-1 line-clamp-2 font-dm-sans text-sm text-gray-500">
                              {promo.description[locale]}
                            </p>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            {promo.promoPrice && (
                              <span className="font-bold text-primary">
                                {promo.promoPrice}
                              </span>
                            )}
                            {promo.originalPrice && (
                              <span className="text-sm font-medium text-gray-500 line-through">
                                {promo.originalPrice}
                              </span>
                            )}
                          </div>
                          {promo.savings && (
                            <p className="mt-0.5 text-xs font-medium text-gray-500">
                              {t.youSave} {promo.savings}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between gap-2">
                            {promo.validUntil && (
                              <p className="text-xs font-medium text-gray-500">
                                {t.validUntil}{" "}
                                {formatDate(promo.validUntil, locale)}
                              </p>
                            )}
                            <Link
                              href={`/${locale}/contacts`}
                              className="rounded-full bg-primary px-3 py-1.5 text-xs font-extrabold text-white hover:bg-primary/90"
                            >
                              {t.bookNow}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
