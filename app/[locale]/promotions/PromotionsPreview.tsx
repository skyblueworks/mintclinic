import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locale";
import ExpandableText from "@/components/ExpandableText";

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
  serviceUrl?: string;
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
    learnMore: "Научете повече",
    readMore: "Прочети повече",
    readLess: "Скрий",
    title: "Промоции",
  },
  en: {
    youSave: "You save",
    validUntil: "Valid until",
    bookNow: "Book Now",
    learnMore: "Learn more",
    readMore: "Read more",
    readLess: "Show less",
    title: "Promotions",
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
      {/* Page title + content — single seamless section */}
      <section className="bg-gradient-to-br from-primary/[4%] to-white">
        <div className="px-6 pb-12 pt-16 text-center lg:pb-16 lg:pt-24">
          <h1 className="font-comfortaa text-4xl font-light text-primary lg:text-5xl">
            {t.title}
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16">
          {promos.length === 0 ? (
            <div className="flex justify-center py-12">
              <div className="flex max-w-md flex-col items-center gap-4 rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white px-10 py-12 text-center shadow-md shadow-primary/10">
                <div className="bg-primary/8 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary/40"
                  >
                    <path d="M20 12V22H4V12" />
                    <path d="M22 7H2v5h20V7z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <p className="font-dm-sans text-base leading-relaxed text-primary/60">
                  {noPromotionsText}
                </p>
              </div>
            </div>
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
                      <ExpandableText
                        text={featured.description[locale]}
                        readMoreLabel={t.readMore}
                        readLessLabel={t.readLess}
                      />
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
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/${locale}/contacts`}
                        className="rounded-full bg-primary px-8 py-2.5 text-sm font-extrabold text-white hover:bg-primary/90"
                      >
                        {t.bookNow}
                      </Link>
                      {featured.serviceUrl && (
                        <Link
                          href={`/${locale}${featured.serviceUrl}`}
                          className="rounded-full border border-primary/30 px-8 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
                        >
                          {t.learnMore}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller cards */}
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {rest.map((promo) => (
                    <div
                      key={promo._id}
                      className="flex flex-col overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-md shadow-primary/10"
                    >
                      {/* Top: image + badge + title */}
                      <div className="flex">
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
                        <div className="flex flex-1 flex-col gap-1 p-5">
                          <span className="w-fit rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                            {promo.badge}
                          </span>
                          <h3 className="font-comfortaa text-lg font-medium text-primary">
                            {promo.title[locale]}
                          </h3>
                        </div>
                      </div>

                      {/* Description — expandable */}
                      {promo.description?.[locale] && (
                        <div className="px-5 pb-3 pt-1">
                          <ExpandableText
                            text={promo.description[locale]}
                            readMoreLabel={t.readMore}
                            readLessLabel={t.readLess}
                            className="text-sm text-gray-500"
                          />
                        </div>
                      )}

                      {/* Footer: price + buttons */}
                      <div className="border-primary/8 mt-auto border-t px-5 py-4">
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
                        {promo.validUntil && (
                          <p className="mt-0.5 text-xs font-medium text-gray-500">
                            {t.validUntil}{" "}
                            {formatDate(promo.validUntil, locale)}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Link
                            href={`/${locale}/contacts`}
                            className="rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold text-white hover:bg-primary/90"
                          >
                            {t.bookNow}
                          </Link>
                          {promo.serviceUrl && (
                            <Link
                              href={`/${locale}${promo.serviceUrl}`}
                              className="rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary/5"
                            >
                              {t.learnMore}
                            </Link>
                          )}
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
