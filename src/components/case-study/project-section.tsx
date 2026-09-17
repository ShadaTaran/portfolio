import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/cn";

type ProjectSectionProps = {
  id?: string;
  index?: string;
  title: string;
  items: string[];
  variant?: "paragraphs" | "list";
  narrow?: boolean;
  /** Renders the heading/content directly, without its own Section+Container
   * shell, for callers (e.g. the Markly TOC + reading-column layout) that
   * already provide that context. */
  plain?: boolean;
};

function SectionBody({
  index,
  title,
  items,
  variant = "paragraphs",
}: Pick<ProjectSectionProps, "index" | "title" | "items" | "variant">) {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {index ? (
          <span className="text-muted-foreground font-normal">
            <span
              className="font-pixel"
              style={{ fontVariationSettings: '"ELSH" 1' }}
            >
              {index}
            </span>
            {" — "}
          </span>
        ) : null}
        {title}
      </h2>
      {variant === "list" ? (
        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base text-muted-foreground sm:text-lg"
            >
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 flex flex-col gap-4 text-base text-muted-foreground sm:text-lg">
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </>
  );
}

export function ProjectSection({
  id,
  index,
  title,
  items,
  variant = "paragraphs",
  narrow = true,
  plain = false,
}: ProjectSectionProps) {
  if (plain) {
    return (
      <div
        id={id}
        className={cn("scroll-mt-24 py-10 sm:py-14", narrow && "max-w-[720px]")}
      >
        <SectionBody index={index} title={title} items={items} variant={variant} />
      </div>
    );
  }

  return (
    <Section
      id={id}
      spacing="compact"
      className={cn("border-t border-border", id && "scroll-mt-24")}
    >
      <Container width={narrow ? "narrow" : "default"}>
        <SectionBody index={index} title={title} items={items} variant={variant} />
      </Container>
    </Section>
  );
}
