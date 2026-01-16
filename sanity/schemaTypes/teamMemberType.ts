import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      type: "object",
      fields: [
        { name: "bg", type: "string", title: "Bulgarian" },
        { name: "en", type: "string", title: "English" },
      ],
    }),
    defineField({
      name: "photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      type: "object",
      fields: [
        { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
        { name: "en", type: "text", title: "English", rows: 3 },
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
      name: "specialization",
      type: "object",
      fields: [
        { name: "bg", type: "string", title: "Bulgarian" },
        { name: "en", type: "string", title: "English" },
      ],
    }),
    defineField({
      name: "certificates",
      title: "Certificates & Diplomas",
      type: "array",
      of: [
        {
          type: "object",
          name: "certificate",
          title: "Certificate",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "object",
              fields: [
                { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
                { name: "en", type: "text", title: "English", rows: 3 },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "lecturer",
              title: "Lecturer",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            },
            {
              name: "location",
              title: "Location",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "date",
              title: "Date",
              type: "string",
              description:
                "Flexible date format (e.g., '04.10 - 16.11.24', '2024', '10.2024-10.2025')",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              titleBg: "title.bg",
              titleEn: "title.en",
              date: "date",
              media: "image",
            },
            prepare({ titleBg, titleEn, date, media }) {
              const title = titleBg || titleEn || "Untitled Certificate";
              return {
                title:
                  title.length > 50 ? title.substring(0, 50) + "..." : title,
                subtitle: date,
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: "name",
      roleBg: "role.bg",
      roleEn: "role.en",
      media: "photo",
    },
    prepare({ name, roleBg, roleEn, media }) {
      return {
        title: name || "Unnamed Doctor",
        subtitle: roleBg || roleEn,
        media,
      };
    },
  },
});
