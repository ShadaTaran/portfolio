import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow ? (
        <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
