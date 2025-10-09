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

// TODO: Show services by category, not all services
export default function ServicesSection({
  locale = "bg",
  category,
  currentSlug,
  className,
}: {
  locale?: string;
  category?: string;
  currentSlug?: string;
  className?: string;
}) {
  const services = [
    {
      id: 1,
      title: "Фасети",
      description: "Перфектната усмивка",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Digital Smile Design",
      description: "Проектирайте промяната",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Избелване",
      description: "Блестящи зъби на момента",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 4,
      title: "Бондинг",
      description: "Бърза естетическа корекция",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 5,
      title: "Импланти",
      description: "Сигурни и надеждни",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 6,
      title: "Екстракции",
      description: "Безболезнено решение на болезнен проблем",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 7,
      title: "Оформяне на венеца",
      description: "Рамката на красивата усмивка",
      image: "/mints.webp",
      link: "#",
    },
    {
      id: 8,
      title: "Покриване на рецесии",
      description: "Възстановяване на отдръпнати венци",
      image: "/mints.webp",
      link: "#",
    },
  ];

  return (
    <motion.section
      className={cn("bg-white py-16", className)}
      {...fadeInMotionProps}
    >
      <div className="w-full">
        {/* Header */}
        <div className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between px-6">
          <h2 className="text-3xl font-light text-primary lg:text-4xl">
            Нашите услуги
          </h2>
          <Button variant="outline" className="text-nowrap">
            Виж всички
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
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="basis-[calc(100%-8rem)] select-none pl-[1rem] md:basis-[40%] md:pl-[2rem] lg:basis-[30%] xl:basis-1/4"
              >
                <div className="flex h-full flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-white p-6 duration-300">
                  <div>
                    <div className="mb-12 flex items-start justify-end rounded-lg">
                      <Image
                        src="/mint-colored.svg"
                        alt={service.title}
                        width={60}
                        height={60}
                        className="opacity-20"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-6 font-dm-sans leading-relaxed text-foreground/80">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="outline">Към услугата</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white" />
          <CarouselNext className="right-6 size-12 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white" />
        </Carousel>
      </div>
    </motion.section>
  );
}
