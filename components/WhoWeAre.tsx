"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function WhoWeAre() {
  return (
    <motion.section
      className="pt-16 pb-8 lg:pb-16 lg:pt-32 px-6 bg-white"
      {...fadeInMotionProps}
    >
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content Section */}
          <div className="lg:pr-8 mb-8 lg:mb-0 lg:order-2">
            <p className="text-sm uppercase tracking-wider text-foreground font-bold mb-4">
              КОИ СМЕ НИЕ
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-primary">
              Немска дентална Клиника в центъра на София
            </h2>

            <p className="text-md mb-8 text-foreground font-dm-sans">
              Оборудвана с модерна техника и движена от млад и мотивиран екип,
              квалифициран в Германия, Минт е мястото, където можете да получите
              най- добрата персонална грижа в сферата на модерното зъболечение
              за вас и вашите близки.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border border-primary text-primary font-extrabold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
                Повече за нас
              </button>
              <button className="bg-transparent border border-primary text-primary font-extrabold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
                Галерия
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:order-1">
            <div className="aspect-video rounded-3xl rounded-tr-none rounded-bl-none overflow-hidden">
              <iframe
                className="w-full h-full"
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
