import type { Metadata } from "next";
import ServicesOverviewLayout from "@/components/layouts/ServicesOverviewLayout";
import ServiceCard from "@/components/ServiceCard";
import { CTAButton } from "@/components/mdx/CTAButton";
import { getTranslation, type Locale } from "@/lib/i18n";
import { TK } from "@/lib/i18n";
import { SUPPORTED_LOCALES } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale as Locale, TK.SERVICES_PAGE_TITLE);
  const description = getTranslation(
    locale as Locale,
    TK.SERVICES_PAGE_META_DESCRIPTION,
  );

  return {
    title: `${title} – Mint Clinic`,
    description,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = (key: (typeof TK)[keyof typeof TK]) =>
    getTranslation(
      locale as Locale,
      key as keyof typeof import("@/lib/i18n").translations.bg,
    );

  return (
    <ServicesOverviewLayout
      title={t(TK.SERVICES_PAGE_TITLE)}
      description={t(TK.SERVICES_PAGE_DESCRIPTION)}
    >
      <ServiceCard
        title={t(TK.AESTHETICS_TITLE)}
        description={t(TK.AESTHETICS_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/aesthetics-1024x683.webp"
        imageAlt={t(TK.AESTHETICS_TITLE)}
        buttonText={t(TK.AESTHETICS_BUTTON)}
        buttonHref={`/${locale}/services/estetika`}
        imagePosition="left"
      />

      <ServiceCard
        title={t(TK.SURGERY_TITLE)}
        description={t(TK.SURGERY_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/surgery-683x1024.webp"
        imageAlt={t(TK.SURGERY_TITLE)}
        buttonText={t(TK.SURGERY_BUTTON)}
        buttonHref={`/${locale}/services/hirurgiya`}
        imagePosition="left"
      />

      <ServiceCard
        title={t(TK.PROSTHETICS_TITLE)}
        description={t(TK.PROSTHETICS_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/prostetics-1024x683.webp"
        imageAlt={t(TK.PROSTHETICS_TITLE)}
        buttonText={t(TK.PROSTHETICS_BUTTON)}
        buttonHref={`/${locale}/services/protetika`}
        imagePosition="left"
      />

      <ServiceCard
        title={t(TK.CONSERVATIVE_THERAPY_TITLE)}
        description={t(TK.CONSERVATIVE_THERAPY_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/general-1024x681.webp"
        imageAlt={t(TK.CONSERVATIVE_THERAPY_TITLE)}
        buttonText={t(TK.CONSERVATIVE_THERAPY_BUTTON)}
        buttonHref={`/${locale}/services/konservativna-terapiya`}
        imagePosition="left"
      />

      <ServiceCard
        title={t(TK.ALIGNERS_TITLE)}
        description={t(TK.ALIGNERS_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/aligners.webp"
        imageAlt={t(TK.ALIGNERS_TITLE)}
        buttonText={t(TK.ALIGNERS_BUTTON)}
        buttonHref={`/${locale}/services/alajneri`}
        imagePosition="left"
      />

      <ServiceCard
        title={t(TK.EMERGENCY_CARE_TITLE)}
        description={t(TK.EMERGENCY_CARE_DESCRIPTION)}
        imageUrl="https://mintclinic.com/wp-content/uploads/2024/10/emergency_help-1024x1024.webp"
        imageAlt={t(TK.EMERGENCY_CARE_TITLE)}
        buttonText={t(TK.EMERGENCY_CARE_BUTTON)}
        buttonHref={`/${locale}/speshna-dentalna-pomosth`}
        imagePosition="left"
      />

      <div className="my-12 text-center">
        <CTAButton />
      </div>
    </ServicesOverviewLayout>
  );
}
