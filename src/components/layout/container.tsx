import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  width?: "default" | "narrow";
};

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        width === "narrow" ? "max-w-[720px]" : "max-w-[1400px]",
        className
      )}
      {...props}
    />
  );
}
