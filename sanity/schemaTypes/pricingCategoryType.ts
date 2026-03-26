import { defineArrayMember, defineField, defineType } from "sanity";

export const pricingCategoryType = defineType({
  name: "pricingCategory",
  title: "Pricing Category",
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
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "en",
          title: "English",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Lucide icon name (e.g. Stethoscope, Smile, Shield)",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order in which this category appears",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "object",
              fields: [
                defineField({
                  name: "bg",
                  title: "Bulgarian",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "en",
                  title: "English",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
            defineField({
              name: "priceBgn",
              title: "Price (BGN)",
              type: "string",
            }),
            defineField({
              name: "priceEur",
              title: "Price (EUR)",
              type: "string",
            }),
          ],
          preview: {
            select: {
              bg: "name.bg",
              en: "name.en",
              priceBgn: "priceBgn",
            },
            prepare({ bg, en, priceBgn }) {
              return {
                title: bg ?? en ?? "Untitled",
                subtitle: priceBgn ?? undefined,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      bg: "title.bg",
      en: "title.en",
      icon: "icon",
    },
    prepare({ bg, en, icon }) {
      return {
        title: bg ?? en ?? "Untitled category",
        subtitle: icon ? `Icon: ${icon}` : undefined,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
