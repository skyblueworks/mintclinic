import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "object",
      title: "Title",
      fields: [
        { name: "bg", type: "string", title: "Bulgarian" },
        { name: "en", type: "string", title: "English" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title.bg",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "object",
      title: "Description",
      fields: [
        { name: "bg", type: "text", title: "Bulgarian" },
        { name: "en", type: "text", title: "English" },
      ],
    }),
    defineField({
      name: "excerpt",
      type: "object",
      title: "Excerpt",
      fields: [
        { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
        { name: "en", type: "text", title: "English", rows: 3 },
      ],
    }),
    defineField({
      name: "content",
      type: "object",
      title: "Content",
      fields: [
        { name: "bg", type: "mdx", title: "Bulgarian" },
        { name: "en", type: "mdx", title: "English" },
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Display Order",
      description: "Used to order categories in listings",
    }),
    defineField({
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        {
          name: "metaDescription",
          type: "object",
          title: "Meta Description",
          fields: [
            { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
            { name: "en", type: "text", title: "English", rows: 2 },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      titleBg: "title.bg",
      titleEn: "title.en",
    },
    prepare({ titleBg, titleEn }) {
      return {
        title: titleBg || titleEn || "Untitled",
        subtitle: titleEn || titleBg,
      };
    },
  },
});
