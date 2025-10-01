export type MDXContent = { code?: { code: string }; raw?: string };

export function getLocalizedMDX(
  content: { bg?: MDXContent; en?: MDXContent } | undefined,
  locale: "bg" | "en" = "bg",
): MDXContent | null {
  if (!content) return null;
  return content[locale] ?? content.bg ?? content.en ?? null;
}
