import Image from "next/image";

import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="doc-section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects with clear scope, stack, and contribution."
        description="Each card is designed to help recruiters and clients understand what was built, why it mattered, and where my contribution fits."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <Card className="project-card" key={project.title}>
            <div className="project-card__media">
              <Image
                alt={project.image.alt}
                height={520}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                src={project.image.src}
                width={800}
              />
            </div>

            <div className="project-card__body">
              <div className="project-card__header">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>

              <p className="project-card__role">
                <span>Role:</span> {project.role}
              </p>

              <div className="tag-row" aria-label={`${project.title} tech stack`}>
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="project-card__links">
                {project.links?.live ? (
                  <ButtonLink external href={project.links.live} variant="text">
                    Live
                  </ButtonLink>
                ) : null}
                {project.links?.github ? (
                  <ButtonLink external href={project.links.github} variant="text">
                    GitHub
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
