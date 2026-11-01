import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "markly",
    number: "01",
    title: "Markly",
    subtitle: "Universal Personal Library",
    status: "Live beta",
    summary:
      "A personal library for tracking websites, anime, manga, novels, games, movies, and series — built around one goal: never lose your place again.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Browser Extension",
      "PWA",
    ],
    role: "Project owner and developer",
    liveUrl: "https://markly-lime.vercel.app",
    repositoryUrl: "https://github.com/ShadaTaran/markly",
    featured: true,
  },
  {
    slug: "mansar-trucking-system",
    number: "02",
    title: "Mansar Trucking V2",
    subtitle: "Full-Stack Trucking Operations Platform",
    status: "In development (staging only)",
    summary:
      "A ground-up TypeScript rebuild of my academic capstone: a NestJS API, a Next.js admin web app, and a React Native driver app for drivers, vehicles, trips, expenses, receipts, maintenance, and active-trip location tracking.",
    technologies: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "React Native",
      "Vitest",
    ],
    role: "Project owner and developer",
    repositoryUrl: "https://github.com/ShadaTaran/mansar-trucking-v2",
    featured: true,
  },
];
