import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function ProjectLinks({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  if (!caseStudy.liveUrl && !caseStudy.repositoryUrl) {
    return null;
  }

  return (
    <Section spacing="compact" className="border-t border-border">
      <Container>
        <h2 className="text-heading font-semibold tracking-tight">
          project links
        </h2>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {caseStudy.liveUrl ? (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${caseStudy.title} — live site (opens in a new tab)`}
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              live
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          {caseStudy.repositoryUrl ? (
            <a
              href={caseStudy.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${caseStudy.title} — GitHub repository (opens in a new tab)`}
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              github
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
