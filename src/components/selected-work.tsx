import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectEntry } from "@/components/project-entry";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section id="projects" className="bg-surface-secondary">
      <Container width="wide">
        <SectionHeading as="h2" title="selected work" />
        <div className="mt-8 divide-y divide-border border-t border-border">
          {projects.map((project, index) => (
            <ProjectEntry
              key={project.slug}
              project={project}
              reverseMedia={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
