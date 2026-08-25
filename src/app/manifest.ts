import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Georges Gil — Portafolio",
    short_name: "Georges Gil",
    description: "Portafolio profesional de Georges Gil, desarrollador de software.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f7f6",
    theme_color: "#1649d8",
    lang: "es-DO",
  };
}
