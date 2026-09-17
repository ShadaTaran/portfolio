import Image from "next/image";

export function MarklyMedia() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface-elevated p-2 transition-colors duration-300 group-hover/visual:border-foreground/20 sm:p-3">
      <Image
        src="/projects/markly/markly-library.webp"
        alt="Markly personal library interface, showing a grid of saved websites with tags and categories"
        width={1440}
        height={1099}
        className="w-full rounded-sm"
        sizes="(min-width: 1024px) 560px, 100vw"
        priority
      />
    </div>
  );
}
