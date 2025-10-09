"use client";
import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import {
  FaPhone,
  FaClock,
  FaEnvelope,
  FaMapPin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "motion/react";
import { fadeInMotionProps } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-primary/80 to-primary text-white"
      {...fadeInMotionProps}
      viewport={{
        ...fadeInMotionProps.viewport,
        margin: "-50px",
      }}
    >
      {/* Top Row - Tagline & Contact Info */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left - Tagline */}
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed text-white/90">
              Усмивката е нашето вдъхновение, а вашето здраве – наш приоритет.
              Доверете се на нашата професионална грижа за вашите зъби.
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {/* Contact Info Column 1 */}
              <div className="space-y-4">
                <a
                  href="tel:+359888436838"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <FaPhone className="flex-shrink-0 text-xl" />
                  <span>+359 888 436 838</span>
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <FaClock className="flex-shrink-0 text-xl" />
                  <span>Пон - Пет, 09:00 - 18:00</span>
                </div>
              </div>

              {/* Contact Info Column 2 */}
              <div className="space-y-4">
                <a
                  href="mailto:info@mintclinic.com"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <FaEnvelope className="flex-shrink-0 text-xl" />
                  <span>info@mintclinic.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <FaMapPin className="flex-shrink-0 text-xl" />
                  <span>ул. Д-р Стефан Сарафов 20, София</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Logo/CTA & Navigation/Social */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-br-3xl rounded-tl-3xl bg-gradient-to-br from-[#14B0B060] to-[#14B0B090] p-8 shadow-2xl shadow-primary/10 lg:p-12">
          <div className="flex flex-col gap-0 lg:flex-row lg:justify-between lg:gap-12">
            {/* Left - Logo & CTA */}
            <div className="space-y-6 lg:w-1/3">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/mint_white_logo-cropped.svg"
                  alt="Mint Clinic"
                  width={200}
                  height={58}
                  className="h-auto"
                />
              </div>

              {/* CTA Button */}
              <a
                href="tel:+359888436838"
                className="block w-full rounded-full bg-accent px-6 py-3 text-center font-extrabold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Запази час
              </a>
            </div>

            {/* Right - Navigation & Social */}
            <div className="space-y-8 lg:w-2/3">
              {/* Navigation - Desktop */}
              <nav className="hidden lg:block">
                <ul className="flex flex-wrap justify-end gap-x-8 gap-y-2 text-white/90">
                  <li>
                    <LocalizedLink
                      href="/about-us"
                      className="transition-colors hover:text-white"
                    >
                      За нас
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/team"
                      className="transition-colors hover:text-white"
                    >
                      Екип
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/uslugi"
                      className="transition-colors hover:text-white"
                    >
                      Услуги
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/gallery"
                      className="transition-colors hover:text-white"
                    >
                      Галерия
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/blog"
                      className="transition-colors hover:text-white"
                    >
                      Блог
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/contacts"
                      className="transition-colors hover:text-white"
                    >
                      Контакт
                    </LocalizedLink>
                  </li>
                </ul>
              </nav>

              {/* Navigation - Mobile */}
              <nav className="lg:hidden">
                <ul className="flex flex-col gap-4 text-center text-lg text-white/90 sm:grid sm:grid-cols-2">
                  <li>
                    <LocalizedLink
                      href="/about-us"
                      className="transition-colors hover:text-white"
                    >
                      За нас
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/uslugi"
                      className="transition-colors hover:text-white"
                    >
                      Услуги
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/team"
                      className="transition-colors hover:text-white"
                    >
                      Екип
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/gallery"
                      className="transition-colors hover:text-white"
                    >
                      Галерия
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/blog"
                      className="transition-colors hover:text-white"
                    >
                      Блог
                    </LocalizedLink>
                  </li>
                  <li>
                    <LocalizedLink
                      href="/contacts"
                      className="transition-colors hover:text-white"
                    >
                      Контакт
                    </LocalizedLink>
                  </li>
                </ul>
              </nav>

              {/* Social Media */}
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-end">
                <h3 className="text-xl font-bold">Последвай ни</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/mintclinic.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/_mintclinic_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p className="text-center md:text-left">
              <span className="inline-block">© 2024 Mint Clinic.</span>{" "}
              <span className="inline-block">
                Всички права са запазени.
              </span>{" "}
            </p>
            <div className="flex gap-6">
              <LocalizedLink
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Общи Условия
              </LocalizedLink>
              <LocalizedLink
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Политика за поверителност
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
