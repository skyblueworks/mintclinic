"use client";
import React, { useMemo } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./blocks/testimonials-columns-1";
import { fadeInMotionProps } from "@/lib/animations";

import reviews from "@/assets/reviews.json";
import photoMapping from "@/assets/reviewer-photos/url-to-filename.json";

const testimonials = reviews
  .filter((review) => review.text && review.text.trim()) // Only include reviews with text
  .map((review) => {
    const localPhotoPath =
      review.reviewerPhotoUrl && photoMapping[review.reviewerPhotoUrl]
        ? `/reviewer-photos/${photoMapping[review.reviewerPhotoUrl]}`
        : "https://placehold.co/80x80?text=N/A";

    return {
      text: review.text,
      name: review.name,
      role: "Пациент",
      image: localPhotoPath,
      reviewUrl: review.reviewUrl,
      stars: review.stars,
    };
  });

// Helper function to split array into even chunks using round-robin distribution
function chunkArray<T>(array: T[], chunks: number): T[][] {
  const result: T[][] = Array.from({ length: chunks }, () => []);

  // Distribute items in round-robin fashion for more even distribution
  array.forEach((item, index) => {
    const columnIndex = index % chunks;
    result[columnIndex].push(item);
  });

  return result.filter((chunk) => chunk.length > 0);
}

// Helper function to calculate duration for a column
function calculateColumnDuration(
  columnTestimonials: typeof testimonials,
  columnIndex: number,
  totalColumns: number,
): number {
  const totalCharacters = columnTestimonials.reduce(
    (sum, testimonial) =>
      sum + (testimonial.text?.length || 0) + (testimonial.name?.length || 0),
    0,
  );

  // Base speed: 40 seconds per 1000 characters
  const baseSpeed = (totalCharacters / 1000) * 40;

  // Column multipliers for consistent reading experience
  const columnMultiplier =
    totalColumns === 1 ? 3.0 : totalColumns === 2 ? 2.0 : 1.0;

  // Apply bounds that work with our doubled base speed
  const baseDuration = Math.max(
    30,
    Math.min(150, baseSpeed * columnMultiplier),
  );

  // Small variation to prevent sync (max 10% difference)
  const variation = 1 + columnIndex * 0.05;

  return baseDuration * variation;
}

export default function TestimonialsSection() {
  const { width } = useWindowSize();

  // Determine number of columns based on screen size
  const columnCount = useMemo(() => {
    if (!width) return 1; // Default for SSR
    if (width < 640) return 1; // sm breakpoint
    if (width < 768) return 2; // md breakpoint
    return 3; // lg+ breakpoints
  }, [width]);

  // Split testimonials evenly across columns with calculated durations
  const columnsWithDurations = useMemo(() => {
    const columns = chunkArray(testimonials, columnCount);

    return columns.map((columnTestimonials, index) => {
      const duration = calculateColumnDuration(
        columnTestimonials,
        index,
        columnCount,
      );

      return {
        testimonials: columnTestimonials,
        duration,
        index,
      };
    });
  }, [columnCount]); // Only recalculate when column count changes

  return (
    <motion.section
      className="overflow-hidden bg-white py-16 lg:pb-32 lg:pt-16"
      {...fadeInMotionProps}
    >
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="text-left">
          <h2 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
            <span className="font-light">Какво казват</span> нашите пациенти
          </h2>
          <p className="text-lg text-foreground">
            Хиляди пациенти са ни се доверили с грижата за своите усмивки:
          </p>
        </div>
      </div>

      <div className="flex max-h-[60vh] w-full justify-center gap-6 px-6 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
        {columnsWithDurations.map(
          ({ testimonials: columnTestimonials, duration, index }) => {
            // Stagger the animation start times
            const marginTopClasses = ["-mt-20", "-mt-32", "-mt-10"];

            return (
              <TestimonialsColumn
                key={index}
                testimonials={columnTestimonials}
                className={`${
                  columnCount === 1
                    ? "block"
                    : columnCount === 2
                      ? index === 0
                        ? "block"
                        : "hidden sm:block"
                      : index === 0
                        ? "hidden sm:block"
                        : index === 1
                          ? "hidden md:block"
                          : "hidden lg:block"
                } ${marginTopClasses[index % marginTopClasses.length]}`}
                duration={duration}
              />
            );
          },
        )}
      </div>
    </motion.section>
  );
}
