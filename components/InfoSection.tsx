"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { Button } from "@/components/ui/button";

interface InfoSectionProps {
  data: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    cards: Array<{
      title: { bg: string; en: string };
      subtitle: { bg: string; en: string };
      description: { bg: string; en: string };
      buttonText: { bg: string; en: string };
      buttonUrl?: string;
    }>;
  };
  locale: "bg" | "en";
}

export default function InfoSection({ data, locale }: InfoSectionProps) {
  return (
    <motion.section
      className="bg-primary/5 py-16 lg:py-32"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-primary lg:text-4xl">
          <span className="font-light">{data.title[locale]}</span>{" "}
          {data.titleBold[locale]}
        </h2>
        <div className="flex h-auto flex-col gap-6 lg:flex-row">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none bg-white p-6 transition-shadow duration-300 [box-shadow:0px_4px_20px_2px_hsla(var(--mintclinic-mint-dark-hsl)_/_.10)]"
            >
              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">
                  {card.title[locale]}
                </h3>
                {card.subtitle && (
                  <h4 className="mb-4 font-dm-sans text-lg font-semibold text-foreground">
                    {card.subtitle[locale]}
                  </h4>
                )}
                <p className="mb-6 font-dm-sans leading-relaxed text-foreground/90">
                  {card.description[locale]}
                </p>
              </div>
              <Button variant="outline">{card.buttonText[locale]}</Button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
