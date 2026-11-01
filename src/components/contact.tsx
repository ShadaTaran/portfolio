import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          as="h2"
          title="get in touch"
          description="I'm open to junior software engineer, frontend, and full-stack roles. If you have a role or project that may be a fit, feel free to reach out."
        />
        <div className="mt-8 border-t border-border pt-8">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email Charles Cahilig at ${EMAIL}`}
            className="group/link inline-flex max-w-full flex-wrap items-baseline gap-2 font-semibold tracking-tight transition-opacity duration-200 hover:opacity-80"
            // Sized so the full address fits on one line from 360px up; it
            // may still wrap (rather than overflow) at narrower or zoomed widths.
            style={{ fontSize: "clamp(1.375rem, 0.5rem + 3.9vw, 3rem)" }}
          >
            <span className="min-w-0 [overflow-wrap:anywhere]">{EMAIL}</span>
            <ArrowUpRight
              className="hidden h-5 w-5 shrink-0 transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 sm:block"
              aria-hidden="true"
            />
          </a>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charles Cahilig on LinkedIn (opens in a new tab)"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              linkedin
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Charles Cahilig on GitHub (opens in a new tab)"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              github
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Resume available on request.
          </p>
        </div>
      </Container>
    </Section>
  );
}
