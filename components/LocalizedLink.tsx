"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type LocalizedLinkProps = ComponentProps<typeof Link>;

/**
 * A wrapper around Next.js Link that automatically prepends the current locale to href
 * Usage: <LocalizedLink href="/about">About</LocalizedLink>
 * Result: Links to /bg/about (or /en/about depending on current locale)
 */
export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  // Extract locale from pathname (e.g., "/bg/page" -> "bg")
  const locale = pathname.split("/")[1] || "bg";

  // Handle both string and object hrefs
  const localizedHref = typeof href === "string" ? `/${locale}${href}` : href;

  return <Link href={localizedHref} {...props} />;
}
