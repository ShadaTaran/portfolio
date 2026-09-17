import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { GithubActivity } from "@/components/github-activity";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <Experience />
      <Section id="about">
        <Container>
          <SectionHeading as="h2" title="about" />
          <div className="mt-8 grid gap-4 border-t border-border pt-8 text-muted-foreground lg:grid-cols-2 lg:gap-10">
            <p className="text-[17px] sm:text-[19px]">
              I&apos;m a software developer and BS Information Technology
              graduate specializing in Software Development.
            </p>
            <p className="text-base">
              I enjoy building applications that solve practical
              problems—from business management systems and real-time
              tracking to personal productivity software.
            </p>
          </div>
        </Container>
      </Section>
      <Skills />
      <GithubActivity />
      <Contact />
    </main>
  );
}
