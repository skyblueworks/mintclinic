"use client";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    content: "Ул. Доктор Стефан\nСарафов 20, 1408 София",
    href: "https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: FaPhone,
    content: "+359 888 436 838",
    href: "tel:+359888436838",
  },
  {
    icon: FaEnvelope,
    content: "info@mintclinic.com",
    href: "mailto:info@mintclinic.com",
  },
];

export default function ContactInfoBar() {
  return (
    <motion.section
      className="bg-white px-6 py-12 lg:py-16"
      {...fadeInMotionProps}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="flex items-center gap-4 rounded-full bg-gradient-to-br from-primary/[5%] to-primary/[10%] px-6 py-4 shadow-xl shadow-primary/10 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                  <IconComponent className="text-xl text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-line text-sm leading-tight text-foreground">
                    {item.content}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
