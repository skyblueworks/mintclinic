export type I18nText = { bg: string; en: string };

export interface PricingItem {
  name: I18nText;
  priceBgn: string;
  priceEur: string;
}

export interface PricingCategory {
  title: I18nText;
  icon: string;
  items: PricingItem[];
}

export const PRICING_DATA: PricingCategory[] = [
  {
    title: { bg: "Прегледи", en: "Examinations" },
    icon: "Stethoscope",
    items: [
      {
        name: {
          bg: "Първичен преглед, рентгенова снимка, зъбен статус",
          en: "Initial exam, X-ray interpretation, dental status",
        },
        priceBgn: "68,45 лв.",
        priceEur: "35 €",
      },
      {
        name: {
          bg: "Вторичен преглед, профилактичен преглед",
          en: "Follow-up / preventive examination",
        },
        priceBgn: "48,90 лв.",
        priceEur: "25 €",
      },
      {
        name: {
          bg: "Планиране на ортодонтски случай",
          en: "Orthodontic case planning",
        },
        priceBgn: "97,79 лв.",
        priceEur: "50 €",
      },
    ],
  },
  {
    title: { bg: "Обтурации", en: "Fillings" },
    icon: "Shield",
    items: [
      {
        name: {
          bg: "Обтурация на една повърхност",
          en: "Single-surface filling",
        },
        priceBgn: "136,91 лв.",
        priceEur: "70 €",
      },
      {
        name: {
          bg: "Обтурация на две повърхности",
          en: "Two-surface filling",
        },
        priceBgn: "156,47 лв.",
        priceEur: "80 €",
      },
      {
        name: {
          bg: "Обтурация на три и повече повърхности",
          en: "Three or more surfaces filling",
        },
        priceBgn: "195,58 лв.",
        priceEur: "100 €",
      },
      {
        name: { bg: "Силанизация на зъб", en: "Dental sealant" },
        priceBgn: "48,90 лв.",
        priceEur: "25 €",
      },
    ],
  },
  {
    title: { bg: "Пародонтология", en: "Periodontics" },
    icon: "Heart",
    items: [
      {
        name: {
          bg: "Дълбоко почистване / закрит кюретаж на челюст",
          en: "Deep cleaning / closed curettage per jaw",
        },
        priceBgn: "176,50 лв.",
        priceEur: "90 €",
      },
      {
        name: {
          bg: "Кюретаж на единичен зъб",
          en: "Curettage of a single tooth",
        },
        priceBgn: "68,45 лв.",
        priceEur: "35 €",
      },
      {
        name: {
          bg: "Почистване с ултразвук и Airflow (две челюсти)",
          en: "Ultrasound + Airflow cleaning (both jaws)",
        },
        priceBgn: "176,02 лв.",
        priceEur: "90 €",
      },
    ],
  },
  {
    title: { bg: "Избелване", en: "Whitening" },
    icon: "Sun",
    items: [
      {
        name: {
          bg: "Професионално избелване (кабинетно + домашно)",
          en: "Professional whitening (in-office + at-home)",
        },
        priceBgn: "801,89 лв.",
        priceEur: "410 €",
      },
      {
        name: { bg: "Кабинетно избелване", en: "In-office whitening" },
        priceBgn: "352,05 лв.",
        priceEur: "180 €",
      },
      {
        name: {
          bg: "Избелване в домашни условия",
          en: "At-home whitening",
        },
        priceBgn: "449,84 лв.",
        priceEur: "230 €",
      },
      {
        name: {
          bg: "Ендогенно избелване на девитализирани зъби",
          en: "Endogenous whitening of devitalized teeth",
        },
        priceBgn: "195,58 лв.",
        priceEur: "100 €",
      },
    ],
  },
  {
    title: { bg: "Протетика", en: "Prosthetics" },
    icon: "Crown",
    items: [
      {
        name: { bg: "Корона металокерамика", en: "Metal-ceramic crown" },
        priceBgn: "586,75 лв.",
        priceEur: "300 €",
      },
      {
        name: {
          bg: 'Циркониева корона "Full contour"',
          en: "Zirconia crown (full contour)",
        },
        priceBgn: "782,33 лв.",
        priceEur: "400 €",
      },
      {
        name: {
          bg: "Естетична циркониева корона с E-max порцелан",
          en: "Aesthetic zirconia crown with E-max porcelain",
        },
        priceBgn: "850,79 лв.",
        priceEur: "435 €",
      },
      {
        name: { bg: 'Коронка "E-max"', en: "E-max crown" },
        priceBgn: "1 007,25 лв.",
        priceEur: "515 €",
      },
      {
        name: { bg: 'Фасета "E-max"', en: "E-max veneer" },
        priceBgn: "1 007,25 лв.",
        priceEur: "515 €",
      },
      {
        name: {
          bg: "Инлей, овърлей, ендокорона",
          en: "Inlay, onlay, endocrown",
        },
        priceBgn: "850,79 лв.",
        priceEur: "435 €",
      },
      {
        name: {
          bg: "Циментиране на разлепена коронка",
          en: "Re-cementing a loosened crown",
        },
        priceBgn: "58,67 лв.",
        priceEur: "30 €",
      },
      {
        name: {
          bg: "Временна корона (клиника)",
          en: "Temporary crown (in-office)",
        },
        priceBgn: "117,35 лв.",
        priceEur: "60 €",
      },
      {
        name: {
          bg: "Временна корона (лаборатория)",
          en: "Temporary crown (lab-made)",
        },
        priceBgn: "156,47 лв.",
        priceEur: "80 €",
      },
      {
        name: {
          bg: "Дигитален дизайн на зъб (Wax-up)",
          en: "Digital tooth design (Wax-up)",
        },
        priceBgn: "48,90 лв.",
        priceEur: "25 €",
      },
      {
        name: { bg: "Mock-up на зъб", en: "Tooth mock-up" },
        priceBgn: "48,90 лв.",
        priceEur: "25 €",
      },
      {
        name: { bg: "Рязане на корона", en: "Crown cutting" },
        priceBgn: "58,67 лв.",
        priceEur: "30 €",
      },
    ],
  },
  {
    title: { bg: "Ендодонтия", en: "Endodontics" },
    icon: "Activity",
    items: [
      {
        name: {
          bg: "Ендодонтско лечение резец / кучешки зъб",
          en: "Root canal — incisor / canine",
        },
        priceBgn: "254,26 лв.",
        priceEur: "130 €",
      },
      {
        name: {
          bg: "Ендодонтско лечение предкътници",
          en: "Root canal — premolars",
        },
        priceBgn: "391,17 лв.",
        priceEur: "200 €",
      },
      {
        name: {
          bg: "Ендодонтско лечение кътници",
          en: "Root canal — molars",
        },
        priceBgn: "645,42 лв.",
        priceEur: "330 €",
      },
      {
        name: {
          bg: "Временна вложка от медикамент",
          en: "Temporary medicament dressing",
        },
        priceBgn: "58,67 лв.",
        priceEur: "30 €",
      },
      {
        name: { bg: "Изграждане с щифт", en: "Post and core build-up" },
        priceBgn: "215,14 лв.",
        priceEur: "110 €",
      },
      {
        name: { bg: "Отстраняване на щифт", en: "Post removal" },
        priceBgn: "58,67 лв.",
        priceEur: "30 €",
      },
    ],
  },
  {
    title: { bg: "Хирургия", en: "Surgery" },
    icon: "Scissors",
    items: [
      {
        name: {
          bg: "Екстракция на временен (млечен) зъб",
          en: "Primary (baby) tooth extraction",
        },
        priceBgn: "78,23 лв.",
        priceEur: "40 €",
      },
      {
        name: {
          bg: "Екстракция на еднокоренов зъб",
          en: "Single-root tooth extraction",
        },
        priceBgn: "117,35 лв.",
        priceEur: "60 €",
      },
      {
        name: {
          bg: "Екстракция на многокоренов зъб",
          en: "Multi-root tooth extraction",
        },
        priceBgn: "156,47 лв.",
        priceEur: "80 €",
      },
      {
        name: { bg: "Екстракция на мъдрец", en: "Wisdom tooth extraction" },
        priceBgn: "205,36 лв.",
        priceEur: "105 €",
      },
      {
        name: {
          bg: "Хирургична екстракция",
          en: "Surgical extraction",
        },
        priceBgn: "488,96 лв.",
        priceEur: "250 €",
      },
      {
        name: { bg: "Инцизия", en: "Incision" },
        priceBgn: "107,57 лв.",
        priceEur: "55 €",
      },
    ],
  },
  {
    title: { bg: "Лазер", en: "Laser" },
    icon: "Zap",
    items: [
      {
        name: {
          bg: "HELBO лазер (3 процедури)",
          en: "HELBO laser (3 sessions)",
        },
        priceBgn: "254,26 лв.",
        priceEur: "130 €",
      },
    ],
  },
  {
    title: { bg: "Имплантология", en: "Implantology" },
    icon: "CircleDot",
    items: [
      {
        name: { bg: "Имплант Straumann", en: "Straumann implant" },
        priceBgn: "2 346,99 лв.",
        priceEur: "1 200 €",
      },
      {
        name: { bg: "Имплант Biohorizons", en: "Biohorizons implant" },
        priceBgn: "1 662,46 лв.",
        priceEur: "850 €",
      },
      {
        name: {
          bg: "Водена костна аугментация (GBR)",
          en: "Guided bone regeneration (GBR)",
        },
        priceBgn: "1 007,25 – 1 505,99 лв.",
        priceEur: "515 – 770 €",
      },
      {
        name: { bg: "Синус лифт", en: "Sinus lift" },
        priceBgn: "1 505,99 – 2 004,73 лв.",
        priceEur: "770 – 1 025 €",
      },
    ],
  },
  {
    title: { bg: "Пародонтална хирургия", en: "Periodontal Surgery" },
    icon: "HeartPulse",
    items: [
      {
        name: {
          bg: "Удължаване на клиничната корона (на зъб)",
          en: "Clinical crown lengthening (per tooth)",
        },
        priceBgn: "117,35 лв.",
        priceEur: "60 €",
      },
      {
        name: {
          bg: "Шина за корекция на венците",
          en: "Gum correction splint",
        },
        priceBgn: "117,35 лв.",
        priceEur: "60 €",
      },
    ],
  },
  {
    title: { bg: "Протези", en: "Dentures" },
    icon: "Smile",
    items: [
      {
        name: {
          bg: "Плакова протеза — тотална или частична (за една челюст)",
          en: "Acrylic denture — total or partial (per jaw)",
        },
        priceBgn: "1 007,25 лв.",
        priceEur: "515 €",
      },
      {
        name: {
          bg: "Моделно-лята протеза (за една челюст)",
          en: "Cast-metal denture (per jaw)",
        },
        priceBgn: "1 505,99 – 2 542,58 лв.",
        priceEur: "770 – 1 300 €",
      },
      {
        name: { bg: "Бондинг (на зъб)", en: "Bonding (per tooth)" },
        priceBgn: "352,05 лв.",
        priceEur: "180 €",
      },
    ],
  },
  {
    title: { bg: "Ортодонтия", en: "Orthodontics" },
    icon: "AlignCenter",
    items: [
      {
        name: {
          bg: "Алайнър система ClearCorrect (челюст)",
          en: "ClearCorrect aligner system (per jaw)",
        },
        priceBgn: "3 911,66 – 5 867,49 лв.",
        priceEur: "2 000 – 3 000 €",
      },
      {
        name: {
          bg: "Алайнър система Invisalign (челюст)",
          en: "Invisalign aligner system (per jaw)",
        },
        priceBgn: "3 911,66 – 5 867,49 лв.",
        priceEur: "2 000 – 3 000 €",
      },
      {
        name: {
          bg: "Фиксиран ритейнер (на челюст)",
          en: "Fixed retainer (per jaw)",
        },
        priceBgn: "195,58 лв.",
        priceEur: "100 €",
      },
      {
        name: {
          bg: "Снемаем ритейнер (на челюст)",
          en: "Removable retainer (per jaw)",
        },
        priceBgn: "312,93 лв.",
        priceEur: "160 €",
      },
      {
        name: { bg: "Шина за бруксизъм", en: "Bruxism splint" },
        priceBgn: "312,93 лв.",
        priceEur: "160 €",
      },
    ],
  },
];
