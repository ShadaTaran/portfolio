import { Container } from "@/components/layout/container";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Charles Cahilig</p>
            <p>Software Developer · {year}</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
