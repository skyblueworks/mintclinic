import ContactInfoBar from "@/components/ContactInfoBar";
import ContactFormSection from "@/components/ContactFormSection";
import TitleSection from "@/components/TitleSection";
import LocationSection from "@/components/LocationSection";
import { client } from "@/sanity/lib/client";
import { contactPageQuery, type ContactPage } from "@/sanity/lib/page-queries";
import { getValidLocale, type Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getContactPage(): Promise<ContactPage | null> {
  try {
    return await client.fetch(contactPageQuery, {}, { cache: "no-store" });
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
