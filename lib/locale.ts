/**
 * Locale Configuration
 *
 * Centralized locale management for the application.
 * Use this to ensure type safety across all locale-dependent components.
 */

export const LOCALES = {
  BG: "bg",
  EN: "en",
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE: Locale = LOCALES.BG;

export const SUPPORTED_LOCALES: Locale[] = [LOCALES.BG, LOCALES.EN];

/**
 * Type guard to check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Get a valid locale from a string, or return default
 */
export function getValidLocale(locale: string | undefined): Locale {
  if (!locale) return DEFAULT_LOCALE;
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}

/**
 * Bilingual content structure
 */
export type BilingualContent<T = string> = {
  [K in Locale]: T;
};

/**
 * Helper to get localized value from bilingual content
 */
export function getLocalizedValue<T>(
  content: BilingualContent<T>,
  locale: Locale,
): T {
  return content[locale];
}
