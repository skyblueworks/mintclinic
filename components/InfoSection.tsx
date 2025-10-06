"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function InfoSection() {
  const infoCards = [
    {
      id: 1,
      title: "Липсващ зъб",
      subtitle: "Да ти липсва зъбче е чаровно... когато си на шест.",
      description:
        "Ако сте на малко повече от шест, то вероятно няма да поникне нов зъб на мястото на стария. Но не се притеснявайте, за вас има надеждна алтернатива с висока успеваемост- денталният имплант. Дупката е затворена незабележимо и то съвсем без болка. :)",
      buttonText: "Дентални Импланти",
    },
    {
      id: 2,
      title: "Натурална естетика",
      subtitle:
        "Някои отенъци на бялото принадлежат само към плочките в банята ви.",
      description:
        "Във всеки от нас има заложен афинитет към натуралната визия. Чрез познаване на природните закономерности, малко артистичен усет и... модерен софтуер, ние успяваме да създадем естествени усмивки, изтъкващи индивидуалната красота на всеки пациент.",
      buttonText: "Digital Smile Design",
    },
    {
      id: 3,
      title: "Страх от зъболекар?",
      subtitle: "С нежна грижа към всеки пациент.",
      description:
        "Не позволявайте на потискащото чувство да ви пречи да имате здрава и красива усмивка. Най-важна, но и най-трудна е първата стъпка и ние го разбираме. Затова заповядайте да пием по чаша чай и да си поговорим, преди дори да сте седнали на зъболекарския стол.",
      buttonText: "Контакт",
    },
  ];

  return (
    <motion.section
      className="bg-primary/5 py-16 lg:py-32"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-primary lg:text-4xl">
          <span className="font-light">Индивидуален подход</span> към всеки
          пациент
        </h2>
        <div className="flex h-auto flex-col gap-6 lg:flex-row">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-1 flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none bg-white p-6 transition-shadow duration-300 [box-shadow:0px_4px_20px_2px_hsla(var(--mintclinic-mint-dark-hsl)_/_.10)]"
            >
              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <h4 className="mb-4 font-dm-sans text-lg font-semibold text-foreground">
                    {card.subtitle}
                  </h4>
                )}
                <p className="mb-6 font-dm-sans leading-relaxed text-foreground/90">
                  {card.description}
                </p>
              </div>
              <button className="w-full self-start rounded-full border border-primary bg-transparent px-6 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
