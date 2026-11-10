import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Georges Gil — Portafolio / Portfolio",
    short_name: "Georges Gil",
    description:
      "Portafolio de Georges Gil, Ingeniero de Sistemas y Desarrollador de Software. Portfolio of Georges Gil, Systems Engineer and Software Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f2ed",
    theme_color: "#0f3a2e",
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
