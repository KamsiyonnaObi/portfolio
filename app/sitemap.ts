import type { MetadataRoute } from "next";

import { client } from "@/.sanity/lib/client";
import { PROJECT_SLUGS_QUERY } from "@/.sanity/lib/queries";

const siteUrl = "https://kamsiyonna.site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    PROJECT_SLUGS_QUERY
  );

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: project._updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
