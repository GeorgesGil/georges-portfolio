import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Georges Gil — Portafolio / Portfolio",
    short_name: "Georges Gil",
    description: "Portafolio personal de Georges Gil, Ingeniero de Sistemas y Desarrollador de Software. Personal portfolio of Georges Gil, Systems Engineer and Software Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f7f6",
    theme_color: "#1649d8",
    lang: "es",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
