import type { Metadata, Viewport } from "next";
import { Geist, Geist_Pixel } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { AdaptiveNavigation } from "@/components/adaptive-navigation";
import { SkipToContent } from "@/components/skip-to-content";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OPEN_GRAPH,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// next/font has no metric overrides for Geist Pixel, so it can't generate a
// size-adjusted fallback (the source of the build warning). It's only used
// for the name and numerals, so a plain monospace fallback is enough.
const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  weight: "variable",
  axes: ["ELSH"],
  subsets: ["latin"],
  adjustFontFallback: false,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  // No canonical or og:url here: anything set on the root layout is
  // inherited by the 404 page, which must not point at the homepage. Each
  // public page declares its own.
  openGraph: SITE_OPEN_GRAPH,
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// viewport-fit=cover lets env(safe-area-inset-*) report real values on
// phones with notches and home indicators; the layout pads for them.
export const viewport: Viewport = {
  viewportFit: "cover",
};

// Only publicly surfaced facts: the same name, role, and profile links the
// page itself already shows.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Developer",
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistPixel.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <SkipToContent />
          <AdaptiveNavigation />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
