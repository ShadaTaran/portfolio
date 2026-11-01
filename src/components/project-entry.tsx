import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "@/components/project-visual/project-visual";
import type { Project } from "@/types/project";

type ProjectEntryProps = {
  project: Project;
  reverseMedia?: boolean;
};

// Matches the media column below: 3/5 of the container's content width
// (capped at 1160px, minus padding and the column gap), full width below lg.
const mediaSizes =
  "(min-width: 1160px) 586px, (min-width: 1024px) calc(60vw - 110px), calc(100vw - 64px)";

const linkClassName =
  "group/link inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground";

export function ProjectEntry({ project, reverseMedia = false }: ProjectEntryProps) {
  return (
    <article className="group/visual py-10 sm:py-14">
      <div
        className={cn(
          "grid grid-cols-1 gap-8 lg:items-center lg:gap-12",
          // The grid template's two columns are physical positions, not
          // "copy"/"media" — when reverseMedia flips which content sits in
          // which position (via order-1/order-2 below), the column widths
          // have to flip with it, or the intended copy/media ratio inverts.
          reverseMedia ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-5",
            reverseMedia ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span
                className="font-pixel text-sm text-muted-foreground"
                style={{ fontVariationSettings: '"ELSH" 1' }}
              >
                {project.number}
              </span>
              <h3 className="text-feature font-semibold tracking-tight text-balance">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>

          <dl className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex flex-col gap-1">
              <dt className="text-label font-medium uppercase text-muted-foreground">
                Status
              </dt>
              <dd className="text-sm text-foreground">{project.status}</dd>
            </div>
            {project.role ? (
              <div className="flex flex-col gap-1">
                <dt className="text-label font-medium uppercase text-muted-foreground">
                  Role
                </dt>
                <dd className="text-sm text-foreground">{project.role}</dd>
              </div>
            ) : null}
          </dl>

          <p className="text-lead text-muted-foreground">{project.summary}</p>

          {project.technologies?.length ? (
            <p className="text-sm text-muted-foreground">
              {project.technologies.join(" · ")}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`${project.title} — case study`}
              className={linkClassName}
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
                aria-label={`${project.title} — live site (opens in a new tab)`}
                className={linkClassName}
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
                aria-label={`${project.title} — GitHub repository (opens in a new tab)`}
                className={linkClassName}
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
            "transition-transform duration-[var(--motion-base)] ease-[var(--ease-standard)] group-hover/visual:-translate-y-1",
            reverseMedia ? "lg:order-1" : "lg:order-2"
          )}
        >
          <ProjectVisual variant={project.slug} sizes={mediaSizes} />
        </div>
      </div>
    </article>
  );
}
