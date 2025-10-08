"use client";

import * as React from "react";
import Image from "next/image";
import { GalleryDialog } from "./GalleryDialog";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setDialogOpen(true);
  };

  return (
    <>
      {/* Gallery Grid with auto-fit up to 4 columns */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => handleImageClick(idx)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none shadow-xl shadow-black/5 transition-all hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {image.src.startsWith("/") ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </button>
        ))}
      </div>

      {/* Gallery Dialog */}
      <GalleryDialog
        images={images}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialIndex={selectedIndex}
      />
    </>
  );
}
