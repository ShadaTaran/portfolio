import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { internalNavItems, externalNavItems } from "@/lib/nav-items";

type SiteHeaderProps = {
  scrolled: boolean;
  inert?: boolean;
};

const navLinkClassName =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

export function SiteHeader({ scrolled, inert = false }: SiteHeaderProps) {
  return (
    <header
      id="top"
      data-scrolled={scrolled}
      inert={inert}
      className="sticky top-0 z-50 bg-background/75 backdrop-blur-md transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-in)] sm:data-[scrolled=true]:pointer-events-none sm:data-[scrolled=true]:-translate-y-3 sm:data-[scrolled=true]:scale-[0.98] sm:data-[scrolled=true]:opacity-0"
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight"
          >
            Charles Cahilig
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
            {internalNavItems.map((item) => (
              <Link key={item.id} href={item.href} className={navLinkClassName}>
                {item.label}
              </Link>
            ))}
            {externalNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClassName}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle variant="header" />
          </nav>
        </div>
      </Container>
    </header>
  );
}
