"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface AboutUsSectionProps {
  data: {
    title: { bg: string; en: string };
    content: { bg: string; en: string };
  };
  locale: "bg" | "en";
}

export default function AboutUsSection({ data, locale }: AboutUsSectionProps) {
  return (
    <motion.section
      className="bg-white px-6 py-16 lg:px-8 lg:py-24"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-[2%] text-[32px] font-light text-primary lg:text-[26px] xl:text-[32px]">
          <span>{data.title[locale]}</span>
        </h2>

        <div className="space-y-[0.9rem] whitespace-pre-line text-justify font-dm-sans text-lg font-normal leading-[1.4em] text-foreground lg:text-base xl:text-lg">
          {data.content[locale]}
        </div>
      </div>
    </motion.section>
  );
}
