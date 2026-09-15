import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function ProjectLinks({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  if (!caseStudy.liveUrl && !caseStudy.repositoryUrl) {
    return null;
  }

  return (
    <Section spacing="compact">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Project Links
        </h2>
        <div className="mt-6 flex flex-wrap gap-5">
          {caseStudy.liveUrl ? (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${caseStudy.title} — live site`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:text-base"
            >
              Live
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {caseStudy.repositoryUrl ? (
            <a
              href={caseStudy.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${caseStudy.title} — GitHub repository`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:text-base"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
