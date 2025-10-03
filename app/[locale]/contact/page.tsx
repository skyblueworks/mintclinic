import ContactInfoBar from "@/components/ContactInfoBar";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TitleSection from "@/components/TitleSection";

export default function ContactPage() {
  return (
    <>
      <TitleSection title={"Контакти"} />
      <ContactInfoBar />
      <ContactFormSection />
    </>
  );
}
