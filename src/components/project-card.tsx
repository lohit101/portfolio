import type { CSSProperties } from "react";
import { ProjectPreview } from "./previews";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  linkLabel: string;
  accent: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className="project-artwork">
        <ProjectPreview kind={project.id} />
      </div>
      <div className="project-caption">
        <div>
          <h3><span className="project-name">{project.name}</span></h3>
          <p>{project.category}</p>
        </div>
        <span className="project-action" aria-hidden="true">
          <span className="project-action-label">{project.linkLabel}</span>
          <span className="project-arrow">
            <span>↗</span><span>↗</span>
          </span>
        </span>
      </div>
      <p className="project-description">{project.description}</p>
    </>
  );

  return (
    <article className={`project project-${index}`} data-reveal style={{ "--project-accent": project.accent } as CSSProperties}>
      <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${project.linkLabel} (opens in a new tab)`}>
        {content}
      </a>
    </article>
  );
}
