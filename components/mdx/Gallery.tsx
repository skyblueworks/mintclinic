"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface GalleryProps {
  images: {
    src: string;
    alt?: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export function Gallery({ images, columns = 3 }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
      );
    }
  };

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} my-8 gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-opacity hover:opacity-90"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative flex h-full max-h-screen w-full max-w-4xl items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 p-2 text-white transition-colors hover:text-gray-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-10 p-2 text-white transition-colors hover:text-gray-300"
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-10 p-2 text-white transition-colors hover:text-gray-300"
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={images[selectedIndex].src}
                alt={
                  images[selectedIndex].alt ||
                  `Gallery image ${selectedIndex + 1}`
                }
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Caption */}
            {images[selectedIndex].caption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="rounded bg-black bg-opacity-50 px-4 py-2 text-sm text-white">
                  {images[selectedIndex].caption}
                </p>
              </div>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 right-4">
              <span className="rounded bg-black bg-opacity-50 px-3 py-1 text-sm text-white">
                {selectedIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
