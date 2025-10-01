"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function WhyMintSection() {
  const reasons = [
    {
      id: 1,
      title: "Сигурност",
      description:
        "Работата се извършва по издържани международни протоколи. Последователността на леченията гарантира, че няма да остане необърнат камък по пътя от точка А, до желаната от вас точка В. Така ще можете да се радвате на новата си усмивка за много години напред.",
    },
    {
      id: 2,
      title: "Лично отношение",
      description:
        "Ние ви познаваме, познавате ни и вие. Минт не е част от корпоративна верига, а е малка клиника в сърцето на столицата. За нас личното отношение и комфорта на пациентите са есенциални, което е подчертано от уютния интериор. Откритата комуникация и доверието са в основата на успешното лечение и ние държим на това.",
    },
    {
      id: 3,
      title: "Високо качество",
      description:
        "Успехът е успех, само когато издържи теста на времето. Не само зъболекаря, но и материалите са от съществено значение за постигането на дълготрайни резултати. Ние в Минт се запасяваме само с продукти от доказани производители, за да няма неприятни изненади 🙂.",
    },
  ];

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
        <div className="relative rounded-big rounded-bl-none rounded-tr-none bg-primary p-12 py-[6rem] text-white">
          <h2 className="mb-12 text-center text-4xl font-bold text-white lg:text-5xl">
            Защо MINT
          </h2>
          <div className="flex flex-col gap-12">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex flex-col gap-4">
                <div className="flex-shrink-0 text-6xl font-bold">
                  {reason.id}.
                </div>
                <h4 className="text-2xl font-bold">{reason.title}</h4>
                <p className="font-dm-sans leading-relaxed text-white">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
