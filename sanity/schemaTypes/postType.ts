import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
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
      options: {
        source: "title.bg",
      },
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
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
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
      name: "publishedAt",
      type: "datetime",
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
      media: "mainImage",
    },
    prepare({ titleBg, titleEn, media }) {
      return {
        title: titleBg || titleEn || "Untitled",
        subtitle: titleEn || titleBg,
        media,
      };
    },
  },
});
