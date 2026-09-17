import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/site";

export function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 30%, var(--color-foreground) 0%, transparent 45%)",
          opacity: 0.025,
        }}
      />
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute -right-16 top-0 hidden h-80 w-80 lg:block"
      />
      <Container width="wide" className="relative">
        <div className="flex max-w-[680px] flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h1
              className="hero-animate font-pixel text-4xl font-normal tracking-tight sm:text-[4rem]"
              style={{
                fontVariationSettings: '"ELSH" 1',
                animationDelay: "0ms",
              }}
            >
              Charles Cahilig
            </h1>
            <p
              className="hero-animate text-lg text-muted-foreground sm:text-xl"
              style={{ animationDelay: "var(--motion-stagger)" }}
            >
              Software Developer
            </p>
          </div>

          <p
            className="hero-animate text-[17px] text-muted-foreground sm:text-[19px]"
            style={{ animationDelay: "var(--motion-stagger)" }}
          >
            I build web and mobile applications focused on practical
            systems, thoughtful interfaces, and reliable user experiences.
          </p>
          <p
            className="hero-animate inline-flex items-center gap-2 text-sm font-medium text-foreground"
            style={{ animationDelay: "var(--motion-stagger)" }}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
            />
            Based in the Philippines · Open to Software Developer /
            Software Engineer opportunities
          </p>

          <div
            className="hero-animate flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 text-sm text-muted-foreground"
            style={{ animationDelay: "calc(var(--motion-stagger) * 2)" }}
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 font-medium text-background transition-[opacity,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:opacity-85 active:scale-[0.98]"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              view projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              github
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              linkedin
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              email
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
