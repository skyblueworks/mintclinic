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
      type: "object",
      fields: [
        { name: "bg", type: "string", title: "Bulgarian" },
        { name: "en", type: "string", title: "English" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "object",
      fields: [
        {
          name: "bg",
          type: "slug",
          title: "Bulgarian",
          options: { source: "name.bg" },
        },
        {
          name: "en",
          type: "slug",
          title: "English",
          options: { source: "name.en" },
        },
      ],
      validation: (Rule) => Rule.required(),
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
      name: "metaDescription",
      type: "object",
      fields: [
        { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
        { name: "en", type: "text", title: "English", rows: 2 },
      ],
    }),
  ],
  preview: {
    select: {
      nameBg: "name.bg",
      nameEn: "name.en",
      specializationBg: "specialization.bg",
      specializationEn: "specialization.en",
      media: "photo",
    },
    prepare({ nameBg, nameEn, specializationBg, specializationEn, media }) {
      return {
        title: nameBg || nameEn || "Unnamed Doctor",
        subtitle: specializationBg || specializationEn,
        media,
      };
    },
  },
});
