import { ArrowDownRight, ArrowUpRight, Braces, Building2, Code2, Mail, MapPin, MessageSquare, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const linkedin = "https://www.linkedin.com/in/georgesgil22/";
const github = "https://github.com/GeorgesGil";
const contactEmail = "contact@georgesgil.com";
const projects = [
  { name: "Constructora Real", domain: "constructorareal.com.do", url: "https://constructorareal.com.do/", sector: "Bienes raíces", summary: "Una presencia digital enfocada en acercar proyectos habitacionales a quienes buscan su próximo hogar.", accent: "project-blue" },
  { name: "Loto Real", domain: "lotoreal.com.do", url: "https://www.lotoreal.com.do/", sector: "Entretenimiento", summary: "Una plataforma pública para consultar resultados, conocer productos y seguir la experiencia de la marca.", accent: "project-coral" },
];
const approach = [
  { step: "Contexto", title: "Entender antes de construir", text: "Empiezo por la operación, las personas y el resultado que realmente necesita el negocio." },
  { step: "Sistema", title: "Convertir claridad en producto", text: "Organizo la experiencia y la tecnología alrededor de decisiones simples, útiles y mantenibles." },
  { step: "Impacto", title: "Entregar para el mundo real", text: "Cuido rendimiento, accesibilidad y detalle para que el producto funcione fuera de la presentación." },
];
const skillGroups = [
  { code: "FE", name: "Frontend", description: "Interfaces claras para productos que las personas usan a diario.", skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js"] },
  { code: "BE", name: "Backend", description: "Servicios y lógica que mantienen cada experiencia en movimiento.", skills: ["Node.js", "NestJS"] },
  { code: "DB", name: "Data", description: "Datos confiables para decisiones, operaciones y continuidad.", skills: ["SQL Server", "MySQL", "PostgreSQL", "Redis"] },
  { code: "OPS", name: "Delivery", description: "Flujos de entrega que acercan el código a producción con orden.", skills: ["Git", "GitHub", "GitHub Actions", "Cloudflare"] },
];
const knowsAbout = skillGroups.flatMap((group) => group.skills);

export default function Home() {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Georges Gil", url: "https://georgesgil.com", email: contactEmail, jobTitle: "Desarrollador de software", sameAs: [linkedin, github], knowsAbout, address: { "@type": "PostalAddress", addressLocality: "Santiago de los Caballeros", addressCountry: "DO" } };
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#inicio" aria-label="Georges Gil, inicio"><span aria-hidden="true">GG</span><span>Georges Gil</span></a>
          <nav aria-label="Navegación principal"><a href="#proyectos">Proyectos</a><a href="#skills">Skills</a><a href="#enfoque">Enfoque</a><a href="#contacto">Contacto</a><ThemeToggle /></nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero shell" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><MapPin aria-hidden="true" /> Santiago, República Dominicana</p>
            <h1 id="hero-title">Construyo software que mueve <em>negocios reales.</em></h1>
            <p className="hero-intro">Soy Georges Gil, desarrollador de software. Conecto contexto, producto y tecnología para crear experiencias digitales claras, rápidas y listas para usarse.</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href={linkedin} target="_blank" rel="noreferrer"><MessageSquare data-icon="inline-start" aria-hidden="true" />Conectar en LinkedIn</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#proyectos">Ver proyectos<ArrowDownRight data-icon="inline-end" aria-hidden="true" /></a></Button>
            </div>
          </div>

          <div className="route-board reveal reveal-delay" aria-label="Ruta de trabajo: contexto, sistema e impacto">
            <div className="route-board-head"><p>Ruta de entrega</p><Route aria-hidden="true" /></div>
            <ol className="route-list">
              <li><span className="route-node">01</span><div><small>Origen</small><strong>Contexto</strong></div></li>
              <li><span className="route-node">02</span><div><small>Construcción</small><strong>Sistema</strong></div></li>
              <li><span className="route-node route-node-end">03</span><div><small>Destino</small><strong>Impacto</strong></div></li>
            </ol>
            <p className="route-status"><span aria-hidden="true" /> Disponible para nuevas conversaciones</p>
          </div>
        </section>

        <section className="projects-section" id="proyectos" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Trabajo seleccionado</p><h2 id="projects-title">Productos que ya viven en el mundo.</h2></div>
              <p>Dos experiencias públicas en las que he participado, construidas para sectores y audiencias diferentes.</p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <div className={`project-visual ${project.accent}`} aria-hidden="true"><span className="browser-bar"><i /><i /><i /></span><span className="project-index">0{index + 1}</span><span className="visual-name">{project.name}</span><span className="visual-route" /></div>
                  <div className="project-content">
                    <div className="project-meta"><span>{project.sector}</span><span>Participación en desarrollo</span></div>
                    <h3>{project.name}</h3><p>{project.summary}</p>
                    <Button asChild variant="link" className="project-link"><a href={project.url} target="_blank" rel="noreferrer">Visitar {project.domain}<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a></Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow">Mapa de capacidades</p><h2 id="skills-title">Herramientas para llevar una idea hasta la entrega.</h2></div>
              <p>Una base técnica pensada para conectar la interfaz, la lógica y el camino que lleva un producto al mundo real.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.code}>
                  <div className="skill-group-head"><span className="skill-code" aria-hidden="true">{group.code}</span><div><h3 id={`skill-${group.code}`}>{group.name}</h3><p>{group.description}</p></div></div>
                  <ul className="skill-list" aria-labelledby={`skill-${group.code}`}>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach shell" id="enfoque" aria-labelledby="approach-title">
          <div className="section-heading compact-heading"><div><p className="eyebrow">Cómo trabajo</p><h2 id="approach-title">Una ruta clara, sin saltarse el porqué.</h2></div></div>
          <div className="approach-grid">
            {approach.map((item, index) => (
              <article key={item.step}><div className="approach-marker"><span>0{index + 1}</span>{index < approach.length - 1 && <i aria-hidden="true" />}</div><p className="mono-label">{item.step}</p><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div className="about-mark" aria-hidden="true"><Braces /><span>Software<br />con contexto</span></div>
            <div className="about-copy"><p className="eyebrow">Sobre mí</p><h2 id="about-title">Tecnología cerca de la operación.</h2><p>Desarrollo soluciones digitales desde Santiago de los Caballeros. Mi experiencia incluye colaborar con productos de Loto Real del Cibao y con la presencia digital de Constructora Real.</p><p>Me interesa el punto donde una necesidad del negocio se convierte en una experiencia que las personas pueden entender y usar.</p><div className="location-line"><Building2 aria-hidden="true" /><span>República Dominicana · Trabajo digital</span></div></div>
          </div>
        </section>

        <section className="contact shell" id="contacto" aria-labelledby="contact-title">
          <div><p className="eyebrow">Próxima ruta</p><h2 id="contact-title">Hablemos de lo que quieres poner en movimiento.</h2></div>
          <div className="contact-actions">
            <Button asChild size="lg" className="contact-button"><a href={`mailto:${contactEmail}`}><Mail data-icon="inline-start" aria-hidden="true" />{contactEmail}</a></Button>
            <Button asChild size="lg" variant="outline" className="contact-button"><a href={linkedin} target="_blank" rel="noreferrer">Escribirme en LinkedIn<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></a></Button>
            <Button asChild size="lg" variant="outline" className="contact-button"><a href={github} target="_blank" rel="noreferrer"><Code2 data-icon="inline-start" aria-hidden="true" />Ver mi GitHub</a></Button>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><p>© {new Date().getFullYear()} Georges Gil</p><p>Diseñado y desarrollado desde Santiago, RD.</p><a href="#inicio">Volver arriba ↑</a></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
