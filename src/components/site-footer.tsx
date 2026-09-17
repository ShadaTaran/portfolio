import { Container } from "@/components/layout/container";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-4 pt-10 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              Charles Cahilig
            </span>
            <span> · Software Developer · {year}</span>
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
