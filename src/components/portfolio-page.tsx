import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Building2,
  Code2,
  Database,
  GitBranch,
  Mail,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { LocalizedThemeToggle } from "@/components/localized-theme-toggle";
import { Button } from "@/components/ui/button";
import {
  contactEmail,
  content,
  github,
  linkedin,
  projects,
  skillGroups,
  type Locale,
  type Skill,
  type SkillGroupCode,
} from "@/lib/portfolio-dictionary";

const skillGroupIcons: Record<SkillGroupCode, LucideIcon> = {
  FE: Code2,
  BE: Server,
  DB: Database,
  OPS: GitBranch,
};

function SkillLogo({ skill }: { skill: Skill }) {
  if ("path" in skill.icon) {
    return (
      <span className="skill-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation" style={{ color: `#${skill.icon.hex}` }}>
          <path d={skill.icon.path} fill="currentColor" />
        </svg>
      </span>
    );
  }

  const Icon = skill.icon;
  return (
    <span className="skill-icon" aria-hidden="true">
      <Icon size={24} aria-hidden="true" focusable="false" />
    </span>
  );
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Georges Gil",
    url: "https://georgesgil.com",
    email: contactEmail,
    jobTitle: t.metadata.jobTitle,
    description: t.metadata.description,
    inLanguage: locale,
    sameAs: [linkedin, github],
    knowsAbout: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
    address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "DO" },
  };

  return (
    <>
      <a className="skip-link" href="#content">{t.skipLink}</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#home" aria-label={locale === "es" ? "Georges Gil, inicio" : "Georges Gil, home"}>
            <span aria-hidden="true">GG</span><span>Georges Gil</span>
          </a>
          <nav aria-label={t.navLabel}>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#contact">{t.nav.contact}</a>
            <div className="locale-switcher" role="group" aria-label={t.languageSwitcherLabel}>
              <Link href="/" hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined} className={locale === "es" ? "locale-active" : undefined}>ES</Link>
              <span aria-hidden="true">/</span>
              <Link href="/en/" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "locale-active" : undefined}>EN</Link>
            </div>
            <LocalizedThemeToggle label={t.themeToggleLabel} />
          </nav>
        </div>
      </header>

      <main id="content">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><MapPin aria-hidden="true" /> {t.hero.location}</p>
            <h1 id="hero-title">{t.hero.titleLead}{" "}<em>{t.hero.titleEmphasis}</em></h1>
            <p className="hero-intro">{t.hero.intro}</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href={`mailto:${contactEmail}`}><Mail data-icon="inline-start" aria-hidden="true" />{t.hero.primaryCta}</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#projects">{t.hero.secondaryCta}<ArrowDownRight data-icon="inline-end" aria-hidden="true" /></a></Button>
            </div>
          </div>

          <div className="profile-card reveal reveal-delay" aria-label={t.profile.label}>
            <div className="profile-card-head"><p>{t.profile.label}</p><Terminal aria-hidden="true" /></div>
            <dl className="profile-details">
              <div><dt>{t.profile.roleLabel}</dt><dd>{t.profile.role.map((line) => <Fragment key={line}>{line}<br /></Fragment>)}</dd></div>
              <div><dt>{t.profile.focusLabel}</dt><dd>{t.profile.focus.map((line) => <Fragment key={line}>{line}<br /></Fragment>)}</dd></div>
              <div>
                <dt>{t.profile.languagesLabel}</dt>
                <dd>{t.profile.languages.map((language, index) => <Fragment key={language.name}>{language.name} <span>· {language.level}</span>{index < t.profile.languages.length - 1 && <br />}</Fragment>)}</dd>
              </div>
            </dl>
            <p className="profile-status"><span aria-hidden="true" /> {t.profile.availability}</p>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">{t.projects.eyebrow}</p><h2 id="projects-title">{t.projects.title}</h2></div>
              <p>{t.projects.description}</p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => {
                const projectCopy = project.copy[locale];
                return (
                  <article className="project-card" key={project.name}>
                    <div className={`project-visual ${project.accent}`}>
                      <Image className="project-shot" src={project.image} alt={projectCopy.alt} fill sizes="(max-width: 900px) 100vw, 45vw" priority={index === 0} />
                      <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
                      <span className="project-index" aria-hidden="true">0{index + 1}</span>
                      <span className="project-caption">{t.projects.caption}</span>
                    </div>
                    <div className="project-content">
                      <div className="project-meta"><span>{projectCopy.type}</span><span>{t.projects.contribution}</span></div>
                      <h3>{project.name}</h3><p>{projectCopy.summary}</p>
                      <Button asChild variant="link" className="project-link"><a href={project.url} target="_blank" rel="noreferrer">{t.projects.visitPrefix}{" "}{project.domain}<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a></Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow">{t.skills.eyebrow}</p><h2 id="skills-title">{t.skills.title}</h2></div>
              <p>{t.skills.description}</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const groupCopy = t.skills.groups[group.code];
                const GroupIcon = skillGroupIcons[group.code];
                return (
                  <article className="skill-group" key={group.code}>
                    <div className="skill-group-head"><span className="skill-group-icon" aria-hidden="true"><GroupIcon size={22} strokeWidth={1.8} focusable="false" /></span><div><h3 id={`skill-${group.code}`}>{groupCopy.name}</h3><p>{groupCopy.description}</p></div></div>
                    <ul className="skill-list" aria-labelledby={`skill-${group.code}`}>
                      {group.skills.map((skill) => <li key={skill.name}><SkillLogo skill={skill} /><span>{skill.name}</span></li>)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="approach shell" id="process" aria-labelledby="process-title">
          <div className="section-heading compact-heading"><div><p className="eyebrow">{t.process.eyebrow}</p><h2 id="process-title">{t.process.title}</h2></div></div>
          <div className="approach-grid">
            {t.process.steps.map((item, index) => (
              <article key={item.label}><div className="approach-marker"><span>0{index + 1}</span>{index < t.process.steps.length - 1 && <i aria-hidden="true" />}</div><p className="mono-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div className="about-mark" aria-hidden="true"><Braces /><span>{t.about.markLineOne}<br />{t.about.markLineTwo}</span></div>
            <div className="about-copy"><p className="eyebrow">{t.about.eyebrow}</p><h2 id="about-title">{t.about.title}</h2>{t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="location-line"><Building2 aria-hidden="true" /><span>{t.about.location}</span></div></div>
          </div>
        </section>

        <section className="contact shell" id="contact" aria-labelledby="contact-title">
          <div><p className="eyebrow">{t.contact.eyebrow}</p><h2 id="contact-title">{t.contact.title}</h2></div>
          <div className="contact-actions">
            <Button asChild size="lg" className="contact-button"><a href={`mailto:${contactEmail}`}><Mail data-icon="inline-start" aria-hidden="true" />{contactEmail}</a></Button>
            <Button asChild size="lg" variant="outline" className="contact-button"><a href={linkedin} target="_blank" rel="noreferrer">{t.contact.linkedin}<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a></Button>
            <Button asChild size="lg" variant="outline" className="contact-button"><a href={github} target="_blank" rel="noreferrer"><Code2 data-icon="inline-start" aria-hidden="true" />{t.contact.github}</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><p>© {new Date().getFullYear()} Georges Gil</p><p>{t.footer.note}</p><a href="#home">{t.footer.backToTop}</a></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
