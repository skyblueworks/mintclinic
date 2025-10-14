"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxChevronUp } from "react-icons/rx";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.7 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary/90"
          aria-label="Scroll to top"
        >
          <RxChevronUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
