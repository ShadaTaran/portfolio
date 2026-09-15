import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectMeta } from "@/components/case-study/project-meta";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function ProjectHero({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  return (
    <Section>
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Selected Work
        </Link>
        <div className="mt-8 flex flex-col gap-2">
          <span className="font-mono text-sm text-muted-foreground">
            {caseStudy.number}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {caseStudy.subtitle}
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {caseStudy.summary}
        </p>
        <ProjectMeta caseStudy={caseStudy} />
      </Container>
    </Section>
  );
}
