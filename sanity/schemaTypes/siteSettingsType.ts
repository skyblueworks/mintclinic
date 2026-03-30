import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document with _id: "siteSettings"
  fields: [
    defineField({
      name: "noPromotionsText",
      title: "No promotions message",
      type: "object",
      description:
        "Shown on the promotions page when there are no active promotions.",
      fields: [
        defineField({
          name: "bg",
          title: "Bulgarian",
          type: "string",
          initialValue:
            "В момента няма активни промоции. Следете ни за предстоящи оферти.",
        }),
        defineField({
          name: "en",
          title: "English",
          type: "string",
          initialValue:
            "There are no active promotions at the moment. Stay tuned for upcoming offers.",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
