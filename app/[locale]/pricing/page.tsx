import { Suspense } from "react";
import type { Metadata } from "next";
import ServicesOverviewLayout from "@/components/layouts/ServicesOverviewLayout";
import { CTAButton } from "@/components/mdx/CTAButton";
import { getTranslation, TK, type Locale } from "@/lib/i18n";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";
import { client } from "@/sanity/lib/client";
import { pricingCategoriesQuery } from "@/sanity/lib/queries";
import type { PricingCategory } from "./pricing-data";
import { PRICING_DATA } from "./pricing-data";
import PricingCards from "./PricingCards";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.PRICING_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.PRICING_PAGE_META_DESCRIPTION,
  );

  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates("/pricing"),
    openGraph: localeOpenGraph(
      title,
      description,
      "/pricing",
      locale as Locale,
    ),
  };
}

async function getPricingCategories(): Promise<PricingCategory[]> {
  try {
    const data = await client.fetch<PricingCategory[]>(
      pricingCategoriesQuery,
      {},
      { next: { revalidate: 1800 } },
    );
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch pricing from Sanity:", e);
  }
  return PRICING_DATA;
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  const categories = await getPricingCategories();

  return (
    <ServicesOverviewLayout
      title={getTranslation(locale as Locale, TK.PRICING_PAGE_TITLE)}
      description={getTranslation(
        locale as Locale,
        TK.PRICING_PAGE_DESCRIPTION,
      )}
    >
      <Suspense fallback={null}>
        <PricingCards
          categories={categories}
          noteText={getTranslation(locale as Locale, TK.PRICING_NOTE)}
          filterPlaceholder={getTranslation(
            locale as Locale,
            TK.PRICING_FILTER_PLACEHOLDER,
          )}
        />
      </Suspense>

      <div className="my-12 text-center">
        <CTAButton />
      </div>
    </ServicesOverviewLayout>
  );
}
