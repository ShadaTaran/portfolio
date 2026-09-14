import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "markly",
    number: "01",
    title: "Markly",
    subtitle: "Universal Personal Library",
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
    role: "Personal Project / Software Developer",
    liveUrl: "https://markly-lime.vercel.app",
    repositoryUrl: "https://github.com/ShadaTaran/markly",
    featured: true,
  },
  {
    slug: "bouvet-queueing-system",
    number: "02",
    title: "Bouvet Queueing System",
    subtitle: "Software Development Internship Project",
    summary:
      "A queue administration and operations system developed during a software development internship, including authentication, user and department management, queue configuration, search, pagination, validation, and REST API integration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "REST APIs",
      "MSSQL",
    ],
    role: "Software Developer Intern",
    featured: true,
  },
  {
    slug: "mansar-trucking-system",
    number: "03",
    title: "Mansar Trucking Management System",
    subtitle: "Capstone Project",
    summary:
      "A mobile and web fleet-management system for coordinating drivers, trips, maintenance, expenses, and GPS-based location tracking.",
    technologies: [
      "React Native",
      "PHP",
      "MySQL",
      "Firebase Realtime Database",
      "Leaflet",
    ],
    role: "Software Developer / Capstone Developer",
    featured: true,
  },
];
