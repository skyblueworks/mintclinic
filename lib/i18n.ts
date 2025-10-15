import { getValidLocale, type Locale } from "./locale";

export const locales = ["bg", "en"] as const;
export const defaultLocale = "bg" as const;

export type { Locale };

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Translation Keys - Constants for type-safe translations
 * Follow the same pattern as LOCALES in locale.ts
 */
export const TK = {
  // Navigation
  HOME: "HOME",
  SERVICES: "SERVICES",
  TEAM: "TEAM",
  BLOG: "BLOG",
  ABOUT: "ABOUT",
  CONTACT: "CONTACT",
  GALLERY: "GALLERY",
  ALL_SERVICES: "ALL_SERVICES",
  CATEGORIES: "CATEGORIES",

  // Navigation - Services Categories
  AESTHETIC_DENTAL_MEDICINE: "AESTHETIC_DENTAL_MEDICINE",
  SURGERY: "SURGERY",
  PROSTHETICS: "PROSTHETICS",
  CONSERVATIVE_THERAPY: "CONSERVATIVE_THERAPY",
  ALIGNERS: "ALIGNERS",
  EMERGENCY_DENTAL_CARE: "EMERGENCY_DENTAL_CARE",

  // Navigation - Services Subcategories (Aesthetics)
  VENEERS: "VENEERS",
  BONDING: "BONDING",
  DIGITAL_SMILE_DESIGN: "DIGITAL_SMILE_DESIGN",
  TEETH_WHITENING: "TEETH_WHITENING",

  // Navigation - Services Subcategories (Surgery)
  DENTAL_IMPLANTS: "DENTAL_IMPLANTS",
  EXTRACTIONS: "EXTRACTIONS",
  RECESSION_COVERAGE: "RECESSION_COVERAGE",
  GUM_CONTOURING: "GUM_CONTOURING",

  // Navigation - Services Subcategories (Prosthetics)
  CROWNS: "CROWNS",
  BRIDGES: "BRIDGES",
  INLAY_ONLAY: "INLAY_ONLAY",
  DENTURES: "DENTURES",
  FUNCTIONAL_REHABILITATION: "FUNCTIONAL_REHABILITATION",
  BRUXISM_SPLINTS: "BRUXISM_SPLINTS",

  // Navigation - Services Subcategories (Conservative)
  FILLINGS: "FILLINGS",
  ROOT_CANAL: "ROOT_CANAL",
  PROFESSIONAL_CLEANING: "PROFESSIONAL_CLEANING",
  GINGIVITIS_PERIODONTITIS: "GINGIVITIS_PERIODONTITIS",

  // Navigation - About Menu
  DR_ALEKSOV: "DR_ALEKSOV",
  DR_DOGANOVA: "DR_DOGANOVA",

  // Team Pages
  LECTURER: "LECTURER",
  DIPLOMAS_AND_CERTIFICATES: "DIPLOMAS_AND_CERTIFICATES",
  EDUCATION_AND_CERTIFICATES: "EDUCATION_AND_CERTIFICATES",
  PHILOSOPHY: "PHILOSOPHY",
  DR_ALEKSOV_INTRO_HEADING: "DR_ALEKSOV_INTRO_HEADING",
  DR_ALEKSOV_BIO_PARA_1: "DR_ALEKSOV_BIO_PARA_1",
  DR_ALEKSOV_BIO_PARA_2: "DR_ALEKSOV_BIO_PARA_2",
  DR_ALEKSOV_BIO_PARA_3: "DR_ALEKSOV_BIO_PARA_3",
  DR_ALEKSOV_PHILOSOPHY_PARA_1: "DR_ALEKSOV_PHILOSOPHY_PARA_1",
  DR_ALEKSOV_PHILOSOPHY_PARA_2: "DR_ALEKSOV_PHILOSOPHY_PARA_2",
  DR_DOGANOVA_INTRO_HEADING: "DR_DOGANOVA_INTRO_HEADING",
  DR_DOGANOVA_BIO_PARA_1: "DR_DOGANOVA_BIO_PARA_1",
  DR_DOGANOVA_BIO_PARA_2: "DR_DOGANOVA_BIO_PARA_2",

  // UI Text
  READ_MORE: "READ_MORE",
  BACK_TO: "BACK_TO",
  PUBLISHED_ON: "PUBLISHED_ON",
  BY: "BY",
  BOOK_APPOINTMENT: "BOOK_APPOINTMENT",
  LANGUAGE_SWITCHER: "LANGUAGE_SWITCHER",
  ABOUT_PREFIX: "ABOUT_PREFIX",

  // Footer
  FOOTER_TAGLINE: "FOOTER_TAGLINE",
  WORKING_HOURS: "WORKING_HOURS",
  FOLLOW_US: "FOLLOW_US",
  COPYRIGHT: "COPYRIGHT",
  TERMS_AND_CONDITIONS: "TERMS_AND_CONDITIONS",
  PRIVACY_POLICY: "PRIVACY_POLICY",

  // Services Section
  TO_SERVICE: "TO_SERVICE",
  MORE_SERVICES_FROM: "MORE_SERVICES_FROM",
  OUR_SERVICES: "OUR_SERVICES",
  SEE_ALL: "SEE_ALL",

  // Gallery
  CLOSE: "CLOSE",
  PREVIOUS_IMAGE: "PREVIOUS_IMAGE",
  NEXT_IMAGE: "NEXT_IMAGE",

  // Services Page
  SERVICES_PAGE_TITLE: "SERVICES_PAGE_TITLE",
  SERVICES_PAGE_DESCRIPTION: "SERVICES_PAGE_DESCRIPTION",
  SERVICES_PAGE_META_DESCRIPTION: "SERVICES_PAGE_META_DESCRIPTION",

  // Blog Page
  BLOG_PAGE_TITLE: "BLOG_PAGE_TITLE",
  BLOG_PAGE_DESCRIPTION: "BLOG_PAGE_DESCRIPTION",
  BLOG_PAGE_META_DESCRIPTION: "BLOG_PAGE_META_DESCRIPTION",
  AESTHETICS_TITLE: "AESTHETICS_TITLE",
  AESTHETICS_DESCRIPTION: "AESTHETICS_DESCRIPTION",
  AESTHETICS_BUTTON: "AESTHETICS_BUTTON",
  SURGERY_TITLE: "SURGERY_TITLE",
  SURGERY_DESCRIPTION: "SURGERY_DESCRIPTION",
  SURGERY_BUTTON: "SURGERY_BUTTON",
  PROSTHETICS_TITLE: "PROSTHETICS_TITLE",
  PROSTHETICS_DESCRIPTION: "PROSTHETICS_DESCRIPTION",
  PROSTHETICS_BUTTON: "PROSTHETICS_BUTTON",
  CONSERVATIVE_THERAPY_TITLE: "CONSERVATIVE_THERAPY_TITLE",
  CONSERVATIVE_THERAPY_DESCRIPTION: "CONSERVATIVE_THERAPY_DESCRIPTION",
  CONSERVATIVE_THERAPY_BUTTON: "CONSERVATIVE_THERAPY_BUTTON",
  ALIGNERS_TITLE: "ALIGNERS_TITLE",
  ALIGNERS_DESCRIPTION: "ALIGNERS_DESCRIPTION",
  ALIGNERS_BUTTON: "ALIGNERS_BUTTON",
  EMERGENCY_CARE_TITLE: "EMERGENCY_CARE_TITLE",
  EMERGENCY_CARE_DESCRIPTION: "EMERGENCY_CARE_DESCRIPTION",
  EMERGENCY_CARE_BUTTON: "EMERGENCY_CARE_BUTTON",
} as const;

export const translations = {
  bg: {
    // Navigation
    [TK.HOME]: "Начало",
    [TK.SERVICES]: "Услуги",
    [TK.TEAM]: "Екип",
    [TK.BLOG]: "Блог",
    [TK.ABOUT]: "За нас",
    [TK.CONTACT]: "Контакти",
    [TK.GALLERY]: "Галерия",
    [TK.ALL_SERVICES]: "Всички услуги",
    [TK.CATEGORIES]: "Категории",

    // Navigation - Services Categories
    [TK.AESTHETIC_DENTAL_MEDICINE]: "Естетична дентална медицина",
    [TK.SURGERY]: "Хирургия",
    [TK.PROSTHETICS]: "Протетика",
    [TK.CONSERVATIVE_THERAPY]: "Консервативна терапия",
    [TK.ALIGNERS]: "Алайнери",
    [TK.EMERGENCY_DENTAL_CARE]: "Спешна дентална помощ",

    // Navigation - Services Subcategories (Aesthetics)
    [TK.VENEERS]: "Фасети",
    [TK.BONDING]: "Bonding",
    [TK.DIGITAL_SMILE_DESIGN]: "Digital Smile Design",
    [TK.TEETH_WHITENING]: "Избелване на зъбите",

    // Navigation - Services Subcategories (Surgery)
    [TK.DENTAL_IMPLANTS]: "Дентални импланти",
    [TK.EXTRACTIONS]: "Екстракции",
    [TK.RECESSION_COVERAGE]: "Покриване на рецесии",
    [TK.GUM_CONTOURING]: "Оформяне на венеца",

    // Navigation - Services Subcategories (Prosthetics)
    [TK.CROWNS]: "Коронки",
    [TK.BRIDGES]: "Мостове",
    [TK.INLAY_ONLAY]: "Inlay и Onlay",
    [TK.DENTURES]: "Протези",
    [TK.FUNCTIONAL_REHABILITATION]: "Функционална рехабилитация",
    [TK.BRUXISM_SPLINTS]: "Шини за бруксисти",

    // Navigation - Services Subcategories (Conservative)
    [TK.FILLINGS]: "Обтурации",
    [TK.ROOT_CANAL]: "Кореново лечение",
    [TK.PROFESSIONAL_CLEANING]: "Професионално почистване и профилактика",
    [TK.GINGIVITIS_PERIODONTITIS]: "Гингивит, пародонтит",

    // Navigation - About Menu
    [TK.DR_ALEKSOV]: "Д-р Алексов",
    [TK.DR_DOGANOVA]: "Д-р Доганова",

    // Team Pages
    [TK.LECTURER]: "Лектор:",
    [TK.DIPLOMAS_AND_CERTIFICATES]: "Дипломи и сертификати",
    [TK.EDUCATION_AND_CERTIFICATES]: "Образование и сертификати",
    [TK.PHILOSOPHY]: "Философия",
    [TK.DR_ALEKSOV_INTRO_HEADING]: "Здравейте! Аз съм Александър Алексов.",
    [TK.DR_ALEKSOV_BIO_PARA_1]:
      "Целия си професионален опит съм събрал в Германия. Преди това завърших в Хайнрих Хайне университет- Дюселдорф, а много преди това- немската гимназия в София. Въпреки преобладаващото немско влияние в моя живот смятам, че още не съм загубил напълно чувството си за хумор. Нещо повече- научен съм да ценя качеството и да го прилагам в своята работа.",
    [TK.DR_ALEKSOV_BIO_PARA_2]:
      "След дипломирането си работих като общопрактикуващ зъболекар в гъсто населен регион, което ми позволи да се докосна до всички сфери на денталната медицина. Е, най-удовлетворен оставах след завършването на сложни хирургически, естетически, или възстановителни случаи… или трите в едно. Затова и започнах активно да се развивам в тази посока и успях да го превърна в своя практика.",
    [TK.DR_ALEKSOV_BIO_PARA_3]:
      "Посещавал съм, и продължавам да го правя, редица теоретично-практически курсове и се уча от най- добрите. Някои от тях можете да видите по-долу. Любовта към родината и чичовата клиника бяха причината да се върна в България и да поема Минт. Ще се радвам да се видим там на по чаша ментов чай.",
    [TK.DR_ALEKSOV_PHILOSOPHY_PARA_1]:
      'Дълго време в Германия работих по "западния" модел. В много от държавите на запад здравната каса покрива голяма част от сумата за лечението. Следователно денталните практики залагат на високия поток на пациенти, тъй като това е най-доходоносно, а пациентите не възразяват, защото им е евтино. За съжаление обаче, това понякога води до недостатъчно обстойни прегледи, немарливо извършени лечения, или избор на неподходяща терапия. Виждал съм всичко. Въпреки че бързата работа се приема добре от пациентите, които искат да си тръгнат възможно най- бързо от кабинета, тя крие рискове.',
    [TK.DR_ALEKSOV_PHILOSOPHY_PARA_2]:
      "Идеята на Минт е различна. Да, можем да работим бързо, но много повече ценим сигурните резултати. Всеки може да препарира зъб за 15 минути и да циментира коронка отгоре. А какво ще се случи с този зъб след 5 години? Предпочитам да отделя още 15 минути, за да изпипам детайлите. И няма да забравя как една колежка се изненада, след като отделих час и половина за първична консултация с пациент. Тези неща са важни, ако искаш работата ти да е прецизна. А аз искам!",
    [TK.DR_DOGANOVA_INTRO_HEADING]: "Здравейте и от мен!",
    [TK.DR_DOGANOVA_BIO_PARA_1]:
      "Аз съм д-р Ивета Доганова, зъболекар, който вярва, че всеки пациент заслужава най-добрата грижа. Завърших Американския колеж в София, а след това продължих обучението си в Германия, в Universität zu Köln. Там се дипломирах с отличие, като придобих не само ценни знания и умения в областта на стоматологията, но и се запознах отблизо с немската култура. Опитът ми в Германия ми даде допълнителна перспектива и до голяма степен оформи подхода ми към работата.",
    [TK.DR_DOGANOVA_BIO_PARA_2]:
      "Днес съм отново в София като част от екипа на Минт Клиник, къде то имам възможността да отделям нужното време на пациентите си и да работя с внимание към самите тях и към детайла. Стремя се да осигуря индивидуална грижа и комфорт, за да може всеки пациент да се чувства спокоен и в сигурни ръце. Най-ценното за мен е да виждам пациентите си доволни и уверени в усмивките си.",

    // UI Text
    [TK.READ_MORE]: "Прочети повече",
    [TK.BACK_TO]: "Обратно към",
    [TK.PUBLISHED_ON]: "Публикувано на",
    [TK.BY]: "от",
    [TK.BOOK_APPOINTMENT]: "Запази час",
    [TK.LANGUAGE_SWITCHER]: "Language / Език",
    [TK.ABOUT_PREFIX]: "За",

    // Footer
    [TK.FOOTER_TAGLINE]:
      "Усмивката е нашето вдъхновение, а вашето здраве – наш приоритет. Доверете се на нашата професионална грижа за вашите зъби.",
    [TK.WORKING_HOURS]: "Пон - Пет, 09:00 - 18:00",
    [TK.FOLLOW_US]: "Последвай ни",
    [TK.COPYRIGHT]: "© 2024 Mint Clinic. Всички права са запазени.",
    [TK.TERMS_AND_CONDITIONS]: "Общи Условия",
    [TK.PRIVACY_POLICY]: "Политика за поверителност",

    // Services Section
    [TK.TO_SERVICE]: "Към услугата",
    [TK.MORE_SERVICES_FROM]: "Още услуги от",
    [TK.OUR_SERVICES]: "Нашите услуги",
    [TK.SEE_ALL]: "Виж всички",

    // Gallery
    [TK.CLOSE]: "Затвори",
    [TK.PREVIOUS_IMAGE]: "Предишна снимка",
    [TK.NEXT_IMAGE]: "Следваща снимка",

    // Services Page
    [TK.SERVICES_PAGE_TITLE]: "Услуги",
    [TK.SERVICES_PAGE_DESCRIPTION]:
      "Широка гама от стоматологични услуги с индивидуален подход и фокус върху вашето орално здраве.",
    [TK.SERVICES_PAGE_META_DESCRIPTION]:
      "Комплексна грижа за вашата усмивка. Естетична стоматология, хирургия, протетика, консервативна терапия, алайнери и спешна дентална помощ.",

    // Blog Page
    [TK.BLOG_PAGE_TITLE]: "Нашият блог",
    [TK.BLOG_PAGE_DESCRIPTION]:
      "Открийте последните новини, съвети и статии за дентална грижа и здраве.",
    [TK.BLOG_PAGE_META_DESCRIPTION]:
      "Прочетете нашите статии за дентално здраве, съвети за грижа за зъбите и последни новини от света на стоматологията.",
    [TK.AESTHETICS_TITLE]: "Естетика",
    [TK.AESTHETICS_DESCRIPTION]:
      "Тук се нареждат процедурите, чието предназначение е преди всичко да подобрят цвета, формата, хармонията на зъбите. Абе… естетиката. За всеки този термин олицетворява нещо различно. Някои харесват изкрящо бели усмивки, други предпочитат по-дискретна визия. Каквото и да харесвате вие, ние имаме една задача - да направим новата усмивка истински ваша.",
    [TK.AESTHETICS_BUTTON]: "Естетични услуги",
    [TK.SURGERY_TITLE]: "Хирургия",
    [TK.SURGERY_DESCRIPTION]:
      "Вадене на зъби, поставяне на импланти и всички процедури, свързани с манипулация на меките тъкани спадат към тази категория. Но не оставяйте думата 'хирургия' да ви плаши. В условията, които предоставяме в нашата клиника, вашата задача ще е само да лежите и да държите отворено.",
    [TK.SURGERY_BUTTON]: "Хирургични услуги",
    [TK.PROSTHETICS_TITLE]: "Протетика",
    [TK.PROSTHETICS_DESCRIPTION]:
      "Всички лечения, изискващи зъботехническа намеса, са част от протетиката. Коронки, мостове, протези… можем тривиално да кажем, че протетиката е дялът от стоматологията, който се занимава с видимата част на зъбите. Тъй като целим перфектни функция и естетика във всяко лечение, другите дисциплини, като например хирургията, се водят основно по планираната протетична реконструкция.",
    [TK.PROSTHETICS_BUTTON]: "Протетични услуги",
    [TK.CONSERVATIVE_THERAPY_TITLE]: "Консервативна терапия",
    [TK.CONSERVATIVE_THERAPY_DESCRIPTION]:
      "Най-малкият дял, с може би най-голямо значение. Консервативната терапия е основата за успешното лечение. То цели отстраняването на всякакви заболявания в устата: от кариес, през пулпит, до възпаление на венците. Съответно тук ще намерите услуги като обтурация (пломба), кореново лечение, професионално почистване.",
    [TK.CONSERVATIVE_THERAPY_BUTTON]: "Консервативна терапия",
    [TK.ALIGNERS_TITLE]: "Алайнери",
    [TK.ALIGNERS_DESCRIPTION]:
      "Ортодонтска интервенция в собствена категория. Засега ние предлагаме наместване на зъбите единствено с алайнери, тъй като в нашия опит те са показали, че покриват почти всички случаи, и то много успешно!",
    [TK.ALIGNERS_BUTTON]: "Алайнери",
    [TK.EMERGENCY_CARE_TITLE]: "Спешна дентална помощ",
    [TK.EMERGENCY_CARE_DESCRIPTION]:
      "При внезапна болка, або подуване - звъннете на 0888 436 838. Ние ще ви вместим веднага в графика!",
    [TK.EMERGENCY_CARE_BUTTON]: "Спешна дентална помощ",
  },
  en: {
    // Navigation
    [TK.HOME]: "Home",
    [TK.SERVICES]: "Services",
    [TK.TEAM]: "Team",
    [TK.BLOG]: "Blog",
    [TK.ABOUT]: "About Us",
    [TK.CONTACT]: "Contact",
    [TK.GALLERY]: "Gallery",
    [TK.ALL_SERVICES]: "All Services",
    [TK.CATEGORIES]: "Categories",

    // Navigation - Services Categories
    [TK.AESTHETIC_DENTAL_MEDICINE]: "Aesthetic Dental Medicine",
    [TK.SURGERY]: "Surgery",
    [TK.PROSTHETICS]: "Prosthetics",
    [TK.CONSERVATIVE_THERAPY]: "Conservative Therapy",
    [TK.ALIGNERS]: "Aligners",
    [TK.EMERGENCY_DENTAL_CARE]: "Emergency Dental Care",

    // Navigation - Services Subcategories (Aesthetics)
    [TK.VENEERS]: "Veneers",
    [TK.BONDING]: "Bonding",
    [TK.DIGITAL_SMILE_DESIGN]: "Digital Smile Design",
    [TK.TEETH_WHITENING]: "Teeth Whitening",

    // Navigation - Services Subcategories (Surgery)
    [TK.DENTAL_IMPLANTS]: "Dental Implants",
    [TK.EXTRACTIONS]: "Extractions",
    [TK.RECESSION_COVERAGE]: "Recession Coverage",
    [TK.GUM_CONTOURING]: "Gum Contouring",

    // Navigation - Services Subcategories (Prosthetics)
    [TK.CROWNS]: "Crowns",
    [TK.BRIDGES]: "Bridges",
    [TK.INLAY_ONLAY]: "Inlay & Onlay",
    [TK.DENTURES]: "Dentures",
    [TK.FUNCTIONAL_REHABILITATION]: "Functional Rehabilitation",
    [TK.BRUXISM_SPLINTS]: "Bruxism Splints",

    // Navigation - Services Subcategories (Conservative)
    [TK.FILLINGS]: "Fillings",
    [TK.ROOT_CANAL]: "Root Canal Treatment",
    [TK.PROFESSIONAL_CLEANING]: "Professional Cleaning & Prevention",
    [TK.GINGIVITIS_PERIODONTITIS]: "Gingivitis, Periodontitis",

    // Navigation - About Menu
    [TK.DR_ALEKSOV]: "Dr. Aleksov",
    [TK.DR_DOGANOVA]: "Dr. Doganova",

    // Team Pages
    [TK.LECTURER]: "Lecturer:",
    [TK.DIPLOMAS_AND_CERTIFICATES]: "Diplomas and Certificates",
    [TK.EDUCATION_AND_CERTIFICATES]: "Education and Certificates",
    [TK.PHILOSOPHY]: "Philosophy",
    [TK.DR_ALEKSOV_INTRO_HEADING]: "Hello! I'm Aleksandar Aleksov.",
    [TK.DR_ALEKSOV_BIO_PARA_1]:
      "I gathered all my professional experience in Germany. Before that, I graduated from Heinrich Heine University in Düsseldorf, and long before that, from the German High School in Sofia. Despite the predominant German influence in my life, I believe I haven't completely lost my sense of humor yet. Moreover, I've learned to value quality and apply it in my work.",
    [TK.DR_ALEKSOV_BIO_PARA_2]:
      "After graduating, I worked as a general practitioner in a densely populated region, which allowed me to touch upon all spheres of dental medicine. Well, I was most satisfied after completing complex surgical, aesthetic, or restorative cases… or all three in one. That's why I actively started developing in this direction and managed to turn it into my practice.",
    [TK.DR_ALEKSOV_BIO_PARA_3]:
      "I have attended, and continue to attend, numerous theoretical and practical courses and learn from the best. You can see some of them below. Love for my homeland and my uncle's clinic were the reasons I returned to Bulgaria to take over Mint. I'll be happy to see you there over a cup of mint tea.",
    [TK.DR_ALEKSOV_PHILOSOPHY_PARA_1]:
      "For a long time in Germany, I worked according to the \"Western\" model. In many Western countries, health insurance covers a large part of the treatment cost. Consequently, dental practices rely on high patient flow, as this is most profitable, and patients don't object because it's cheap for them. Unfortunately, however, this sometimes leads to insufficiently thorough examinations, carelessly performed treatments, or choosing inappropriate therapy. I've seen it all. Although fast work is well received by patients who want to leave the office as quickly as possible, it carries risks.",
    [TK.DR_ALEKSOV_PHILOSOPHY_PARA_2]:
      "Mint's idea is different. Yes, we can work fast, but we value reliable results much more. Anyone can prepare a tooth in 15 minutes and cement a crown on top. But what will happen to that tooth in 5 years? I prefer to spend another 15 minutes to perfect the details. And I won't forget how a colleague was surprised after I spent an hour and a half on an initial consultation with a patient. These things are important if you want your work to be precise. And I do!",
    [TK.DR_DOGANOVA_INTRO_HEADING]: "Hello from me too!",
    [TK.DR_DOGANOVA_BIO_PARA_1]:
      "I'm Dr. Iveta Doganova, a dentist who believes that every patient deserves the best care. I graduated from the American College in Sofia, and then continued my education in Germany at Universität zu Köln. There I graduated with honors, gaining not only valuable knowledge and skills in dentistry, but also becoming closely acquainted with German culture. My experience in Germany gave me an additional perspective and largely shaped my approach to work.",
    [TK.DR_DOGANOVA_BIO_PARA_2]:
      "Today I'm back in Sofia as part of the Mint Clinic team, where I have the opportunity to devote the necessary time to my patients and work with attention to both them and the details. I strive to provide individual care and comfort so that each patient can feel calm and in safe hands. The most valuable thing for me is to see my patients satisfied and confident in their smiles.",

    // UI Text
    [TK.READ_MORE]: "Read more",
    [TK.BACK_TO]: "Back to",
    [TK.PUBLISHED_ON]: "Published on",
    [TK.BY]: "by",
    [TK.BOOK_APPOINTMENT]: "Book Appointment",
    [TK.LANGUAGE_SWITCHER]: "Language / Език",
    [TK.ABOUT_PREFIX]: "About",

    // Footer
    [TK.FOOTER_TAGLINE]:
      "Your smile is our inspiration, and your health is our priority. Trust our professional care for your teeth.",
    [TK.WORKING_HOURS]: "Mon - Fri, 09:00 - 18:00",
    [TK.FOLLOW_US]: "Follow Us",
    [TK.COPYRIGHT]: "© 2024 Mint Clinic. All rights reserved.",
    [TK.TERMS_AND_CONDITIONS]: "Terms & Conditions",
    [TK.PRIVACY_POLICY]: "Privacy Policy",

    // Services Section
    [TK.TO_SERVICE]: "View Service",
    [TK.MORE_SERVICES_FROM]: "More services from",
    [TK.OUR_SERVICES]: "Our Services",
    [TK.SEE_ALL]: "See All",

    // Gallery
    [TK.CLOSE]: "Close",
    [TK.PREVIOUS_IMAGE]: "Previous image",
    [TK.NEXT_IMAGE]: "Next image",

    // Services Page
    [TK.SERVICES_PAGE_TITLE]: "Services",
    [TK.SERVICES_PAGE_DESCRIPTION]:
      "Wide range of dental services with an individual approach and focus on your oral health.",
    [TK.SERVICES_PAGE_META_DESCRIPTION]:
      "Comprehensive care for your smile. Aesthetic dentistry, surgery, prosthetics, conservative therapy, aligners and emergency dental care.",

    // Blog Page
    [TK.BLOG_PAGE_TITLE]: "Our Blog",
    [TK.BLOG_PAGE_DESCRIPTION]:
      "Discover the latest news, tips, and articles about dental care and health.",
    [TK.BLOG_PAGE_META_DESCRIPTION]:
      "Read our articles about dental health, tips for dental care, and the latest news from the world of dentistry.",
    [TK.AESTHETICS_TITLE]: "Aesthetics",
    [TK.AESTHETICS_DESCRIPTION]:
      "These are the procedures whose purpose is primarily to improve the color, shape, and harmony of the teeth. Well... aesthetics. For everyone, this term represents something different. Some like sparkling white smiles, others prefer a more discreet look. Whatever you like, we have one task - to make your new smile truly yours.",
    [TK.AESTHETICS_BUTTON]: "Aesthetic Services",
    [TK.SURGERY_TITLE]: "Surgery",
    [TK.SURGERY_DESCRIPTION]:
      "Tooth extraction, implant placement, and all procedures related to soft tissue manipulation fall into this category. But don't let the word 'surgery' scare you. In the conditions we provide at our clinic, your task will only be to lie down and keep your mouth open.",
    [TK.SURGERY_BUTTON]: "Surgical Services",
    [TK.PROSTHETICS_TITLE]: "Prosthetics",
    [TK.PROSTHETICS_DESCRIPTION]:
      "All treatments requiring dental laboratory intervention are part of prosthetics. Crowns, bridges, dentures... we can trivially say that prosthetics is the part of dentistry that deals with the visible part of the teeth. Since we aim for perfect function and aesthetics in every treatment, other disciplines, such as surgery, are mainly guided by the planned prosthetic reconstruction.",
    [TK.PROSTHETICS_BUTTON]: "Prosthetic Services",
    [TK.CONSERVATIVE_THERAPY_TITLE]: "Conservative Therapy",
    [TK.CONSERVATIVE_THERAPY_DESCRIPTION]:
      "The smallest portion, with perhaps the greatest significance. Conservative therapy is the foundation for successful treatment. It aims to eliminate any diseases in the mouth: from caries, through pulpitis, to gum inflammation. Accordingly, here you will find services such as fillings, root canal treatment, professional cleaning.",
    [TK.CONSERVATIVE_THERAPY_BUTTON]: "Conservative Therapy",
    [TK.ALIGNERS_TITLE]: "Aligners",
    [TK.ALIGNERS_DESCRIPTION]:
      "Orthodontic intervention in its own category. For now, we offer teeth alignment exclusively with aligners, as in our experience they have shown that they cover almost all cases, and very successfully!",
    [TK.ALIGNERS_BUTTON]: "Aligners",
    [TK.EMERGENCY_CARE_TITLE]: "Emergency Dental Care",
    [TK.EMERGENCY_CARE_DESCRIPTION]:
      "In case of sudden pain or swelling - call 0888 436 838. We will fit you in the schedule immediately!",
    [TK.EMERGENCY_CARE_BUTTON]: "Emergency Dental Care",
  },
} as const;

export function getTranslation(
  locale: Locale,
  key: keyof typeof translations.bg,
): string {
  return translations[locale][key];
}

// Re-export useTranslation from the client-only module for convenience
export { useTranslation } from "./useTranslation";
