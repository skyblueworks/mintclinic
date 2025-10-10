"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface FAQSectionProps {
  data: {
    title: { bg: string; en: string };
    titleBold: { bg: string; en: string };
    items: Array<{
      question: { bg: string; en: string };
      answer: { bg: string; en: string };
    }>;
  };
  locale: "bg" | "en";
}

export default function FAQSection({ data, locale }: FAQSectionProps) {
  return (
    <motion.section
      className="bg-gradient-to-br from-primary/80 to-primary py-16 lg:py-32"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Header */}
          <div className="w-full lg:w-1/3">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              <span className="font-light">{data.title[locale]}</span>{" "}
              {data.titleBold[locale]}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full lg:w-2/3">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-2"
            >
              {data.items.map((faq, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="rounded-2xl rounded-bl-none rounded-tr-none bg-white px-6 py-2"
                >
                  <AccordionTrigger className="py-4 text-left text-2xl font-semibold text-primary hover:no-underline">
                    {faq.question[locale]}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <p className="font-dm-sans text-lg leading-relaxed text-primary">
                      {faq.answer[locale]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
