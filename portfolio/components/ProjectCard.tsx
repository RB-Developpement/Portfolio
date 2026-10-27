import { Plus } from "lucide-react";
import { CardPattern } from "@/components/CardPattern";
import { ZigZagPattern } from "@/components/ZigZagPattern";
import type { Project } from "@/lib/profile";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const statusClass = project.status === "En développement" ? "progress" : project.status === "En attente de financement" ? "funding" : "ready";
  return (
    <article className={`project-card project-${project.id} ${project.featured ? "featured" : "secondary"}`} aria-labelledby={`${project.id}-title`}>
      {project.id === "thalos" && <CardPattern color="currentColor" className="project-pattern" />}
      {project.id === "viridian" && <ZigZagPattern color="currentColor" className="project-pattern" />}
      <div className="project-top"><span className="project-index">{String(index).padStart(2, "0")}</span><span className={`status status-${statusClass}`}><span aria-hidden="true" />{project.status}</span></div>
      <div className="project-body"><p className="project-category">{project.category}</p><h3 id={`${project.id}-title`}>{project.name}</h3><p className="project-description">{project.description}</p><ul className="tag-list project-tech" aria-label={`Technologies de ${project.name}`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
      <details className="project-details"><summary><span>Explorer le projet<span className="sr-only"> {project.name}</span></span><Plus size={18} aria-hidden="true" /></summary><div className="project-detail-content"><h4>Fonctionnalités</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><h4>Pratique technique</h4><p>{project.practice}</p></div></details>
    </article>
  );
}
