import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          as="h2"
          title="get in touch"
          description="I'm currently open to entry-level Software Developer and Software Engineer opportunities. If you have a role or project that may be a fit, feel free to reach out."
        />
        <div className="mt-8 border-t border-border pt-8">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email Charles Cahilig at ${EMAIL}`}
            className="group/link inline-flex max-w-full flex-wrap items-baseline gap-2 font-semibold tracking-tight break-words text-balance transition-opacity duration-200 hover:opacity-80"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {EMAIL}
            <ArrowUpRight
              className="h-5 w-5 shrink-0 transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charles Cahilig on LinkedIn"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              linkedin
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charles Cahilig on GitHub"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              github
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Charles Cahilig's resume"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              resume
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
