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
  validFrom?: string;
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
    from: "От",
    to: "до",
    validUntil: "Важи до",
    bookNow: "Запазете час",
    learnMore: "Научете повече",
    readMore: "Прочети повече",
    readLess: "Скрий",
    title: "Актуално",
    upcoming: "Предстоящо",
  },
  en: {
    youSave: "You save",
    from: "From",
    to: "to",
    validUntil: "Valid until",
    bookNow: "Book Now",
    learnMore: "Learn more",
    readMore: "Read more",
    readLess: "Show less",
    title: "What's On",
    upcoming: "Coming Soon",
  },
};

function formatDate(
  dateStr: string,
  locale: Locale,
  { showYear = true }: { showYear?: boolean } = {},
) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "en" ? "en-GB" : "bg-BG", {
    day: "numeric",
    month: "long",
    ...(showYear && { year: "numeric" }),
  });
}

function isFuturePromo(promo: SanityPromo): boolean {
  if (!promo.validFrom) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(promo.validFrom) > today;
}

/* ---- Calendar icon ---- */
function CalendarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ---- Date badge ---- */
function DateBadge({
  promo,
  locale,
  t,
}: {
  promo: SanityPromo;
  locale: Locale;
  t: (typeof ui)["bg"];
}) {
  const future = isFuturePromo(promo);

  if (future && promo.validFrom) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3.5 py-1.5 text-sm font-bold text-primary">
        <CalendarIcon />
        {t.from} {formatDate(promo.validFrom, locale, { showYear: false })}
        {promo.validUntil && (
          <>
            {" "}
            {t.to} {formatDate(promo.validUntil, locale, { showYear: false })}
          </>
        )}
      </div>
    );
  }

  if (promo.validUntil) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3.5 py-1.5 text-sm font-bold text-accent">
        <CalendarIcon />
        {t.validUntil}{" "}
        {formatDate(promo.validUntil, locale, { showYear: false })}
      </div>
    );
  }

  return null;
}

/* ---- Promo card — full-width horizontal on desktop ---- */
function PromoCard({
  promo,
  locale,
  t,
  featured = false,
  upcoming = false,
}: {
  promo: SanityPromo;
  locale: Locale;
  t: (typeof ui)["bg"];
  featured?: boolean;
  upcoming?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none bg-white transition-shadow duration-300 [box-shadow:0px_4px_20px_2px_hsla(var(--mintclinic-mint-dark-hsl)_/_.10)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        {/* Image */}
        {promo.image ? (
          <div
            className={`relative ${featured ? "min-h-[240px] lg:min-h-[340px]" : "min-h-[220px] lg:min-h-[280px]"}`}
          >
            <Image
              src={promo.image.asset.url}
              alt={promo.title[locale]}
              fill
              className={`object-cover ${upcoming ? "opacity-30 blur-[2px]" : ""}`}
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center bg-primary/5 ${featured ? "min-h-[240px] lg:min-h-[340px]" : "min-h-[220px] lg:min-h-[280px]"}`}
          >
            <span className="text-3xl font-extrabold text-primary/15">
              {promo.badge}
            </span>
          </div>
        )}

        {/* Content */}
        <div
          className={`flex flex-col justify-center gap-4 ${featured ? "p-7 lg:p-10" : "p-6 lg:p-8"}`}
        >
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-bold text-white">
              {promo.badge}
            </span>
            <DateBadge promo={promo} locale={locale} t={t} />
          </div>

          {/* Title */}
          {promo.serviceUrl ? (
            <Link
              href={`/${locale}${promo.serviceUrl}`}
              className={`font-medium text-primary transition-colors duration-200 hover:text-primary/80 ${
                featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              }`}
            >
              {promo.title[locale]}
            </Link>
          ) : (
            <h2
              className={`font-medium text-primary ${
                featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              }`}
            >
              {promo.title[locale]}
            </h2>
          )}

          {/* Description */}
          {promo.description?.[locale] && (
            <ExpandableText
              text={promo.description[locale]}
              readMoreLabel={t.readMore}
              readLessLabel={t.readLess}
              className="text-sm"
            />
          )}

          {/* Pricing */}
          <div className="flex items-baseline gap-3">
            {promo.promoPrice && (
              <span
                className={`font-bold text-primary ${featured ? "text-2xl" : "text-xl"}`}
              >
                {promo.promoPrice}
              </span>
            )}
            {promo.originalPrice && (
              <span className="text-sm font-medium text-foreground/40 line-through">
                {promo.originalPrice}
              </span>
            )}
            {promo.savings && (
              <span className="font-dm-sans text-xs font-medium text-accent">
                {t.youSave} {promo.savings}
              </span>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href={`/${locale}/contacts`}
              className={`rounded-full px-6 py-2 text-xs font-extrabold transition-colors duration-200 ${
                upcoming
                  ? "border border-primary text-primary hover:bg-primary hover:text-white"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              {t.bookNow}
            </Link>
            {promo.serviceUrl && (
              <Link
                href={`/${locale}${promo.serviceUrl}`}
                className="rounded-full border border-primary px-6 py-2 text-xs font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                {t.learnMore}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromotionsPreview({
  promos,
  locale,
  noPromotionsText,
}: Props) {
  const t = ui[locale];

  const current = promos.filter((p) => !isFuturePromo(p));
  const upcoming = promos.filter((p) => isFuturePromo(p));
  const [featured, ...rest] = current;

  return (
    <section className="bg-primary/5">
      {/* ---- Page header ---- */}
      <div className="px-6 pb-12 pt-16 lg:pb-20 lg:pt-32">
        <h1 className="text-center text-3xl font-light text-primary lg:text-5xl">
          {t.title}
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:pb-32">
        {promos.length === 0 ? (
          /* ---- Empty state ---- */
          <div className="flex justify-center py-12 lg:py-20">
            <div className="flex max-w-md flex-col items-center gap-5 rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white px-10 py-14 text-center [box-shadow:0px_4px_20px_2px_hsla(var(--mintclinic-mint-dark-hsl)_/_.10)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/[0.08]">
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
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* ---- Featured promotion ---- */}
            {featured && (
              <PromoCard promo={featured} locale={locale} t={t} featured />
            )}

            {/* ---- Remaining current promotions ---- */}
            {rest.map((promo) => (
              <PromoCard key={promo._id} promo={promo} locale={locale} t={t} />
            ))}

            {/* ---- Upcoming offers ---- */}
            {upcoming.length > 0 && (
              <div className="pt-8 lg:pt-16">
                <h2 className="mb-8 text-center text-3xl font-light text-primary lg:mb-12 lg:text-4xl">
                  {t.upcoming}
                </h2>
                <div className="flex flex-col gap-8 lg:gap-10">
                  {upcoming.map((promo) => (
                    <PromoCard
                      key={promo._id}
                      promo={promo}
                      locale={locale}
                      t={t}
                      upcoming
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
