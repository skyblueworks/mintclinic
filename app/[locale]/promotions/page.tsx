import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { activePromotionsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { getTranslation, TK, type Locale } from "@/lib/i18n";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";
import PromotionsPreview from "./PromotionsPreview";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.PROMOTIONS);

  return {
    title: `${title} – Mint Clinic`,
    alternates: localeAlternates("/promotions"),
    openGraph: localeOpenGraph(title, "", "/promotions", locale as Locale),
  };
}

export default async function PromotionsPage({ params }: Props) {
  const { locale } = await params;

  const [promos, siteSettings] = await Promise.all([
    client.fetch(activePromotionsQuery, {}, { next: { revalidate: 300 } }),
    client.fetch(siteSettingsQuery, {}, { next: { revalidate: 300 } }),
  ]);

  const noPromotionsText =
    siteSettings?.noPromotionsText?.[locale as Locale] ??
    (locale === "en"
      ? "Nothing on at the moment — check back soon."
      : "В момента няма активни оферти. Очаквайте скоро нови.");

  return (
    <main>
      <PromotionsPreview
        promos={promos ?? []}
        locale={locale as Locale}
        noPromotionsText={noPromotionsText}
      />
    </main>
  );
}
