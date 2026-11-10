import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { SiteNav } from "@/components/site-nav";
import { TechLogo } from "@/components/tech-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  contactEmail,
  content,
  github,
  localePath,
  linkedin,
  projects,
  siteUrl,
  techGroups,
  type Locale,
} from "@/lib/portfolio-dictionary";

const navHrefs = [
  { href: "#work", key: "work" },
  { href: "#stack", key: "stack" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const navItems = navHrefs.map(({ href, key }) => ({ href, label: t.nav[key] }));

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Georges Gil",
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    email: contactEmail,
    jobTitle: t.metadata.jobTitle,
    description: t.metadata.description,
    inLanguage: locale,
    sameAs: [linkedin, github],
    knowsAbout: techGroups.flatMap((group) => group.techs.map((tech) => tech.name)),
    address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "DO" },
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top">
            <BrandMark />
            <span className="brand-name">Georges Gil</span>
          </a>

          <SiteNav items={navItems} ariaLabel={t.navLabel} menuLabel={t.menuLabel} />

          <div className="header-tools">
            <div className="locale" role="group" aria-label={t.languageLabel}>
              {/* Plain anchors, not <Link>: ES and EN live in different root
                  layouts, so this navigation is a full page load by design and
                  a client-side prefetch would only 404. */}
              <a
                href={localePath.es}
                hrefLang="es"
                lang="es"
                aria-current={locale === "es" ? "page" : undefined}
              >
                ES
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={localePath.en}
                hrefLang="en"
                lang="en"
                aria-current={locale === "en" ? "page" : undefined}
              >
                EN
              </a>
            </div>
            <ThemeToggle label={t.themeToggleLabel} />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="masthead" id="top" aria-labelledby="masthead-name">
          <div className="wrap">
            <h1 className="masthead-name" id="masthead-name">
              Georges Gil
            </h1>
            <p className="masthead-role">{t.masthead.role}</p>

            <div className="masthead-foot">
              <p className="masthead-lead">{t.masthead.lead}</p>
              <p className="masthead-meta">
                <span className="status-dot" aria-hidden="true" />
                <span>{t.masthead.availability}</span>
                <span className="meta-sep" aria-hidden="true" />
                <span>{t.masthead.location}</span>
              </p>
            </div>

            <div className="masthead-actions">
              <a className="btn btn-solid" href={`mailto:${contactEmail}`}>
                {t.masthead.primaryCta}
              </a>
              <a className="btn btn-ghost" href="#work">
                {t.masthead.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="section section-work" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">{t.sections.work.label}</p>
              <h2 id="work-title">{t.sections.work.title}</h2>
            </div>
            <p className="section-intro">{t.sections.work.intro}</p>
          </div>

          <div className="projects">
            {projects.map((project) => {
              const copy = project.copy[locale];
              return (
                <article className="project" key={project.name}>
                  <div className="wrap project-inner">
                    <figure className="project-media">
                      {/* eslint-disable-next-line @next/next/no-img-element --
                          Static export runs with images.unoptimized, so next/image
                          cannot emit a srcset; a plain <img> is the only way to
                          serve retina-sharp 2880px captures. */}
                      <img
                        className="project-shot"
                        src={`${project.image}-1280.webp`}
                        srcSet={`${project.image}-960.webp 960w, ${project.image}-1280.webp 1280w, ${project.image}-1920.webp 1920w, ${project.image}-2880.webp 2880w`}
                        sizes="(max-width: 1080px) 92vw, 680px"
                        width={2880}
                        height={1800}
                        alt={copy.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>

                    <div className="project-body">
                      <p className="project-index" aria-hidden="true">
                        {project.index}
                      </p>
                      <h3>{project.name}</h3>
                      <p className="project-deck">{copy.deck}</p>
                      <dl className="project-meta">
                        <div>
                          <dt>{t.projects.typeLabel}</dt>
                          <dd>{copy.type}</dd>
                        </div>
                        <div>
                          <dt>{t.projects.domainLabel}</dt>
                          <dd>{project.domain}</dd>
                        </div>
                      </dl>
                      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                        {t.projects.visit}
                        <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" focusable="false" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section-stack" id="stack" aria-labelledby="stack-title">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">{t.sections.stack.label}</p>
              <h2 id="stack-title">{t.sections.stack.title}</h2>
            </div>
            <p className="section-intro">{t.sections.stack.intro}</p>

            <div className="stack-grid">
              {techGroups.map((group) => {
                const copy = t.techGroups[group.code];
                return (
                  <section className="stack-group" key={group.code} aria-labelledby={`stack-${group.code}`}>
                    <h3 id={`stack-${group.code}`}>{copy.title}</h3>
                    <p className="stack-note">{copy.note}</p>
                    <ul className="stack-list">
                      {group.techs.map((tech) => (
                        <li key={tech.name}>
                          <TechLogo mark={tech.mark} />
                          <span>{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-about" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">{t.sections.about.label}</p>
              <h2 id="about-title">{t.sections.about.title}</h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? "about-lead" : "about-paragraph"}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="facts">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="contact-field" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">{t.sections.contact.label}</p>
              <h2 id="contact-title">{t.sections.contact.title}</h2>
            </div>

            <p className="contact-intro">{t.sections.contact.intro}</p>

            <a className="contact-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>

            <div className="contact-links">
              <a href={linkedin} target="_blank" rel="noreferrer">
                {t.contact.linkedin}
                <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" focusable="false" />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                {t.contact.github}
                <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" focusable="false" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>{t.footer.note}</p>
          <p className="footer-built">{t.footer.builtWith}</p>
          <a href="#top">{t.footer.backToTop}</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
