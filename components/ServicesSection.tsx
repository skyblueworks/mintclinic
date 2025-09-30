"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="pt-16 pb-8 lg:pt-32 lg:pb-16 bg-white">
      <div className="px-6 w-full">
        {/* Header */}
        <div className="max-w-7xl flex justify-between items-center mb-12 w-full mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Нашите услуги
          </h2>
          <button className="bg-transparent text-nowrap border border-primary text-primary font-extrabold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
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
                className="pl-[1rem] md:pl-[2rem] basis-[calc(100%-8rem)] md:basis-[40%]  lg:basis-[30%] xl:basis-1/4 select-none"
              >
                <div className="bg-white border border-primary/20 rounded-2xl rounded-tr-none rounded-bl-none p-6 h-full flex flex-col justify-between duration-300">
                  <div>
                    <div className="mb-12 flex justify-end items-start rounded-lg">
                      <Image
                        src="/mint-colored.svg"
                        alt={service.title}
                        width={60}
                        height={60}
                        className="opacity-20"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 font-dm-sans leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <button className="bg-transparent border border-primary text-primary font-extrabold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 w-full">
                    Към услугата
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-12 left-6 bg-primary text-white border-primary hover:bg-primary/90 hover:text-white" />
          <CarouselNext className="size-12 right-6 bg-primary text-white border-primary hover:bg-primary/90 hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
