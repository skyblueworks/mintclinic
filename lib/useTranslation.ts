"use client";

import { usePathname } from "next/navigation";
import { getValidLocale } from "./locale";
import { getTranslation, TK } from "./i18n";

/**
 * Custom hook for translations in client components
 * Replaces the 4-line boilerplate with a single line
 *
 * @example
 * const { t, locale } = useTranslation();
 * <button>{t(TK.BOOK_APPOINTMENT)}</button>
 */
export function useTranslation() {
  const pathname = usePathname();
  const locale = getValidLocale(pathname.split("/")[1]);

  const t = (key: (typeof TK)[keyof typeof TK]) =>
    getTranslation(
      locale,
      key as keyof typeof import("./i18n").translations.bg,
    );

  return { t, locale };
}
