/**
 * Shared type definitions for services and categories
 * Used across the application for type safety
 */

export interface Service {
  _id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
  excerpt?: {
    bg: string;
    en: string;
  };
  category?: {
    slug: string;
    title: {
      bg: string;
      en: string;
    };
  };
}

export interface Category {
  _id: string;
  slug: string;
  title: {
    bg: string;
    en: string;
  };
  excerpt?: {
    bg: string;
    en: string;
  };
  content: string;
}
