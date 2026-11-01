import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Tag className="text-heading font-semibold tracking-tight">{title}</Tag>
      {description ? (
        <p className="max-w-2xl text-lead text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
