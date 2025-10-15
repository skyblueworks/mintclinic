"use client";
import TitleSection from "@/components/TitleSection";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import Image from "next/image";
import { GalleryDialog } from "@/components/GalleryDialog";
import { useState } from "react";
import { useTranslation, TK } from "@/lib/i18n";
import { drDoganovaCertificates } from "@/lib/teamData";

export default function DrDoganovaPage() {
  const { t, locale } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const certificates = drDoganovaCertificates[locale];

  return (
    <div className="pb-16">
      <TitleSection title={t(TK.DR_DOGANOVA)} />

      {/* Introduction Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Image Section */}
            <div className="mb-8 lg:mb-0">
              <div className="overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
                <Image
                  src="https://cdn.sanity.io/images/ne3mflgj/production/0d955522719b3540fbdcf467d3b2372888424e38-926x1024.webp"
                  alt="Д-р Ивета Доганова"
                  width={800}
                  height={885}
                  className="h-auto w-full max-w-[400px] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 font-dm-sans font-light text-foreground">
              <h2 className="font-sans text-3xl text-primary lg:text-4xl">
                {t(TK.DR_DOGANOVA_INTRO_HEADING)}
              </h2>

              <p>{t(TK.DR_DOGANOVA_BIO_PARA_1)}</p>

              <p>{t(TK.DR_DOGANOVA_BIO_PARA_2)}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education & Certifications Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-sans text-3xl text-primary lg:text-4xl">
            {t(TK.EDUCATION_AND_CERTIFICATES)}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none bg-gray-50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className="aspect-[4/3] overflow-hidden"
                  onClick={() => {
                    setSelectedIndex(index);
                    setDialogOpen(true);
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 font-dm-sans text-sm font-light text-foreground">
                    {cert.title}
                  </p>
                  {cert.lecturer && (
                    <p className="mb-2 text-xs font-semibold text-primary">
                      {t(TK.LECTURER)} {cert.lecturer}
                    </p>
                  )}
                  <p className="mb-1 text-xs text-foreground">
                    {cert.location}
                  </p>
                  <p className="text-xs text-foreground">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Dialog for Certificates */}
      <GalleryDialog
        images={certificates.map((cert) => ({
          src: cert.image,
          alt: cert.title,
        }))}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
