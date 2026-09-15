import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { GITHUB_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border bg-background"
    >
      <Container className="relative">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight"
          >
            Charles Cahilig
          </Link>
          <div className="flex items-center gap-2 sm:gap-6">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 sm:flex"
            >
              <Link
                href="/#projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </Link>
              <Link
                href="/#about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </nav>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
