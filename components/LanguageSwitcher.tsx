"use client";

interface LanguageSwitcherProps {
  currentLanguage: "en" | "bg";
  onLanguageChange: (language: "en" | "bg") => void;
  className?: string;
}

export function LanguageSwitcher({ 
  currentLanguage, 
  onLanguageChange, 
  className = "" 
}: LanguageSwitcherProps) {
  return (
    <div className={`flex bg-white rounded-full shadow-lg p-1 ${className}`}>
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
          currentLanguage === "en"
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange("bg")}
        className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
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