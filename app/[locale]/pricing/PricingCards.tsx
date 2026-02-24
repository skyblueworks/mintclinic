"use client";

import {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Fuse from "fuse.js";
import { motion } from "motion/react";
import {
  fadeInVariants,
  fadeInTransition,
  fadeInViewport,
} from "@/lib/animations";
import { useTranslation } from "@/lib/i18n";
import {
  Stethoscope,
  Shield,
  Heart,
  Sun,
  Crown,
  Activity,
  Scissors,
  Zap,
  CircleDot,
  HeartPulse,
  Smile,
  AlignCenter,
  Info,
  Search,
  X,
  type LucideIcon,
} from "lucide-react";
import type { I18nText, PricingCategory } from "./pricing-data";

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Shield,
  Heart,
  Sun,
  Crown,
  Activity,
  Scissors,
  Zap,
  CircleDot,
  HeartPulse,
  Smile,
  AlignCenter,
};

// ── Bulgarian ↔ Latin transliteration ────────────────────────────────────────

const CYR_TO_LAT: [string, string][] = [
  ["щ", "sht"],
  ["ш", "sh"],
  ["ч", "ch"],
  ["ц", "ts"],
  ["ж", "zh"],
  ["ю", "yu"],
  ["я", "ya"],
  ["ьо", "yo"],
  ["а", "a"],
  ["б", "b"],
  ["в", "v"],
  ["г", "g"],
  ["д", "d"],
  ["е", "e"],
  ["з", "z"],
  ["и", "i"],
  ["й", "y"],
  ["к", "k"],
  ["л", "l"],
  ["м", "m"],
  ["н", "n"],
  ["о", "o"],
  ["п", "p"],
  ["р", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "u"],
  ["ф", "f"],
  ["х", "h"],
  ["ъ", "a"],
  ["ь", "y"],
];

const LAT_TO_CYR: [string, string][] = [
  ["sht", "щ"],
  ["sh", "ш"],
  ["ch", "ч"],
  ["ts", "ц"],
  ["zh", "ж"],
  ["yu", "ю"],
  ["ya", "я"],
  ["yo", "ьо"],
  ["a", "а"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["e", "е"],
  ["z", "з"],
  ["i", "и"],
  ["y", "й"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["f", "ф"],
  ["h", "х"],
  ["x", "кс"],
];

function transliterate(text: string, map: [string, string][]): string {
  let result = text.toLowerCase();
  for (const [from, to] of map) {
    result = result.replaceAll(from, to);
  }
  return result;
}

function cyrToLat(s: string): string {
  return transliterate(s, CYR_TO_LAT);
}

function latToCyr(s: string): string {
  return transliterate(s, LAT_TO_CYR);
}

function toAnchorSlug(text: string): string {
  return `cat-${text.toLowerCase().replace(/\s+/g, "-")}`;
}

// ── Component ────────────────────────────────────────────────────────────────

interface PricingCardsProps {
  categories: PricingCategory[];
  noteText: string;
  filterPlaceholder: string;
}

type MatchIndices = [number, number][];

export default function PricingCards({
  categories,
  noteText,
  filterPlaceholder,
}: PricingCardsProps) {
  const { locale } = useTranslation();
  const localized = (text: I18nText): string => text[locale];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState(searchParams.get("q") ?? "");

  // Sync filter to ?q= query param (debounced)
  const updateQueryParam = useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search);
      if (value.trim()) {
        params.set("q", value.trim());
      } else {
        params.delete("q");
      }
      const qs = params.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [router, pathname],
  );

  useEffect(() => {
    const timeout = setTimeout(() => updateQueryParam(filter), 300);
    return () => clearTimeout(timeout);
  }, [filter, updateQueryParam]);

  // Flatten all items with category ref + transliterated fields for Fuse index
  const flatItems = useMemo(
    () =>
      categories.flatMap((cat) =>
        cat.items.map((item) => ({
          ...item,
          catTitleBg: cat.title.bg,
          catTitleEn: cat.title.en,
          catIcon: cat.icon,
          nameBgLat: cyrToLat(item.name.bg),
          nameEnCyr: latToCyr(item.name.en),
          catTitleBgLat: cyrToLat(cat.title.bg),
          catTitleEnCyr: latToCyr(cat.title.en),
        })),
      ),
    [categories],
  );

  const fuse = useMemo(
    () =>
      new Fuse(flatItems, {
        keys: [
          "name.bg",
          "name.en",
          "catTitleBg",
          "catTitleEn",
          "nameBgLat",
          "nameEnCyr",
          "catTitleBgLat",
          "catTitleEnCyr",
        ],
        threshold: 0.3,
        ignoreLocation: true,
        includeMatches: true,
        minMatchCharLength: 2,
        findAllMatches: true,
      }),
    [flatItems],
  );

  // Mutable map for match indices — useRef since it's mutated inside useMemo
  const matchMapRef = useRef(new Map<string, MatchIndices>());

  const filtered = useMemo(() => {
    const q = filter.trim();
    matchMapRef.current.clear();
    if (!q) return categories;

    const results = fuse.search(q);
    const grouped = new Map<string, PricingCategory>();

    for (const { item, matches } of results) {
      const key = item.catTitleBg;
      if (!grouped.has(key)) {
        const original = categories.find((c) => c.title.bg === key)!;
        grouped.set(key, { ...original, items: [] });
      }
      grouped.get(key)!.items.push(item);

      // Only store highlight indices from direct (non-transliterated) matches
      // Cross-script indices can't map back to original text due to
      // multi-char mappings (e.g. "щ" → "sht")
      if (matches) {
        const nameKey = locale === "bg" ? "name.bg" : "name.en";
        const nameMatch = matches.find((m) => m.key === nameKey);
        if (nameMatch?.indices) {
          matchMapRef.current.set(
            item.name.bg,
            nameMatch.indices as MatchIndices,
          );
        }
      }
    }
    return Array.from(grouped.values());
  }, [filter, categories, fuse, locale]);

  /** Highlight matched character ranges in text */
  function highlightText(text: string, itemKey: string): ReactNode {
    const indices = matchMapRef.current.get(itemKey);
    if (!indices || indices.length === 0) return text;

    const parts: ReactNode[] = [];
    let lastEnd = 0;
    const sorted = [...indices].sort((a, b) => a[0] - b[0]);

    for (const [start, end] of sorted) {
      if (start > lastEnd) {
        parts.push(text.slice(lastEnd, start));
      }
      parts.push(
        <mark key={start} className="bg-accent/25 !p-0 text-inherit">
          {text.slice(start, end + 1)}
        </mark>,
      );
      lastEnd = end + 1;
    }
    if (lastEnd < text.length) {
      parts.push(text.slice(lastEnd));
    }
    return parts;
  }

  return (
    <div className="space-y-5">
      {/* Quick-nav + filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <a
              key={cat.title.bg}
              href={`#${toAnchorSlug(cat.title.en)}`}
              className="rounded-full border border-primary/15 bg-white px-3 py-1 font-dm-sans text-xs text-primary/70 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              {localized(cat.title)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 shadow-sm transition-all focus-within:border-primary/40 focus-within:shadow-md focus-within:shadow-primary/10">
          <Search className="h-3.5 w-3.5 flex-shrink-0 text-primary/50" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={filterPlaceholder}
            aria-label={filterPlaceholder}
            className="w-32 bg-transparent font-dm-sans text-sm text-foreground/80 placeholder:text-foreground/30 focus:outline-none md:w-44"
          />
          {filter && (
            <button
              onClick={() => setFilter("")}
              aria-label={localized({
                bg: "Изчисти търсенето",
                en: "Clear search",
              })}
              className="text-foreground/40 transition-colors hover:text-foreground/70"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Cards */}
      {filtered.map((category) => {
        const Icon = ICON_MAP[category.icon] ?? Stethoscope;

        return (
          <div
            key={category.title.bg}
            id={toAnchorSlug(category.title.en)}
            className="scroll-mt-24 overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none bg-white shadow-md shadow-primary/5"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 bg-primary px-4 py-2">
              <Icon className="h-3.5 w-3.5 flex-shrink-0 text-white/80" />
              <h2 className="!m-0 !text-sm !font-medium !tracking-wide text-white">
                {localized(category.title)}
              </h2>
            </div>

            {/* Items */}
            <div className="divide-y divide-primary/5">
              {category.items.map((item, itemIdx) => {
                const name = localized(item.name);
                const displayName = filter.trim()
                  ? highlightText(name, item.name.bg)
                  : name;

                return (
                  <div
                    key={item.name.bg}
                    className={`flex items-center justify-between gap-4 px-5 py-2.5 font-dm-sans ${
                      itemIdx % 2 === 1 ? "bg-primary/[3%]" : ""
                    }`}
                  >
                    <span className="text-[13px] leading-snug text-foreground/80 md:text-sm">
                      {displayName}
                    </span>
                    <span className="flex-shrink-0 text-right text-[13px] font-medium text-primary md:text-sm">
                      {item.priceEur}
                      <span className="ml-1.5 text-[12px] text-foreground/60 md:text-xs">
                        / {item.priceBgn}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p className="py-12 text-center font-dm-sans text-sm text-foreground/50">
          {localized({
            bg: "Няма намерени услуги.",
            en: "No services found.",
          })}
        </p>
      )}

      {/* Disclaimer note */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={fadeInViewport}
        transition={fadeInTransition}
        className="mt-8 flex items-start gap-2.5 rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-primary/5 px-5 py-4"
      >
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60" />
        <p className="font-dm-sans text-xs leading-relaxed text-foreground/70">
          {noteText}
        </p>
      </motion.div>
    </div>
  );
}
