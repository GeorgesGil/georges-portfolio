import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const displayFont = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const monoFont = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://georgesgil.com"),
  title: { default: "Georges Gil — Desarrollador de software", template: "%s — Georges Gil" },
  description: "Portafolio de Georges Gil, desarrollador de software en Santiago de los Caballeros, República Dominicana.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Georges Gil — Desarrollador de software",
    description: "Software pensado desde el contexto del negocio hasta la entrega.",
    url: "https://georgesgil.com",
    siteName: "Georges Gil",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Georges Gil — Desarrollador de software",
    description: "Software pensado desde el contexto del negocio hasta la entrega.",
  },
};

export const viewport: Viewport = { themeColor: "#f3f7f6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
