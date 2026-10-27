import { ArrowDown, ArrowUpRight, Download, FileText, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Nuxt } from '@/components/Nuxt';
import portrait from "@/public/romain.jpg";
import { Tailwind } from '@/components/Tailwind';
import { CSharp } from '@/components/CSharp';
import { Next } from '@/components/Next';
import { React } from '@/components/React';
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skillGroups, experience, education, profile } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Romain Beka, accueil">rb<span>.</span></a>
        <nav aria-label="Navigation principale">
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#parcours">Parcours</a>
          <a className="nav-contact" href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="orange-line" /> Romain Beka · Portfolio</p>
            <h1 id="hero-title">Développeur<br /><span>Full Stack.</span></h1>
            <p className="hero-lead">De l’interface à la logique métier.</p>
            <p className="hero-description">Développeur orienté produit, spécialisé en C#/.NET et React. Je transforme des idées complexes en applications concrètes, avec une forte appétence pour l’IA, l’automatisation et les applications desktop.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explorer mes projets <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button button-outline" href={profile.cv} download="CV-Romain-Beka.pdf">Télécharger le CV <Download size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="portrait-card" aria-label="Présentation de Romain Beka">
            <div className="portrait-label"><span>Romain Beka</span><span>FR</span></div>
            <Image src={portrait} alt="Portrait de Romain Beka de profil, devant un ciel au coucher du soleil" sizes="(max-width: 700px) 80vw, (max-width: 1000px) 35vw, 330px" preload className="portrait-image" />
            <div className="portrait-caption"><span><MapPin size={15} aria-hidden="true" /> France</span><span>C# / .NET / React</span></div>
          </aside>
          <div className="hero-bottom"><span>Web & desktop</span><span>Intelligence artificielle</span><span>Applications métier</span></div>
        </section>

        <section className="section-wrap projects-section" id="projects" aria-labelledby="projects-title">
          <span id="about" className="anchor-alias" aria-hidden="true" />
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Projets</p>
              <h2 id="projects-title">Des idées qui<br /><span>prennent forme.</span></h2>
            </div>
            <p>Six projets, du web au desktop.<br />Des fonctionnalités et un état d’avancement pour chacun.</p>
          </div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index + 1} />)}</div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Compétences</p>
                <h2 id="skills-title">Une pratique<br /><span>transversale.</span></h2>
              </div>
              <p>Interface, logique métier, données et IA.<br />Les technologies et outils de mon parcours.</p>
            </div>
            <div className="skill-highlights" aria-label="Technologies principales">
              <span><CSharp /> C# / .NET</span>
              <span><React /> React / TypeScript</span>
              <span><Nuxt /> Nuxt</span>
              <span><Tailwind /> Tailwind CSS</span>
            </div>
            <div className="skills-grid">{skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul className="tag-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </div>
        </section>

        <section className="section-wrap journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Parcours</p>
              <h2 id="journey-title">Apprendre.<br /><span>Mettre en pratique.</span></h2>
            </div>
          </div>
          <div className="journey-grid">
            <div>
              <h3 className="column-title">Expériences</h3>
              {experience.map(item => (
                <article className="timeline-item" key={item.company}>
                  <p className="date">{item.dates}</p>
                  <h4>{item.title}</h4>
                  <p className="organization">{item.company}</p>
                  <p className="location">{item.location}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div>
              <h3 className="column-title">Formations</h3>
              {education.map(item => (
                <article className="timeline-item" key={item.school}>
                  <p className="date">{item.dates}</p>
                  <h4>{item.title}</h4>
                  <p className="organization">{item.school}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap approach-section" id="approche" aria-labelledby="approach-title">
          <p className="eyebrow">04 / Approche</p>
          <h2 id="approach-title">Le produit comme fil conducteur.</h2>
          <div className="approach-grid">
            <div>
              <span className="step-number">01</span>
              <h3>Partir du besoin</h3>
              <p>Transformer des idées complexes en applications concrètes.</p>
            </div>
            <div>
              <span className="step-number">02</span>
              <h3>Relier les usages</h3>
              <p>Concevoir l’interface et la logique métier dans une même démarche.</p>
            </div>
            <div>
              <span className="step-number">03</span>
              <h3>Explorer & automatiser</h3>
              <p>Développer des applications autour de l’IA locale et de l’automatisation de tâches.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">05 / Contact</p>
              <h2 id="contact-title">Un projet.<br />Une conversation.</h2>
              <p>Une question ou une opportunité ?<br />Échangeons sur vos besoins.</p>
            </div>
            <div className="contact-links">
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} aria-hidden="true" /></a>
              <a href={`tel:${profile.phoneHref}`}><Phone size={18} aria-hidden="true" />{profile.phone}</a>
              <div className="social-links">
                <a id="linkedin" href={profile.linkedin}><Linkedin size={18} aria-hidden="true" />LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
                <a id="github" href={profile.github}><Github size={18} aria-hidden="true" />GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
              <a className="cv-link" href={profile.cv} download="CV-Romain-Beka.pdf"><Download size={18} aria-hidden="true" />Télécharger mon CV · PDF</a>
              <a className="cv-link" href={profile.cv}><FileText size={18} aria-hidden="true" />Consulter le CV dans le navigateur</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-wrap site-footer">
        <a className="wordmark" href="#home" aria-label="Romain Beka, retour à l’accueil">rb<span>.</span></a>
        <p>Romain Beka · Développeur Full Stack</p>
        <span className="built-with"><Next /> Réalisé avec Next.js</span>
        <a href="#home">Retour en haut ↑</a>
      </footer>

    </>
  );
}