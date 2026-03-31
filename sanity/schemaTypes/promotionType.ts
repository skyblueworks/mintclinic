import { defineField, defineType } from "sanity";

export const promotionType = defineType({
  name: "promotion",
  title: "Promotion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        defineField({
          name: "bg",
          title: "Bulgarian",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "en",
          title: "English",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        defineField({ name: "bg", title: "Bulgarian", type: "text", rows: 3 }),
        defineField({ name: "en", title: "English", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "badge",
      title: "Badge text",
      type: "string",
      description:
        'Short label shown on the card and banner, e.g. "20% OFF" or "-200 лв."',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Optional. Large card uses image as background.",
      options: { hotspot: true },
    }),
    defineField({
      name: "originalPrice",
      title: "Original price",
      type: "string",
      description: 'e.g. "300 лв."',
    }),
    defineField({
      name: "promoPrice",
      title: "Promo price",
      type: "string",
      description: 'e.g. "240 лв."',
    }),
    defineField({
      name: "savings",
      title: "Savings amount",
      type: "string",
      description: 'Optional. e.g. "60 лв." — shown as "You save 60 лв."',
    }),
    defineField({
      name: "validUntil",
      title: "Valid until",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Deactivate to hide without deleting.",
      initialValue: true,
    }),
    defineField({
      name: "showInBanner",
      title: "Show in announcement banner",
      type: "boolean",
      description: "Show this promotion in the top site-wide banner.",
      initialValue: false,
    }),
    defineField({
      name: "bannerText",
      title: "Banner text",
      type: "object",
      description:
        "Short text shown in the banner. Falls back to title if empty.",
      fields: [
        defineField({ name: "bg", title: "Bulgarian", type: "string" }),
        defineField({ name: "en", title: "English", type: "string" }),
      ],
    }),
    defineField({
      name: "serviceUrl",
      title: "Service page link",
      type: "string",
      description:
        'Optional path to the related service page, e.g. "/uslugi/estetika/izbelvane".',
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { bg: "title.bg", badge: "badge", isActive: "isActive" },
    prepare({ bg, badge, isActive }) {
      return {
        title: bg ?? "Untitled",
        subtitle: `${badge ?? ""}${isActive ? "" : " — inactive"}`,
      };
    },
  },
});
