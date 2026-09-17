import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { githubContributions } from "@/data/github-contributions";
import type { GithubContributionDay } from "@/data/github-contributions";

// Fixed calendar-cell pitch (real week/day geometry never moves); the dot
// drawn inside each cell is what actually carries contribution intensity.
const CELL_SIZE = 14;
const MIN_DOT = 2;
const MAX_DOT = 10.5;
const ZERO_OPACITY = 0.12;
const ACTIVE_OPACITY = 0.92;

// Size is the primary intensity channel (opacity is just active/inactive).
// GitHub's own 0–4 level is coarse for a sparse history like this one — it
// would flatten every count from 4 to 6 contributions into one identical
// dot — so size instead scales off the real daily count, clamped at 6
// (this account's observed max), giving every active day a size that
// reflects its own count rather than a shared bucket.
function dotDiameter(count: number) {
  if (count === 0) return MIN_DOT;
  const clamped = Math.min(count, 6);
  return 4 + ((clamped - 1) / 5) * (MAX_DOT - 4);
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// GitHub's calendar weeks start on Sunday — pad the front of the grid so
// the real data lands on the correct day-of-week row.
function buildCalendarCells(days: GithubContributionDay[]) {
  const firstDate = new Date(`${days[0].date}T00:00:00Z`);
  const leadingBlanks = firstDate.getUTCDay();
  const cells: (GithubContributionDay | null)[] = Array(leadingBlanks).fill(null);
  cells.push(...days);
  return cells;
}

export function GithubActivity() {
  const { username, profileUrl, from, to, totalContributions, days } =
    githubContributions;
  const cells = buildCalendarCells(days);
  const totalFormatted = totalContributions.toLocaleString("en-US");

  return (
    <Section id="github-activity" className="border-t border-border">
      <Container width="wide">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <SectionHeading as="h2" title="github" />
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            @{username}
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <div
          role="region"
          aria-label="GitHub contribution activity"
          tabIndex={0}
          className="github-graph-scroll mt-10 overflow-x-auto sm:mt-12"
        >
          <figure className="w-fit">
            <div
              aria-hidden="true"
              className="grid"
              style={{
                gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                gridAutoFlow: "column",
                gridAutoColumns: `${CELL_SIZE}px`,
              }}
            >
              {cells.map((day, i) =>
                day ? (
                  <span
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                    className="flex items-center justify-center"
                  >
                    <span
                      className="rounded-full bg-foreground"
                      style={{
                        width: dotDiameter(day.count),
                        height: dotDiameter(day.count),
                        opacity: day.count === 0 ? ZERO_OPACITY : ACTIVE_OPACITY,
                      }}
                    />
                  </span>
                ) : (
                  <span key={`blank-${i}`} />
                )
              )}
            </div>
            <figcaption className="sr-only">
              GitHub contribution activity for {username}: {totalFormatted}{" "}
              contributions between {formatDate(from)} and {formatDate(to)}.
            </figcaption>
          </figure>
        </div>

        <p className="mt-6 flex items-baseline gap-1.5 text-sm text-muted-foreground">
          <span
            className="font-pixel text-base text-foreground"
            style={{ fontVariationSettings: '"ELSH" 1' }}
          >
            {totalFormatted}
          </span>
          contributions in the last year
        </p>
      </Container>
    </Section>
  );
}
