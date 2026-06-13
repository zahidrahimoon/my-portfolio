import { MetadataRoute } from "next";
import { getCollectionSlugs } from "@/lib/data/collections";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://zahidrahimoon.dev"; // Update this with your actual domain when launching

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];

  const slugs = await getCollectionSlugs("projects");
  const projectUrls = slugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...projectUrls];
}
