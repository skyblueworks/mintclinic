"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxChevronDown, RxChevronRight } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const [openMobileNestedSubmenu, setOpenMobileNestedSubmenu] = useState<
    string | null
  >(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

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
          <Menubar
            className="hidden lg:flex items-center gap-6 border-0 bg-transparent"
            value={servicesMenuOpen ? "services" : aboutMenuOpen ? "about" : ""}
            onValueChange={(value) => {
              setServicesMenuOpen(value === "services");
              setAboutMenuOpen(value === "about");
            }}
          >
            <MenubarMenu>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-3 py-1.5"
              >
                Начало
              </Link>
            </MenubarMenu>

            {/* Услуги Menu */}
            <MenubarMenu value="services">
              <MenubarTrigger
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
                onMouseEnter={() => setServicesMenuOpen(true)}
                asChild
              >
                <Link href="/uslugi">
                  Услуги
                  <RxChevronDown className="text-sm" />
                </Link>
              </MenubarTrigger>
              <MenubarContent className="w-64">
                <MenubarSub>
                  <MenubarSubTrigger>
                    Естетична дентална медицина
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/uslugi/estetichna/viniri">Винири</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/uslugi/estetichna/koroni">Корони</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/uslugi/estetichna/izbelvane">Избелване</Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>Имплантология</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/uslugi/implantologiya/implanti">
                        Зъбни импланти
                      </Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/uslugi/implantologiya/bone-grafting">
                        Костна пластика
                      </Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>Пародонтология</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/uslugi/parodontologiya/lechenie">
                        Лечение на венци
                      </Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/uslugi/parodontologiya/profilaktika">
                        Профилактика
                      </Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>Ортодонтия</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/uslugi/ortodontiya/braces">Брекети</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/uslugi/ortodontiya/invisalign">
                        Invisalign
                      </Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            {/* За Нас Menu */}
            <MenubarMenu value="about">
              <MenubarTrigger
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
                onMouseEnter={() => setAboutMenuOpen(true)}
                asChild
              >
                <Link href="/za-nas">
                  За Нас
                  <RxChevronDown className="text-sm" />
                </Link>
              </MenubarTrigger>
              <MenubarContent className="w-56">
                <MenubarItem asChild>
                  <Link href="/za-nas">Кои сме ние</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href="/ekip/dr-aleksov">Д-р Алексов</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link href="/ekip/dr-doganova">Д-р Доганова</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <Link
                href="/kontakti"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-3 py-1.5"
              >
                Контакти
              </Link>
            </MenubarMenu>

            <MenubarMenu>
              <a
                href="tel:+359888436838"
                className="bg-accent text-accent-foreground font-bold py-2 px-6 rounded-full hover:bg-accent/90 transition-colors"
              >
                Запази час
              </a>
            </MenubarMenu>
          </Menubar>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-primary p-2">
                <RxHamburgerMenu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/logo-colored-cropped.svg"
                    alt="Mint Clinic"
                    width={120}
                    height={35}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="space-y-2 mt-8 text-left">
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
                    <RxChevronDown
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
                          className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-primary transition-colors text-left"
                        >
                          <span>Естетична дентална медицина</span>
                          <RxChevronRight
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
                          <RxChevronRight
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
                          <RxChevronRight
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
                          <RxChevronRight
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
                    <RxChevronDown
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
