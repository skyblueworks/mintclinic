import Image from "next/image";
import { FaTooth } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white lg:h-[calc(100vh-130px)]">
      {/* Desktop Background Extension - Hidden on Mobile */}
      <div className="hidden lg:block absolute bg-primary top-0 bottom-0 left-1/2 right-0 rounded-tl-[6rem] rounded-br-[6rem]">
        {/* Decorative tooth icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FaTooth className="absolute top-8 left-8 text-white/10 text-6xl rotate-12" />
          <FaTooth className="absolute top-20 right-12 text-white/10 text-4xl -rotate-12" />
          <FaTooth className="absolute bottom-32 left-16 text-white/10 text-5xl rotate-45" />
          <FaTooth className="absolute bottom-20 right-8 text-white/10 text-3xl -rotate-45" />
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 top-24 flex items-end justify-center px-6">
          <Image
            src="/hero-girl-v2.png"
            alt="Happy patient"
            width={936}
            height={1046}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center h-full">
          {/* Left Column - Text Content */}
          <div className="relative z-10 px-6 lg:pr-12 pt-8 pb-16 lg:w-1/2 lg:py-20">
            <div className="text-left text-foreground flex flex-col">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
                <span className="font-normal">Вашата усмивка,</span>{" "}
                <span className="font-bold">усъвършенствана с прецизност</span>
              </h1>

              <p className="text-md lg:text-lg mb-8 font-dm-sans">
                Изпитайте персонализирана грижа в бутикова дентална клиника,
                където естетиката среща експертизата. Тук сме, за да направим
                вашата усмивка по-ярка, посещението ви по-гладко и грижата ви –
                изключителна!
              </p>

              <button className="bg-primary text-white font-bold self-center lg:self-start tracking-wider px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200">
                Свържи се с нас
              </button>
            </div>
          </div>

          {/* Right Column - Image (Mobile Only) */}
          <div className="lg:hidden aspect-square bg-gradient-to-br from-primary to-primary/80 relative rounded-tl-[6rem] rounded-br-[7rem] overflow-hidden flex items-center justify-center">
            {/* Decorative tooth icons */}
            <div className="absolute inset-0 pointer-events-none">
              <FaTooth className="absolute top-8 left-8 text-white/10 text-6xl rotate-12" />
              <FaTooth className="absolute top-20 right-12 text-white/10 text-4xl -rotate-12" />
              <FaTooth className="absolute bottom-32 left-16 text-white/10 text-5xl rotate-45" />
              <FaTooth className="absolute bottom-20 right-8 text-white/10 text-3xl -rotate-45" />
            </div>

            {/* Hero Image */}
            <Image
              src="/hero-girl-v2.png"
              alt="Happy patient"
              width={936}
              height={1046}
              className="mx-auto w-full h-full pt-12 object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
