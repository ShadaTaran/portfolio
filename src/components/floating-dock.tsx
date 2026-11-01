import Link from "next/link";
import { cn } from "@/lib/cn";
import { internalNavItems } from "@/lib/nav-items";

type FloatingDockProps = {
  activeSection: string | null;
};

// Small-screen navigation. Every item keeps a visible text label next to its
// icon, so touch visitors never have to guess what an icon means.
export function FloatingDock({ activeSection }: FloatingDockProps) {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[calc(12px+env(safe-area-inset-bottom))] z-50 flex justify-center px-3 sm:hidden"
    >
      <ul className="flex items-stretch rounded-2xl border border-border bg-background p-1 shadow-[0_8px_24px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
        {internalNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "flex min-w-[4.75rem] flex-col items-center gap-1 rounded-xl px-1.5 py-2 text-xs font-medium transition-colors duration-[var(--motion-fast)]",
                  isActive
                    ? "bg-surface-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
