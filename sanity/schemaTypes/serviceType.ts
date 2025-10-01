import { HeartIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: HeartIcon,
  fields: [
    defineField({
      name: "title",
      type: "object",
      fields: [
        { name: "bg", type: "string", title: "Bulgarian" },
        { name: "en", type: "string", title: "English" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title.bg" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "object",
      fields: [
        { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
        { name: "en", type: "text", title: "English", rows: 3 },
      ],
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "content",
      type: "object",
      fields: [
        { name: "bg", type: "mdx", title: "Bulgarian" },
        { name: "en", type: "mdx", title: "English" },
      ],
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
      categoryTitleBg: "category.title.bg",
      categoryTitleEn: "category.title.en",
      media: "mainImage",
    },
    prepare({ titleBg, titleEn, categoryTitleBg, categoryTitleEn, media }) {
      return {
        title: titleBg || titleEn || "Untitled",
        subtitle: categoryTitleBg || categoryTitleEn || "No category",
        media,
      };
    },
  },
});
