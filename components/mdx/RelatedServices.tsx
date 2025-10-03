import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/craft";

interface Service {
  title: string;
  description: string;
  link: string;
  image?: string;
}

interface RelatedServicesProps {
  services: Service[];
  className?: string;
  cols?: 3 | 4 | 6;
}

/**
 * RelatedServices - Display grid of related service cards
 * Used at the bottom of service pages to link to other services
 *
 * @example
 * <RelatedServices
 *   cols={3}
 *   services={[
 *     { title: "Бондинг", description: "Бърза естетическа корекция", link: "/uslugi/estetika/bonding" },
 *     { title: "Digital Smile Design", description: "Проектирайте промяната", link: "/uslugi/estetika/digital-smile-design" }
 *   ]}
 * />
 */
export function RelatedServices({
  services,
  className,
  cols = 3
}: RelatedServicesProps) {
  const gridCols = {
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={cn("my-8", className)}>
      <div className={cn("grid gap-6", gridCols[cols])}>
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="flex h-full flex-col justify-between rounded-2xl rounded-bl-none rounded-tr-none border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
          >
            <div>
              <div className="mb-6 flex items-start justify-end">
                <Image
                  src={service.image || "/mint-colored.svg"}
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
            <div className="rounded-full border border-primary bg-transparent px-6 py-3 text-center font-extrabold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
              Към услугата
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
