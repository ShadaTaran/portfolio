import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { GITHUB_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Charles Cahilig
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}
