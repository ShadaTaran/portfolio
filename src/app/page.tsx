import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Portfolio — Foundation"
            title="Charles Cahilig"
            description="Software developer. The design system is in place — the full homepage is coming next."
          />
        </Container>
      </Section>
    </main>
  );
}
