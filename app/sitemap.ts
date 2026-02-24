import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import {
  allPostSlugsQuery,
  allCategorySlugsQuery,
  allServiceSlugsWithCategoryQuery,
  allTeamMemberSlugsQuery,
} from "@/sanity/lib/queries";

const BASE_URL = "https://mintclinic.com";

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}/bg${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        bg: `${BASE_URL}/bg${path}`,
        en: `${BASE_URL}/en${path}`,
      },
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticEntries: MetadataRoute.Sitemap = [
    entry("", "monthly", 1.0),
    entry("/about-us", "monthly", 0.8),
    entry("/contacts", "monthly", 0.8),
    entry("/gallery", "monthly", 0.6),
    entry("/pricing", "monthly", 0.8),
    entry("/services", "monthly", 0.8),
    entry("/team", "monthly", 0.8),
    entry("/blog", "weekly", 0.6),
    entry("/terms", "yearly", 0.3),
    entry("/privacy-policy", "yearly", 0.3),
  ];

  // Dynamic pages from Sanity
  const [posts, categories, services, teamMembers] = await Promise.all([
    client.fetch<{ slug: string }[]>(allPostSlugsQuery),
    client.fetch<{ slug: string }[]>(allCategorySlugsQuery),
    client.fetch<{ slug: string; category: string }[]>(
      allServiceSlugsWithCategoryQuery,
    ),
    client.fetch<{ slug: string }[]>(allTeamMemberSlugsQuery),
  ]);

  const blogEntries = posts.map((post) =>
    entry(`/blog/${post.slug}`, "monthly", 0.6),
  );

  const categoryEntries = categories.map((cat) =>
    entry(`/services/${cat.slug}`, "monthly", 0.8),
  );

  const serviceEntries = services.map((svc) =>
    entry(`/services/${svc.category}/${svc.slug}`, "monthly", 0.8),
  );

  const teamEntries = teamMembers.map((member) =>
    entry(`/team/${member.slug}`, "monthly", 0.8),
  );

  return [
    ...staticEntries,
    ...blogEntries,
    ...categoryEntries,
    ...serviceEntries,
    ...teamEntries,
  ];
}
