"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { RxCalendar } from "react-icons/rx";

export default function MobileBookingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Check if it's the home page
  const locale = pathname.split("/")[1] || "bg";
  const isHomePage = pathname === `/${locale}` || pathname === "/";

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 70vh
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Only show on home page and mobile
  if (!isHomePage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://superdoc.bg/lekar/aleksandar-aleksov"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.7 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-8 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-accent px-6 text-accent-foreground shadow-lg transition-colors hover:bg-accent/90 lg:hidden"
          aria-label="Запази час"
        >
          <span className="text-sm font-black">Запази час</span>
          <RxCalendar className="text-xl" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
