import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://movegrid.in";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/partners`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/b2b`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/invest`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
