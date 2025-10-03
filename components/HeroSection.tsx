"use client";
import Image from "next/image";
import { FaTooth } from "react-icons/fa";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function HeroSection() {
  return (
    <motion.div
      className="relative overflow-hidden lg:h-[calc(100vh-130px)]"
      {...fadeInMotionProps}
    >
      {/* Desktop Background Extension - Hidden on Mobile */}
      <div className="absolute bottom-0 left-1/2 right-0 top-0 hidden rounded-br-[6rem] rounded-tl-[6rem] bg-primary lg:block">
        {/* Decorative tooth icons */}
        <div className="pointer-events-none absolute inset-0">
          <FaTooth className="absolute left-8 top-8 rotate-12 text-6xl text-white/10" />
          <FaTooth className="absolute right-12 top-20 -rotate-12 text-4xl text-white/10" />
          <FaTooth className="absolute bottom-32 left-16 rotate-45 text-5xl text-white/10" />
          <FaTooth className="absolute bottom-20 right-8 -rotate-45 text-3xl text-white/10" />
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 top-24 flex items-end justify-center px-6">
          <Image
            src="/hero-girl-v3.webp"
            alt="Happy patient"
            width={936}
            height={1046}
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto h-full max-w-7xl">
        <div className="flex h-full flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="relative z-10 px-6 pb-16 pt-8 lg:w-1/2 lg:py-20 lg:pr-12">
            <div className="flex flex-col text-left text-foreground">
              <h1 className="mb-6 text-3xl leading-tight lg:text-4xl xl:text-5xl">
                <span className="font-normal">Вашата усмивка,</span>{" "}
                <span className="font-bold">усъвършенствана с прецизност</span>
              </h1>

              <p className="text-md mb-8 font-dm-sans lg:text-lg">
                Изпитайте персонализирана грижа в бутикова дентална клиника,
                където естетиката среща експертизата. Тук сме, за да направим
                вашата усмивка по-ярка, посещението ви по-гладко и грижата ви –
                изключителна!
              </p>

              <button className="self-center rounded-full bg-primary px-8 py-4 font-bold tracking-wider text-white transition-colors duration-200 hover:bg-primary/90 lg:self-start">
                Запази час
              </button>
            </div>
          </div>

          {/* Right Column - Image (Mobile Only) */}
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-br-[7rem] rounded-tl-[6rem] bg-gradient-to-br from-primary to-primary/80 lg:hidden">
            {/* Decorative tooth icons */}
            <div className="pointer-events-none absolute inset-0">
              <FaTooth className="absolute left-8 top-8 rotate-12 text-6xl text-white/10" />
              <FaTooth className="absolute right-12 top-20 -rotate-12 text-4xl text-white/10" />
              <FaTooth className="absolute bottom-32 left-16 rotate-45 text-5xl text-white/10" />
              <FaTooth className="absolute bottom-20 right-8 -rotate-45 text-3xl text-white/10" />
            </div>

            {/* Hero Image */}
            <Image
              src="/hero-girl-v3.webp"
              alt="Happy patient"
              width={936}
              height={1046}
              className="mx-auto h-full w-full object-contain object-bottom pt-12"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
