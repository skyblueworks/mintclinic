import ContactInfoBar from "@/components/ContactInfoBar";
import ContactFormSection from "@/components/ContactFormSection";
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
