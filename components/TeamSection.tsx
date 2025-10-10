"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import LocalizedLink from "./LocalizedLink";

interface TeamSectionProps {
  data: {
    quote: { bg: string; en: string };
    quoteBold: { bg: string; en: string };
    description: { bg: string; en: string };
    buttonText: { bg: string; en: string };
    imageUrl?: string;
  };
  locale: "bg" | "en";
}

export default function TeamSection({ data, locale }: TeamSectionProps) {
  return (
    <motion.section className="bg-white py-16 lg:pb-32" {...fadeInMotionProps}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <img
            src="/team-image.webp"
            alt="Team"
            className="h-full max-h-[600px] w-full rounded-big rounded-bl-none rounded-tr-none object-cover lg:w-1/2"
          />

          {/* Content */}
          <div className="relative w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl font-light leading-tight text-primary lg:text-2xl">
              {data.quote[locale]}{" "}
              <span className="font-bold text-primary">
                {data.quoteBold[locale]}
              </span>
            </h2>

            <p className="text-md mb-8 font-dm-sans leading-relaxed text-primary">
              {data.description[locale]}
            </p>

            <Button variant="outline">
              <LocalizedLink href="/about-us">
                {data.buttonText[locale]}{" "}
              </LocalizedLink>
            </Button>

            {/* Decorative Image */}
            <div className="pointer-events-none absolute -bottom-0 -right-0 hidden opacity-20 lg:block">
              <Image
                src="/mint-colored.svg"
                alt="Decorative mint"
                width={120}
                height={120}
                className="w-[120px] scale-x-[-1] transform"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
