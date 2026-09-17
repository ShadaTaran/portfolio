import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

const bullets = [
  "Built administrative interfaces for a queue-management platform using Next.js, React, TypeScript, and Tailwind CSS.",
  "Integrated REST APIs through a Backend-for-Frontend (BFF) architecture backed by Microsoft SQL Server.",
  "Implemented user management, department and purpose assignment, and queue/display configuration workflows.",
  "Added search, pagination, and validation across administrative screens.",
];

export function Experience() {
  return (
    <Section id="experience" spacing="compact">
      <Container>
        <SectionHeading as="h2" title="experience" />
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 lg:grid lg:grid-cols-[220px_1fr] lg:items-start lg:gap-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between lg:flex-col lg:gap-1">
            <div>
              <h3 className="text-[1.1875rem] font-semibold tracking-tight sm:text-[1.375rem]">
                Frontend Developer Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                Infolap Technology Philippines Inc.
              </p>
              <p className="text-sm text-muted-foreground">
                Bouvet Queueing System
              </p>
            </div>
            <p className="shrink-0 text-sm text-muted-foreground sm:text-right">
              February 2026 — May 2026
            </p>
          </div>
          <ul className="flex flex-col gap-2 border-l border-border pl-4 lg:border-l-0 lg:pl-0">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-base text-muted-foreground"
              >
                <span aria-hidden="true">—</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
