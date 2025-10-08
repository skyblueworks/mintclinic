"use client";
import TitleSection from "@/components/TitleSection";
import WhoWeAre from "@/components/WhoWeAre";
import TeamMembersSection from "@/components/TeamMembersSection";
import WhyMintSection from "@/components/WhyMintSection";
import AboutUsSection from "@/components/AboutUsSection";
import { GalleryGrid, GalleryImage } from "@/components/GalleryGrid";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import image1 from "@/assets/images/image00048.webp";
import image2 from "@/assets/images/image00049.webp";
import image3 from "@/assets/images/image00054.webp";

export default function AboutUsPage() {
  const galleryImages = [
    { src: image1.src, alt: "Mint Clinic Interior 1" },
    { src: image2.src, alt: "Mint Clinic Interior 2" },
    { src: image3.src, alt: "Mint Clinic Interior 3" },
  ] as GalleryImage[];

  return (
    <div className="pb-16">
      <TitleSection title="За нас" />
      <WhoWeAre className="pt-0 lg:pt-0" />
      <TeamMembersSection />
      <motion.div
        {...fadeInMotionProps}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-[2%] text-[32px] font-light text-primary lg:text-[26px] xl:text-[32px]">
            Снимки от клиниката
          </h2>
        </div>
        <GalleryGrid images={galleryImages} />
      </motion.div>
      <AboutUsSection />
      <WhyMintSection />
    </div>
  );
}
