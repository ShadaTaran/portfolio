import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { GITHUB_URL } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          as="h2"
          title="Get in touch"
          description="I'm currently open to entry-level Software Developer and Software Engineer opportunities. If you have a role or project that may be a fit, feel free to reach out."
        />
        <div className="mt-8 flex flex-wrap gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Charles Cahilig on GitHub"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:text-base"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
