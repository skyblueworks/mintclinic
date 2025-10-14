"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { fadeInMotionProps } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { getLocalizedString, getServiceUrl } from "@/lib/getLocalized";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Service } from "@/types/service";
import { TK, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";

interface ServicesSectionClientProps {
  services: Service[];
  categoryTitle?: string;
  categorySlug?: string;
  locale: string;
  className?: string;
  variant?: "carousel" | "grid";
}

/**
 * Individual service tile/card
 * Shared between carousel and grid layouts
 */
function ServiceTile({
  service,
  locale,
  categorySlug,
}: {
  service: Service;
  locale: string;
  categorySlug?: string;
}) {
  const title = getLocalizedString(service.title, locale);
  const excerpt = getLocalizedString(service.excerpt, locale);
  const category = categorySlug || service.category?.slug;
  const href = getServiceUrl(locale, service.slug, category);
  const toServiceText = getTranslation(locale as Locale, TK.TO_SERVICE);

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-white p-6 duration-300">
      <div>
        <div className="mb-12 flex items-start justify-end rounded-lg">
          <Image
            src="/mint-colored.svg"
            alt={title}
            width={60}
            height={60}
            className="opacity-20"
          />
        </div>
        <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
        <p className="mb-6 font-dm-sans leading-relaxed text-foreground/80">
          {excerpt}
        </p>
      </div>
      <Button variant="outline" asChild>
        <Link href={href}>{toServiceText}</Link>
      </Button>
    </div>
  );
}

/**
 * Section header with optional "See All" button
 */
function SectionHeader({
  categoryTitle,
  categorySlug,
  locale,
  variant,
}: {
  categoryTitle?: string;
  categorySlug?: string;
  locale: string;
  variant: "carousel" | "grid";
}) {
  const moreServicesText = getTranslation(
    locale as Locale,
    TK.MORE_SERVICES_FROM,
  );
  const ourServicesText = getTranslation(locale as Locale, TK.OUR_SERVICES);
  const seeAllText = getTranslation(locale as Locale, TK.SEE_ALL);

  const title = categoryTitle
    ? `${moreServicesText} ${categoryTitle}`
    : ourServicesText;

  const showSeeAllButton = variant === "grid" && categoryTitle && categorySlug;

  return (
    <div className="mb-12 flex items-center justify-between">
      <h2 className="text-3xl font-light text-primary lg:text-4xl">{title}</h2>
      {showSeeAllButton && (
        <Button variant="outline" className="text-nowrap" asChild>
          <Link href={`/${locale}/uslugi/${categorySlug}`}>{seeAllText}</Link>
        </Button>
      )}
    </div>
  );
}

/**
 * Carousel layout for services (used on homepage)
 */
function CarouselLayout({
  services,
  locale,
  categorySlug,
}: {
  services: Service[];
  locale: string;
  categorySlug?: string;
}) {
  const [api, setApi] = React.useState<any>();

  const handlePrevClick = React.useCallback(() => {
    if (api) {
      api.scrollPrev();
      api.plugins()?.autoplay?.reset();
    }
  }, [api]);

  const handleNextClick = React.useCallback(() => {
    if (api) {
      api.scrollNext();
      api.plugins()?.autoplay?.reset();
    }
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        duration: 40,
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          stopOnInteraction: false,
          stopOnFocusIn: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-[1rem] md:-ml-[2rem]">
        {services.map((service) => (
          <CarouselItem
            key={service._id}
            className="basis-[calc(100%-8rem)] select-none pl-[1rem] md:basis-[40%] md:pl-[2rem] lg:basis-[30%] xl:basis-1/4"
          >
            <ServiceTile
              service={service}
              locale={locale}
              categorySlug={categorySlug}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={handlePrevClick}
        className="left-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white"
      />
      <CarouselNext
        onClick={handleNextClick}
        className="right-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white"
      />
    </Carousel>
  );
}

/**
 * Grid layout for services (used on category pages)
 */
function GridLayout({
  services,
  locale,
  categorySlug,
}: {
  services: Service[];
  locale: string;
  categorySlug?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {services.map((service) => (
        <div
          key={service._id}
          className="shadow-primary/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <ServiceTile
            service={service}
            locale={locale}
            categorySlug={categorySlug}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Unified client component for ServicesSection
 * Supports both carousel (homepage) and grid (category pages) layouts
 * Data is fetched by parent server component
 */
export default function ServicesSectionClient({
  services,
  categoryTitle,
  categorySlug,
  locale,
  className,
  variant = "grid",
}: ServicesSectionClientProps) {
  const isCarousel = variant === "carousel";

  return (
    <motion.section
      className={cn("bg-white py-16", className)}
      {...fadeInMotionProps}
    >
      {/* Container - full width for carousel, constrained for grid */}
      <div className={isCarousel ? "w-full" : "mx-auto w-full max-w-7xl px-6"}>
        {/* Header - different container for carousel */}
        {isCarousel ? (
          <div className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between px-6">
            <SectionHeader
              categoryTitle={categoryTitle}
              categorySlug={categorySlug}
              locale={locale}
              variant={variant}
            />
          </div>
        ) : (
          <SectionHeader
            categoryTitle={categoryTitle}
            categorySlug={categorySlug}
            locale={locale}
            variant={variant}
          />
        )}

        {/* Content - carousel or grid */}
        {isCarousel ? (
          <CarouselLayout
            services={services}
            locale={locale}
            categorySlug={categorySlug}
          />
        ) : (
          <GridLayout
            services={services}
            locale={locale}
            categorySlug={categorySlug}
          />
        )}
      </div>
    </motion.section>
  );
}
