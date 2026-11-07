import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { projects } from "@/lib/profile";
import { projectDetails } from "@/lib/project-details";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectArchitecture } from "@/components/ProjectArchitecture";
import "../projects.css";

export function generateStaticParams() { return projectDetails.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails.find(item => item.slug === slug);
  if (!detail) return {};
  const project = projects.find(item => item.id === detail.projectId)!;
  const title = `${project.name} — Romain Beka · Développeur Full Stack`;
  const description = `${detail.lead} ${project.status}. ${project.contribution}`;
  return { title, description, alternates: { canonical: `/projets/${slug}` }, openGraph: { title, description, url: `/projets/${slug}`, type: "website", locale: "fr_FR" }, twitter: { title, description, card: "summary" } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const detail = projectDetails.find(item => item.slug === slug);
  if (!detail) notFound();
  const project = projects.find(item => item.id === detail.projectId)!;
  const planned = project.status === "Planifié";
  const personal = project.contributionType === "software";
  const documentedOnly = !planned && !detail.architecture;
  return <>
    <a href="#main" className="skip-link">Aller au contenu</a>
    <header className="site-header">
      <Link className="wordmark" href="/#home" aria-label="Romain Beka, accueil">rb<span>.</span></Link>
      <nav aria-label="Navigation principale"><Link href="/#projects">Projets</Link><Link href="/#skills">Compétences</Link><Link href="/#parcours">Parcours</Link><Link className="nav-contact" href="/#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></Link></nav>
    </header>
    <main id="main" className={`case-page case-${slug}`}>
      <div className="section-wrap">
        <Link href="/#projects" className="case-back"><ArrowLeft size={16} aria-hidden="true" /> Tous les projets</Link>
        <header className="case-hero">
          <p className="eyebrow"><span className="orange-line" />{project.category}</p>
          <div className="case-title-row"><h1>{project.name}</h1><span className={`status ${planned ? "status-planned" : ""}`}><span aria-hidden="true" />{project.status}</span></div>
          <p className="case-lead">{detail.lead}</p>
          <p className="case-description">{project.description}</p>
          <div className="hero-actions">
            {detail.demo && <a className="button button-primary" href={detail.demo} target="_blank" rel="noopener noreferrer">Essayer NEXARIS <ArrowUpRight size={17} aria-hidden="true" /></a>}
            {detail.pdf && <a className="button button-outline" href={detail.pdf} download>Télécharger le dossier PDF <Download size={17} aria-hidden="true" /></a>}
            <a className="button button-outline" href="#architecture">{planned ? "Architecture envisagée" : "Explorer le projet"}</a>
          </div>
          {detail.demo && <p className="case-small">Application publique : connexion requise. La galerie présente le mode local.</p>}
        </header>
        <nav className="case-index" aria-label="Sommaire du projet">
          <a href="#objectif">Objectif</a><a href="#fonctionnalites">Fonctionnalités</a><a href="#galerie">Galerie</a><a href="#architecture">Architecture</a><a href="#contribution">Contribution</a><a href="#documentation">Documentation</a>
        </nav>
        <section id="objectif" className="case-section case-intro">
          <div><p className="eyebrow">01 / Le contexte</p><h2>{planned ? "L’intention du projet" : "Pourquoi ce projet ?"}</h2><p>{detail.objective}</p></div>
          <aside className="case-panel"><h3>Pour qui ?</h3><p>{detail.audience}</p><h3>{planned ? "Technologies envisagées" : documentedOnly ? "Technologies indiquées au CV" : "Technologies identifiées"}</h3><ul className="tag-list">{(detail.technologies ?? project.technologies).map(tech => <li key={tech}>{tech}</li>)}</ul></aside>
        </section>
        <section id="fonctionnalites" className="case-section">
          <p className="eyebrow">02 / Les usages</p><h2>{planned ? "Fonctionnalités prévues" : documentedOnly ? "Périmètre documenté" : "Fonctionnalités examinées"}</h2>
          <p className="case-evidence">{detail.evidence}</p>
          <div className="case-feature-grid">{detail.functions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>
        <section id="galerie" className="case-section">
          <p className="eyebrow">03 / L’interface</p><h2>{detail.images.length ? "Le projet à l’écran" : "Galerie à venir"}</h2>
          {detail.images.length ? <><p className="case-section-lead">Captures authentiques du 28 octobre 2026. Les exemples du mode local ne constituent pas des résultats de production.</p><ProjectGallery images={detail.images} name={project.name} /><p className="case-note">{detail.missingImages}</p></> : <div className="case-empty"><p>{detail.missingImages}</p></div>}
        </section>
        <section id="architecture" className="case-section">
          <p className="eyebrow">04 / La technique</p><h2>{planned ? "Une architecture à construire" : "Comment le projet s’organise"}</h2>
          {detail.architecture ? <ProjectArchitecture architecture={detail.architecture} planned={planned} slug={slug} /> : <p className="case-empty">{slug === "gemma-arena" ? "La version technique actuelle doit être confirmée avant de représenter les composants et leurs échanges." : "Les sources disponibles ne permettent pas encore de vérifier le backend, la persistance et les échanges entre composants."} Aucun schéma d’architecture n’est extrapolé à partir de la seule stack.</p>}
          {detail.backstage && <div className="case-backstage"><h3>Dans les coulisses du développement</h3>{detail.backstage.map(item => <article key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</div>}
        </section>
        <section id="contribution" className="case-section case-intro">
          <div><p className="eyebrow">05 / Mon rôle</p><h2>{planned ? "Contribution prévue" : personal ? "Développement personnel" : "Conception & pilotage"}</h2><p>{project.contribution}</p><p className="case-note">{planned ? "Projet personnel destiné à être développé principalement par moi-même. Aucune implémentation réalisée à ce stade." : personal ? "J’ai développé la majorité du code, avec une assistance IA occasionnelle." : "L’implémentation a été principalement réalisée avec l’assistance de l’IA. Mon rôle porte sur la conception, les usages et le pilotage du projet."}</p></div>
          <div className="case-panel"><h3>{planned ? "Objectifs de travail" : "Périmètre de ma contribution"}</h3><ul className="case-list">{project.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <section className="case-section">
          <p className="eyebrow">06 / Recul technique</p><h2>{planned ? "Enjeux et feuille de route" : "Défis, limites et perspectives"}</h2><p>{detail.challenges}</p>
          {detail.roadmap && <ol className="case-roadmap">{detail.roadmap.map(item => <li key={item}>{item}</li>)}</ol>}
          <div className="case-perspective"><h3>{planned ? "Objectifs d’apprentissage" : "Prochaine étape de validation"}</h3><p>{detail.outlook}</p></div>
        </section>
        <section id="documentation" className="case-section">
          <p className="eyebrow">07 / Aller plus loin</p><h2>Documentation & références</h2>
          {detail.pdf ? <a className="button button-primary" href={detail.pdf} download>Télécharger le dossier PDF <Download size={17} aria-hidden="true" /></a> : <p>{planned ? "Le dossier de réalisation sera préparé après le développement et sa vérification." : "Le dossier technique sera ajouté lorsque les sources et la version du projet permettront de l’étayer."}</p>}
          <ul className="case-source-list">{detail.sources.map(source => <li key={source}>{source}</li>)}</ul>
        </section>
        <nav className="case-related" aria-label="Autres projets"><h2>Continuer la visite</h2><div>{projectDetails.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/projets/${item.slug}`}>{projects.find(p => p.id === item.projectId)!.name}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}</div><Link className="case-back" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> Retour aux cartes</Link></nav>
      </div>
    </main>
    <footer className="site-footer section-wrap"><p>Romain Beka · Développeur Full Stack</p><Link href="/#contact">Parlons de votre projet <ArrowUpRight size={14} aria-hidden="true" /></Link></footer>
  </>;
}
