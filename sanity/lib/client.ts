import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for production performance
  perspective: "published", // Only fetch published documents
  stega: {
    enabled: false, // Disable for production
  },
});
