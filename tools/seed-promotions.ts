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
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ne3mflgj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

/** Download an image from URL and upload it to Sanity, returning an asset reference */
async function uploadImage(url: string, filename: string) {
  console.log(`  Downloading ${filename}...`);
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  console.log(`  Uploading ${filename} to Sanity...`);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: "image/jpeg",
  });
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

// Unsplash images — professional dental/smile photography
const imageUrls = {
  whitening:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80",
  implant:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
  checkup:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
  summer:
    "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=1200&q=80",
};

async function seed() {
  console.log("Seeding promotions...\n");

  // Remove existing promotion documents first to avoid duplicates
  const existing = await client.fetch<{ _id: string }[]>(
    `*[_type == "promotion"]{ _id }`,
  );
  if (existing.length > 0) {
    console.log(`Deleting ${existing.length} existing promotion(s)...`);
    await Promise.all(existing.map((doc) => client.delete(doc._id)));
  }

  // Upload images in parallel
  console.log("\nUploading images...");
  const [whiteningImg, implantImg, checkupImg, summerImg] = await Promise.all([
    uploadImage(imageUrls.whitening, "promo-whitening.jpg"),
    uploadImage(imageUrls.implant, "promo-implant.jpg"),
    uploadImage(imageUrls.checkup, "promo-checkup.jpg"),
    uploadImage(imageUrls.summer, "promo-summer.jpg"),
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promotions: any[] = [
    {
      _type: "promotion",
      title: {
        bg: "Избелване на зъби",
        en: "Teeth Whitening",
      },
      description: {
        bg: "Постигнете сияйна усмивка с нашата професионална процедура за избелване на зъби. Използваме съвременна LED технология и висококачествени избелващи гелове, безопасни за емайла. Процедурата е напълно безболезнена и отнема около 60 минути. Резултатите са видими още от първото посещение – зъбите стават с до 8 тона по-светли. Препоръчваме я преди важни събития или просто за освежаване на усмивката.",
        en: "Achieve a radiant smile with our professional teeth whitening treatment. We use modern LED technology and high-quality whitening gels that are safe for enamel. The procedure is completely painless and takes about 60 minutes. Results are visible from the very first visit — teeth become up to 8 shades lighter. Perfect before special occasions or simply to refresh your smile.",
      },
      badge: "20% OFF",
      image: whiteningImg,
      originalPrice: "300 лв.",
      promoPrice: "240 лв.",
      savings: "60 лв.",
      validFrom: "2026-03-01",
      validUntil: "2026-04-30",
      serviceUrl: "/uslugi/estetika/izbelvane-na-zabite",
      isActive: true,
      showInBanner: true,
      bannerText: {
        bg: "Избелване на зъби с 20% отстъпка до края на април.",
        en: "20% off Teeth Whitening — valid through April.",
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
        bg: "Трайно решение при липсващ зъб. Пакетът включва първоначална консултация и планиране, поставяне на импланта, временна и окончателна коронка. Денталните импланти са най-дълготрайното решение за замяна на изгубен зъб – изглеждат, усещат се и функционират като естествен зъб. Предлагаме импланти от водещи производители с гаранция.",
        en: "A permanent solution for a missing tooth. The package includes initial consultation and planning, implant placement, and temporary and final crown. Dental implants are the most durable solution for replacing a lost tooth — they look, feel, and function like a natural tooth. We use implants from leading manufacturers with warranty.",
      },
      badge: "-200 лв.",
      image: implantImg,
      originalPrice: "1 200 лв.",
      promoPrice: "1 000 лв.",
      savings: "200 лв.",
      validFrom: "2026-03-15",
      validUntil: "2026-05-15",
      serviceUrl: "/uslugi/hirurgiya/dentalni-implanti",
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
        bg: "Безплатен профилактичен преглед при записване за лечение. Включва рентгенова снимка и оценка на общото състояние на устната кухина. Ранното откриване на проблеми спестява лечение и разходи. Местата са ограничени – офертата е валидна само при предварително записване.",
        en: "Free preventive examination when booking any treatment. Includes X-ray and assessment of the overall condition of the oral cavity. Early detection saves treatment time and costs. Slots are limited — offer valid only with prior appointment.",
      },
      badge: "FREE",
      image: checkupImg,
      originalPrice: "80 лв.",
      promoPrice: "0 лв.",
      savings: "80 лв.",
      validUntil: "2026-05-31",
      serviceUrl:
        "/uslugi/konservativna-terapiya/profesionalno-pochistvane-i-profilaktika",
      isActive: true,
      showInBanner: false,
      order: 3,
    },
    {
      _type: "promotion",
      title: {
        bg: "Лятна усмивка – пакет естетика",
        en: "Summer Smile – Aesthetics Package",
      },
      description: {
        bg: "Подгответе усмивката си за лятото! Пакетът включва професионално почистване, избелване и полиране. Идеалният подарък за себе си преди ваканцията.",
        en: "Get your smile ready for summer! The package includes professional cleaning, whitening, and polishing. The perfect pre-vacation treat.",
      },
      badge: "-30%",
      image: summerImg,
      originalPrice: "450 лв.",
      promoPrice: "315 лв.",
      savings: "135 лв.",
      validFrom: "2026-06-01",
      validUntil: "2026-08-31",
      isActive: true,
      showInBanner: false,
      order: 4,
    },
  ];

  console.log("\nCreating promotions...");
  for (const promo of promotions) {
    const doc = await client.create(promo);
    console.log(`  Created: ${promo.title.en} (${doc._id})`);
  }

  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
