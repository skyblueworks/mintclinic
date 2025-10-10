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
          name: "titleBold",
          type: "object",
          title: "Title (Bold part)",
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
          name: "titleBold",
          type: "object",
          title: "Title (Bold part)",
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
          name: "testimonials",
          type: "array",
          title: "Testimonials (Optional - defaults to Google reviews)",
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

    // Info Section (Individual Approach)
    defineField({
      name: "infoSection",
      title: "Info Section (Individual Approach)",
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
        defineField({
          name: "cards",
          type: "array",
          of: [
            defineArrayMember({
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
                  name: "buttonText",
                  type: "object",
                  fields: [
                    { name: "bg", type: "string", title: "Bulgarian" },
                    { name: "en", type: "string", title: "English" },
                  ],
                }),
                defineField({
                  name: "buttonUrl",
                  type: "string",
                  title: "Button URL",
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // Why Mint Section
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
            defineArrayMember({
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
              ],
            }),
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    // Team Preview Section
    defineField({
      name: "teamPreviewSection",
      title: "Team Preview Section",
      type: "object",
      fields: [
        defineField({
          name: "quote",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "quoteBold",
          type: "object",
          title: "Quote (Bold part)",
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
          name: "buttonText",
          type: "object",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "imageUrl",
          type: "image",
          title: "Team Image",
          options: { hotspot: true },
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: "faqSection",
      title: "FAQ Section",
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
        defineField({
          name: "items",
          type: "array",
          title: "FAQ Items",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  type: "object",
                  fields: [
                    { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
                    { name: "en", type: "text", title: "English", rows: 2 },
                  ],
                }),
                defineField({
                  name: "answer",
                  type: "object",
                  fields: [
                    { name: "bg", type: "text", title: "Bulgarian", rows: 3 },
                    { name: "en", type: "text", title: "English", rows: 3 },
                  ],
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.max(10),
        }),
      ],
    }),

    // Location Section
    defineField({
      name: "locationSection",
      title: "Location Section",
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
          name: "mapEmbedUrl",
          type: "url",
          title: "Google Maps Embed URL",
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
