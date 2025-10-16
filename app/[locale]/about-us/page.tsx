import TitleSection from "@/components/TitleSection";
import TeamMembersSection from "@/components/TeamMembersSection";
import WhyMintSection from "@/components/WhyMintSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhoWeAre from "@/components/WhoWeAre";
import GallerySection from "@/components/GallerySection";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery, type AboutPage } from "@/sanity/lib/page-queries";
import { getValidLocale, type Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getAboutPage(): Promise<AboutPage | null> {
  try {
    return await client.fetch(aboutPageQuery, {}, { cache: "no-store" });
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
