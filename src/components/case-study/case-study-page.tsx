import { ProjectHero } from "@/components/case-study/project-hero";
import { ProjectSection } from "@/components/case-study/project-section";
import { ProjectLinks } from "@/components/case-study/project-links";
import { CaseStudyTldr } from "@/components/case-study/case-study-tldr";
import { CaseStudyToc } from "@/components/case-study/case-study-toc";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DashboardContinueVisual } from "@/components/case-study/markly/dashboard-continue-visual";
import { DomainModelVisual } from "@/components/case-study/markly/domain-model-visual";
import { ResumeDecisionVisual } from "@/components/case-study/markly/resume-decision-visual";
import { MergeUndoVisual } from "@/components/case-study/markly/merge-undo-visual";
import { slugify } from "@/lib/slugify";
import type { ProjectCaseStudy } from "@/types/project-case-study";

// Inline visuals per case study, keyed by the slugified title of the section
// they follow so they can't silently drift out of sync with it. Keyed by
// case study first because section titles like "Overview" repeat.
const visualsAfterSection: Record<string, Record<string, React.ComponentType>> = {
  markly: {
    overview: DashboardContinueVisual,
    "modeling-the-work-separately-from-the-source": DomainModelVisual,
    "knowing-where-to-resume": ResumeDecisionVisual,
    "duplicates-merges-and-undo": MergeUndoVisual,
  },
};

export function CaseStudyPage({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  const sectionsWithIds = caseStudy.sections.map((section, index) => ({
    ...section,
    id: slugify(section.title),
    index: String(index + 1).padStart(2, "0"),
  }));

  // Long-form case studies get the TOC + reading-column treatment; a short
  // one would read better as a simple stack of sections.
  const hasToc = caseStudy.sections.length >= 6;

  return (
    <main id="main-content">
      <ProjectHero caseStudy={caseStudy} />
      {caseStudy.tldr?.length ? <CaseStudyTldr items={caseStudy.tldr} /> : null}

      {hasToc ? (
        <Section spacing="compact">
          <Container width="wide">
            <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
              <CaseStudyToc
                entries={sectionsWithIds.map((s) => ({
                  id: s.id,
                  index: s.index,
                  title: s.title,
                }))}
              />
              <div className="flex flex-col">
                {sectionsWithIds.map((section) => {
                  const Visual =
                    visualsAfterSection[caseStudy.slug]?.[section.id];
                  return (
                    <div
                      key={section.title}
                      className="border-t border-border first:border-t-0"
                    >
                      <ProjectSection
                        plain
                        id={section.id}
                        index={section.index}
                        title={section.title}
                        items={section.items}
                        variant={section.variant}
                        narrow={section.narrow ?? true}
                      />
                      {Visual ? (
                        <div className="pb-10 sm:pb-14">
                          <Visual />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      ) : (
        sectionsWithIds.map((section) => (
          <ProjectSection
            key={section.title}
            index={section.index}
            title={section.title}
            items={section.items}
            variant={section.variant}
            narrow={section.narrow}
          />
        ))
      )}

      <ProjectLinks caseStudy={caseStudy} />
    </main>
  );
}
