import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

// Only tools with evidence in the projects and experience on this site.
const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "PHP", "Kotlin"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend & APIs",
    items: [
      "NestJS",
      "Next.js Route Handlers",
      "REST APIs",
      "Backend-for-Frontend (BFF)",
    ],
  },
  {
    category: "Data",
    items: [
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "MySQL",
      "Firebase Realtime Database",
    ],
  },
  {
    category: "Mobile",
    items: ["React Native", "Android native modules (Kotlin)"],
  },
  {
    category: "Testing & CI",
    items: ["Vitest", "Jest", "Testing Library", "GitHub Actions"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "Railway", "Postman"],
  },
];

export function Skills() {
  return (
    <Section id="skills" spacing="compact">
      <Container width="wide">
        <SectionHeading as="h2" title="stack" />
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-foreground">
                {group.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {group.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
