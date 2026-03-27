/**
 * Migrate hardcoded pricing data to Sanity CMS.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=<token> pnpm migrate:pricing
 *
 * Get a write token from:
 *   https://www.sanity.io/manage/personal/project/ne3mflgj/api
 */

import { createClient } from "@sanity/client";
import { PRICING_DATA } from "../app/[locale]/pricing/pricing-data";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN environment variable.");
  process.exit(1);
}

const client = createClient({
  projectId: "ne3mflgj",
  dataset: "production",
  apiVersion: "2025-09-29",
  token,
  useCdn: false,
});

async function main() {
  console.log(
    `\nMigrating ${PRICING_DATA.length} pricing categories to Sanity...\n`,
  );

  for (let i = 0; i < PRICING_DATA.length; i++) {
    const cat = PRICING_DATA[i];
    const slug = cat.title.en
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const doc = {
      _type: "pricingCategory",
      _id: `pricing-category-${slug}`,
      title: cat.title,
      icon: cat.icon,
      order: i,
      items: cat.items.map((item) => ({
        _key: Math.random().toString(36).slice(2, 10),
        name: item.name,
        priceBgn: item.priceBgn || null,
        priceEur: item.priceEur || null,
      })),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ [${i + 1}/${PRICING_DATA.length}] ${cat.title.en}`);
  }

  console.log("\nMigration complete.\n");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
