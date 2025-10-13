"use client";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  _id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
  excerpt?: {
    bg?: string;
    en?: string;
  };
}

interface ServicesSectionClientProps {
  services: Service[];
  categoryTitle: string;
  categorySlug: string;
  locale: string;
  className?: string;
}

/**
 * Client component for ServicesSection
 * Handles animations and carousel functionality
 * Data is fetched by parent server component
 */
export default function ServicesSectionClient({
  services,
  categoryTitle,
  categorySlug,
  locale,
  className,
}: ServicesSectionClientProps) {
  return (
    <motion.section
      className={cn("bg-white py-16", className)}
      {...fadeInMotionProps}
    >
      <div className="w-full">
        {/* Header */}
        <div className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between px-6">
          <h2 className="text-3xl font-light text-primary lg:text-4xl">
            Още услуги от {categoryTitle}
          </h2>
          <Button variant="outline" className="text-nowrap" asChild>
            <Link href={`/${locale}/services/${categorySlug}`}>Виж всички</Link>
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="">
        <Carousel
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
            {services.map((service) => {
              const serviceTitle =
                service.title?.[locale as "bg" | "en"] ||
                service.title?.bg ||
                "";
              const serviceExcerpt =
                service.excerpt?.[locale as "bg" | "en"] ||
                service.excerpt?.bg ||
                "";

              return (
                <CarouselItem
                  key={service._id}
                  className="basis-[calc(100%-8rem)] select-none pl-[1rem] md:basis-[40%] md:pl-[2rem] lg:basis-[30%] xl:basis-1/4"
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-white p-6 duration-300">
                    <div>
                      <div className="mb-12 flex items-start justify-end rounded-lg">
                        <Image
                          src="/mint-colored.svg"
                          alt={serviceTitle}
                          width={60}
                          height={60}
                          className="opacity-20"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-primary">
                        {serviceTitle}
                      </h3>
                      <p className="mb-6 font-dm-sans leading-relaxed text-foreground/80">
                        {serviceExcerpt}
                      </p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link
                        href={`/${locale}/services/${categorySlug}/${service.slug}`}
                      >
                        Към услугата
                      </Link>
                    </Button>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white" />
          <CarouselNext className="right-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white" />
        </Carousel>
      </div>
    </motion.section>
  );
}
