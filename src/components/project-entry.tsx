import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "@/components/project-visual/project-visual";
import type { Project } from "@/types/project";

type ProjectEntryProps = {
  project: Project;
  flagship?: boolean;
  reverseMedia?: boolean;
  withDivider?: boolean;
};

export function ProjectEntry({
  project,
  flagship = false,
  reverseMedia = false,
  withDivider = false,
}: ProjectEntryProps) {
  return (
    <article
      className={cn(
        "group/visual",
        flagship ? "py-14 sm:py-20" : "py-10 sm:py-14",
        withDivider && "border-t border-border"
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-8 lg:items-start lg:gap-12",
          // The grid template's two columns are physical positions, not
          // "copy"/"media" — when reverseMedia flips which content sits in
          // which position (via order-1/order-2 below), the column widths
          // have to flip with it, or the intended copy/media ratio inverts.
          flagship
            ? reverseMedia
              ? "lg:grid-cols-[16fr_9fr]"
              : "lg:grid-cols-[9fr_16fr]"
            : reverseMedia
              ? "lg:grid-cols-[9fr_11fr]"
              : "lg:grid-cols-[11fr_9fr]"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-3",
            reverseMedia ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="flex items-baseline gap-3">
            <span
              className="font-pixel text-sm text-muted-foreground"
              style={{ fontVariationSettings: '"ELSH" 1' }}
            >
              {project.number}
            </span>
            <h3
              className={cn(
                "font-semibold tracking-tight text-balance text-foreground/90 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover/visual:text-foreground",
                flagship
                  ? "text-[1.75rem] sm:text-[2.5rem]"
                  : "text-[1.1875rem] sm:text-[1.375rem]"
              )}
            >
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground">{project.subtitle}</p>

          <p
            className={cn(
              "text-muted-foreground",
              flagship ? "text-base sm:text-lg" : "text-sm sm:text-base"
            )}
          >
            {project.summary}
          </p>

          {project.technologies?.length ? (
            <p className="text-xs text-muted-foreground/80">
              {project.technologies.join(" · ")}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 text-sm">
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`${project.title} — case study`}
              className="group/link inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              case study
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover/link:translate-x-[3px]"
              >
                →
              </span>
            </Link>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — live site`}
                className="group/link inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                live
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — GitHub repository`}
                className="group/link inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                github
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>

        <div
          className={cn(
            "transition-transform duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover/visual:-translate-y-0.5 group-hover/visual:scale-[1.01]",
            reverseMedia ? "lg:order-1" : "lg:order-2"
          )}
        >
          <ProjectVisual variant={project.slug} />
        </div>
      </div>
    </article>
  );
}
