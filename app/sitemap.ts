import type { MetadataRoute } from "next";

import { getAllCaseStudies } from "@/utils/caseStudies";

const siteUrl = "https://kamsiyonna.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getAllCaseStudies();

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    ...caseStudies.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
