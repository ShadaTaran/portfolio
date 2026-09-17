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
      <Tag className="text-[1.375rem] font-semibold tracking-tight sm:text-[1.75rem]">
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
