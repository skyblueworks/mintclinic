import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMintSection from "@/components/WhyMintSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <TestimonialsSection />
      <InfoSection />
      <ServicesSection />
      <WhyMintSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
    </div>
  );
}
