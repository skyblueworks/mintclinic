import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: UsersIcon,
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

    // Who We Are Section
    defineField({
      name: "whoWeAre",
      title: "Who We Are Section",
      type: "object",
      fields: [
        defineField({
          name: "label",
          type: "object",
          title: "Label (КОИ СМЕ НИЕ)",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "title",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "titleSuffix",
          type: "object",
          title: "Title Suffix (в центъра на София)",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "description",
          type: "object",
          fields: [
            { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
            { name: "en", type: "text", title: "English", rows: 3 },
          ],
        }),
        defineField({
          name: "buttonAbout",
          type: "object",
          title: "About Button Text",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "buttonGallery",
          type: "object",
          title: "Gallery Button Text",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "videoUrl",
          type: "url",
          title: "Video Embed URL",
        }),
      ],
    }),

    // About Section (Who We Are)
    defineField({
      name: "aboutSection",
      title: "About Section (Who We Are)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "content",
          type: "object",
          description: "Main about us content",
          fields: [
            { name: "bg", type: "text", title: "Bulgarian", rows: 10 },
            { name: "en", type: "text", title: "English", rows: 10 },
          ],
        }),
      ],
    }),

    // Team Members Section
    defineField({
      name: "teamMembersSection",
      title: "Team Members Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "titleBold",
          type: "object",
          title: "Title (Bold part)",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
      ],
    }),

    // Gallery Section
    defineField({
      name: "gallerySection",
      title: "Gallery Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "images",
          type: "array",
          title: "Gallery Images",
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "object",
                  title: "Alternative text",
                  fields: [
                    { name: "bg", type: "string", title: "Bulgarian" },
                    { name: "en", type: "string", title: "English" },
                  ],
                },
              ],
            },
          ],
        }),
      ],
    }),

    // Why Mint Section (Reusable)
    defineField({
      name: "whyMintSection",
      title: "Why Mint Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "reasons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "object",
                  fields: [
                    { name: "bg", type: "string", title: "Bulgarian" },
                    { name: "en", type: "string", title: "English" },
                  ],
                }),
                defineField({
                  name: "description",
                  type: "object",
                  fields: [
                    { name: "bg", type: "text", title: "Bulgarian", rows: 4 },
                    { name: "en", type: "text", title: "English", rows: 4 },
                  ],
                }),
                defineField({
                  name: "id",
                  type: "number",
                  title: "ID",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // SEO
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
  ],

  preview: {
    select: {
      titleBg: "title.bg",
      titleEn: "title.en",
    },
    prepare({ titleBg, titleEn }) {
      return {
        title: titleBg || titleEn || "About Page",
        subtitle: "About Us Page",
      };
    },
  },
});
