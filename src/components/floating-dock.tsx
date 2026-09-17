import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  internalNavItems,
  externalNavItems,
  resumeNavItem,
} from "@/lib/nav-items";
import { ThemeToggle } from "@/components/theme-toggle";

type FloatingDockProps = {
  scrolled: boolean;
  activeSection: string | null;
  inert?: boolean;
};

const dockActionItems = [resumeNavItem, ...externalNavItems];

const dockButtonClassName =
  "flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md text-muted-foreground transition-[transform,color,background-color] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:-translate-y-[3px] hover:scale-[1.14] hover:bg-foreground/[0.06] hover:text-foreground focus-visible:-translate-y-[3px] focus-visible:scale-[1.14]";

function DockTooltip({ label }: { label: string }) {
  return (
    <span
      role="tooltip"
      className="dock-tooltip pointer-events-none absolute -top-9 left-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background"
    >
      {label}
    </span>
  );
}

function DockSeparator() {
  return (
    <span aria-hidden="true" className="mx-px h-6 w-px shrink-0 bg-border sm:mx-1" />
  );
}

export function FloatingDock({
  scrolled,
  activeSection,
  inert = false,
}: FloatingDockProps) {
  return (
    <nav
      aria-label="Floating navigation"
      data-scrolled={scrolled}
      inert={inert}
      className="fixed inset-x-0 bottom-[calc(10px+env(safe-area-inset-bottom))] z-50 flex justify-center px-2 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-out)] sm:bottom-6 sm:px-4 sm:opacity-0 sm:translate-y-[18px] sm:scale-[0.94] sm:pointer-events-none sm:data-[scrolled=true]:pointer-events-auto sm:data-[scrolled=true]:translate-y-0 sm:data-[scrolled=true]:scale-100 sm:data-[scrolled=true]:opacity-100"
    >
      <div className="flex items-center gap-0 rounded-[20px] border border-border bg-background/92 px-1 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:gap-1 sm:px-2 sm:py-2 dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
        {internalNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="group relative flex flex-col items-center">
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "location" : undefined}
                className={dockButtonClassName}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-1.5 h-1 w-1 rounded-full bg-foreground transition-opacity",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
              <DockTooltip label={item.label} />
            </div>
          );
        })}

        <DockSeparator />

        {dockActionItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="group relative flex flex-col items-center">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={dockButtonClassName}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
              <DockTooltip label={item.label} />
            </div>
          );
        })}

        <DockSeparator />

        <ThemeToggle variant="dock" />
      </div>
    </nav>
  );
}
