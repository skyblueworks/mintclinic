"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface WhyMintSectionProps {
  data: {
    title: { bg: string; en: string };
    reasons: Array<{
      title: { bg: string; en: string };
      description: { bg: string; en: string };
    }>;
  };
  locale: "bg" | "en";
}

export default function WhyMintSection({ data, locale }: WhyMintSectionProps) {
  return (
    <motion.section
      className="relative isolate bg-white py-8 lg:px-6 lg:py-16"
      {...fadeInMotionProps}
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Decorative mint - top left */}
        <div className="pointer-events-none absolute -left-48 top-6 -z-10 hidden opacity-20 lg:block">
          <Image
            src="/mint-colored.svg"
            alt="Decorative mint"
            width={240}
            height={182}
            className="h-auto w-48 -rotate-90 -scale-x-100"
          />
        </div>

        {/* Decorative mint - bottom right */}
        <div className="pointer-events-none absolute -right-48 bottom-6 -z-10 hidden opacity-20 lg:block">
          <Image
            src="/mint-colored.svg"
            alt="Decorative mint"
            width={240}
            height={182}
            className="h-auto w-48 rotate-90"
          />
        </div>

        {/* Mobile decorative mint */}
        <div className="pointer-events-none absolute right-8 top-[215px] z-10 opacity-20 lg:hidden">
          <Image
            src="/mint.svg"
            alt="Decorative mints"
            width={100}
            height={100}
            className="w-[100px]"
          />
        </div>

        {/* Card */}
        <div className="relative rounded-big rounded-bl-none rounded-tr-none bg-gradient-to-br from-primary/80 to-primary p-12 px-6 py-[6rem] text-white md:px-12">
          <h2 className="mb-12 text-center text-4xl font-light text-white lg:text-5xl">
            {data.title[locale]}
          </h2>
          <div className="flex flex-col gap-12">
            {data.reasons.map((reason, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex-shrink-0 text-6xl font-bold">
                  {index + 1}.
                </div>
                <h4 className="text-2xl font-bold">{reason.title[locale]}</h4>
                <p className="font-dm-sans leading-relaxed text-white">
                  {reason.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
