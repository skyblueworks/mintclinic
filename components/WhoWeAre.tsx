"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { fadeInMotionProps } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { type Locale, type BilingualContent } from "@/lib/locale";
import LocalizedLink from "./LocalizedLink";

interface WhoWeAreProps {
  data: {
    label: BilingualContent;
    title: BilingualContent;
    titleSuffix: BilingualContent;
    description: BilingualContent;
    buttonAbout: BilingualContent;
    buttonGallery: BilingualContent;
    videoUrl: string;
  };
  locale: Locale;
  className?: string;
}

export default function WhoWeAre({ data, locale, className }: WhoWeAreProps) {
  const pathname = usePathname();
  const isAboutPage = pathname.endsWith("/about-us");
  return (
    <motion.section
      className={cn("bg-white pb-8 pt-16 lg:pb-16 lg:pt-32", className)}
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Content Section */}
          <div className="mb-8 lg:order-2 lg:mb-0 lg:pr-8">
            {!isAboutPage && (
              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                {data.label[locale]}
              </p>
            )}

            <h2 className="mb-6 text-3xl font-bold leading-tight text-primary lg:text-4xl">
              <span className="font-light">{data.title[locale]}</span>{" "}
              {data.titleSuffix[locale]}
            </h2>

            <p className="text-md mb-8 font-dm-sans text-foreground">
              {data.description[locale]}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              {!isAboutPage && (
                <Button variant="outline" asChild>
                  <LocalizedLink href="/about-us">
                    {data.buttonAbout[locale]}
                  </LocalizedLink>
                </Button>
              )}
              <Button variant="outline" asChild>
                <LocalizedLink href="/gallery">
                  {data.buttonGallery[locale]}
                </LocalizedLink>
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:order-1">
            <div className="aspect-video overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
              <iframe
                className="h-full w-full"
                src={data.videoUrl}
                title="Mint Clinic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
