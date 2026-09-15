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
        "Bouvet Queueing System is a queue administration platform built during a software development internship. The system already existed as an ongoing project when the internship began — the work centered on the frontend admin interface and its integration with an existing backend, rather than architecting the system from scratch.",
        "Responsibilities centered on building and maintaining administrative screens — user management, department management, and queue purpose configuration — and making sure those screens correctly read from and wrote to an external REST API backed by Microsoft SQL Server.",
      ],
    },
    {
      title: "Contributing to an existing administration system",
      items: [
        "The project was already underway internally, with its own backend, data model, and API conventions already in place. Working inside that context meant matching existing patterns — request shapes, response handling, and UI conventions the rest of the codebase already used — rather than making independent architectural decisions.",
        "That constraint shaped the work: most tasks involved extending or correcting behavior within an existing Next.js App Router structure, using the stack the project had already settled on — Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui for the interface layer.",
      ],
      narrow: true,
    },
    {
      title: "Building management workflows",
      items: [
        "Administrative work centered on a handful of representative modules: user accounts, departments, and queue purpose assignment. Each followed a similar shape — a paginated, searchable list view, with add/edit dialogs backed by form validation before any request reached the API.",
        "User management combined a paginated list with debounced search, add/edit dialogs, and status/role handling, with each edit ultimately resolving to a PATCH request against the upstream API. Purpose assignment applied the same pattern to a more relational structure: assigning a queue purpose to a caller meant reconciling identifiers for guest type, department, and staff member into the shape the API actually expected, rather than the shape most convenient for the form.",
      ],
      narrow: true,
    },
    {
      title: "Integrating through a Backend-for-Frontend",
      items: [
        "The frontend never called the external REST API directly. Every request went through a Backend-for-Frontend layer implemented as Next.js API routes, sitting between the browser and the MSSQL-backed upstream service. A login request, for example, posted to the app's own /api/auth/login-admin route, which in turn called the upstream /auth/login-admin endpoint and received back a username, role, and token.",
        "Browser-facing requests were routed through these Next.js API routes before reaching the upstream REST API. That BFF layer handled the parts of the request/response cycle that don't belong in browser code: storing the returned token in an HttpOnly cookie rather than exposing it to client-side JavaScript, and exposing a separate, readable cookie carrying only the non-sensitive identity information the UI needed to render correctly.",
      ],
      narrow: true,
    },
    {
      title: "Keeping UI state aligned with API contracts",
      items: [
        "Because the API was already defined by an existing backend, much of the integration work was about mapping — making sure form state, list state, and the payloads the API expected stayed in sync. Forms used react-hook-form with zod validation, so invalid input was caught before a request was even built, not just handled as a server error afterward.",
        "That mapping work mattered more than it might first appear: the API's own field names and structures didn't always line up neatly with how a form modeled the same data, so a meaningful part of the work was translating between the two consistently in both directions — building a valid request payload, and correctly interpreting whatever the API sent back.",
      ],
      narrow: true,
    },
    {
      title: "Debugging integration issues",
      items: [
        "Login responses weren't always shaped the way the client expected — a fallback path was needed so a malformed or unexpected JSON body from the upstream login endpoint didn't crash the login flow outright, and instead surfaced a clear error to the user.",
        "Invalid credentials initially produced a generic failure message; distinguishing that case from other request failures meant reading the upstream error response specifically, so a wrong username or password produced an actual, specific message instead of a blanket error.",
        "The user list could render empty on initial load, which required the client to handle the API's initial response state correctly before deciding that no user records were available.",
      ],
      variant: "list",
      narrow: false,
    },
    {
      title: "Current state",
      items: [
        "By the end of the internship, the admin application supported authenticated access, user and department management, queue purpose assignment, and queue/display configuration, all integrated against the existing MSSQL-backed REST API through the BFF layer described above.",
        "Working against an already-defined REST API made response contracts, payload mapping, and error states matter as much as the interface itself — validating and shaping data correctly before and after each request was as much a part of the job as building the screens that triggered it.",
      ],
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
    "React Native CLI",
    "PHP",
    "MySQL",
    "Firebase Realtime Database",
    "Leaflet",
  ],
  sections: [
    {
      title: "Overview",
      items: [
        "Mansar Trucking Management System is a mobile and web system built as a capstone project around a real trucking business's own operations — coordinating drivers, trips, maintenance, and expenses, with GPS-based location tracking connecting the two ends.",
        "The system pairs a React Native mobile app for drivers with a PHP/MySQL web backend and admin dashboard, using Firebase Realtime Database as a separate channel for current location state.",
      ],
    },
    {
      title: "Modeling the trucking workflow",
      items: [
        "The system followed an existing business process rather than a generic CRUD dashboard invented for the project: an admin issues a trip ticket, a driver carries it out, receipts and records come back once the trip is complete, and the admin encodes that into a trip report. The software was built to support each of those steps, not to redesign the underlying workflow.",
        "Driver, trip, maintenance, and expense records were managed through the same relational business-data layer, keeping the operational records in one structured backend rather than splitting each workflow into a separate system.",
      ],
      narrow: true,
    },
    {
      title: "From dedicated GPS hardware to mobile GPS",
      items: [
        "The project's location-tracking approach changed over its development. An earlier direction explored a dedicated IoT/GPS hardware unit carried in the vehicle, rather than relying on the driver's phone. That approach was set aside — not because it failed outright, but because building and maintaining a reliable custom hardware stack was outside the project's practical scope and the team's hardware expertise.",
        "The final direction used the driver's own mobile device for location instead: a React Native app publishing GPS-based location data to the cloud. That traded a more specialized, hardware-dependent design for one the team could actually implement and test reliably within the project's scope — a smaller, more practical system rather than a more impressive one on paper.",
      ],
      narrow: true,
    },
    {
      title: "Splitting business data from location data",
      items: [
        "Business-domain data — drivers, trips, maintenance, and expenses — lives in MySQL, structured and relational, which fits records that don't change from moment to moment. Current driver location is a different kind of data: it changes throughout a trip and mostly matters as a current snapshot, not as history. That went into Firebase Realtime Database instead, kept deliberately separate from the MySQL schema.",
        "Keeping location state separate meant the dashboard could retrieve current driver-location data from Firebase for map display without treating those updates as ordinary relational trip records. The cost is that the application has to coordinate two separate datastores instead of one — a tradeoff made deliberately, not a consequence of lacking a single system that could do both.",
      ],
      narrow: true,
    },
    {
      title: "Driver location tracking",
      items: [
        "The driver app publishes location periodically rather than continuously, along with when the driver was last active, so the admin side always has a recent — not necessarily instantaneous — picture of where a driver is. Location updates carry latitude and longitude, along with the general source the position came from (GPS versus a coarser cell/Wi-Fi-based estimate), giving the admin side some sense of how precise a given reading is likely to be. Location updates are also something the driver can toggle, rather than something that runs unconditionally in the background.",
      ],
      narrow: true,
    },
    {
      title: "Admin operations and map",
      items: [
        "The admin side is a PHP/Bootstrap web dashboard, with a Leaflet map displaying driver-location data stored in Firebase. Alongside the map, the dashboard supports administrative workflows for issuing trip tickets and managing trip, maintenance, and expense records — the day-to-day administrative side of the system rather than a separate reporting layer.",
      ],
      narrow: true,
    },
    {
      title: "Tradeoffs",
      items: [
        "Using the driver's own phone for GPS instead of dedicated hardware avoided a custom hardware stack the team would have had to build and maintain, at the cost of location tracking depending on the driver's phone and app actually being active.",
        "Splitting business data into MySQL and location data into Firebase let each datastore handle the kind of data it's actually suited for, at the cost of the application needing to coordinate two separate systems instead of one.",
        "Periodic rather than continuous location updates kept the tracking implementation simple and practical to build within the project's scope, at the cost of the map showing a recent position rather than a truly continuous trace.",
      ],
      variant: "list",
      narrow: false,
    },
    {
      title: "Current state",
      items: [
        "The capstone implementation combined the mobile driver workflow, the business management backend, and the GPS-based admin dashboard into one working system, covering trip tickets, maintenance and expense records, and driver location tracking end to end.",
        "The hardware-to-mobile shift was as much a part of the project as any single feature: the strongest architecture wasn't the most hardware-heavy one on paper, but the one the team could actually implement, test, and rely on within the project's real constraints.",
      ],
    },
  ],
};
