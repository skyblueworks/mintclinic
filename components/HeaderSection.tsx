"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const [openMobileNestedSubmenu, setOpenMobileNestedSubmenu] = useState<
    string | null
  >(null);

  return (
    <header className="relative z-50 bg-white h-[130px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-colored-cropped.svg"
              alt="Mint Clinic"
              width={120}
              height={35}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Начало
            </Link>

            {/* Услуги Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium">
                Услуги
                <FaChevronDown className="text-xs" />
              </button>

              {openDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  <div className="relative group">
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
                      <span>Естетична дентална медицина</span>
                      <FaChevronRight className="text-xs" />
                    </button>
                    <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl py-2">
                      <a
                        href="/uslugi/estetichna/viniri"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Винири
                      </a>
                      <a
                        href="/uslugi/estetichna/koroni"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Корони
                      </a>
                      <a
                        href="/uslugi/estetichna/избелване"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Избелване
                      </a>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
                      <span>Имплантология</span>
                      <FaChevronRight className="text-xs" />
                    </button>
                    <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl py-2">
                      <a
                        href="/uslugi/implantologiya/implanti"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Зъбни импланти
                      </a>
                      <a
                        href="/uslugi/implantologiya/bone-grafting"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Костна пластика
                      </a>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
                      <span>Пародонтология</span>
                      <FaChevronRight className="text-xs" />
                    </button>
                    <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl py-2">
                      <a
                        href="/uslugi/parodontologiya/lechenie"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Лечение на венци
                      </a>
                      <a
                        href="/uslugi/parodontologiya/profilaktika"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Профилактика
                      </a>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
                      <span>Ортодонтия</span>
                      <FaChevronRight className="text-xs" />
                    </button>
                    <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl py-2">
                      <a
                        href="/uslugi/ortodontiya/braces"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Брекети
                      </a>
                      <a
                        href="/uslugi/ortodontiya/invisalign"
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        Invisalign
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* За Нас Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium">
                За Нас
                <FaChevronDown className="text-xs" />
              </button>

              {openDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50">
                  <a
                    href="/za-nas"
                    className="block px-4 py-3 hover:bg-gray-50"
                  >
                    Кои сме ние
                  </a>
                  <a
                    href="/ekip/dr-aleksov"
                    className="block px-4 py-3 hover:bg-gray-50"
                  >
                    Д-р Алексов
                  </a>
                  <a
                    href="/ekip/dr-doganova"
                    className="block px-4 py-3 hover:bg-gray-50"
                  >
                    Д-р Доганова
                  </a>
                </div>
              )}
            </div>

            <a
              href="/kontakti"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Контакти
            </a>

            {/* CTA Button */}
            <a
              href="tel:+359888436838"
              className="bg-accent text-accent-foreground font-bold py-2 px-6 rounded-full hover:bg-accent/90 transition-colors"
            >
              Запази час
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-gray-700"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Mobile Logo */}
              <div className="mb-8">
                <Image
                  src="/logo-colored-cropped.svg"
                  alt="Mint Clinic"
                  width={120}
                  height={35}
                  className="h-10 w-auto"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Начало
                </Link>

                {/* Услуги */}
                <div>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === "services" ? null : "services"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    <span>Услуги</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        openMobileSubmenu === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileSubmenu === "services" && (
                    <div className="pl-4 space-y-2">
                      {/* Естетична */}
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileNestedSubmenu(
                              openMobileNestedSubmenu === "aesthetic"
                                ? null
                                : "aesthetic"
                            )
                          }
                          className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <span>Естетична дентална медицина</span>
                          <FaChevronRight
                            className={`text-xs transition-transform ${
                              openMobileNestedSubmenu === "aesthetic"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileNestedSubmenu === "aesthetic" && (
                          <div className="pl-4 space-y-1">
                            <a
                              href="/uslugi/estetichna/viniri"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Винири
                            </a>
                            <a
                              href="/uslugi/estetichna/koroni"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Корони
                            </a>
                            <a
                              href="/uslugi/estetichna/izbelvane"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Избелване
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Имплантология */}
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileNestedSubmenu(
                              openMobileNestedSubmenu === "implantology"
                                ? null
                                : "implantology"
                            )
                          }
                          className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <span>Имплантология</span>
                          <FaChevronRight
                            className={`text-xs transition-transform ${
                              openMobileNestedSubmenu === "implantology"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileNestedSubmenu === "implantology" && (
                          <div className="pl-4 space-y-1">
                            <a
                              href="/uslugi/implantologiya/implanti"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Зъбни импланти
                            </a>
                            <a
                              href="/uslugi/implantologiya/bone-grafting"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Костна пластика
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Пародонтология */}
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileNestedSubmenu(
                              openMobileNestedSubmenu === "periodontology"
                                ? null
                                : "periodontology"
                            )
                          }
                          className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <span>Пародонтология</span>
                          <FaChevronRight
                            className={`text-xs transition-transform ${
                              openMobileNestedSubmenu === "periodontology"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileNestedSubmenu === "periodontology" && (
                          <div className="pl-4 space-y-1">
                            <a
                              href="/uslugi/parodontologiya/lechenie"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Лечение на венци
                            </a>
                            <a
                              href="/uslugi/parodontologiya/profilaktika"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Профилактика
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Ортодонтия */}
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileNestedSubmenu(
                              openMobileNestedSubmenu === "orthodontics"
                                ? null
                                : "orthodontics"
                            )
                          }
                          className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors"
                        >
                          <span>Ортодонтия</span>
                          <FaChevronRight
                            className={`text-xs transition-transform ${
                              openMobileNestedSubmenu === "orthodontics"
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileNestedSubmenu === "orthodontics" && (
                          <div className="pl-4 space-y-1">
                            <a
                              href="/uslugi/ortodontiya/braces"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Брекети
                            </a>
                            <a
                              href="/uslugi/ortodontiya/invisalign"
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Invisalign
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* За Нас */}
                <div>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === "about" ? null : "about"
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    <span>За Нас</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        openMobileSubmenu === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileSubmenu === "about" && (
                    <div className="pl-4 space-y-2">
                      <a
                        href="/za-nas"
                        className="block py-2 text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Кои сме ние
                      </a>
                      <a
                        href="/ekip/dr-aleksov"
                        className="block py-2 text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Д-р Алексов
                      </a>
                      <a
                        href="/ekip/dr-doganova"
                        className="block py-2 text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Д-р Доганова
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/kontakti"
                  className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакти
                </a>

                {/* Mobile CTA */}
                <a
                  href="tel:+359888436838"
                  className="block mt-6 bg-accent text-accent-foreground font-bold py-3 px-6 rounded-full text-center hover:bg-accent/90 transition-colors"
                >
                  Запази час
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
