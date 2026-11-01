import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { internalNavItems, externalNavItems } from "@/lib/nav-items";

type SiteHeaderProps = {
  activeSection: string | null;
};

const navLinkClassName =
  "text-sm font-medium transition-colors duration-[var(--motion-fast)] hover:text-foreground";

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  return (
    <header
      id="top"
      className="z-50 border-b border-border bg-background sm:sticky sm:top-0"
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight"
          >
            Charles Cahilig
          </Link>
          <div className="flex items-center gap-4">
            <nav aria-label="Primary" className="hidden sm:block">
              <ul className="flex items-center gap-6">
                {internalNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          navLinkClassName,
                          isActive
                            ? "text-foreground underline decoration-1 underline-offset-[6px]"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                {externalNavItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        navLinkClassName,
                        "inline-flex items-center gap-0.5 text-muted-foreground"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
