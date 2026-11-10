import type { ReactNode } from "react";
import { Bricolage_Grotesque, Literata } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import type { Locale } from "@/lib/portfolio-dictionary";
import "@/app/globals.css";

/*
 * Two voices: Bricolage Grotesque carries the name, the section titles and the
 * labels; Literata sets the prose. A serif for reading and a characterful
 * grotesque for announcing is the whole typographic idea.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
});

const body = Literata({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const langTag: Record<Locale, string> = { es: "es", en: "en" };

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html
      lang={langTag[locale]}
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
