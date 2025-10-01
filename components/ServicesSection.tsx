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

export default function ServicesSection() {
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
      className="bg-white py-16 lg:pb-16 lg:pt-32"
      {...fadeInMotionProps}
    >
      <div className="w-full px-6">
        {/* Header */}
        <div className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-between">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">
            Нашите услуги
          </h2>
          <button className="text-nowrap rounded-full border border-primary bg-transparent px-8 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
            Виж всички
          </button>
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
                  <button className="w-full rounded-full border border-primary bg-transparent px-6 py-3 font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
                    Към услугата
                  </button>
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
