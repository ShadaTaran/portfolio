import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type ProjectSectionProps = {
  title: string;
  items: string[];
  variant?: "paragraphs" | "list";
  narrow?: boolean;
};

export function ProjectSection({
  title,
  items,
  variant = "paragraphs",
  narrow = true,
}: ProjectSectionProps) {
  return (
    <Section spacing="compact">
      <Container width={narrow ? "narrow" : "default"}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {variant === "list" ? (
          <ul className="mt-6 flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-muted-foreground sm:text-base"
              >
                <span aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground sm:text-base">
            {items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
