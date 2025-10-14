"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import LocalizedLink from "@/components/LocalizedLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { RxHamburgerMenu, RxChevronDown, RxChevronRight } from "react-icons/rx";
import { useTranslation, TK, type Locale } from "@/lib/i18n";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const getNavItems = (
  t: (key: (typeof TK)[keyof typeof TK]) => string,
): NavItem[] => {
  return [
    { label: t(TK.HOME), href: "/" },
    {
      label: t(TK.SERVICES),
      href: "/uslugi",
      children: [
        {
          label: t(TK.AESTHETIC_DENTAL_MEDICINE),
          href: "/uslugi/estetika",
          children: [
            { label: t(TK.VENEERS), href: "/uslugi/estetika/faseti" },
            { label: t(TK.BONDING), href: "/uslugi/estetika/bonding" },
            {
              label: t(TK.DIGITAL_SMILE_DESIGN),
              href: "/uslugi/estetika/digital-smile-design",
            },
            {
              label: t(TK.TEETH_WHITENING),
              href: "/uslugi/estetika/izbelvane-na-zabite",
            },
          ],
        },
        {
          label: t(TK.SURGERY),
          href: "/uslugi/hirurgiya",
          children: [
            {
              label: t(TK.DENTAL_IMPLANTS),
              href: "/uslugi/hirurgiya/dentalni-implanti",
            },
            { label: t(TK.EXTRACTIONS), href: "/uslugi/hirurgiya/ekstrakczii" },
            {
              label: t(TK.RECESSION_COVERAGE),
              href: "/uslugi/hirurgiya/pokrivane-na-reczesii",
            },
            {
              label: t(TK.GUM_CONTOURING),
              href: "/uslugi/hirurgiya/oformyane-na-venecza",
            },
          ],
        },
        {
          label: t(TK.PROSTHETICS),
          href: "/uslugi/protetika",
          children: [
            { label: t(TK.CROWNS), href: "/uslugi/protetika/koronki" },
            { label: t(TK.BRIDGES), href: "/uslugi/protetika/mostove" },
            {
              label: t(TK.INLAY_ONLAY),
              href: "/uslugi/protetika/inlej-i-onlej",
            },
            { label: t(TK.DENTURES), href: "/uslugi/protetika/protezi" },
            {
              label: t(TK.FUNCTIONAL_REHABILITATION),
              href: "/uslugi/protetika/funkczionalna-rehabilitacziya",
            },
            {
              label: t(TK.BRUXISM_SPLINTS),
              href: "/uslugi/protetika/shini-za-bruksisti",
            },
          ],
        },
        {
          label: t(TK.CONSERVATIVE_THERAPY),
          href: "/uslugi/konservativna-terapiya",
          children: [
            {
              label: t(TK.FILLINGS),
              href: "/uslugi/konservativna-terapiya/obturaczii",
            },
            {
              label: t(TK.ROOT_CANAL),
              href: "/uslugi/konservativna-terapiya/korenovo-lechenie",
            },
            {
              label: t(TK.PROFESSIONAL_CLEANING),
              href: "/uslugi/konservativna-terapiya/profesionalno-pochistvane-i-profilaktika",
            },
            {
              label: t(TK.GINGIVITIS_PERIODONTITIS),
              href: "/uslugi/konservativna-terapiya/gingivit-parodontit",
            },
          ],
        },
        { label: t(TK.ALIGNERS), href: "/uslugi/alajneri" },
        {
          label: t(TK.EMERGENCY_DENTAL_CARE),
          href: "/uslugi/speshna-dentalna-pomosht",
        },
      ],
    },
    {
      label: t(TK.ABOUT),
      href: "/about-us",
      children: [
        { label: t(TK.ABOUT), href: "/about-us" },
        { label: t(TK.DR_ALEKSOV), href: "/team/dr-aleksov" },
        { label: t(TK.DR_DOGANOVA), href: "/team/dr-doganova" },
        { label: t(TK.GALLERY), href: "/gallery" },
        { label: t(TK.BLOG), href: "/blog" },
      ],
    },
    { label: t(TK.CONTACT), href: "/contacts" },
  ];
};

export default function HeaderSection({ className }: { className?: string }) {
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const isHomePage = pathname === `/${locale}` || pathname === "/";
  const NAV_ITEMS = getNavItems(t);

  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect desktop screen size - SSR compatible
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll-based animations
  const { scrollY } = useScroll();

  // Shadow animation for home page
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);
  const boxShadow = useTransform(
    shadowOpacity,
    (opacity) => `0 25px 50px -12px rgba(0, 128, 128, ${opacity})`,
  );

  // Height animation for desktop only
  const headerHeight = useTransform(
    scrollY,
    [0, 100],
    isDesktop ? [130, 80] : [100, 100],
  );
  const logoScale = useTransform(
    scrollY,
    [0, 100],
    isDesktop ? [1, 0.75] : [1, 1],
  );

  // Mobile collapsible states - using a map for cleaner state management
  const [mobileOpenStates, setMobileOpenStates] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileState = (key: string) => {
    setMobileOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Render mobile navigation item recursively
  const renderMobileNavItem = (
    item: NavItem,
    depth: number = 0,
  ): React.ReactNode => {
    const key = item.href;
    const isOpen = mobileOpenStates[key] || false;

    if (!item.children) {
      return (
        <LocalizedLink
          key={key}
          href={item.href}
          className={`block ${
            depth === 0
              ? "py-3 font-medium text-gray-700"
              : "py-2 text-gray-600"
          } transition-colors hover:text-primary`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.label}
        </LocalizedLink>
      );
    }

    return (
      <Collapsible
        key={key}
        open={isOpen}
        onOpenChange={() => toggleMobileState(key)}
      >
        <CollapsibleTrigger
          className={`flex w-full items-center justify-between ${
            depth === 0
              ? "py-3 font-medium text-gray-700"
              : "py-2 text-gray-600"
          } transition-colors hover:text-primary ${
            depth > 0 ? "text-left" : ""
          }`}
        >
          <span>{item.label}</span>
          <RxChevronRight
            className={`flex-shrink-0 text-sm transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pl-4">
          <LocalizedLink
            href={item.href}
            className="block py-2 font-medium text-primary transition-colors hover:text-primary/80"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t(TK.ABOUT_PREFIX)} {item.label}
          </LocalizedLink>
          {item.children.map((child) => renderMobileNavItem(child, depth + 1))}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  // Render desktop navigation item recursively
  const renderDesktopNavItem = (
    item: NavItem,
    index: number,
  ): React.ReactNode => {
    if (!item.children) {
      return (
        <MenubarMenu key={item.href}>
          <LocalizedLink
            href={item.href}
            className="px-3 py-1.5 font-medium text-gray-700 transition-colors hover:text-primary"
          >
            {item.label}
          </LocalizedLink>
        </MenubarMenu>
      );
    }

    const menuValue = item.label.toLowerCase();
    const isServicesMenu = item.href === "/uslugi";
    const isAboutMenu = item.href === "/about-us";
    const isOpen = isServicesMenu
      ? servicesMenuOpen
      : isAboutMenu
        ? aboutMenuOpen
        : false;
    const setOpen = isServicesMenu
      ? setServicesMenuOpen
      : isAboutMenu
        ? setAboutMenuOpen
        : () => {};

    return (
      <MenubarMenu key={item.href} value={menuValue}>
        <MenubarTrigger
          className="flex cursor-pointer items-center gap-1 font-medium text-gray-700 transition-colors hover:text-primary"
          onMouseEnter={() => setOpen(true)}
          asChild
        >
          <LocalizedLink href={item.href}>
            {item.label}
            <RxChevronDown className="text-sm" />
          </LocalizedLink>
        </MenubarTrigger>
        <MenubarContent className="w-64">
          {item.children.map((child) => renderDesktopSubmenu(child))}
        </MenubarContent>
      </MenubarMenu>
    );
  };

  const renderDesktopSubmenu = (item: NavItem): React.ReactNode => {
    if (!item.children) {
      return (
        <MenubarItem key={item.href} asChild>
          <LocalizedLink href={item.href}>{item.label}</LocalizedLink>
        </MenubarItem>
      );
    }

    return (
      <MenubarSub key={item.href}>
        <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem asChild>
            <LocalizedLink
              href={item.href}
              className="font-semibold text-primary"
            >
              {t(TK.ABOUT_PREFIX)} {item.label}
            </LocalizedLink>
          </MenubarItem>
          {item.children.length > 0 && <MenubarSeparator className="my-0" />}
          {item.children.map((child) => (
            <MenubarItem key={child.href} asChild>
              <LocalizedLink href={child.href}>{child.label}</LocalizedLink>
            </MenubarItem>
          ))}
        </MenubarSubContent>
      </MenubarSub>
    );
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-lg",
        !isHomePage && "shadow-2xl shadow-primary/10",
        className,
      )}
      style={{
        ...(isHomePage ? { boxShadow } : {}),
        height: headerHeight,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LocalizedLink href="/">
            <motion.div style={{ scale: logoScale }} className="origin-left">
              <Image
                src="/logo-colored-cropped.svg"
                alt="Mint Clinic"
                width={120}
                height={35}
                className="h-10 w-auto"
              />
            </motion.div>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <Menubar
            className="hidden items-center gap-6 border-0 bg-transparent lg:flex"
            value={
              servicesMenuOpen
                ? t(TK.SERVICES).toLowerCase()
                : aboutMenuOpen
                  ? t(TK.ABOUT).toLowerCase()
                  : ""
            }
            onValueChange={(value) => {
              setServicesMenuOpen(value === t(TK.SERVICES).toLowerCase());
              setAboutMenuOpen(value === t(TK.ABOUT).toLowerCase());
            }}
          >
            {NAV_ITEMS.map((item, index) => renderDesktopNavItem(item, index))}

            <MenubarMenu>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a
                  href="https://superdoc.bg/lekar/aleksandar-aleksov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(TK.BOOK_APPOINTMENT)}
                </a>
              </Button>
            </MenubarMenu>
          </Menubar>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-primary lg:hidden">
                <RxHamburgerMenu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex w-80 flex-col overflow-y-auto"
            >
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
              <nav className="mt-8 flex flex-1 flex-col space-y-2 text-left">
                {NAV_ITEMS.map((item) => renderMobileNavItem(item))}

                <div className="flex flex-1 flex-col justify-end">
                  {/* Mobile CTA */}
                  <Button
                    asChild
                    className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a
                      href="https://superdoc.bg/lekar/aleksandar-aleksov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(TK.BOOK_APPOINTMENT)}
                    </a>
                  </Button>

                  {/* Language Switcher */}
                  <div className="pt-6">
                    <p className="mb-3 text-sm font-medium text-gray-500">
                      {t(TK.LANGUAGE_SWITCHER)}
                    </p>
                    <LanguageSwitcher variant="mobile" />
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
