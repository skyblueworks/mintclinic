"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavCategory = {
  slug: string;
  title: string;
  services: Array<{ slug: string; title: string }>;
};

type NavigationProps = {
  locale: string;
  categories?: Array<NavCategory>;
};

export function Navigation({ locale, categories = [] }: NavigationProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  const switchLocale = () => {
    const newLocale = locale === "bg" ? "en" : "bg";
    const newPath =
      pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;
    return newPath;
  };

  const mainLinks = [
    { href: `/${locale}`, label: locale === "bg" ? "Начало" : "Home" },
    {
      href: `/${locale}/services`,
      label: locale === "bg" ? "Услуги" : "Services",
    },
    { href: `/${locale}/team`, label: locale === "bg" ? "Екип" : "Team" },
    { href: `/${locale}/blog`, label: locale === "bg" ? "Блог" : "Blog" },
    {
      href: `/${locale}/about-us`,
      label: locale === "bg" ? "За нас" : "About Us",
    },
    {
      href: `/${locale}/contact`,
      label: locale === "bg" ? "Контакти" : "Contact",
    },
    {
      href: `/${locale}/gallery`,
      label: locale === "bg" ? "Галерия" : "Gallery",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-xl font-bold text-blue-600">
            Mint Clinic
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            {categories.length > 0 && (
              <div className="group relative">
                <button className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  {locale === "bg" ? "Категории" : "Categories"}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-0 mt-2 w-56 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {categories.map((cat) => (
                    <div key={cat.slug} className="group relative">
                      <Link href={`/${locale}/services/${cat.slug}`}>
                        {cat.title}
                      </Link>
                      <div className="absolute left-full top-0 z-50 ml-2 hidden min-w-48 rounded-md border border-gray-200 bg-white shadow-lg group-hover:block">
                        {cat.services &&
                          cat.services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/${locale}/services/${cat.slug}/${s.slug}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {s.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Locale Switcher */}
          <div className="flex items-center space-x-4">
            <Link
              href={switchLocale()}
              className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium transition-colors hover:bg-gray-50"
            >
              {locale === "bg" ? "EN" : "BG"}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Categories */}
            {categories.length > 0 && (
              <>
                <div className="px-3 py-2 text-sm font-semibold text-gray-500">
                  {locale === "bg" ? "Категории" : "Categories"}
                </div>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${locale}/services/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {cat.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
