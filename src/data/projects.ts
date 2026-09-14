import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "markly",
    number: "01",
    title: "Markly",
    subtitle: "Universal Personal Library",
    summary:
      "A single library for everything you're reading, watching, or playing — anime, manga, novels, movies, series, games, and bookmarked websites — with progress tracking that follows you across devices.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://markly-lime.vercel.app",
    featured: true,
  },
  {
    slug: "bouvet-queueing-system",
    number: "02",
    title: "Bouvet Queueing System",
    subtitle: "Software Developer Internship Project",
    summary:
      "A queueing system built during a software developer internship at Bouvet.",
    featured: true,
  },
  {
    slug: "mansar-trucking-system",
    number: "03",
    title: "Mansar Trucking Management System",
    subtitle: "Fleet / Trucking Management Capstone",
    summary:
      "A fleet and trucking management system built as a capstone project.",
    featured: true,
  },
];
