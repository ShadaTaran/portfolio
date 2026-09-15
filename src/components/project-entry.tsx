import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/project";

type ProjectEntryProps = {
  project: Project;
  flagship?: boolean;
  withDivider?: boolean;
};

export function ProjectEntry({
  project,
  flagship = false,
  withDivider = false,
}: ProjectEntryProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 py-10 sm:flex-row sm:gap-8 sm:py-12",
        withDivider && "border-t border-border"
      )}
    >
      <span className="font-mono text-sm text-muted-foreground sm:w-10 sm:shrink-0">
        {project.number}
      </span>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3
            className={cn(
              "font-semibold tracking-tight",
              flagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            )}
          >
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground sm:text-base">
            {project.subtitle}
          </p>
        </div>

        <p
          className={cn(
            "max-w-2xl text-muted-foreground",
            flagship ? "text-base sm:text-lg" : "text-sm sm:text-base"
          )}
        >
          {project.summary}
        </p>

        {project.technologies?.length ? (
          <p className="text-xs text-muted-foreground sm:text-sm">
            {project.technologies.join(" · ")}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-5 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`${project.title} — case study`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Case study
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live site`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
