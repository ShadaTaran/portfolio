import { MarklyMedia } from "@/components/project-visual/markly-media";
import { BouvetArchitecture } from "@/components/project-visual/bouvet-architecture";
import { MansarArchitecture } from "@/components/project-visual/mansar-architecture";

type ProjectVisualProps = {
  variant: string;
};

export function ProjectVisual({ variant }: ProjectVisualProps) {
  if (variant === "markly") return <MarklyMedia />;
  if (variant === "bouvet-queueing-system") return <BouvetArchitecture />;
  if (variant === "mansar-trucking-system") return <MansarArchitecture />;
  return null;
}
