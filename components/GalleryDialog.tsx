"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryDialogProps {
  images: GalleryImage[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialIndex?: number;
}

export function GalleryDialog({
  images,
  open,
  onOpenChange,
  initialIndex = 0,
}: GalleryDialogProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  // Set initial slide when dialog opens
  React.useEffect(() => {
    if (open && api) {
      api.scrollTo(initialIndex, true);
    }
  }, [open, initialIndex, api]);

  // Update carousel state
  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateState = () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle keyboard navigation if a button or interactive element is focused
      const target = e.target as HTMLElement;
      if (target?.tagName === "BUTTON" || target?.closest("button")) {
        return;
      }

      if (e.key === "Escape") {
        onOpenChange(false);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        api?.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        api?.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, api, onOpenChange]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* Content container with click handler */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={(e) => {
                // Only close if clicking the background, not child elements
                if (e.target === e.currentTarget) {
                  onOpenChange(false);
                }
              }}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Counter */}
              <div className="absolute left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
                {current + 1} / {images.length}
              </div>

              {/* Carousel */}
              <div className="relative h-full w-full max-w-7xl px-4 py-16">
                <Carousel
                  setApi={setApi}
                  opts={{
                    loop: true,
                    startIndex: initialIndex,
                  }}
                  className="grid h-full w-full items-center justify-center"
                >
                  <CarouselContent className="h-full">
                    {images.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <div className="relative flex h-full max-h-[85vh] w-full items-center justify-center">
                          {image.src.startsWith("/") ? (
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1920}
                              height={1080}
                              className="max-h-full max-w-full object-contain"
                              priority={index === initialIndex}
                            />
                          ) : (
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="max-h-full max-w-full object-contain"
                            />
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/20 text-white shadow-xl shadow-black/30 hover:bg-white/30 disabled:opacity-50"
                    onClick={() => api?.scrollPrev()}
                    disabled={!canScrollPrev}
                  >
                    <ChevronLeft className="h-8 w-8" />
                    <span className="sr-only">Previous image</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/20 text-white shadow-xl shadow-black/30 hover:bg-white/30 disabled:opacity-50"
                    onClick={() => api?.scrollNext()}
                    disabled={!canScrollNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </Carousel>
              </div>
            </motion.div>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
