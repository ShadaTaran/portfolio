import type { Metadata } from "next";
import { Geist, Geist_Mono, Geist_Pixel } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { AdaptiveNavigation } from "@/components/adaptive-navigation";
import { SkipToContent } from "@/components/skip-to-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  weight: "variable",
  axes: ["ELSH"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Cahilig — Software Developer",
  description:
    "Software developer portfolio of Charles Cahilig, featuring web, mobile, and full-stack application projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixel.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
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
