"use client";

interface LanguageSwitcherProps {
  currentLanguage: "en" | "bg";
  onLanguageChange: (language: "en" | "bg") => void;
  className?: string;
}

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
  className = "",
}: LanguageSwitcherProps) {
  return (
    <div className={`flex rounded-full bg-white p-1 shadow-lg ${className}`}>
      <button
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          currentLanguage === "en"
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange("bg")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          currentLanguage === "bg"
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Български
      </button>
    </div>
  );
}
