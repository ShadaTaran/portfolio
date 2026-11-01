import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { SITE_OPEN_GRAPH } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...SITE_OPEN_GRAPH, url: "/" },
};

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
            <p className="text-lead">
              I&apos;m a software developer based in the Philippines, with a
              BS in Information Technology majoring in Software Development.
            </p>
            <div className="flex flex-col gap-4 text-base">
              <p>
                I enjoy building applications that solve practical
                problems—from business management systems and real-time
                tracking to personal productivity software.
              </p>
              <p>
                My recent work is full-stack TypeScript: Markly, a personal
                library built on Next.js and Supabase, and a NestJS,
                PostgreSQL, and React Native rebuild of my capstone project.
                In both, I favor explicit rules over guesswork—exact-match
                auto-linking in Markly, database-enforced scheduling in
                Mansar—and keep architecture decisions documented alongside
                the code.
              </p>
            </div>
          </div>
          <dl className="mt-8 border-t border-border pt-8">
            <div className="flex flex-col gap-1.5">
              <dt className="text-sm text-muted-foreground">Education</dt>
              <dd className="text-sm text-foreground sm:text-base">
                BS Information Technology, Major in Software Development
              </dd>
              <dd className="text-sm text-muted-foreground">
                Colegio de San Juan de Letran, Manila · 2026
              </dd>
            </div>
          </dl>
        </Container>
      </Section>
      <Skills />
      <Contact />
    </main>
  );
}
