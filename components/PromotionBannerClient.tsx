"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type BannerPromotion = {
  _id: string;
  badge: string;
  bannerText?: { bg?: string; en?: string };
  title: { bg: string; en: string };
};

export default function PromotionBannerClient({
  promo,
}: {
  promo: BannerPromotion;
}) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "bg";

  if (pathname.endsWith("/promotions")) return null;

  const text = promo.bannerText?.[locale] || promo.title[locale];
  const seeAll = locale === "en" ? "See all offers →" : "Виж всички оферти →";

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-2.5 text-center text-sm font-medium text-white">
      <span className="mr-2 inline rounded-full bg-accent px-2 py-0.5 text-xs font-extrabold">
        {promo.badge}
      </span>
      {text}{" "}
      <Link
        href={`/${locale}/promotions`}
        className="inline-block underline underline-offset-2 hover:text-white/80"
      >
        {seeAll}
      </Link>
    </div>
  );
}
