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
  siJira,
  siJavascript,
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
import { MicrosoftsqlserverOriginal, SlackOriginal } from "devicons-react";

export type Locale = "es" | "en";
export type DeviconComponent = ComponentType<SVGProps<SVGElement> & { size?: number | string }>;
export type SkillIcon = SimpleIcon | DeviconComponent;
export type Skill = { name: string; icon: SkillIcon };
export type SkillGroupCode = "FE" | "BE" | "DB" | "OPS";

export type SkillGroup = {
  code: SkillGroupCode;
  skills: Skill[];
};

export type Project = {
  name: string;
  domain: string;
  url: string;
  image: string;
  accent: string;
  copy: Record<Locale, { type: string; summary: string; alt: string }>;
};

export type LocalizedContent = {
  metadata: {
    title: string;
    description: string;
    openGraphDescription: string;
    openGraphLocale: string;
    jobTitle: string;
  };
  languageSwitcherLabel: string;
  themeToggleLabel: string;
  skipLink: string;
  navLabel: string;
  nav: {
    projects: string;
    skills: string;
    process: string;
    contact: string;
  };
  hero: {
    location: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
  };
  profile: {
    label: string;
    roleLabel: string;
    role: string[];
    focusLabel: string;
    focus: string[];
    languagesLabel: string;
    languages: Array<{ name: string; level: string }>;
    availability: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    caption: string;
    contribution: string;
    visitPrefix: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Record<SkillGroupCode, { name: string; description: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ label: string; title: string; text: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    location: string;
    markLineOne: string;
    markLineTwo: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    linkedin: string;
    github: string;
  };
  footer: {
    note: string;
    backToTop: string;
  };
};

export const siteUrl = "https://georgesgil.com";
export const languageUrls: Record<Locale, string> = {
  es: `${siteUrl}/`,
  en: `${siteUrl}/en/`,
};

export const linkedin = "https://www.linkedin.com/in/georgesgil22/";
export const github = "https://github.com/GeorgesGil";
export const contactEmail = "contact@georgesgil.com";

export const skillGroups: SkillGroup[] = [
  {
    code: "FE",
    skills: [
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Vue.js", icon: siVuedotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    code: "BE",
    skills: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "NestJS", icon: siNestjs },
      { name: "Express.js", icon: siExpress },
      { name: "TypeORM", icon: siTypeorm },
      { name: "Prisma", icon: siPrisma },
    ],
  },
  {
    code: "DB",
    skills: [
      { name: "SQL Server", icon: MicrosoftsqlserverOriginal },
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Redis", icon: siRedis },
    ],
  },
  {
    code: "OPS",
    skills: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "GitHub Actions", icon: siGithubactions },
      { name: "Cloudflare", icon: siCloudflare },
      { name: "Docker", icon: siDocker },
      { name: "Jira", icon: siJira },
      { name: "Slack", icon: SlackOriginal },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Constructora Real",
    domain: "constructorareal.com.do",
    url: "https://constructorareal.com.do/",
    image: "/projects/constructora-real.png",
    accent: "project-blue",
    copy: {
      es: {
        type: "Sitio web público",
        summary: "Participé en el desarrollo del sitio web público de Constructora Real.",
        alt: "Página de inicio de Constructora Real con cielo azul y edificios residenciales",
      },
      en: {
        type: "Public website",
        summary: "I participated in the development of Constructora Real's public website.",
        alt: "Constructora Real website homepage with a blue sky and residential buildings",
      },
    },
  },
  {
    name: "Loto Real",
    domain: "lotoreal.com.do",
    url: "https://www.lotoreal.com.do/",
    image: "/projects/loto-real.png",
    accent: "project-coral",
    copy: {
      es: {
        type: "Plataforma web",
        summary: "Participé en el desarrollo de la experiencia web pública de Loto Real.",
        alt: "Sitio web de Loto Real con resultados de lotería y su interfaz azul",
      },
      en: {
        type: "Web platform",
        summary: "I participated in the development of Loto Real's public web experience.",
        alt: "Loto Real website showing lottery results and the blue Loto Real interface",
      },
    },
  },
];

export const content: Record<Locale, LocalizedContent> = {
  es: {
    metadata: {
      title: "Georges Gil — Ingeniero de Sistemas y Desarrollador de Software",
      description: "Portafolio personal de Georges Gil, Ingeniero de Sistemas y Desarrollador de Software en Santiago, República Dominicana.",
      openGraphDescription: "Portafolio personal de Georges Gil, Ingeniero de Sistemas y Desarrollador de Software.",
      openGraphLocale: "es_DO",
      jobTitle: "Ingeniero de Sistemas y Desarrollador de Software",
    },
    languageSwitcherLabel: "Idioma",
    themeToggleLabel: "Cambiar entre modo claro y oscuro",
    skipLink: "Saltar al contenido",
    navLabel: "Navegación principal",
    nav: { projects: "Proyectos", skills: "Tecnologías", process: "Proceso", contact: "Contacto" },
    hero: {
      location: "Santiago, República Dominicana",
      titleLead: "Ingeniero de Sistemas",
      titleEmphasis: "& Desarrollador de Software.",
      intro: "Soy Georges Gil. Desarrollo productos web con una mirada de sistemas: interfaces claras, bases confiables y espacio para crecer.",
      primaryCta: "Escríbeme",
      secondaryCta: "Ver proyectos",
    },
    profile: {
      label: "Perfil profesional",
      roleLabel: "Rol",
      role: ["Ingeniero de Sistemas", "Desarrollador de Software"],
      focusLabel: "Enfoque",
      focus: ["Sistemas web", "Interfaces de producto"],
      languagesLabel: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1–B2" },
      ],
      availability: "Disponible para conversaciones profesionales",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos en los que he participado.",
      description: "Sitios públicos y experiencias web cuyo desarrollo compartí con un equipo.",
      caption: "Proyecto activo",
      contribution: "Participación",
      visitPrefix: "Visitar",
    },
    skills: {
      eyebrow: "Herramientas técnicas",
      title: "Tecnologías con las que trabajo.",
      description: "Un conjunto práctico de herramientas para interfaces, servicios, datos, automatización y colaboración.",
      groups: {
        FE: { name: "Frontend", description: "Interfaces que ayudan a entender y usar cada producto." },
        BE: { name: "Backend", description: "Servicios y APIs que dan una base confiable a cada interfaz." },
        DB: { name: "Datos", description: "Capas de datos elegidas por claridad, rendimiento y mantenimiento." },
        OPS: { name: "DevOps y colaboración", description: "Automatización, despliegue y colaboración para mantener el trabajo técnico claro y coordinado." },
      },
    },
    process: {
      eyebrow: "Proceso de trabajo",
      title: "Un camino claro desde la pregunta hasta el software funcionando.",
      steps: [
        { label: "Entender", title: "Empezar por la pregunta real", text: "Aclaro el objetivo, las personas involucradas y las restricciones antes de elegir una solución." },
        { label: "Diseñar", title: "Dar forma al sistema", text: "Organizo la interfaz, los datos y los límites para que el producto tenga una dirección clara." },
        { label: "Construir", title: "Hacer confiables los detalles", text: "Trabajo en piezas pequeñas y comprensibles, manteniendo la experiencia cerca de la intención original." },
        { label: "Validar", title: "Revisar en el mundo real", text: "Compruebo comportamiento, accesibilidad y casos límite antes de considerar listo el trabajo." },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Software construido con curiosidad y cuidado.",
      paragraphs: [
        "Soy Ingeniero de Sistemas y Desarrollador de Software, con base en Santiago, República Dominicana. Trabajo entre interfaces, APIs, datos y flujos de entrega.",
        "Valoro las soluciones directas, el código legible y los productos que se sienten tranquilos al usar.",
      ],
      location: "Santiago · República Dominicana",
      markLineOne: "Sistemas",
      markLineTwo: "con intención",
    },
    contact: {
      eyebrow: "Hablemos",
      title: "¿Tienes un proyecto o rol en mente?",
      linkedin: "Conectar en LinkedIn",
      github: "Ver GitHub",
    },
    footer: {
      note: "Ingeniero de Sistemas · Desarrollador de Software",
      backToTop: "Volver arriba ↑",
    },
  },
  en: {
    metadata: {
      title: "Georges Gil — Systems Engineer & Software Developer",
      description: "Personal portfolio of Georges Gil, Systems Engineer and Software Developer based in Santiago, Dominican Republic.",
      openGraphDescription: "Personal portfolio of Georges Gil, Systems Engineer and Software Developer.",
      openGraphLocale: "en_US",
      jobTitle: "Systems Engineer and Software Developer",
    },
    languageSwitcherLabel: "Language",
    themeToggleLabel: "Toggle light and dark mode",
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    nav: { projects: "Projects", skills: "Skills", process: "Process", contact: "Contact" },
    hero: {
      location: "Santiago, Dominican Republic",
      titleLead: "Systems Engineer",
      titleEmphasis: "& Software Developer.",
      intro: "I'm Georges Gil. I build web products with a systems mindset: clear interfaces, reliable foundations, and room to grow.",
      primaryCta: "Email me",
      secondaryCta: "View projects",
    },
    profile: {
      label: "Professional profile",
      roleLabel: "Role",
      role: ["Systems Engineer", "Software Developer"],
      focusLabel: "Focus",
      focus: ["Web systems", "Product interfaces"],
      languagesLabel: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B1–B2" },
      ],
      availability: "Open to professional conversations",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects I have contributed to.",
      description: "Public websites and web experiences I participated in building with a team.",
      caption: "Live project",
      contribution: "Contribution",
      visitPrefix: "Visit",
    },
    skills: {
      eyebrow: "Technical toolkit",
      title: "Technologies I work with.",
      description: "A practical toolkit spanning interfaces, services, data, automation, and collaboration.",
      groups: {
        FE: { name: "Frontend", description: "Interfaces that make products easy to understand and use." },
        BE: { name: "Backend", description: "Services and APIs that give each interface a reliable foundation." },
        DB: { name: "Data", description: "Data layers chosen for clarity, performance, and maintainability." },
        OPS: { name: "DevOps & Collaboration", description: "Automation, deployment, and teamwork tools that keep technical work clear and coordinated." },
      },
    },
    process: {
      eyebrow: "Working process",
      title: "A clear path from question to working software.",
      steps: [
        { label: "Understand", title: "Start with the real question", text: "I clarify the goal, the people involved, and the constraints before choosing a solution." },
        { label: "Design", title: "Give the system a shape", text: "I map the interface, data, and boundaries so the product has a clear direction." },
        { label: "Build", title: "Make the details dependable", text: "I work in small, understandable pieces and keep the experience close to the original intent." },
        { label: "Validate", title: "Check it in the real world", text: "I review the behavior, accessibility, and edge cases before calling the work ready." },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Software built with curiosity and care.",
      paragraphs: [
        "I'm a Systems Engineer and Software Developer based in Santiago, Dominican Republic. I work across interfaces, APIs, data, and delivery workflows.",
        "I value straightforward solutions, readable code, and products that feel calm to use.",
      ],
      location: "Santiago · Dominican Republic",
      markLineOne: "Systems",
      markLineTwo: "with intent",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Have a project or role in mind?",
      linkedin: "Connect on LinkedIn",
      github: "View GitHub",
    },
    footer: {
      note: "Systems Engineer · Software Developer",
      backToTop: "Back to top ↑",
    },
  },
};

export function getLocaleMetadata(locale: Locale): Metadata {
  const copy = content[locale].metadata;

  return {
    metadataBase: new URL(siteUrl),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: languageUrls[locale],
      languages: {
        es: languageUrls.es,
        en: languageUrls.en,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.openGraphDescription,
      url: languageUrls[locale],
      siteName: "Georges Gil",
      locale: copy.openGraphLocale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description,
    },
  };
}
