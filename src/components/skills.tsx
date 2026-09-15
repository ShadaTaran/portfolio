import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

const skillGroups = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend & APIs",
    items: ["Next.js API Routes", "REST APIs", "BFF Architecture", "PHP"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "Firebase"],
  },
  { category: "Mobile", items: ["React Native"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading as="h2" title="Skills" />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {group.category}
              </p>
              <p className="text-sm text-foreground sm:text-base">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
