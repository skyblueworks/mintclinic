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
import { getValidLocale, type Locale, SUPPORTED_LOCALES } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
  }));
}

async function getHomePage(): Promise<HomePage | null> {
  try {
    return await client.fetch(homePageQuery, {}, { cache: "no-store" });
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
