import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function DiagramPanel({
  eyebrow,
  caption,
  summary,
  children,
}: {
  eyebrow: string;
  caption?: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="rounded-md border border-border bg-surface-elevated p-6 sm:p-8">
      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>
      <div className="mt-5">{children}</div>
      {caption ? (
        <p className="mt-5 text-xs text-muted-foreground">{caption}</p>
      ) : null}
      <figcaption className="sr-only">{summary}</figcaption>
    </figure>
  );
}

export function DiagramNode({
  title,
  detail,
  className,
}: {
  title: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border px-4 py-3 text-center",
        className
      )}
    >
      <p className="text-sm font-medium text-foreground">{title}</p>
      {detail ? (
        <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
      ) : null}
    </div>
  );
}

export function DiagramConnector({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center py-0.5">
      <span className="h-3 w-px bg-border" />
      <ChevronDown
        className="-my-1 h-3.5 w-3.5 text-muted-foreground"
        strokeWidth={1.75}
      />
      <span className="h-3 w-px bg-border" />
      {label ? (
        <span className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export function DiagramRuleRow({
  condition,
  outcome,
}: {
  condition: string;
  outcome: string;
}) {
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-4">
      <DiagramNode title={condition} className="sm:flex-1" />
      <ChevronDown
        aria-hidden="true"
        className="mx-auto h-3.5 w-3.5 shrink-0 -rotate-90 text-muted-foreground sm:mx-0"
        strokeWidth={1.75}
      />
      <DiagramNode
        title={outcome}
        className="border-foreground/25 sm:flex-1"
      />
    </div>
  );
}
