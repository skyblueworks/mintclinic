import { Suspense } from "react";
import type { Metadata } from "next";
import ServicesOverviewLayout from "@/components/layouts/ServicesOverviewLayout";
import { CTAButton } from "@/components/mdx/CTAButton";
import { getTranslation, TK, type Locale } from "@/lib/i18n";
import PricingCards from "./PricingCards";
import { PRICING_DATA } from "./pricing-data";

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
  };
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;

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
          categories={PRICING_DATA}
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
