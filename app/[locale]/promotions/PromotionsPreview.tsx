"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Promo = {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string | null;
  originalPrice: string;
  promoPrice: string;
  savings: string | null;
  validUntil: string;
};

const PROMOS: Promo[] = [
  {
    id: "1",
    badge: "20% OFF",
    title: "Teeth Whitening",
    description:
      "Achieve a radiant smile with our professional whitening treatment. Safe, effective, and fast technology for visible results in a single visit.",
    image: "/images/izbelvane-osnovna-1024x683_46d8454d.webp",
    originalPrice: "300 лв.",
    promoPrice: "240 лв.",
    savings: "60 лв.",
    validUntil: "April 30, 2026",
  },
  {
    id: "2",
    badge: "-200 лв.",
    title: "Dental Implant Package",
    description:
      "A permanent solution for a missing tooth. Consultation, implant, and crown included in this special spring offer.",
    image: "/images/implanti-osnovna-1024x890_40906f6e.webp",
    originalPrice: "1,200 лв.",
    promoPrice: "1,000 лв.",
    savings: "200 лв.",
    validUntil: "May 15, 2026",
  },
  {
    id: "3",
    badge: "FREE",
    title: "Preventive Check-up",
    description:
      "Free preventive examination when booking any treatment. Includes X-ray. Limited slots available.",
    image: null,
    originalPrice: "80 лв.",
    promoPrice: "0 лв.",
    savings: "80 лв.",
    validUntil: "March 31, 2026",
  },
];

const LAYOUTS = [
  {
    id: 1,
    label: "Option 1",
    sublabel: "Featured",
    desc: "Main promotion highlighted in a large card. Others sit below.",
  },
  {
    id: 2,
    label: "Option 2",
    sublabel: "Compact List",
    desc: "Clean list rows — easy to scan, works with or without images.",
  },
];

// ─── Layout 1: Featured + Smaller Cards ─────────────────────────────────────

function Layout1({ promos }: { promos: Promo[] }) {
  const [featured, ...rest] = promos;
  return (
    <div className="flex flex-col gap-8">
      {/* Featured card */}
      <div className="overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-lg shadow-primary/10">
        <div className="grid md:grid-cols-2">
          {featured.image ? (
            <div className="relative min-h-[280px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex min-h-[280px] items-center justify-center bg-primary/5">
              <span className="text-4xl font-extrabold text-primary/20">
                {featured.badge}
              </span>
            </div>
          )}
          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <span className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-white">
              {featured.badge}
            </span>
            <h2 className="font-comfortaa text-3xl font-medium text-primary">
              {featured.title}
            </h2>
            <p className="font-dm-sans leading-relaxed text-gray-600">
              {featured.description}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-primary">
                {featured.promoPrice}
              </span>
              <span className="text-base font-medium text-gray-500 line-through">
                {featured.originalPrice}
              </span>
            </div>
            {featured.savings && (
              <p className="text-sm font-semibold text-accent">
                You save {featured.savings}
              </p>
            )}
            <p className="text-sm font-semibold text-accent">
              Valid until {featured.validUntil}
            </p>
            <Button className="w-fit rounded-full bg-primary px-8 font-extrabold text-white hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Smaller cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((promo) => (
          <div
            key={promo.id}
            className="flex overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-md shadow-primary/10"
          >
            {promo.image ? (
              <div className="relative w-36 flex-shrink-0">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex w-36 flex-shrink-0 items-center justify-center bg-primary/5">
                <span className="text-sm font-extrabold text-primary/30">
                  {promo.badge}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between gap-2 p-5">
              <div>
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                  {promo.badge}
                </span>
                <h3 className="font-comfortaa mt-1.5 text-lg font-medium text-primary">
                  {promo.title}
                </h3>
                <p className="mt-1 line-clamp-2 font-dm-sans text-sm text-gray-500">
                  {promo.description}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">
                    {promo.promoPrice}
                  </span>
                  <span className="text-sm font-medium text-gray-500 line-through">
                    {promo.originalPrice}
                  </span>
                </div>
                {promo.savings && (
                  <p className="mt-0.5 text-xs font-semibold text-accent">
                    You save {promo.savings}
                  </p>
                )}
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-accent">
                    Until {promo.validUntil}
                  </p>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-xs font-extrabold text-white hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Layout 2: Compact List ──────────────────────────────────────────────────

function Layout2({ promos }: { promos: Promo[] }) {
  return (
    <div className="overflow-hidden rounded-2xl rounded-bl-none rounded-tr-none border border-primary/10 bg-white shadow-md shadow-primary/10">
      {promos.map((promo, i) => (
        <div
          key={promo.id}
          className={cn(
            "flex flex-col gap-4 border-l-4 border-accent/70 p-6 md:flex-row md:items-center",
            i < promos.length - 1 && "border-b border-b-primary/10",
            i % 2 === 0 && "bg-primary/[2%]",
          )}
        >
          <span className="w-24 flex-shrink-0 rounded-full bg-accent px-3 py-1 text-center text-xs font-extrabold text-white">
            {promo.badge}
          </span>
          <div className="flex-1">
            <h3 className="font-comfortaa text-lg font-medium text-primary">
              {promo.title}
            </h3>
            <p className="mt-0.5 font-dm-sans text-sm text-gray-500">
              {promo.description}
            </p>
          </div>
          <div className="flex items-center gap-6 md:flex-shrink-0">
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                {promo.promoPrice}
              </div>
              <div className="text-sm font-medium text-gray-500 line-through">
                {promo.originalPrice}
              </div>
              {promo.savings && (
                <div className="mt-0.5 text-xs font-semibold text-accent">
                  Save {promo.savings}
                </div>
              )}
              <div className="mt-1 text-xs font-semibold text-accent">
                Until {promo.validUntil}
              </div>
            </div>
            <Button
              size="sm"
              className="flex-shrink-0 rounded-full bg-primary font-extrabold text-white hover:bg-primary/90"
            >
              Book Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Preview Component ──────────────────────────────────────────────────

export default function PromotionsPreview() {
  const [activeLayout, setActiveLayout] = useState(1);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-2.5 text-center text-sm font-medium text-white">
        <span className="mr-2 rounded-full bg-accent px-2 py-0.5 text-xs font-extrabold">
          20% OFF
        </span>
        Teeth Whitening this April —{" "}
        <span className="cursor-pointer underline underline-offset-2 hover:text-white/80">
          See all offers →
        </span>
      </div>

      {/* Page title */}
      <section className="bg-white px-6 pb-12 pt-16 text-center lg:pb-16 lg:pt-24">
        <h1 className="font-comfortaa text-4xl font-light text-primary lg:text-5xl">
          Promotions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-dm-sans text-lg leading-relaxed text-primary/80">
          Seasonal offers and special packages at Mint Clinic. Book now and
          save.
        </p>
      </section>

      {/* Layout switcher */}
      <div className="border-y border-primary/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-4">
          {LAYOUTS.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setActiveLayout(layout.id)}
              className={cn(
                "flex flex-col items-center rounded-xl border px-6 py-3 text-sm transition-all",
                activeLayout === layout.id
                  ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                  : "border-primary/20 text-gray-500 hover:border-primary/50 hover:text-primary",
              )}
            >
              <span className="font-extrabold">{layout.label}</span>
              <span
                className={cn(
                  "text-xs",
                  activeLayout === layout.id
                    ? "text-white/80"
                    : "text-gray-400",
                )}
              >
                {layout.sublabel}
              </span>
            </button>
          ))}
        </div>
        <div className="border-t border-primary/10 bg-primary/[3%] px-6 py-2 text-center text-xs text-primary/60">
          {LAYOUTS.find((l) => l.id === activeLayout)?.desc}
        </div>
      </div>

      {/* Layout content */}
      <section className="bg-gradient-to-br from-primary/[4%] to-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          {activeLayout === 1 && <Layout1 promos={PROMOS} />}
          {activeLayout === 2 && <Layout2 promos={PROMOS} />}
        </div>
      </section>
    </>
  );
}
