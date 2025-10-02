import HeaderSection from "@/components/HeaderSection";
import WhoWeAre from "@/components/WhoWeAre";
import WhyMintSection from "@/components/WhyMintSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AboutUsSection from "@/components/AboutUsSection";

export default function HomePage() {
  return (
    <div>
      <HeaderSection />
      <WhoWeAre />
      {/* TODO: Add Gallery */}
      <AboutUsSection />
      <WhyMintSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
