import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siCloudflare,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siGithubactions,
  siJavascript,
  siJira,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siTailwindcss,
  siTypeorm,
  siTypescript,
  siVuedotjs,
} from "simple-icons";
import { AzureOriginal, MicrosoftsqlserverOriginal, SlackOriginal } from "devicons-react";
import { AwsMark } from "@/components/aws-mark";

export type Locale = "es" | "en";
export type DeviconComponent = ComponentType<SVGProps<SVGElement> & { size?: number | string }>;

/** A tech mark: either a simple-icons glyph (one path, brand colour applied) or a
 *  devicons React component that already ships its brand colours. */
export type TechMark =
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "devicon"; icon: DeviconComponent };

export type Tech = { name: string; mark: TechMark };
export type TechGroupCode = "frontend" | "backend" | "data" | "ops";

export type TechGroup = {
  code: TechGroupCode;
  techs: Tech[];
};

export type Project = {
  index: string;
  name: string;
  domain: string;
  url: string;
  image: string;
  copy: Record<Locale, { type: string; deck: string; alt: string }>;
};

export type LocalizedContent = {
  metadata: {
    title: string;
    description: string;
    openGraphDescription: string;
    openGraphLocale: string;
    jobTitle: string;
  };
  skipLink: string;
  navLabel: string;
  menuLabel: string;
  nav: { work: string; stack: string; about: string; contact: string };
  languageLabel: string;
  themeToggleLabel: string;
  masthead: {
    role: string;
    location: string;
    availability: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    work: { label: string; title: string; intro: string };
    stack: { label: string; title: string; intro: string };
    about: { label: string; title: string };
    contact: { label: string; title: string; intro: string };
  };
  projects: { visit: string; typeLabel: string; domainLabel: string };
  techGroups: Record<TechGroupCode, { title: string; note: string }>;
  about: {
    paragraphs: string[];
    facts: Array<{ label: string; value: string }>;
  };
  contact: { emailLabel: string; linkedin: string; github: string };
  footer: { note: string; builtWith: string; backToTop: string };
};

export const siteUrl = "https://georgesgil.com";

/** Internal routes, used for navigation. Never absolute: an absolute URL would
 *  send a visitor on localhost (or a preview deploy) to production. */
export const localePath: Record<Locale, string> = {
  es: "/",
  en: "/en/",
};

/** Absolute URLs, used only for canonical/OpenGraph metadata. */
export const languageUrls: Record<Locale, string> = {
  es: `${siteUrl}${localePath.es}`,
  en: `${siteUrl}${localePath.en}`,
};

export const linkedin = "https://www.linkedin.com/in/georgesgil22/";
export const github = "https://github.com/GeorgesGil";
export const contactEmail = "contact@georgesgil.com";

const simple = (icon: SimpleIcon): TechMark => ({ kind: "simple", icon });
const devicon = (icon: DeviconComponent): TechMark => ({ kind: "devicon", icon });

export const techGroups: TechGroup[] = [
  {
    code: "frontend",
    techs: [
      { name: "TypeScript", mark: simple(siTypescript) },
      { name: "JavaScript", mark: simple(siJavascript) },
      { name: "React.js", mark: simple(siReact) },
      { name: "Next.js", mark: simple(siNextdotjs) },
      { name: "Vue.js", mark: simple(siVuedotjs) },
      { name: "Tailwind CSS", mark: simple(siTailwindcss) },
    ],
  },
  {
    code: "backend",
    techs: [
      { name: "Node.js", mark: simple(siNodedotjs) },
      { name: "NestJS", mark: simple(siNestjs) },
      { name: "Express.js", mark: simple(siExpress) },
      { name: "TypeORM", mark: simple(siTypeorm) },
      { name: "Prisma", mark: simple(siPrisma) },
    ],
  },
  {
    code: "data",
    techs: [
      { name: "SQL Server", mark: devicon(MicrosoftsqlserverOriginal) },
      { name: "MySQL", mark: simple(siMysql) },
      { name: "PostgreSQL", mark: simple(siPostgresql) },
      { name: "Redis", mark: simple(siRedis) },
    ],
  },
  {
    code: "ops",
    techs: [
      { name: "Git", mark: simple(siGit) },
      { name: "GitHub", mark: simple(siGithub) },
      { name: "GitHub Actions", mark: simple(siGithubactions) },
      { name: "Cloudflare", mark: simple(siCloudflare) },
      { name: "AWS", mark: devicon(AwsMark) },
      { name: "Azure", mark: devicon(AzureOriginal) },
      { name: "Docker", mark: simple(siDocker) },
      { name: "Jira", mark: simple(siJira) },
      { name: "Slack", mark: devicon(SlackOriginal) },
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "Constructora Real",
    domain: "constructorareal.com.do",
    url: "https://constructorareal.com.do/",
    image: "/projects/constructora-real",
    copy: {
      es: {
        type: "Sitio web público",
        deck: "El sitio público de una constructora: proyectos residenciales, fichas de torre y contacto comercial.",
        alt: "Página de inicio de Constructora Real con cielo azul y torres residenciales",
      },
      en: {
        type: "Public website",
        deck: "The public site for a construction company: residential projects, tower listings, and sales contact.",
        alt: "Constructora Real homepage with a blue sky and residential towers",
      },
    },
  },
  {
    index: "02",
    name: "Loto Real",
    domain: "lotoreal.com.do",
    url: "https://www.lotoreal.com.do/",
    image: "/projects/loto-real",
    copy: {
      es: {
        type: "Plataforma web",
        deck: "Resultados de lotería en vivo, números ganadores y consulta rápida para Loto Real del Cibao.",
        alt: "Sitio de Loto Real con resultados de lotería y números ganadores",
      },
      en: {
        type: "Web platform",
        deck: "Live lottery results, winning numbers, and fast lookups for Loto Real del Cibao.",
        alt: "Loto Real site showing lottery results and winning numbers",
      },
    },
  },
  {
    index: "03",
    name: "SoloTicketsRD",
    domain: "soloticketsrd.com",
    url: "https://soloticketsrd.com/reservar",
    image: "/projects/soloticketsrd",
    copy: {
      es: {
        type: "Plataforma de reservas",
        deck: "Reservas de mesas y entradas para eventos, en un flujo de tres pasos: evento, mesas y datos de pago.",
        alt: "Pantalla de reserva de SoloTicketsRD con el paso uno, selección de evento",
      },
      en: {
        type: "Booking platform",
        deck: "Table and ticket reservations for events, in a three-step flow: event, tables, and payment details.",
        alt: "SoloTicketsRD booking screen showing step one, event selection",
      },
    },
  },
];

export const content: Record<Locale, LocalizedContent> = {
  es: {
    metadata: {
      title: "Georges Gil — Ingeniero de Sistemas y Desarrollador de Software",
      description:
        "Portafolio de Georges Gil, Ingeniero de Sistemas y Desarrollador de Software en Santiago, República Dominicana. Proyectos publicados, stack técnico y contacto.",
      openGraphDescription:
        "Ingeniero de Sistemas y Desarrollador de Software en Santiago, República Dominicana. Proyectos, stack y contacto.",
      openGraphLocale: "es_DO",
      jobTitle: "Ingeniero de Sistemas y Desarrollador de Software",
    },
    skipLink: "Saltar al contenido",
    navLabel: "Navegación principal",
    menuLabel: "Menú",
    nav: { work: "Trabajo", stack: "Stack", about: "Sobre mí", contact: "Contacto" },
    languageLabel: "Idioma",
    themeToggleLabel: "Cambiar entre modo claro y oscuro",
    masthead: {
      role: "Ingeniero de Sistemas · Desarrollador de Software",
      location: "Santiago, República Dominicana",
      availability: "Disponible para roles",
      lead: "Construyo aplicaciones web: la interfaz, el servidor y la base de datos.",
      primaryCta: "Escríbeme",
      secondaryCta: "Ver el trabajo",
    },
    sections: {
      work: {
        label: "Trabajo",
        title: "Tres sitios en producción.",
        intro:
          "Proyectos públicos en cuyo desarrollo he participado, cada uno con su enlace vivo para que los abras por tu cuenta.",
      },
      stack: {
        label: "Stack",
        title: "Las herramientas con las que trabajo.",
        intro: "De la interfaz a la entrega, agrupadas por la parte del sistema que resuelven.",
      },
      about: { label: "Sobre mí", title: "Cómo trabajo." },
      contact: {
        label: "Contacto",
        title: "¿Hablamos?",
        intro: "Estoy abierto a roles de desarrollo web. Escríbeme cuando quieras.",
      },
    },
    projects: { visit: "Abrir sitio", typeLabel: "Tipo", domainLabel: "Dominio" },
    techGroups: {
      frontend: { title: "Interfaz", note: "Lo que la persona ve y toca." },
      backend: { title: "Servicios", note: "La lógica y las APIs que sostienen el producto." },
      data: { title: "Datos", note: "Persistencia y caché, elegidas por claridad." },
      ops: { title: "DevOps y colaboración", note: "Entrega, automatización y trabajo en equipo." },
    },
    about: {
      paragraphs: [
        "Soy Georges Gil, Ingeniero de Sistemas y Desarrollador de Software, con base en Santiago, República Dominicana. Trabajo entre interfaces, APIs, datos y flujos de entrega.",
        "Reviso el comportamiento y los casos límite antes de dar algo por terminado.",
      ],
      facts: [
        { label: "Rol", value: "Ingeniero de Sistemas · Desarrollador de Software" },
        { label: "Enfoque", value: "Sistemas web y interfaces de producto" },
        { label: "Idiomas", value: "Español nativo · Inglés B1–B2" },
        { label: "Base", value: "Santiago, República Dominicana" },
      ],
    },
    contact: {
      emailLabel: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      note: "Georges Gil · Portafolio",
      builtWith: "Next.js · TypeScript · Tailwind CSS · Cloudflare Pages",
      backToTop: "Volver arriba",
    },
  },
  en: {
    metadata: {
      title: "Georges Gil — Systems Engineer & Software Developer",
      description:
        "Portfolio of Georges Gil, Systems Engineer and Software Developer based in Santiago, Dominican Republic. Shipped projects, technical stack, and contact.",
      openGraphDescription:
        "Systems Engineer and Software Developer in Santiago, Dominican Republic. Projects, stack, and contact.",
      openGraphLocale: "en_US",
      jobTitle: "Systems Engineer and Software Developer",
    },
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    menuLabel: "Menu",
    nav: { work: "Work", stack: "Stack", about: "About", contact: "Contact" },
    languageLabel: "Language",
    themeToggleLabel: "Switch between light and dark mode",
    masthead: {
      role: "Systems Engineer · Software Developer",
      location: "Santiago, Dominican Republic",
      availability: "Open to roles",
      lead: "I build web applications: the interface, the server, and the database.",
      primaryCta: "Email me",
      secondaryCta: "See the work",
    },
    sections: {
      work: {
        label: "Work",
        title: "Three sites in production.",
        intro:
          "Public projects I have helped build, each with its live link so you can open it yourself.",
      },
      stack: {
        label: "Stack",
        title: "The tools I work with.",
        intro: "From interface to delivery, grouped by the part of the system they solve.",
      },
      about: { label: "About", title: "How I work." },
      contact: {
        label: "Contact",
        title: "Let's talk.",
        intro: "I'm open to web development roles. Write whenever you like.",
      },
    },
    projects: { visit: "Open site", typeLabel: "Type", domainLabel: "Domain" },
    techGroups: {
      frontend: { title: "Interface", note: "What a person sees and touches." },
      backend: { title: "Services", note: "The logic and APIs holding the product up." },
      data: { title: "Data", note: "Persistence and cache, chosen for clarity." },
      ops: { title: "DevOps & collaboration", note: "Delivery, automation, and teamwork." },
    },
    about: {
      paragraphs: [
        "I'm Georges Gil, a Systems Engineer and Software Developer based in Santiago, Dominican Republic. I work across interfaces, APIs, data, and delivery workflows.",
        "I check behaviour and edge cases before calling something finished.",
      ],
      facts: [
        { label: "Role", value: "Systems Engineer · Software Developer" },
        { label: "Focus", value: "Web systems and product interfaces" },
        { label: "Languages", value: "Spanish native · English B1–B2" },
        { label: "Based in", value: "Santiago, Dominican Republic" },
      ],
    },
    contact: {
      emailLabel: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      note: "Georges Gil · Portfolio",
      builtWith: "Next.js · TypeScript · Tailwind CSS · Cloudflare Pages",
      backToTop: "Back to top",
    },
  },
};

export function getLocaleMetadata(locale: Locale): Metadata {
  const copy = content[locale].metadata;
  const shareImage = {
    url: `${siteUrl}/og.jpg`,
    width: 1200,
    height: 630,
    alt: copy.jobTitle,
  };

  return {
    metadataBase: new URL(siteUrl),
    title: copy.title,
    description: copy.description,
    applicationName: "Georges Gil",
    alternates: {
      canonical: languageUrls[locale],
      languages: { es: languageUrls.es, en: languageUrls.en },
    },
    openGraph: {
      title: copy.title,
      description: copy.openGraphDescription,
      url: languageUrls[locale],
      siteName: "Georges Gil",
      locale: copy.openGraphLocale,
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [shareImage.url],
    },
  };
}
