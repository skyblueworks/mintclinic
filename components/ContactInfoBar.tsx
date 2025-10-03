"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactInfoBar() {
  return (
    <motion.section
      className="bg-white px-6 py-12 lg:py-16"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
          {/* Location */}
          <a
            href="https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-full bg-white px-6 py-4 shadow-xl transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
              <FaMapMarkerAlt className="text-xl text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-tight text-foreground">
                Ул. Доктор Стефан
                <br />
                Сарафов 20, 1408 София
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+359888436838"
            className="flex items-center gap-4 rounded-full bg-white px-6 py-4 shadow-xl transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
              <FaPhone className="text-xl text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-tight text-foreground">
                +359 888 436 838
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@mintclinic.com"
            className="flex items-center gap-4 rounded-full bg-white px-6 py-4 shadow-xl transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
              <FaEnvelope className="text-xl text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-tight text-foreground">
                info@mintclinic.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
