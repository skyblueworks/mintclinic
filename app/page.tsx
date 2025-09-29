import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMintSection from "@/components/WhyMintSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <WhoWeAre />
      <InfoSection />
      <ServicesSection />
      <WhyMintSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
