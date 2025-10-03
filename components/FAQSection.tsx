"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function FAQSection() {
  const faqs = [
    {
      id: "item-1",
      question:
        "Колко често трябва да ходя на профилактичен преглед при зъболекар?",
      answer:
        "Препоръчително е да се правят профилактични прегледи два пъти годишно (на всеки шест месеца). Това помага за ранното откриване на кариеси и заболявания на венците.",
    },
    {
      id: "item-2",
      question: "Болезнено ли е поставянето на имплант?",
      answer:
        "Процедурата се извършва под локална анестезия и е безболезнена. Пациентът може да усеща лек дискомфорт след операцията, който се контролира с обезболяващи медикаменти.",
    },
    {
      id: "item-3",
      question: "Какви са опциите за лечение при липсващ зъб?",
      answer:
        "Опциите включват зъбни импланти, мостове и протези. Имплантите са най-дълготрайното решение, докато мостовете и протезите са по-достъпни, но изискват повече поддръжка.",
    },
    {
      id: "item-4",
      question: "Мога ли да си оправя усмивката без да нося брекети?",
      answer:
        "Да, възможно е с помощта на алайнери или чрез естетични процедури като бондинг и поставяне на фасети, които коригират множество естетични дефекти.",
    },
    {
      id: "item-5",
      question: "Мога ли да избелвам зъбите си, ако имам пломби или коронки?",
      answer:
        "Избелването на зъби не променя цвета на пломбите, коронките, или фасетите. Ако имате видими реставрации, може да се наложи тяхната подмяна след избелването, за да съответстват на новия цвят на зъбите.",
    },
    {
      id: "item-6",
      question: "Какво представлява бондингът и колко дълготраен е?",
      answer:
        "Бондингът е процедура, при която композитен материал се нанася върху зъба за коригиране на дефекти, или цялостна промяна на естетиката. Обикновено издържа между 5 и 7 години, но изисква периодично полиране. По- дълготрайна опция са керамичните фасети.",
    },
  ];

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
              <span className="font-light">Често задавани</span> въпроси
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full lg:w-2/3">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-2"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-2xl rounded-bl-none rounded-tr-none bg-white px-6 py-2"
                >
                  <AccordionTrigger className="py-4 text-left text-2xl font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <p className="font-dm-sans text-lg leading-relaxed text-primary">
                      {faq.answer}
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
