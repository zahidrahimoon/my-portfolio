import { MetadataRoute } from "next";
import { projectsShowcase } from "./components/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zahidrahimoon.dev"; // Update this with your actual domain when launching

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
  ];

  const projectUrls = projectsShowcase.items.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...projectUrls];
}
