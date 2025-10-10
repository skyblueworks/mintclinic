import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
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

    // Contact Information
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "address",
          type: "object",
          fields: [
            { name: "bg", type: "text", title: "Bulgarian", rows: 2 },
            { name: "en", type: "text", title: "English", rows: 2 },
          ],
        }),
        defineField({
          name: "phone",
          type: "string",
          title: "Phone Number",
        }),
        defineField({
          name: "email",
          type: "string",
          title: "Email Address",
        }),
        defineField({
          name: "mapUrl",
          type: "url",
          title: "Google Maps URL",
        }),
        defineField({
          name: "mapEmbedUrl",
          type: "url",
          title: "Google Maps Embed URL",
          description: "The embed URL for the map iframe",
        }),
      ],
    }),

    // Contact Form Section
    defineField({
      name: "contactForm",
      title: "Contact Form",
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
          name: "fields",
          type: "object",
          title: "Form Field Labels",
          fields: [
            defineField({
              name: "name",
              type: "object",
              title: "Name Field",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "email",
              type: "object",
              title: "Email Field",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "phone",
              type: "object",
              title: "Phone Field",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "message",
              type: "object",
              title: "Message Field",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
          ],
        }),
        defineField({
          name: "submitButton",
          type: "object",
          title: "Submit Button",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "submittingButton",
          type: "object",
          title: "Submitting Button (Loading state)",
          fields: [
            { name: "bg", type: "string", title: "Bulgarian" },
            { name: "en", type: "string", title: "English" },
          ],
        }),
        defineField({
          name: "validation",
          type: "object",
          title: "Validation Messages",
          fields: [
            defineField({
              name: "nameRequired",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "emailInvalid",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "phoneInvalid",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
          ],
        }),
        defineField({
          name: "messages",
          type: "object",
          title: "Response Messages",
          fields: [
            defineField({
              name: "success",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
            defineField({
              name: "error",
              type: "object",
              fields: [
                { name: "bg", type: "string", title: "Bulgarian" },
                { name: "en", type: "string", title: "English" },
              ],
            }),
          ],
        }),
      ],
    }),

    // Map Section
    defineField({
      name: "mapSection",
      title: "Map Section",
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
          name: "clinicImage",
          type: "image",
          title: "Clinic Image",
          options: { hotspot: true },
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
        title: titleBg || titleEn || "Contact Page",
        subtitle: "Contact Page",
      };
    },
  },
});
