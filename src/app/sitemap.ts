import type { MetadataRoute } from "next";
import { languageUrls } from "@/lib/portfolio-dictionary";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      es: languageUrls.es,
      en: languageUrls.en,
    },
  };

  return [
    { url: languageUrls.es, alternates, changeFrequency: "monthly", priority: 1 },
    { url: languageUrls.en, alternates, changeFrequency: "monthly", priority: 1 },
  ];
}
