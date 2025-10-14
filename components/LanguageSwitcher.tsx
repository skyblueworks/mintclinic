"use client";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "footer" | "mobile";
}

export default function LanguageSwitcher({
  className,
  variant = "footer",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1] || "bg";

  const switchLanguage = (locale: string) => {
    // Replace the locale in the pathname
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const languages = [
    { code: "bg", label: "BG", flag: "🇧🇬" },
    { code: "en", label: "EN", flag: "🇬🇧" },
  ];

  if (variant === "mobile") {
    return (
      <div className={cn("flex gap-3", className)}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-base font-medium transition-colors",
              currentLocale === lang.code
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm font-bold">{lang.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          {index > 0 && <span className="mx-2 text-white/50">|</span>}
          <button
            onClick={() => switchLanguage(lang.code)}
            className={cn(
              "flex items-center gap-1.5 transition-colors",
              currentLocale === lang.code
                ? "font-bold text-white"
                : "text-white/70 hover:text-white",
            )}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-bold">{lang.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
