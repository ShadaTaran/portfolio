import type { ProjectCaseStudy } from "@/types/project-case-study";

export function ProjectMeta({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  const items = [
    { label: "Role", value: caseStudy.role },
    { label: "Context", value: caseStudy.context },
    { label: "Stack", value: caseStudy.technologies.join(" · ") },
  ];

  return (
    <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-sm text-foreground sm:text-base">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
