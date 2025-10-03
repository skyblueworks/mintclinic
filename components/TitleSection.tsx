"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function TitleSection({ title }: { title: string }) {
  return (
    <motion.section
      className="relative isolate bg-white"
      {...fadeInMotionProps}
    >
      <h1 className="mb-8 mt-24 px-6 text-center text-5xl font-extrabold text-foreground *:text-center">
        {title}
      </h1>
    </motion.section>
  );
}
