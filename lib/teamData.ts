import type { Locale } from "./i18n";

export interface Certificate {
  image: string;
  title: string;
  lecturer: string;
  location: string;
  date: string;
}

/**
 * Dr. Aleksov's certificates and diplomas
 * Organized by locale for easy translation
 */
export const drAleksovCertificates: Record<Locale, Certificate[]> = {
  bg: [
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
  ],
  en: [
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/certificate_brazil.webp",
      title:
        'Two-week theoretical-practical course on aesthetics with veneers using the digital "cloning" method, developed by the legendary Paulo Kano.',
      lecturer: "Dr. Paulo Kano",
      location: "São Paulo, Brazil",
      date: "04.10 - 16.11.24",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_5.webp",
      title:
        "Theoretical-practical master course in implantology and implant prosthetics - Qualifications in: 1. Theory 2. Implant surgery (practical) 3. Sinus lift (practical) 4. Prosthetics on implants",
      lecturer: "Prof. Ingo Voges",
      location: "Nuremberg, Germany",
      date: "20-22.10.23",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2025/10/20251004090714-aa-images-0-scaled.jpg",
      title: "50-hour theoretical course in implantology at the gIDE institute",
      lecturer:
        "Dr. Sascha Jovanovic, Dr. Istvan Urban, Prof. Daniel Buser, Dr. Francesco Mintrone, Dr. Giacomo Fabbri and others",
      location: "Online",
      date: "10.2024-10.2025",
    },
    {
      image: "https://mintclinic.com/wp-content/uploads/2025/07/img_3561.jpg",
      title:
        "Participation as assistant to Prof. Paulo Kano in a digital approach aesthetics course.",
      lecturer: "Dr. Paulo Kano",
      location: "Sofia, Bulgaria",
      date: "12.05.2025",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_2-e1730733624844.webp",
      title:
        '"Composite Aesthetics" - Theoretical-practical course on "Bonding"',
      lecturer: "Dr. Marcin Krupinski",
      location: "Vilich, Germany",
      date: "29.09.2021",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2025/09/d-r-aleksandr-aleksov-scaled.webp",
      title: "Theoretical-practical course in piezosurgery",
      lecturer: "Prof. Mauro Labanca",
      location: "Sofia, Bulgaria",
      date: "19.09.2025",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_1-scaled.webp",
      title:
        'Theoretical-practical seminar on "application of platelet-rich fibrin material (PRF)"',
      lecturer: "Prof. Mustafa Tunali",
      location: "Sofia, Bulgaria",
      date: "18.10.24",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/10/sertifikat_4-e1730733688284.webp",
      title:
        'Theoretical course on "Digital Smile Design" and digitalization of dental practice',
      lecturer: "Christian Coachman",
      location: "Remscheid, Germany",
      date: "16.09.23",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/sertifikat_3-1.webp",
      title:
        "Theoretical-practical course - Physiological arrangement of teeth and occlusion in complete dentures",
      lecturer: "",
      location: "Düsseldorf, Germany",
      date: "19-23.02.18",
    },
  ],
};

/**
 * Dr. Doganova's certificates and diplomas
 * Organized by locale for easy translation
 */
export const drDoganovaCertificates: Record<Locale, Certificate[]> = {
  bg: [
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
  ],
  en: [
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/universitat-zu-koln.webp",
      title:
        'Diploma for completed with honors higher education in "Dental Medicine" from the Faculty of Medicine at the University of Cologne',
      lecturer: "",
      location: "Cologne, Germany",
      date: "12.12.2023",
    },
    {
      image:
        "https://mintclinic.com/wp-content/uploads/2024/11/invisalign_certification.webp",
      title: "Invisalign Certification",
      lecturer: "",
      location: "Sofia, Bulgaria",
      date: "8-9.11.2024",
    },
  ],
};
