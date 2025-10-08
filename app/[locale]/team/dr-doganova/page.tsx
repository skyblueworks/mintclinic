"use client";
import TitleSection from "@/components/TitleSection";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import Image from "next/image";
import { GalleryDialog } from "@/components/GalleryDialog";
import { useState } from "react";

export default function DrDoganovaPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const certificates = [
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/universitat-zu-koln.webp",
      title:
        'Диплома за завършено с отличие висше образование по "Дентална медицина" от медицинския факултет на Университета в Кьолн',
      lecturer: "",
      location: "Кьолн, Германия",
      date: "12.12.2023",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/invisalign_certification.webp",
      title: "Сертификат за работа с Инвизалайн",
      lecturer: "",
      location: "София, България",
      date: "8-9.11.2024",
    },
  ];

  return (
    <div className="pb-16">
      <TitleSection title="Д-р Доганова" />

      {/* Introduction Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Image Section */}
            <div className="mb-8 lg:mb-0">
              <div className="overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
                <Image
                  src="/dr-doganova.webp"
                  alt="Д-р Ивета Доганова"
                  width={800}
                  height={885}
                  className="h-auto w-full max-w-[400px] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 font-dm-sans font-light text-foreground">
              <h2 className="font-sans text-3xl text-primary lg:text-4xl">
                Здравейте и от мен!
              </h2>

              <p>
                Аз съм д-р Ивета Доганова, зъболекар, който вярва, че всеки
                пациент заслужава най-добрата грижа. Завърших Американския колеж
                в София, а след това продължих обучението си в Германия, в
                Universität zu Köln. Там се дипломирах с отличие, като придобих
                не само ценни знания и умения в областта на стоматологията, но и
                се запознах отблизо с немската култура. Опитът ми в Германия ми
                даде допълнителна перспектива и до голяма степен оформи подхода
                ми към работата.
              </p>

              <p>
                Днес съм отново в София като част от екипа на Минт Клиник, къде
                то имам възможността да отделям нужното време на пациентите си и
                да работя с внимание към самите тях и към детайла. Стремя се да
                осигуря индивидуална грижа и комфорт, за да може всеки пациент
                да се чувства спокоен и в сигурни ръце. Най-ценното за мен е да
                виждам пациентите си доволни и уверени в усмивките си.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education & Certifications Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-sans text-3xl text-primary lg:text-4xl">
            Образование и сертификати
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none bg-gray-50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className="aspect-[4/3] overflow-hidden"
                  onClick={() => {
                    setSelectedIndex(index);
                    setDialogOpen(true);
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 font-dm-sans text-sm font-light text-foreground">
                    {cert.title}
                  </p>
                  {cert.lecturer && (
                    <p className="mb-2 text-xs font-semibold text-primary">
                      Лектор: {cert.lecturer}
                    </p>
                  )}
                  <p className="mb-1 text-xs text-foreground">
                    {cert.location}
                  </p>
                  <p className="text-xs text-foreground">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Dialog for Certificates */}
      <GalleryDialog
        images={certificates.map((cert) => ({
          src: cert.image,
          alt: cert.title,
        }))}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialIndex={selectedIndex}
      />
    </div>
  );
}
