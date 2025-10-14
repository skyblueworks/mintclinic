import * as Craft from "@/components/craft";
import TitleSection from "@/components/TitleSection";

interface ServicesOverviewLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * ServicesOverviewLayout - Layout for the main services overview page
 * Provides consistent structure with title section and content container
 *
 * @example
 * <ServicesOverviewLayout
 *   title="Услуги"
 *   description="Комплексна грижа за вашата усмивка"
 * >
 *   <MDXContent />
 * </ServicesOverviewLayout>
 */
export default function ServicesOverviewLayout({
  title,
  description,
  children,
}: ServicesOverviewLayoutProps) {
  return (
    <>
      <TitleSection
        title={title}
        description={description}
        className="text-left md:text-center"
      />
      <Craft.Main>
        <Craft.Section className="bg-gradient-to-br from-primary/[5%] to-white py-8 md:py-12">
          <Craft.Container className="max-w-7xl">{children}</Craft.Container>
        </Craft.Section>
      </Craft.Main>
    </>
  );
}
