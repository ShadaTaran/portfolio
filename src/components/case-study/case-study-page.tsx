import { ProjectHero } from "@/components/case-study/project-hero";
import { ProjectSection } from "@/components/case-study/project-section";
import { ProjectLinks } from "@/components/case-study/project-links";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function CaseStudyPage({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  const { sections } = caseStudy;

  return (
    <main>
      <ProjectHero caseStudy={caseStudy} />
      {sections.overview ? (
        <ProjectSection title="Overview" items={sections.overview} />
      ) : null}
      {sections.challenge ? (
        <ProjectSection title="Challenge" items={sections.challenge} />
      ) : null}
      {sections.solution ? (
        <ProjectSection title="Solution" items={sections.solution} />
      ) : null}
      {sections.features ? (
        <ProjectSection
          title="Key Features"
          items={sections.features}
          variant="list"
          narrow={false}
        />
      ) : null}
      {sections.technicalDecisions ? (
        <ProjectSection
          title="Technical Decisions"
          items={sections.technicalDecisions}
          variant="list"
        />
      ) : null}
      {sections.outcome ? (
        <ProjectSection title="Current State" items={sections.outcome} />
      ) : null}
      <ProjectLinks caseStudy={caseStudy} />
    </main>
  );
}
