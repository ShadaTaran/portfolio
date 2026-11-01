import { ThemedScreenshot } from "@/components/project-visual/themed-screenshot";

export function DashboardContinueVisual() {
  return (
    <figure>
      <div className="overflow-hidden rounded-md border border-border bg-surface-elevated p-2 sm:p-3">
        <ThemedScreenshot
          light="/projects/markly/markly-dashboard-continue-light.webp"
          dark="/projects/markly/markly-dashboard-continue-dark.webp"
          alt="Markly's dashboard Continue row listing three in-progress items: Frankenstein at chapter 9, Frieren at episode 12 of 28, and Vinland Saga at chapter 87 of 224"
          width={2880}
          height={680}
          sizes="(min-width: 1160px) 810px, calc(100vw - 64px)"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        The dashboard opens on Continue: everything in progress, with the
        chapter or episode to pick up from. Sample entries in local mode.
      </figcaption>
    </figure>
  );
}
