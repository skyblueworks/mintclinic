import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
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
      title: "Slug",
      options: {
        source: "title.bg",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
        {
          name: "ogImage",
          type: "image",
          title: "Open Graph Image",
        },
      ],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      description: "Gallery images for gallery page",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
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
        title: titleBg || titleEn || "Untitled Page",
      };
    },
  },
});
