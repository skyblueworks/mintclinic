import type { Variants, Transition } from "motion/react";

// Reusable animation settings for fade-in-from-bottom
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const fadeInViewport = {
  once: true,
  margin: "-150px",
} as const;

// Combined motion props for fade-in animation
export const fadeInMotionProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: fadeInViewport,
  variants: fadeInVariants,
  transition: fadeInTransition,
};
