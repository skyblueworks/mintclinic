"use client";
import Image from "next/image";
import {
  FaPhone,
  FaClock,
  FaEnvelope,
  FaMapPin,
  FaFacebook,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Top Row - Tagline & Contact Info */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Left - Tagline */}
          <div className="lg:w-1/2">
            <p className="text-white/90 text-lg leading-relaxed">
              Усмивката е нашето вдъхновение, а вашето здраве – наш приоритет.
              Доверете се на нашата професионална грижа за вашите зъби.
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Contact Info Column 1 */}
              <div className="space-y-4">
                <a
                  href="tel:+359888436838"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <FaPhone className="text-xl flex-shrink-0" />
                  <span>+359 888 436 838</span>
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <FaClock className="text-xl flex-shrink-0" />
                  <span>Пон - Пет, 09:00 - 18:00</span>
                </div>
              </div>

              {/* Contact Info Column 2 */}
              <div className="space-y-4">
                <a
                  href="mailto:info@mintclinic.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-xl flex-shrink-0" />
                  <span>info@mintclinic.com</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <FaMapPin className="text-xl flex-shrink-0" />
                  <span>ул. Д-р Стефан Сарафов 20, София</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Logo/CTA & Navigation/Social */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#14B0B080] rounded-tl-3xl rounded-br-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-12">
            {/* Left - Logo & CTA */}
            <div className="lg:w-1/3 space-y-6">
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
                className="block w-full bg-accent text-accent-foreground font-extrabold py-3 px-6 rounded-full text-center hover:bg-accent/90 transition-colors"
              >
                Запази час
              </a>
            </div>

            {/* Right - Navigation & Social */}
            <div className="lg:w-2/3 space-y-8">
              {/* Navigation - Desktop */}
              <nav className="hidden lg:block">
                <ul className="flex flex-wrap gap-x-8 gap-y-2 text-white/90 justify-end">
                  <li>
                    <a
                      href="/za-nas"
                      className="hover:text-white transition-colors"
                    >
                      За нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ekip"
                      className="hover:text-white transition-colors"
                    >
                      Екип
                    </a>
                  </li>
                  <li>
                    <a
                      href="/uslugi"
                      className="hover:text-white transition-colors"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="/galeriya"
                      className="hover:text-white transition-colors"
                    >
                      Галерия
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-white transition-colors"
                    >
                      Блог
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kontakti"
                      className="hover:text-white transition-colors"
                    >
                      Контакт
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Navigation - Mobile */}
              <nav className="lg:hidden">
                <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-4 text-white/90 text-center text-lg">
                  <li>
                    <a
                      href="/za-nas"
                      className="hover:text-white transition-colors"
                    >
                      За нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="/uslugi"
                      className="hover:text-white transition-colors"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ekip"
                      className="hover:text-white transition-colors"
                    >
                      Екип
                    </a>
                  </li>
                  <li>
                    <a
                      href="/galeriya"
                      className="hover:text-white transition-colors"
                    >
                      Галерия
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="hover:text-white transition-colors"
                    >
                      Блог
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kontakti"
                      className="hover:text-white transition-colors"
                    >
                      Контакт
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Social Media */}
              <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-end gap-4">
                <h3 className="text-xl font-bold">Последвай ни</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/mintclinic.bg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/_mintclinic_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
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
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p className="text-center md:text-left">
              <span className="inline-block">© 2024 Mint Clinic.</span>{" "}
              <span className="inline-block">Всички права са запазени.</span>{" "}
              <span className="inline-block">
                Дизайн от{" "}
                <a
                  href="https://simplifixstudio.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Simplifix Studio
                </a>
                .
              </span>
            </p>
            <div className="flex gap-6">
              <a
                href="/obshti-usloviya"
                className="hover:text-white transition-colors"
              >
                Общи Условия
              </a>
              <a
                href="/politika-za-poveritelnost"
                className="hover:text-white transition-colors"
              >
                Политика за поверителност
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-xl" />
      </button>
    </footer>
  );
}
