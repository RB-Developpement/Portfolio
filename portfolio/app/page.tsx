import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, FileText, Github, Linkedin, MapPin, Phone } from "lucide-react";
import portrait from "@/public/romain.jpg";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CSharp } from "@/components/CSharp";
import { ReactLogo } from "@/components/ReactLogo";
import { Nuxt } from "@/components/Nuxt";
import { Tailwind } from "@/components/Tailwind";
import { Next } from "@/components/Next";
import { projectGroups, skillGroups, skillContexts, experience, education, profile } from "@/lib/profile";

export default function Home() {
  const orderedProjects = projectGroups.flatMap(group => group.projects);
  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Romain Beka, accueil">rb<span>.</span></a>
        <nav aria-label="Navigation principale"><a href="#projects">Projets</a><a href="#skills">Compétences</a><a href="#parcours">Parcours</a><a className="nav-contact" href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="orange-line" /> Romain Beka · Portfolio</p>
            <h1 id="hero-title">Développeur<br /><span>Full Stack.</span></h1>
            <p className="hero-lead">De l’interface à la logique métier.</p>
            <p className="hero-description">Je développe des applications web et des logiciels en C#/.NET, React et TypeScript : interfaces, logique métier et données. NEXARIS et NOVA LIFE / AMNESIA illustrent ma pratique du code. Je conçois également des projets d’automatisation et d’intelligence artificielle.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explorer mes projets <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button button-outline" href={profile.cv} download="CV-Romain-Beka.pdf">Télécharger le CV <Download size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="portrait-card" aria-label="Présentation de Romain Beka"><div className="portrait-label"><span>Romain Beka</span><span>FR</span></div><Image src={portrait} alt="Portrait de Romain Beka de profil, devant un ciel au coucher du soleil" sizes="(max-width: 700px) 80vw, (max-width: 1000px) 35vw, 330px" preload className="portrait-image" /><div className="portrait-caption"><span><MapPin size={15} aria-hidden="true" /> France</span><span>C# / .NET / React</span></div></aside>
          <div className="hero-bottom"><span>Web & desktop</span><span>Intelligence artificielle</span><span>Applications métier</span></div>
        </section>
        <section className="section-wrap projects-section" id="projects" aria-labelledby="projects-title">
          <span id="about" className="anchor-alias" aria-hidden="true" />
          <div className="section-heading"><div><p className="eyebrow">01 / Projets</p><h2 id="projects-title">Des idées qui<br /><span>prennent forme.</span></h2></div><p>Huit projets, deux formes de contribution.<br />Réalisations, expérimentations et projets planifiés : mon rôle et l’état d’avancement de chacun.</p></div>
          {projectGroups.map(group => (
            <section className="project-group" key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
              <div className="project-group-heading">
                <h3 id={`${group.id}-title`}>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ProjectGrid>
                {group.projects.map(project => (
                  <ProjectCard key={project.id} project={project} index={orderedProjects.indexOf(project) + 1} />
                ))}
              </ProjectGrid>
            </section>
          ))}
        </section>
        <section className="skills-section" id="skills" aria-labelledby="skills-title"><div className="section-wrap">
          <div className="section-heading"><div><p className="eyebrow">02 / Compétences</p><h2 id="skills-title">Une pratique<br /><span>transversale.</span></h2></div><p>Développement personnel, conception et pilotage.<br />Chaque technologie est présentée dans son contexte d’utilisation.</p></div>
          <div className="skill-highlights" aria-label="Technologies de mes réalisations personnelles"><span><CSharp /> C# / .NET</span><span><ReactLogo /> React / TypeScript</span><span><Tailwind /> Tailwind CSS</span></div>
          <p className="skills-note">Ces mentions précisent le contexte d’utilisation, sans attribuer de niveau de maîtrise. « Assistance partielle » désigne une pratique personnelle avec l’appui de l’IA ; « Contexte de projet », une technologie des projets que je conçois et pilote.</p>
          <div className="skills-grid">
            {skillGroups.map(group => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                {skillContexts.map(context => {
                  const items = group[context.key];
                  return items?.length ? (
                    <div className="skill-context-list" key={context.key} data-context={context.key}>
                      <h4>{context.label}</h4>
                      <ul className="tag-list">
                        {items.map(item => <li key={item}>{item === "Nuxt" && <Nuxt className="skill-icon" />}{item}</li>)}
                      </ul>
                    </div>
                  ) : null;
                })}
              </div>
            ))}
          </div>
        </div></section>
        <section className="section-wrap journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="section-heading"><div><p className="eyebrow">03 / Parcours</p><h2 id="journey-title">Apprendre.<br /><span>Mettre en pratique.</span></h2></div></div>
          <div className="journey-grid"><div><h3 className="column-title">Expériences</h3>{experience.map(item => <article className="timeline-item" key={item.company}><p className="date">{item.dates}</p><h4>{item.title}</h4><p className="organization">{item.company}</p><p className="location">{item.location}</p><p>{item.description}</p></article>)}</div><div><h3 className="column-title">Formations</h3>{education.map(item => <article className="timeline-item" key={item.school}><p className="date">{item.dates}</p><h4>{item.title}</h4><p className="organization">{item.school}</p><p>{item.description}</p></article>)}</div></div>
        </section>
        <section className="section-wrap approach-section" id="approche" aria-labelledby="approach-title"><p className="eyebrow">04 / Approche</p><h2 id="approach-title">Le produit comme fil conducteur.</h2><div className="approach-grid"><div><span className="step-number">01</span><h3>Partir du besoin</h3><p>Définir les objectifs, les fonctionnalités et les usages d’une application.</p></div><div><span className="step-number">02</span><h3>Programmer & intégrer</h3><p>Développer des interfaces et de la logique métier, comme dans NEXARIS et les plugins NOVA LIFE / AMNESIA.</p></div><div><span className="step-number">03</span><h3>Concevoir & piloter</h3><p>Structurer les fonctionnalités, organiser les expérimentations et accompagner les évolutions du produit.</p></div></div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-wrap contact-inner"><div><p className="eyebrow">05 / Contact</p><h2 id="contact-title">Un projet.<br />Une conversation.</h2><p>Une question ou une opportunité ?<br />Échangeons sur vos besoins.</p></div><div className="contact-links"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} aria-hidden="true" /></a><a href={`tel:${profile.phoneHref}`}><Phone size={18} aria-hidden="true" />{profile.phone}</a><div className="social-links"><a id="linkedin" href={profile.linkedin}><Linkedin size={18} aria-hidden="true" />LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a><a id="github" href={profile.github}><Github size={18} aria-hidden="true" />GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div><a className="cv-link" href={profile.cv} download="CV-Romain-Beka.pdf"><Download size={18} aria-hidden="true" />Télécharger mon CV · PDF</a><a className="cv-link" href={profile.cv}><FileText size={18} aria-hidden="true" />Consulter le CV dans le navigateur</a></div></div></section>
      </main>
      <footer className="section-wrap site-footer"><a className="wordmark" href="#home" aria-label="Romain Beka, retour à l’accueil">rb<span>.</span></a><p>Romain Beka · Développeur Full Stack</p><span className="built-with"><Next /> Réalisé avec Next.js</span><a href="#home">Retour en haut ↑</a></footer>
    </>
  );
}
