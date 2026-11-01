import { MarklyMedia } from "@/components/project-visual/markly-media";
import { MansarArchitecture } from "@/components/project-visual/mansar-architecture";

type ProjectVisualProps = {
  variant: string;
  /** Rendered width hint for screenshots, passed to the image `sizes`. */
  sizes: string;
};

export function ProjectVisual({ variant, sizes }: ProjectVisualProps) {
  if (variant === "markly") return <MarklyMedia sizes={sizes} />;
  if (variant === "mansar-trucking-system") return <MansarArchitecture />;
  return null;
}
