import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { isValidLocale } from "@/lib/i18n";
import { Navigation } from "@/components/Navigation";
import { client } from "@/sanity/lib/client";
import { categoriesWithServicesListQuery } from "@/sanity/lib/queries";
import "@/app/globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "bg" }, { locale: "en" }];
}

async function getCategories(locale: string) {
  try {
    const result = await client.fetch(categoriesWithServicesListQuery, {
      locale,
    });

    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Fetch categories for navigation
  const categories = await getCategories(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation locale={locale} categories={categories} />
      <main>{children}</main>
    </div>
  );
}
