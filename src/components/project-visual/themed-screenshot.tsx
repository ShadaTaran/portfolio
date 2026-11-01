import Image from "next/image";

type ThemedScreenshotProps = {
  light: string;
  dark: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
};

// Renders the light or dark capture to match the site theme. The inactive
// one is display:none, and lazy-loaded images that are never rendered are
// never fetched, so each visitor downloads only one of the pair.
export function ThemedScreenshot({
  light,
  dark,
  alt,
  width,
  height,
  sizes,
}: ThemedScreenshotProps) {
  return (
    <>
      <Image
        src={light}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="w-full rounded-sm dark:hidden"
      />
      <Image
        src={dark}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="hidden w-full rounded-sm dark:block"
      />
    </>
  );
}
