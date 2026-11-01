import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

// Kept deliberately high-level: the internship codebase is private, so no
// endpoints, infrastructure, or authentication details are described here.
const bullets = [
  "Built and maintained administrative screens for an existing queue management system using Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.",
  "Implemented administrative workflows for managing users, departments, and queue settings.",
  "Added search, pagination, and validated add and edit forms across the administrative screens.",
  "Integrated the screens with the system's existing backend API, keeping form data aligned with its contracts and showing clear error messages.",
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
                Software Development Internship
              </h3>
              <p className="text-sm text-muted-foreground">
                Infolap Technology Philippines Inc.
              </p>
              <p className="text-sm text-muted-foreground">
                Frontend development · Bouvet Queueing System
              </p>
            </div>
            <p className="shrink-0 text-sm text-muted-foreground sm:text-right lg:text-left">
              February 2026 — May 2026
            </p>
          </div>
          <div className="flex flex-col gap-4 border-l border-border pl-4 lg:border-l-0 lg:pl-0">
            <ul className="flex flex-col gap-2">
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
            <p className="text-sm text-muted-foreground">
              Internal project: its code and implementation details aren&apos;t
              public, so this summary stays high-level.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
