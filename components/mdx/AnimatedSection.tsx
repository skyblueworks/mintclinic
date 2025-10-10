"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AnimatedSection - Wrapper that adds fade-in animation to sections
 * Used in team member pages to animate content on scroll
 *
 * @example
 * <AnimatedSection>
 *   <TwoColumn>
 *     ...content...
 *   </TwoColumn>
 * </AnimatedSection>
 */
export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className || "bg-white py-16 lg:py-24"}
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </motion.section>
  );
}
