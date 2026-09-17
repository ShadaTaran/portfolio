import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectMeta } from "@/components/case-study/project-meta";
import { ProjectVisual } from "@/components/project-visual/project-visual";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function ProjectHero({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  return (
    <Section>
      <Container width="wide">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← selected work
        </Link>
        <div className="mt-8 flex flex-col gap-2">
          <span
            className="font-pixel text-sm text-muted-foreground"
            style={{ fontVariationSettings: '"ELSH" 1' }}
          >
            {caseStudy.number}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-muted-foreground">{caseStudy.subtitle}</p>
        </div>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {caseStudy.summary}
        </p>
        <ProjectMeta caseStudy={caseStudy} />
        {caseStudy.liveUrl || caseStudy.repositoryUrl ? (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {caseStudy.liveUrl ? (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${caseStudy.title} — live site`}
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
                aria-label={`${caseStudy.title} — GitHub repository`}
                className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                github
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
        <div className="mt-10">
          <ProjectVisual variant={caseStudy.slug} />
        </div>
      </Container>
    </Section>
  );
}
