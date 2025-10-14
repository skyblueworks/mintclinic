export type MDXContent = { code?: { code: string }; raw?: string };

export function getLocalizedMDX(
  content: { bg?: MDXContent; en?: MDXContent } | undefined,
  locale: "bg" | "en" = "bg",
): MDXContent | null {
  if (!content) return null;
  return content[locale] ?? content.bg ?? content.en ?? null;
}

/**
 * Extract localized string from multi-language object
 * Falls back to Bulgarian if the requested locale is not available
 *
 * @param obj - Object with bg and en properties
 * @param locale - Requested locale
 * @param fallback - Default value if object is undefined
 * @returns Localized string or fallback
 */
export function getLocalizedString(
  obj: { bg: string; en: string } | undefined,
  locale: string,
  fallback = "",
): string {
  if (!obj) return fallback;
  return obj[locale as "bg" | "en"] || obj.bg || fallback;
}

/**
 * Build service URL based on available data
 * Constructs URL in format: /{locale}/uslugi/{category}/{service}
 *
 * @param locale - Current locale (bg/en)
 * @param serviceSlug - Service slug
 * @param categorySlug - Category slug (from prop or service data)
 * @returns Complete service URL
 */
export function getServiceUrl(
  locale: string,
  serviceSlug: string,
  categorySlug?: string,
): string {
  if (!categorySlug) {
    console.warn(
      `getServiceUrl: Missing category slug for service "${serviceSlug}"`,
    );
  }
  return `/${locale}/uslugi/${categorySlug}/${serviceSlug}`;
}
