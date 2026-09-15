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
    <Section id="experience">
      <Container>
        <SectionHeading as="h2" title="Experience" />
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="sm:w-64 sm:shrink-0">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              Software Developer Intern
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Bouvet Queueing System
            </p>
            <p className="text-sm text-muted-foreground">
              Software Development Internship
            </p>
          </div>
          <ul className="flex flex-1 flex-col gap-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm text-muted-foreground sm:text-base"
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
