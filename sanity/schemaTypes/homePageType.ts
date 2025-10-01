import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
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

    // Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
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
          name: "subtitle",
          type: "object",
          fields: [
            { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
            { name: "en", type: "text", title: "English", rows: 2 },
          ],
        }),
        defineField({
          name: "backgroundImage",
          type: "image",
          title: "Background Image",
          options: { hotspot: true },
        }),
        defineField({
          name: "ctaButton",
          type: "object",
          title: "Call to Action Button",
          fields: [
            defineField({
              name: "text",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "url",
              type: "string",
              title: "Button URL",
            }),
          ],
        }),
      ],
    }),

    // Featured Services Section
    defineField({
      name: "featuredServices",
      title: "Featured Services",
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
          name: "services",
          type: "array",
          of: [
            defineArrayMember({ type: "reference", to: { type: "service" } }),
          ],
          validation: (Rule) => Rule.max(6),
        }),
      ],
    }),

    // About Section
    defineField({
      name: "aboutSection",
      title: "About Section",
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
          fields: [
            { name: "bg", type: "mdx", title: "Bulgarian" },
            { name: "en", type: "mdx", title: "English" },
          ],
        }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // Team Section
    defineField({
      name: "teamSection",
      title: "Team Section",
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
          name: "teamMembers",
          type: "array",
          of: [
            defineArrayMember({
              type: "reference",
              to: { type: "teamMember" },
            }),
          ],
          validation: (Rule) => Rule.max(4),
        }),
      ],
    }),

    // Testimonials Section
    defineField({
      name: "testimonialsSection",
      title: "Testimonials Section",
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
          name: "testimonials",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "quote",
                  type: "object",
                  fields: [
                    { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
                    { name: "en", type: "text", title: "English", rows: 3 },
                  ],
                }),
                defineField({
                  name: "author",
                  type: "object",
                  fields: [
                    { name: "bg", type: "string", title: "Bulgarian" },
                    { name: "en", type: "string", title: "English" },
                  ],
                }),
                defineField({
                  name: "treatment",
                  type: "object",
                  fields: [
                    { name: "bg", type: "string", title: "Bulgarian" },
                    { name: "en", type: "string", title: "English" },
                  ],
                }),
                defineField({
                  name: "rating",
                  type: "number",
                  validation: (Rule) => Rule.min(1).max(5),
                  initialValue: 5,
                }),
                defineField({
                  name: "authorImage",
                  type: "image",
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // Before/After Section
    defineField({
      name: "beforeAfterSection",
      title: "Before/After Section",
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
          name: "beforeAfterItems",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "beforeImage",
                  type: "image",
                  title: "Before Image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "afterImage",
                  type: "image",
                  title: "After Image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "description",
                  type: "object",
                  fields: [
                    { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
                    { name: "en", type: "text", title: "English", rows: 2 },
                  ],
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // Contact Section
    defineField({
      name: "contactSection",
      title: "Contact Section",
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
          fields: [
            { name: "bg", type: "mdx", title: "Bulgarian" },
            { name: "en", type: "mdx", title: "English" },
          ],
        }),
      ],
    }),

    // SEO
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
      titleBg: "title.bg",
      titleEn: "title.en",
    },
    prepare({ titleBg, titleEn }) {
      return {
        title: titleBg || titleEn || "Homepage",
        subtitle: "Site Homepage",
      };
    },
  },
});
