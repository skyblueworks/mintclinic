import type { Metadata } from "next";
import TitleSection from "@/components/TitleSection";
import TeamMembersSection from "@/components/TeamMembersSection";
import WhyMintSection from "@/components/WhyMintSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhoWeAre from "@/components/WhoWeAre";
import GallerySection from "@/components/GallerySection";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery, type AboutPage } from "@/sanity/lib/page-queries";
import { getValidLocale, type Locale } from "@/lib/locale";
import { getTranslation, TK } from "@/lib/i18n";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.ABOUT_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.ABOUT_PAGE_META_DESCRIPTION,
  );
  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates("/about-us"),
    openGraph: localeOpenGraph(
      title,
      description,
      "/about-us",
      locale as Locale,
    ),
  };
}

async function getAboutPage(): Promise<AboutPage | null> {
  try {
    return await client.fetch(
      aboutPageQuery,
      {},
      {
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      },
    );
  } catch (error) {
    console.error("Error fetching about page:", error);
    return null;
  }
}

export default async function AboutUsPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const pageData = await getAboutPage();

  if (!pageData) {
    return <div>Error loading page</div>;
  }

  return (
    <div className="pb-16">
      <TitleSection title={pageData.title[locale]} />
      <WhoWeAre data={pageData.whoWeAre} locale={locale} />
      <TeamMembersSection data={pageData.teamMembersSection} locale={locale} />
      <GallerySection data={pageData.gallerySection} locale={locale} />
      <AboutUsSection data={pageData.aboutSection} locale={locale} />
      <WhyMintSection data={pageData.whyMintSection} locale={locale} />
    </div>
  );
}
