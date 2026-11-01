import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { projects } from "@/data/projects";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const textLinkClassName =
  "inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground";

export function Hero() {
  return (
    <Section>
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:items-end lg:gap-16">
          <div className="flex max-w-[680px] flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="hero-animate text-label font-medium uppercase text-muted-foreground">
                Software developer
              </p>
              <h1
                className="hero-animate font-pixel text-display font-normal tracking-tight"
                style={{ fontVariationSettings: '"ELSH" 1' }}
              >
                Charles Cahilig
              </h1>
            </div>

            <p
              className="hero-animate max-w-xl text-title text-balance text-foreground"
              style={{ animationDelay: "var(--motion-stagger)" }}
            >
              I build full-stack TypeScript applications for the web and
              mobile, from database rules and APIs to the interfaces people
              use.
            </p>

            <p
              className="hero-animate flex items-baseline gap-2 text-sm text-muted-foreground"
              style={{ animationDelay: "var(--motion-stagger)" }}
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 -translate-y-px rounded-full bg-foreground"
              />
              Open to junior software engineer, frontend, and full-stack roles
              · Based in the Philippines
            </p>

            <div
              className="hero-animate flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 text-sm"
              style={{ animationDelay: "calc(var(--motion-stagger) * 2)" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 font-medium text-background transition-opacity duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:opacity-85"
              >
                View selected work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center rounded-md border border-border px-4 py-2.5 font-medium text-foreground transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:bg-surface-secondary"
              >
                Email me
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClassName}
              >
                github
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={textLinkClassName}
              >
                linkedin
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* A direct route into each case study for desktop visitors; on
              smaller screens "View selected work" leads to the same list. */}
          <div
            className="hero-animate hidden lg:block"
            style={{ animationDelay: "calc(var(--motion-stagger) * 3)" }}
          >
            <p className="text-label font-medium uppercase text-muted-foreground">
              Selected work
            </p>
            <ul className="mt-4 border-t border-border">
              {projects.map((project) => (
                <li key={project.slug} className="border-b border-border">
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`${project.title} case study, ${project.status}`}
                    className="group flex items-baseline gap-3 py-4"
                  >
                    <span
                      className="font-pixel text-sm text-muted-foreground"
                      style={{ fontVariationSettings: '"ELSH" 1' }}
                    >
                      {project.number}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="font-medium text-foreground">
                        {project.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.status}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 self-center text-muted-foreground transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
