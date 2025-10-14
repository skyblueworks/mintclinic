"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  imagePosition?: "left" | "right";
}

/**
 * ServiceCard - Display a service with image and description
 * Designed for the services overview page with square aspect ratio images
 * Desktop layout: 1/3 image, 2/3 content
 */
export default function ServiceCard({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  buttonHref,
  imagePosition = "left",
}: ServiceCardProps) {
  const imageColumn = (
    <div className="flex w-full items-center justify-center md:w-1/3">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );

  const contentColumn = (
    <div className="flex w-full flex-col justify-center md:w-2/3">
      <h3 className="mb-4 text-3xl !font-normal text-primary">{title}</h3>
      <p className="mb-6 leading-relaxed text-foreground/80">{description}</p>
      <div>
        <Button variant="outline" size="sm" asChild>
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );

  return (
    <motion.div
      {...fadeInMotionProps}
      className="my-16 flex flex-col items-center gap-8 md:flex-row lg:gap-12"
    >
      {imagePosition === "left" ? (
        <>
          {imageColumn}
          {contentColumn}
        </>
      ) : (
        <>
          {contentColumn}
          {imageColumn}
        </>
      )}
    </motion.div>
  );
}
