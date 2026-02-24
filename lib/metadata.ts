import type { Metadata } from "next";
import type { Locale } from "./locale";

const SITE_URL = "https://mintclinic.com";

export function localeAlternates(path: string): Metadata["alternates"] {
  return {
    canonical: path,
    languages: {
      bg: `/bg${path}`,
      en: `/en${path}`,
      "x-default": `/bg${path}`,
    },
  };
}

export function localeOpenGraph(
  title: string,
  description: string,
  path: string,
  locale: Locale,
) {
  return {
    title,
    description,
    url: `${SITE_URL}/${locale}${path}`,
    siteName: "Mint Clinic",
    locale: locale === "bg" ? "bg_BG" : "en_US",
    type: "website" as const,
  };
}
