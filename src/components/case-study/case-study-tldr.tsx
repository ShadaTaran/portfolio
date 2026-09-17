import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CaseStudyTldr({ items }: { items: string[] }) {
  return (
    <Section spacing="compact" className="border-t border-border">
      <Container>
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          At a glance
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-muted-foreground sm:text-base"
            >
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
