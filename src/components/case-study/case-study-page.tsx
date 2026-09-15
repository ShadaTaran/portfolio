import { ProjectHero } from "@/components/case-study/project-hero";
import { ProjectSection } from "@/components/case-study/project-section";
import { ProjectLinks } from "@/components/case-study/project-links";
import type { ProjectCaseStudy } from "@/types/project-case-study";

export function CaseStudyPage({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  return (
    <main>
      <ProjectHero caseStudy={caseStudy} />
      {caseStudy.sections.map((section) => (
        <ProjectSection
          key={section.title}
          title={section.title}
          items={section.items}
          variant={section.variant}
          narrow={section.narrow}
        />
      ))}
      <ProjectLinks caseStudy={caseStudy} />
    </main>
  );
}
