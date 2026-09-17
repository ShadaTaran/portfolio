import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  width?: "default" | "narrow" | "wide";
};

// One outer shell (fixed max-width + page padding) defines the site's single
// horizontal alignment axis. `width` only caps an INNER div's max-width —
// that div is left-aligned within the shell, never independently centered —
// so every section's left edge lands on the same x-coordinate regardless of
// how wide its content is allowed to grow.
const innerWidthClassName = {
  narrow: "max-w-[720px]",
  default: "max-w-[880px]",
  wide: "max-w-none",
};

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1160px] px-6 sm:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      <div className={cn("w-full", innerWidthClassName[width])}>
        {children}
      </div>
    </Tag>
  );
}
