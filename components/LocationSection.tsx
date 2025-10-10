"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface LocationSectionProps {
  data: {
    title: { bg: string; en: string };
    mapEmbedUrl: string;
  };
  locale: "bg" | "en";
}

export default function LocationSection({
  data,
  locale,
}: LocationSectionProps) {
  return (
    <motion.section className="bg-white py-16 lg:py-32" {...fadeInMotionProps}>
      {/* Header with Icon */}
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <a
          href="https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3"
        >
          <h2 className="text-3xl font-light text-primary transition-colors group-hover:text-primary/80 lg:text-4xl">
            {data.title[locale]}
          </h2>
          <FaMapMarkerAlt className="text-2xl text-primary transition-colors group-hover:text-primary/80" />
        </a>
      </div>

      {/* Map - Full width on mobile, contained on desktop */}
      <div className="w-full lg:mx-auto lg:max-w-7xl lg:px-6">
        <div className="h-[400px] w-full overflow-hidden lg:h-[600px] lg:rounded-br-2xl lg:rounded-tl-2xl">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8755419825894!2d23.31841731551254!3d42.694918779162576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8561e0de2ddc%3A0xdc2de0892b1e6661!2sMint%20Clinic%20Dental%20Excellence!5e0!3m2!1sen!2sbg!4v1234567890123!5m2!1sen!2sbg"
            title="Mint Clinic Dental Excellence Location"
            aria-label="Mint Clinic Dental Excellence Location"
            className="h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
}
