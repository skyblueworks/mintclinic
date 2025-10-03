"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function WhoWeAre() {
  return (
    <motion.section
      className="bg-white px-6 pb-8 pt-16 lg:pb-16 lg:pt-32"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Content Section */}
          <div className="mb-8 lg:order-2 lg:mb-0 lg:pr-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              КОИ СМЕ НИЕ
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-primary lg:text-4xl">
              <span className="font-light">Немска дентална клиника</span> в
              центъра на София
            </h2>

            <p className="text-md mb-8 font-dm-sans text-foreground">
              Оборудвана с модерна техника и движена от млад и мотивиран екип,
              квалифициран в Германия, Минт е мястото, където можете да получите
              най- добрата персонална грижа в сферата на модерното зъболечение
              за вас и вашите близки.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full border border-primary bg-transparent px-8 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
                Повече за нас
              </button>
              <button className="rounded-full border border-primary bg-transparent px-8 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
                Галерия
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:order-1">
            <div className="aspect-video overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/GB_lUZMX1sM?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0"
                title="Mint Clinic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
