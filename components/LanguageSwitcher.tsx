"use client";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxChevronDown } from "react-icons/rx";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "footer" | "mobile" | "dropdown";
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

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  if (variant === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            className,
          )}
        >
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="font-bold">{currentLanguage?.label}</span>
          <RxChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[120px]">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={cn(
                "flex cursor-pointer items-center gap-2 px-3 py-2",
                currentLocale === lang.code && "bg-primary/10 text-primary",
              )}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

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
