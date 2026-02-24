import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMintSection from "@/components/WhyMintSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import { client } from "@/sanity/lib/client";
import { homePageQuery, type HomePage } from "@/sanity/lib/page-queries";
import { getValidLocale, type Locale } from "@/lib/locale";
import { getTranslation, TK } from "@/lib/i18n";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.HOME_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.HOME_PAGE_META_DESCRIPTION,
  );
  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates(""),
    openGraph: localeOpenGraph(title, description, "", locale as Locale),
  };
}

async function getHomePage(): Promise<HomePage | null> {
  try {
    return await client.fetch(
      homePageQuery,
      {},
      {
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      },
    );
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const pageData = await getHomePage();

  if (!pageData) {
    return <div>Error loading page</div>;
  }

  return (
    <div>
      <HeroSection data={pageData.hero} locale={locale} />
      <WhoWeAre data={pageData.whoWeAre} locale={locale} />
      <TestimonialsSection
        data={pageData.testimonialsSection}
        locale={locale}
      />
      <InfoSection data={pageData.infoSection} locale={locale} />
      <ServicesSection
        locale={locale}
        variant="carousel"
        className="lg:pt-32"
      />
      <WhyMintSection data={pageData.whyMintSection} locale={locale} />
      <TeamSection data={pageData.teamPreviewSection} locale={locale} />
      <FAQSection data={pageData.faqSection} locale={locale} />
      <LocationSection data={pageData.locationSection} locale={locale} />
    </div>
  );
}
