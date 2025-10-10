"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { GalleryDialog } from "@/components/GalleryDialog";

export interface Certificate {
  image: string;
  title: string;
  lecturer?: string;
  location: string;
  date: string;
}

interface CertificateGridProps {
  certificates: Certificate[];
  title?: string;
}

/**
 * CertificateGrid - Interactive grid of certificates with gallery view
 * Displays certificates in a responsive grid with click-to-view gallery
 * Includes animations on scroll
 *
 * @example
 * <CertificateGrid
 *   title="Дипломи и сертификати"
 *   certificates={[
 *     {
 *       image: "https://example.com/cert.jpg",
 *       title: "Certificate title",
 *       lecturer: "Dr. Name",
 *       location: "City, Country",
 *       date: "DD.MM.YYYY"
 *     }
 *   ]}
 * />
 */
export function CertificateGrid({ certificates, title }: CertificateGridProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="my-16">
      {title && (
        <h2 className="mb-12 text-center font-sans text-3xl text-primary lg:text-4xl">
          {title}
        </h2>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden bg-gray-50 shadow-lg"
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
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </button>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-4 font-dm-sans text-sm font-light text-foreground">
                {cert.title}
              </p>
              {cert.lecturer && (
                <p className="mb-2 text-xs font-semibold text-primary">
                  Лектор: {cert.lecturer}
                </p>
              )}
              <p className="mb-1 text-xs text-foreground">{cert.location}</p>
              <p className="text-xs text-foreground">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

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
