import { ThemedScreenshot } from "@/components/project-visual/themed-screenshot";

// Captured from the live app in local mode: its built-in demo bookmarks plus
// a novel, a manga, and an anime added through the app's own catalog search
// with sample progress.
export function MarklyMedia({ sizes }: { sizes: string }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface-elevated p-2 transition-colors duration-300 group-hover/visual:border-foreground/20 sm:p-3">
      <ThemedScreenshot
        light="/projects/markly/markly-library-light.webp"
        dark="/projects/markly/markly-library-dark.webp"
        alt="Markly's library with sample entries: a novel, a manga, and an anime showing reading and watching progress, followed by bookmarked websites"
        width={2880}
        height={2000}
        sizes={sizes}
      />
    </div>
  );
}
