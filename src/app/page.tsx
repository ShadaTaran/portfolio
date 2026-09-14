import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Section id="about">
        <Container>
          <SectionHeading as="h2" title="About" />
          <div className="mt-8 flex max-w-2xl flex-col gap-4 text-base text-muted-foreground sm:text-lg">
            <p>
              I&apos;m a software developer and BS Information Technology
              graduate specializing in Software Development.
            </p>
            <p>
              I enjoy building applications that solve practical
              problems—from business management systems and real-time
              tracking to personal productivity software.
            </p>
            <p>
              I work primarily with React, Next.js, TypeScript, JavaScript,
              and full-stack web technologies.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
