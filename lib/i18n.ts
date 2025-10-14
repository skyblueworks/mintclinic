"use client";
import { usePathname } from "next/navigation";
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
  },
} as const;

export function getTranslation(
  locale: Locale,
  key: keyof typeof translations.bg,
): string {
  return translations[locale][key];
}

/**
 * Custom hook for translations in client components
 *
 * @example
 * const { t, locale } = useTranslation();
 * <button>{t(TK.BOOK_APPOINTMENT)}</button>
 */
export function useTranslation() {
  const pathname = usePathname();
  const locale = getValidLocale(pathname.split("/")[1]);

  const t = (key: (typeof TK)[keyof typeof TK]) =>
    getTranslation(locale, key as keyof typeof translations.bg);

  return { t, locale };
}
