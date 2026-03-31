/**
 * Seed mock promotions into Sanity.
 * Run: tsx tools/seed-promotions.ts
 */
import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env") });
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const promotions: any[] = [
  {
    _type: "promotion",
    title: {
      bg: "Избелване на зъби",
      en: "Teeth Whitening",
    },
    description: {
      bg: "Постигнете сияйна усмивка с нашата професионална процедура за избелване. Бърза, безопасна и с видими резултати от първото посещение.",
      en: "Achieve a radiant smile with our professional whitening treatment. Fast, safe, and visible results from the first visit.",
    },
    badge: "20% OFF",
    originalPrice: "300 лв.",
    promoPrice: "240 лв.",
    savings: "60 лв.",
    validUntil: "2026-04-30",
    isActive: true,
    showInBanner: true,
    bannerText: {
      bg: "Избелване на зъби с 20% отстъпка до края на април",
      en: "20% off Teeth Whitening — valid through April",
    },
    order: 1,
  },
  {
    _type: "promotion",
    title: {
      bg: "Дентален имплант – пакет",
      en: "Dental Implant Package",
    },
    description: {
      bg: "Трайно решение при липсващ зъб. Консултация, имплант и коронка включени в специалната пролетна оферта.",
      en: "A permanent solution for a missing tooth. Consultation, implant, and crown included in this special spring offer.",
    },
    badge: "-200 лв.",
    originalPrice: "1 200 лв.",
    promoPrice: "1 000 лв.",
    savings: "200 лв.",
    validUntil: "2026-05-15",
    isActive: true,
    showInBanner: false,
    order: 2,
  },
  {
    _type: "promotion",
    title: {
      bg: "Безплатен профилактичен преглед",
      en: "Free Preventive Check-up",
    },
    description: {
      bg: "Безплатен профилактичен преглед при записване за лечение. Включва рентгенова снимка. Местата са ограничени.",
      en: "Free preventive examination when booking any treatment. Includes X-ray. Limited slots available.",
    },
    badge: "FREE",
    originalPrice: "80 лв.",
    promoPrice: "0 лв.",
    savings: "80 лв.",
    validUntil: "2026-05-31",
    isActive: true,
    showInBanner: false,
    order: 3,
  },
];

async function seed() {
  console.log("Seeding promotions...");

  // Remove existing promotion documents first to avoid duplicates
  const existing = await client.fetch<{ _id: string }[]>(
    `*[_type == "promotion"]{ _id }`,
  );
  if (existing.length > 0) {
    console.log(`Deleting ${existing.length} existing promotion(s)...`);
    await Promise.all(existing.map((doc) => client.delete(doc._id)));
  }

  for (const promo of promotions) {
    const doc = await client.create(promo);
    console.log(`Created: ${promo.title.en} (${doc._id})`);
  }

  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
