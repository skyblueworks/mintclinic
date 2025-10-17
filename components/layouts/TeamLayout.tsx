import * as Craft from "@/components/craft";
import TitleSection from "@/components/TitleSection";

interface TeamLayoutProps {
  title: string;
  locale?: string;
  currentSlug?: string;
  children: React.ReactNode;
}

/**
 * TeamLayout - Shared layout for team member pages
 * Works in MDX development for ekip pages
 *
 * Structure: TitleSection → Content Container
 * Note: Header and Footer are handled by root layout
 *
 * @example
 * // In MDX development (app/[locale]/ekip/...)
 * <TeamLayout title="Д-р Александър Алексов" currentSlug="dr-aleksov">
 *   <MDXContent />
 * </TeamLayout>
 */
export default function TeamLayout({ title, children }: TeamLayoutProps) {
  return (
    <>
      <TitleSection title={title} />
      <Craft.Main>
        <Craft.Section className="py-0 md:py-0">
          <Craft.Container className="!pt-0">{children}</Craft.Container>
        </Craft.Section>
      </Craft.Main>
    </>
  );
}
