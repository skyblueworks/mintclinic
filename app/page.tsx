import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTooth } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Top Section - White Background */}
      <div className="bg-white relative">
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center justify-between w-full gap-4">
            <Image
              src="/logo-colored-cropped.svg"
              alt="Mint Clinic"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
            <button className="text-primary p-2">
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 px-6 pt-8 pb-16">
          <div className="text-left text-foreground flex flex-col">
            <h1 className="text-3xl leading-tight mb-6">
              <span className="font-normal">Вашата усмивка,</span>{" "}
              <span className="font-bold">усъвършенствана с прецизност</span>
            </h1>

            <p className="text-md mb-8 font-dm-sans">
              Изпитайте персонализирана грижа в бутикова дентална клиника,
              където естетиката среща експертизата. Тук сме, за да направим
              вашата усмивка по-ярка, посещението ви по-гладко и грижата ви –
              изключителна!
            </p>

            <button className="bg-primary text-white font-bold self-center tracking-wider px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200">
              Свържи се с нас
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Primary Color Background */}
      <div className="bg-gradient-to-br from-primary to-primary/80 relative">
        {/* Decorative tooth icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FaTooth className="absolute top-8 left-8 text-white/10 text-6xl rotate-12" />
          <FaTooth className="absolute top-20 right-12 text-white/10 text-4xl -rotate-12" />
          <FaTooth className="absolute bottom-32 left-16 text-white/10 text-5xl rotate-45" />
          <FaTooth className="absolute bottom-20 right-8 text-white/10 text-3xl -rotate-45" />
        </div>

        {/* Hero Image */}
        <div className="w-full relative z-10 px-6 py-16 pb-0">
          <Image
            src="/hero-woman.webp"
            alt="Happy patient"
            width={936}
            height={1046}
            className="mx-auto translate-x-5 w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
