export const locales = ["bg", "en"] as const;
export const defaultLocale = "bg" as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const translations = {
  bg: {
    home: "Начало",
    services: "Услуги",
    team: "Екип",
    blog: "Блог",
    about: "За нас",
    contact: "Контакти",
    gallery: "Галерия",
    allServices: "Всички услуги",
    categories: "Категории",
    readMore: "Прочети повече",
    backTo: "Обратно към",
    publishedOn: "Публикувано на",
    by: "от",
  },
  en: {
    home: "Home",
    services: "Services",
    team: "Team",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    gallery: "Gallery",
    allServices: "All Services",
    categories: "Categories",
    readMore: "Read more",
    backTo: "Back to",
    publishedOn: "Published on",
    by: "by",
  },
} as const;

export function getTranslation(locale: Locale, key: keyof typeof translations.bg): string {
  return translations[locale][key];
}