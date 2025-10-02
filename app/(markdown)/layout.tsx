import * as Craft from "@/components/craft";
import HeaderSection from "@/components/HeaderSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSection />
      <Craft.Main>
        <Craft.Section>
          <Craft.Container>{children}</Craft.Container>
        </Craft.Section>
      </Craft.Main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
