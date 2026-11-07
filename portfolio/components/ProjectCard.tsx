import { Plus } from "lucide-react";
import { CardPattern } from "@/components/CardPattern";
import { ZigZagPattern } from "@/components/ZigZagPattern";
import type { Project } from "@/lib/profile";
import Link from "next/link";
import { detailForProject } from "@/lib/project-details";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const planned = project.status === "Planifié";
  const detail = detailForProject(project.id);
  const statusClass = planned ? "planned" : project.status === "En développement" ? "progress" : project.status === "En attente de financement" ? "funding" : "ready";
  const contributionLabel = planned ? "Contribution prévue" : project.contributionType === "software" ? "Développement personnel" : "Conception & pilotage";
  return (
    <article className={`project-card project-${project.id}`} aria-labelledby={`${project.id}-title`}>
      {project.id === "thalos" && <CardPattern color="currentColor" className="project-pattern" />}
      {project.id === "viridian" && <ZigZagPattern color="currentColor" className="project-pattern" />}
      <div className="project-top"><span className="project-index">{String(index).padStart(2, "0")}</span><span className={`status status-${statusClass}`}><span aria-hidden="true" />{project.status}</span></div>
      <p className="project-category">{project.category}</p>
      <h4 id={`${project.id}-title`}>{project.name}</h4>
      <p className="project-description">{project.description}</p>
      <div className="project-contribution">
        <h5>{contributionLabel}</h5>
        <p>{project.contribution}</p>
      </div>
      <div className="project-tech">
        {planned && <h5>Technologies envisagées</h5>}
        <ul className="tag-list" aria-label={`${planned ? "Technologies envisagées pour" : "Technologies du projet"} ${project.name}`}>
          {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <details className="project-details">
        <summary><span>Explorer le projet<span className="sr-only"> {project.name}</span></span><Plus size={18} aria-hidden="true" /></summary>
        <div className="project-detail-content">
          <h5>{planned ? "Objectifs de conception" : "Mon rôle en détail"}</h5>
          <ul>{project.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul>
          <h5>{planned ? "Fonctionnalités prévues" : "Fonctionnalités du projet"}</h5>
          <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
          <h5>{planned ? "Compétences à développer" : "Compétences mobilisées dans mon rôle"}</h5>
          <p>{project.practice}</p>
          {detail && <div className="hero-actions">
            <Link className="button button-outline" href={`/projets/${detail.slug}`}>Découvrir le projet<span className="sr-only"> {project.name}</span></Link>
            {detail.demo && <a className="button button-outline" href={detail.demo} target="_blank" rel="noopener noreferrer">Essayer NEXARIS</a>}
            {detail.pdf && <a className="button button-outline" href={detail.pdf} download>Télécharger le dossier PDF<span className="sr-only"> {project.name}</span></a>}
          </div>}
        </div>
      </details>
    </article>
  );
}
