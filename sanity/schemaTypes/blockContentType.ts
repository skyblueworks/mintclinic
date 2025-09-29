import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Reference",
                name: "reference",
                type: "reference",
                to: [{ type: "service" }, { type: "page" }, { type: "post" }],
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineArrayMember({
      name: "callToAction",
      type: "object",
      title: "Call to Action",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
        },
        {
          name: "buttonUrl",
          type: "string",
          title: "Button URL",
        },
        {
          name: "backgroundColor",
          type: "string",
          title: "Background Color",
          options: {
            list: [
              { title: "Light Blue", value: "light-blue" },
              { title: "Green", value: "green" },
              { title: "White", value: "white" },
            ],
          },
        },
      ],
    }),
    defineArrayMember({
      name: "testimonial",
      type: "object",
      title: "Testimonial",
      fields: [
        {
          name: "quote",
          type: "text",
          title: "Quote",
        },
        {
          name: "authorImage",
          type: "image",
          title: "Author Photo",
          options: { hotspot: true },
        },
        {
          name: "treatment",
          type: "string",
          title: "Treatment Received",
        },
      ],
    }),
    defineArrayMember({
      name: "beforeAfter",
      type: "object",
      title: "BeforeAfter",
      fields: [
        {
          name: "beforeImage",
          type: "image",
          title: "Before Image",
        },
        {
          name: "afterImage",
          type: "image",
          title: "After Image",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
      ],
    }),
  ],
});
