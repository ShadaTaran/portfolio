import type { ProjectCaseStudy } from "@/types/project-case-study";

export const markly: ProjectCaseStudy = {
  slug: "markly",
  number: "01",
  title: "Markly",
  subtitle: "Universal Personal Library",
  summary:
    "A personal library for tracking websites, anime, manga, novels, games, movies, and series — built around one goal: never lose your place again.",
  role: "Personal Project / Software Developer",
  context: "Personal Project",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Browser Extension",
    "PWA",
  ],
  liveUrl: "https://markly-lime.vercel.app",
  repositoryUrl: "https://github.com/ShadaTaran/markly",
  sections: [
    {
      title: "Overview",
      items: [
        "Markly is a personal library for tracking what you're reading, watching, or playing — anime, manga, novels, movies, series, games, and bookmarked websites — in one place instead of scattered across separate apps and sites.",
        "The goal is narrow and specific: preserve both the work itself and where you left off in it, so coming back to something after a break costs nothing more than opening Markly. Alongside the web app, a browser extension and an installable PWA extend that tracking beyond whatever page happens to be open.",
      ],
    },
    {
      title: "From bookmarks to a universal library",
      items: [
        "Markly started as a straightforward bookmark manager — save a link, come back to it later. Extending it to anime, manga, novels, games, movies, and series changed the shape of the problem: a bookmark is just a link, but a piece of media has a title, a type, progress, and often more than one place it can be watched or read from.",
        "That shift raised questions a bookmark manager never has to answer. What is the actual work being tracked, independent of any one link to it? Which source is currently being used to consume it? If the same work turns up through a second source, does that create a duplicate entry or extend the one that's already there? Those questions shaped the rest of the architecture described below.",
      ],
      narrow: true,
    },
    {
      title: "Modeling the work separately from the source",
      items: [
        "Markly's canonical model is a LibraryItem — the work itself: a title, a type (anime, manga, novel, game, movie, series, or website), and whatever tracking fields that type has, such as current episode or chapter. A separate TrackingSource record represents where or how that work is being consumed: a specific site, an AniList entry, or a manually added link.",
        "The two are deliberately kept apart. One LibraryItem can have several TrackingSource rows pointing at it, so the same anime watched partly on one site and picked up later on another doesn't need two duplicate library entries just because it was accessed through two different places. Progress stays attached to the work, not to whichever URL happened to be open when it was recorded.",
        "A source's own lifecycle — linked, unlinked, relinked — can also change without touching the library item it points at, which is what makes the linking and safety rules in the next sections possible without risking the item itself.",
      ],
      narrow: true,
    },
    {
      title: "Knowing where to resume",
      items: [
        "Because one LibraryItem can be linked to more than one TrackingSource, Markly has a single engine that decides, every time, which source “Continue” should actually open. A single eligible source is used directly. Several sources are only auto-selected when every one of them has a genuinely comparable “last seen” timestamp. A manually added link's timestamp means “when it was added,” not “when it was last read,” so it's never allowed to silently win a tie it has no real claim to — when recency can't be trusted, Markly asks instead of guessing.",
        "The catalog identity used to find a work in the first place — an AniList or Open Library id, set only at import time — is kept separate from the source Markly resumes from. The two never consult each other: a catalog reference has no URL of its own, and the resume engine never reads it. Identifying a work and continuing to consume it stay two different questions, so neither one has to carry assumptions that belong to the other.",
      ],
      narrow: true,
    },
    {
      title: "Automation that prefers to miss over guess",
      items: [
        "Smart Auto-Link only links a newly detected source automatically when its title matches an existing library item's normalized title exactly, the media type matches, and exactly one candidate exists — any ambiguity is left unlinked rather than guessed.",
        "Once a user explicitly unlinks a source, Markly remembers that choice and stops auto-relinking it on the next detection, until the user relinks it themselves.",
        "A video episode only counts as watched once playback reaches 85% of its duration (or the video genuinely ends) and at least 50% of the duration has actually played forward — seeking straight to the end, or briefly opening an episode, doesn't qualify.",
        "Seasonal anime and series keep their real season and episode numbers instead of being collapsed into a single running “absolute” count Markly would otherwise have to invent.",
      ],
      variant: "list",
      narrow: false,
    },
    {
      title: "Duplicates, merges, and undo",
      items: [
        "Duplicate detection groups items that share either a strong signal (the same catalog id) or an exact normalized title plus matching media type — never a fuzzy or partial match — and two items whose catalog ids actively disagree are never grouped, even if their titles happen to match. Detection only ever suggests; nothing is merged automatically.",
        "Merging two items is an explicit action, and the merge itself refuses rather than guesses whenever the two sides disagree in a way Markly can't safely resolve — one item tracking absolute episodes and the other seasonal, for example, blocks the merge instead of picking one. Related collections, activity history, and reminders move to the surviving item; the duplicate is only deleted once that's done.",
        "Both delete and merge are covered by a short recovery window. Undo doesn't restore blindly — it compares the current state of the affected item to an exact snapshot taken right after the original action, and refuses if anything real has changed since, such as new progress, an edit, or a second merge. Recovery never overwrites newer, successful user data; it surfaces a conflict instead.",
      ],
      narrow: true,
    },
    {
      title: "Reading from AniList is safe; writing to it isn't",
      items: [
        "Markly can import tracking data from AniList and, separately, write local changes back to it. The two aren't symmetric: importing only affects Markly's own data, while writing changes someone's actual AniList account, so it needs a stronger signal of intent. Outbound writes default off per connection and require the user to explicitly enable them, with each field-level change reconciled and previewed before anything is actually sent.",
      ],
      narrow: true,
    },
    {
      title: "Extending tracking beyond the web app",
      items: [
        "A companion browser extension (Manifest V3) detects supported reading/watching pages and reports progress back to Markly. It's enabled per site by an explicit user action rather than requesting broad host access up front.",
        "Markly is also installable as a PWA, with a standalone, app-like entry point, and supports capturing a shared link directly from another app through the OS share sheet into a dedicated review screen before anything is saved.",
      ],
      narrow: true,
    },
    {
      title: "Tradeoffs",
      items: [
        "Exact-match automatic linking reduces incorrect automatic links, but it also means some valid matches — a slightly different title spelling, a translated name — have to be linked manually instead of Markly finding them on its own.",
        "Blocking a merge on a numbering or progress-unit conflict instead of guessing a conversion means a small number of merges need a manual fix first, rather than completing immediately.",
        "Comparing exact post-action state instead of a timestamp for Undo means a genuinely unrelated later change can block a legitimate undo — the safer failure mode, but not always the most convenient one.",
        "Defaulting AniList writes to off means every new connection starts read-only, even for a user who would have wanted two-way sync from the first moment.",
      ],
      variant: "list",
      narrow: false,
    },
    {
      title: "Current state",
      items: [
        "Markly is deployed and live. Authentication and cloud persistence run on Supabase, with every table scoped to its owner at the database level through row-level security, rather than relying on the client to filter correctly.",
        "All seven content types are supported end to end, including catalog search, manual entry, and progress tracking across multiple tracking sources per item, governed by the conservative linking rules described above. Duplicate detection and explicit merge are both covered by a short undo window, and AniList synchronization supports both inbound and outbound changes, though outbound writes are disabled by default and require explicit user approval.",
        "Beyond the web app, a browser extension and an installable PWA extend tracking into share-target capture from other apps. Backup and restore, Smart Views alongside manually organized Collections, and full account deletion round out the current feature set.",
      ],
    },
  ],
};

export const bouvetQueueingSystem: ProjectCaseStudy = {
  slug: "bouvet-queueing-system",
  number: "02",
  title: "Bouvet Queueing System",
  subtitle: "Software Development Internship Project",
  summary:
    "A queue administration and operations system developed during a software development internship, including authentication, user and department management, queue configuration, search, pagination, validation, and REST API integration.",
  role: "Software Developer Intern",
  context: "Software Development Internship Project",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "REST APIs",
    "MSSQL",
  ],
  sections: [
    {
      title: "Overview",
      items: [
        "A queue administration and operations system built during a software development internship, for managing queues, departments, and day-to-day administrative workflows.",
      ],
    },
    {
      title: "Key Features",
      items: [
        "Authentication and access to administrative screens.",
        "User and department management, including purpose assignment.",
        "Queue and display configuration.",
        "Search, pagination, and form validation across administrative screens.",
        "REST API integration through a Backend-for-Frontend architecture backed by Microsoft SQL Server.",
      ],
      variant: "list",
      narrow: false,
    },
  ],
};

export const mansarTruckingSystem: ProjectCaseStudy = {
  slug: "mansar-trucking-system",
  number: "03",
  title: "Mansar Trucking Management System",
  subtitle: "Capstone Project",
  summary:
    "A mobile and web fleet-management system for coordinating drivers, trips, maintenance, expenses, and GPS-based location tracking.",
  role: "Software Developer / Capstone Developer",
  context: "Capstone Project",
  technologies: [
    "React Native",
    "PHP",
    "MySQL",
    "Firebase Realtime Database",
    "Leaflet",
  ],
  sections: [
    {
      title: "Overview",
      items: [
        "A mobile and web fleet-management system built as a capstone project, for coordinating drivers, trips, maintenance, and expenses.",
      ],
    },
    {
      title: "Key Features",
      items: [
        "Driver and trip management.",
        "Maintenance and expense tracking.",
        "Mobile GPS-based location tracking for drivers.",
        "A web dashboard displaying live location updates alongside trip and fleet data.",
      ],
      variant: "list",
      narrow: false,
    },
  ],
};
