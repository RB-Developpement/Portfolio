import type { ProjectDetail } from "@/lib/project-details";

export function ProjectArchitecture({ architecture, planned, slug }: { architecture: NonNullable<ProjectDetail["architecture"]>; planned: boolean; slug: string }) {
  const labels = slug === "nexaris" ? ["Interface React", "Store Zustand", "localStorage", "Supabase optionnel"]
    : slug === "nova-life" ? ["Panneaux et entrées", "Plugins C# / API du jeu", "État du jeu", "SQLite selon module"]
    : slug === "helix" ? ["Frontend React", "API ASP.NET Core", "SQL Server / EF Core"]
    : ["Frontend React", "ASP.NET Core / SignalR", "PostgreSQL / EF Core", "Redis envisagé"];
  return <figure className="case-architecture">
    <figcaption>{architecture.title} <span>{planned ? "Prévisionnel" : "Lecture des sources"}</span></figcaption>
    <svg className="case-diagram" viewBox="0 0 460 280" role="img" aria-labelledby={`${slug}-diagram-title ${slug}-diagram-desc`}>
      <title id={`${slug}-diagram-title`}>{architecture.title}</title>
      <desc id={`${slug}-diagram-desc`}>{architecture.note}</desc>
      <defs><marker id={`${slug}-arrow`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="var(--accent)" /></marker></defs>
      <g stroke="var(--accent)" fill="none" strokeWidth="1.5" markerEnd={`url(#${slug}-arrow)`}>
        <path d="M230 58V101" />
        {labels.length === 4 ? <><path d="M230 160V186H114V219" /><path d="M230 160V186H346V219" /></> : <path d="M230 160V219" />}
      </g>
      {labels.map((label, i) => {
        const x = i < 2 || labels.length === 3 ? 128 : i === 2 ? 12 : 244;
        const y = i === 0 ? 6 : i === 1 ? 106 : 224;
        return <g key={label}><rect x={x} y={y} width="204" height="50" rx="6" fill="var(--background)" stroke="#716e66" /><text x={x+102} y={y+30} textAnchor="middle" fill="var(--foreground)" fontSize="15" fontFamily="Arial, sans-serif">{label}</text></g>;
      })}
    </svg>
    <ol className="case-flow">
      {architecture.nodes.map((node, index) => <li key={node.title}>
        <span className="case-flow-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <h3>{node.title}</h3><p>{node.text}</p>
      </li>)}
    </ol>
    <p className="case-note">{architecture.note}</p>
  </figure>;
}
