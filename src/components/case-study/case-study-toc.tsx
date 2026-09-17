type TocEntry = { id: string; index: string; title: string };

export function CaseStudyToc({ entries }: { entries: TocEntry[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
    >
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        On this page
      </p>
      <ul className="mt-4 flex flex-col gap-3 border-l border-border pl-4">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className="flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span
                className="font-pixel text-xs"
                style={{ fontVariationSettings: '"ELSH" 1' }}
              >
                {entry.index}
              </span>
              <span className="leading-snug">{entry.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
