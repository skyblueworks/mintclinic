import * as Craft from "@/components/craft";
import TitleSection from "@/components/TitleSection";
import CategoryServicesSection from "@/components/CategoryServicesSection";

interface ServiceLayoutProps {
  title: string;
  locale?: string;
  category?: string;
  currentSlug?: string;
  children: React.ReactNode;
}

/**
 * ServiceLayout - Shared layout for service pages
 * Works in both local MDX development and production Sanity routes
 *
 * Structure: TitleSection → Content Container → CategoryServicesSection
 * Note: Header and Footer are handled by root layout
 *
 * @example
 * // In MDX development (app/(markdown)/uslugi/...)
 * <ServiceLayout title="Фасети" category="estetika" currentSlug="faseti">
 *   <MDXContent />
 * </ServiceLayout>
 *
 * @example
 * // In production (app/[locale]/services/...)
 * <ServiceLayout
 *   title={sanityData.title}
 *   locale={params.locale}
 *   category={params.category}
 *   currentSlug={params.slug}
 * >
 *   <MDXContent components={mdxComponents} />
 * </ServiceLayout>
 */
export default function ServiceLayout({
  title,
  locale = "bg",
  category,
  currentSlug,
  children,
}: ServiceLayoutProps) {
  return (
    <>
      <TitleSection title={title} />
      <Craft.Main>
        <Craft.Section>
          <Craft.Container>{children}</Craft.Container>
        </Craft.Section>
      </Craft.Main>
      <CategoryServicesSection
        category={category}
        currentSlug={currentSlug}
        locale={locale}
      />
    </>
  );
}
