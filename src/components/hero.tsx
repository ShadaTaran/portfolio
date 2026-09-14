import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GITHUB_URL } from "@/lib/site";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Charles Cahilig
            </h1>
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              Software Developer
            </p>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            I build web and mobile applications focused on practical
            systems, thoughtful interfaces, and reliable user experiences.
          </p>
          <p className="text-sm text-muted-foreground">
            Based in the Philippines · Open to Software Developer / Software
            Engineer opportunities
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
