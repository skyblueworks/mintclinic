"use client";
import React from "react";
import { TestimonialsColumn } from "./blocks/testimonials-columns-1";

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
    };
  });

export default function TestimonialsSection() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="py-16 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Какво споделят нашите пациенти
          </h2>
          <p className="text-foreground/80 font-dm-sans text-lg max-w-2xl mx-auto">
            Стотици пациенти са ни се доверили за грижата на своите усмивки. Ето
            какво споделят част от тях.
          </p>
        </div>
      </div>

      <div className="max-h-[60vh] flex w-full justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
        <TestimonialsColumn
          testimonials={firstColumn}
          className="hidden sm:block -mt-20"
          duration={25}
        />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block -mt-32"
          duration={35}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden md:block"
          duration={20}
        />
      </div>
    </section>
  );
}
