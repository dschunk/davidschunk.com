import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-18T04:25:00-04:00");

  return [
    { url: "https://www.davidschunk.com/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://www.davidschunk.com/about", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.davidschunk.com/hire", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.davidschunk.com/research/ai-governance", lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
