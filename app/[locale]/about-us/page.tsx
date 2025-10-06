"use client";
import TitleSection from "@/components/TitleSection";
import WhoWeAre from "@/components/WhoWeAre";
import WhyMintSection from "@/components/WhyMintSection";
import AboutUsSection from "@/components/AboutUsSection";
import { GalleryGrid, GalleryImage } from "@/components/GalleryGrid";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function AboutUsPage() {
  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    src: `https://placehold.co/600x400?text=About+Us+${i + 1}`,
    alt: `About Us ${i + 1}`,
  })) as GalleryImage[];

  return (
    <div>
      <TitleSection title="За нас" />
      <WhoWeAre className="pt-0 lg:pt-0" />
      <motion.div
        {...fadeInMotionProps}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <GalleryGrid images={galleryImages} />
      </motion.div>
      <AboutUsSection />
      <WhyMintSection />
    </div>
  );
}
