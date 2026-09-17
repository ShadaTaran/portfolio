import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: "default" | "compact";
};

export function Section({
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacing === "compact" ? "py-10 sm:py-14" : "py-12 sm:py-20",
        className
      )}
      {...props}
    />
  );
}
