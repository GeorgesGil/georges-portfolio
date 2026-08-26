import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      es: "https://georgesgil.com/",
      en: "https://georgesgil.com/en/",
    },
  };

  return [
    { url: "https://georgesgil.com/", alternates, changeFrequency: "monthly", priority: 1 },
    { url: "https://georgesgil.com/en/", alternates, changeFrequency: "monthly", priority: 1 },
  ];
}
