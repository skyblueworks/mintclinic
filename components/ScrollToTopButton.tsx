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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <RxChevronUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
