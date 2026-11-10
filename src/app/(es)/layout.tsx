import type { Metadata, Viewport } from "next";

import { SiteShell } from "@/components/site-shell";
import { getLocaleMetadata } from "@/lib/portfolio-dictionary";

export const metadata: Metadata = getLocaleMetadata("es");

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1110" },
  ],
};

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
