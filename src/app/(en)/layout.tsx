import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Syne } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { getLocaleMetadata } from "@/lib/portfolio-dictionary";
import "@/app/globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const displayFont = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const monoFont = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = getLocaleMetadata("en");

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f7f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f2a" },
  ],
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
