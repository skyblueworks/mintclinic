import type { Metadata } from "next";
import ContactInfoBar from "@/components/ContactInfoBar";
import ContactFormSection from "@/components/ContactFormSection";
import TitleSection from "@/components/TitleSection";
import LocationSection from "@/components/LocationSection";
import { client } from "@/sanity/lib/client";
import { contactPageQuery, type ContactPage } from "@/sanity/lib/page-queries";
import { getValidLocale, type Locale } from "@/lib/locale";
import { getTranslation, TK } from "@/lib/i18n";
import { localeAlternates, localeOpenGraph } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.CONTACTS_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.CONTACTS_PAGE_META_DESCRIPTION,
  );
  return {
    title: `${title} – Mint Clinic`,
    description,
    alternates: localeAlternates("/contacts"),
    openGraph: localeOpenGraph(
      title,
      description,
      "/contacts",
      locale as Locale,
    ),
  };
}

async function getContactPage(): Promise<ContactPage | null> {
  try {
    return await client.fetch(
      contactPageQuery,
      {},
      {
        next: { revalidate: 3600 }, // Revalidate every hour (ISR)
      },
    );
  } catch (error) {
    console.error("Error fetching contact page:", error);
    return null;
  }
}

export default async function ContactsPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale: Locale = getValidLocale(localeParam);
  const pageData = await getContactPage();

  if (!pageData) {
    return <div>Error loading page</div>;
  }

  return (
    <>
      <TitleSection title={pageData.title[locale]} />
      <ContactInfoBar data={pageData.contactInfo} locale={locale} />
      <ContactFormSection
        data={pageData.contactForm}
        mapData={pageData.mapSection}
        locale={locale}
      />
      <LocationSection data={pageData.locationSection as any} locale={locale} />
    </>
  );
}
