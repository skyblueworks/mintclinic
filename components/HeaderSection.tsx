"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxChevronDown, RxChevronRight } from "react-icons/rx";
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
  MenubarTrigger,
} from "@/components/ui/menubar";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Начало", href: "/" },
  {
    label: "Услуги",
    href: "/uslugi",
    children: [
      {
        label: "Естетична дентална медицина",
        href: "/uslugi/estetichna",
        children: [
          { label: "Винири", href: "/uslugi/estetichna/viniri" },
          { label: "Корони", href: "/uslugi/estetichna/koroni" },
          { label: "Избелване", href: "/uslugi/estetichna/izbelvane" },
        ],
      },
      {
        label: "Имплантология",
        href: "/uslugi/implantologiya",
        children: [
          { label: "Зъбни импланти", href: "/uslugi/implantologiya/implanti" },
          {
            label: "Костна пластика",
            href: "/uslugi/implantologiya/bone-grafting",
          },
        ],
      },
      {
        label: "Пародонтология",
        href: "/uslugi/parodontologiya",
        children: [
          {
            label: "Лечение на венци",
            href: "/uslugi/parodontologiya/lechenie",
          },
          {
            label: "Профилактика",
            href: "/uslugi/parodontologiya/profilaktika",
          },
        ],
      },
      {
        label: "Ортодонтия",
        href: "/uslugi/ortodontiya",
        children: [
          { label: "Брекети", href: "/uslugi/ortodontiya/braces" },
          { label: "Invisalign", href: "/uslugi/ortodontiya/invisalign" },
        ],
      },
    ],
  },
  {
    label: "За Нас",
    href: "/za-nas",
    children: [
      { label: "Кои сме ние", href: "/za-nas" },
      { label: "Д-р Алексов", href: "/ekip/dr-aleksov" },
      { label: "Д-р Доганова", href: "/ekip/dr-doganova" },
    ],
  },
  { label: "Контакти", href: "/kontakti" },
];

export default function HeaderSection() {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link
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
        </Link>
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
          <Link
            href={item.href}
            className="px-3 py-1.5 font-medium text-gray-700 transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        </MenubarMenu>
      );
    }

    const menuValue = item.label.toLowerCase();
    const isOpen =
      menuValue === "услуги"
        ? servicesMenuOpen
        : menuValue === "за нас"
          ? aboutMenuOpen
          : false;
    const setOpen =
      menuValue === "услуги"
        ? setServicesMenuOpen
        : menuValue === "за нас"
          ? setAboutMenuOpen
          : () => {};

    return (
      <MenubarMenu key={item.href} value={menuValue}>
        <MenubarTrigger
          className="flex cursor-pointer items-center gap-1 font-medium text-gray-700 transition-colors hover:text-primary"
          onMouseEnter={() => setOpen(true)}
          asChild
        >
          <Link href={item.href}>
            {item.label}
            <RxChevronDown className="text-sm" />
          </Link>
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
          <Link href={item.href}>{item.label}</Link>
        </MenubarItem>
      );
    }

    return (
      <MenubarSub key={item.href}>
        <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
        <MenubarSubContent>
          {item.children.map((child) => (
            <MenubarItem key={child.href} asChild>
              <Link href={child.href}>{child.label}</Link>
            </MenubarItem>
          ))}
        </MenubarSubContent>
      </MenubarSub>
    );
  };

  return (
    <header className="relative z-50 flex h-[130px] items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6">
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
            className="hidden items-center gap-6 border-0 bg-transparent lg:flex"
            value={servicesMenuOpen ? "услуги" : aboutMenuOpen ? "за нас" : ""}
            onValueChange={(value) => {
              setServicesMenuOpen(value === "услуги");
              setAboutMenuOpen(value === "за нас");
            }}
          >
            {NAV_ITEMS.map((item, index) => renderDesktopNavItem(item, index))}

            <MenubarMenu>
              <a
                href="tel:+359888436838"
                className="rounded-full bg-accent px-6 py-2 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Запази час
              </a>
            </MenubarMenu>
          </Menubar>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-primary lg:hidden">
                <RxHamburgerMenu className="h-6 w-6" />
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
              <nav className="mt-8 space-y-2 text-left">
                {NAV_ITEMS.map((item) => renderMobileNavItem(item))}

                {/* Mobile CTA */}
                <a
                  href="tel:+359888436838"
                  className="mt-6 block rounded-full bg-accent px-6 py-3 text-center font-bold text-accent-foreground transition-colors hover:bg-accent/90"
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
