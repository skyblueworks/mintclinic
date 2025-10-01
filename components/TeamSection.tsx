"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function TeamSection() {
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
              Най-големите проблеми не произтичат от ръцете на зъболекарите,{" "}
              <span className="font-bold text-primary">
                а от техните глави.
              </span>
            </h2>

            <p className="text-md mb-8 font-dm-sans leading-relaxed text-primary">
              Затова ние се съсредоточаваме точно в това- да планираме.
              Поддържаме умовете си остри и активно развиваме своите умения,
              посещавайки реномирани следдипломни квалификационни курсове.
            </p>

            <button className="rounded-full border border-primary bg-transparent px-8 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
              Екип
            </button>

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
