"use client";
import TitleSection from "@/components/TitleSection";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import Image from "next/image";
import { GalleryDialog } from "@/components/GalleryDialog";
import { useState } from "react";

export default function DrAleksovPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const certificates = [
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/certificate_brazil.webp",
      title:
        'Двуседмичен теоретично-практически курс за естетика с фасети по дигиталния метод "клонинги", разработен от легендарния Пауло Кано.',
      lecturer: "Dr. Paulo Kano",
      location: "Сао Пауло, Бразилия",
      date: "04.10 - 16.11.24",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_5.webp",
      title:
        "Теоретична-практически мастър курс по имплантология и имплантологична протетика - Квалификации по: 1. Теория 2. Имплантологична хирургия (практика) 3. Синус лифт (практика) 4. Протетика върху импланти",
      lecturer: "Prof. Ingo Voges",
      location: "Нюрнберг, Германия",
      date: "20-22.10.23",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2025/10/20251004090714-aa-images-0-scaled.jpg",
      title: "50- часов теоретичен курс по имплантология на института gIDE",
      lecturer:
        "Dr. Sascha Jovanovic, Dr. Istvan Urban, Prof. Daniel Buser, Dr. Francesco Mintrone, Dr. Giacomo Fabbri и др.",
      location: "Онлайн",
      date: "10.2024-10.2025",
    },
    {
      image: "https://mintclinic.com/wp-content/uploads/2025/07/img_3561.jpg",
      title:
        "Участие като асистент на Проф. Пауло Кано в курс по естетика с дигитален подход.",
      lecturer: "Dr. Paulo Kano",
      location: "София, България",
      date: "12.05.2025",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_2-e1730733624844.webp",
      title:
        '"Естетика с композит" - Теоретично-практически курс на тема "Бондинг"',
      lecturer: "Dr. Marcin Krupinski",
      location: "Вилих, Германия",
      date: "29.09.2021",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2025/09/d-r-aleksandr-aleksov-scaled.webp",
      title: "Теоретично- практически курс за пиезохирургия",
      lecturer: "Prof. Mauro Labanca",
      location: "София, България",
      date: "19.09.2025",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_1-scaled.webp",
      title:
        'Теоретично- практически семинар на тема "приложение на богат на тромбоцити фибринов материал (prf)"',
      lecturer: "Prof. Mustafa Tunali",
      location: "София, България",
      date: "18.10.24",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_4-e1730733688284.webp",
      title:
        'Теоретичен курс на теми "Дигитален дизайн на усмивката" и дигитализиране на денталната практика',
      lecturer: "Christian Coachman",
      location: "Ремшайд, Германия",
      date: "16.09.23",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/sertifikat_3-1.webp",
      title:
        "Теоретично-практически курс - Физиологична подредба на зъбите и оклузия в тоталната протетика",
      lecturer: "",
      location: "Дюселдорф, Германия",
      date: "19-23.02.18",
    },
  ];

  return (
    <div className="pb-16">
      <TitleSection title="Д-р Алексов" />

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
                  src="/dr-aleksov.webp"
                  alt="Д-р Александър Алексов"
                  width={682}
                  height={1024}
                  className="h-auto w-full max-w-[400px] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 font-dm-sans font-light text-foreground">
              <h2 className="font-sans text-3xl text-primary lg:text-4xl">
                Здравейте! Аз съм Александър Алексов.
              </h2>

              <p>
                Целия си професионален опит съм събрал в Германия. Преди това
                завърших в Хайнрих Хайне университет- Дюселдорф, а много преди
                това- немската гимназия в София. Въпреки преобладаващото немско
                влияние в моя живот смятам, че още не съм загубил напълно
                чувството си за хумор. Нещо повече- научен съм да ценя
                качеството и да го прилагам в своята работа.
              </p>

              <p>
                След дипломирането си работих като общопрактикуващ зъболекар в
                гъсто населен регион, което ми позволи да се докосна до всички
                сфери на денталната медицина. Е, най-удовлетворен оставах след
                завършването на сложни хирургически, естетически, или
                възстановителни случаи… или трите в едно. Затова и започнах
                активно да се развивам в тази посока и успях да го превърна в
                своя практика.
              </p>

              <p>
                Посещавал съм, и продължавам да го правя, редица
                теоретично-практически курсове и се уча от най- добрите. Някои
                от тях можете да видите по-долу. Любовта към родината и чичовата
                клиника бяха причината да се върна в България и да поема Минт.
                Ще се радвам да се видим там на по чаша ментов чай.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Text Content */}
            <div className="space-y-6 font-dm-sans font-light text-foreground">
              <h2 className="font-sans text-3xl text-primary lg:text-4xl">
                Философия
              </h2>

              <p>
                Дълго време в Германия работих по „западния" модел. В много от
                държавите на запад здравната каса покрива голяма част от сумата
                за лечението. Следователно денталните практики залагат на
                високия поток на пациенти, тъй като това е най-доходоносно, а
                пациентите не възразяват, защото им е евтино. За съжаление
                обаче, това понякога води до недостатъчно обстойни прегледи,
                немарливо извършени лечения, или избор на неподходяща терапия.
                Виждал съм всичко. Въпреки че бързата работа се приема добре от
                пациентите, които искат да си тръгнат възможно най- бързо от
                кабинета, тя крие рискове.
              </p>

              <p>
                Идеята на Минт е различна. Да, можем да работим бързо, но много
                повече ценим сигурните резултати. Всеки може да препарира зъб за
                15 минути и да циментира коронка отгоре. А какво ще се случи с
                този зъб след 5 години? Предпочитам да отделя още 15 минути, за
                да изпипам детайлите. И няма да забравя как една колежка се
                изненада, след като отделих час и половина за първична
                консултация с пациент. Тези неща са важни, ако искаш работата ти
                да е прецизна. А аз искам!
              </p>
            </div>

            {/* Image */}
            <div className="mt-8 lg:mt-0">
              <div className="overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none">
                <img
                  src="https://mintclinic.com/wp-content/uploads/2024/10/image00001.webp"
                  alt="Mint Clinic"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        className="bg-white py-16 lg:py-24"
        {...fadeInMotionProps}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-sans text-3xl text-primary lg:text-4xl">
            Дипломи и сертификати
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
