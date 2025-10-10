"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { GalleryGrid, GalleryImage } from "@/components/GalleryGrid";
import image1 from "@/assets/images/image00048.webp";
import image2 from "@/assets/images/image00049.webp";
import image3 from "@/assets/images/image00054.webp";

interface GallerySectionProps {
  data: {
    title: { bg: string; en: string };
    images?: Array<{
      url: string;
      alt: { bg: string; en: string };
    }>;
  };
  locale: "bg" | "en";
}

export default function GallerySection({ data, locale }: GallerySectionProps) {
  // Use Sanity images if available, otherwise fallback to local images
  const galleryImages: GalleryImage[] =
    data.images && data.images.length > 0
      ? data.images.map((img) => ({
          src: img.url,
          alt: img.alt[locale],
        }))
      : [
          { src: image1.src, alt: "Mint Clinic Interior 1" },
          { src: image2.src, alt: "Mint Clinic Interior 2" },
          { src: image3.src, alt: "Mint Clinic Interior 3" },
        ];

  return (
    <motion.div {...fadeInMotionProps} className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-[2%] text-[32px] font-light text-primary lg:text-[26px] xl:text-[32px]">
          {data.title[locale]}
        </h2>
      </div>
      <GalleryGrid images={galleryImages} />
    </motion.div>
  );
}
