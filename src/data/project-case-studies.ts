import type { ProjectCaseStudy } from "@/types/project-case-study";

export const markly: ProjectCaseStudy = {
  slug: "markly",
  number: "01",
  title: "Markly",
  subtitle: "Universal Personal Library",
  summary:
    "A personal library for tracking websites, anime, manga, novels, games, movies, and series — built around one goal: never lose your place again.",
  role: "Project owner and developer",
  context: "Personal project",
  status: "Live beta",
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
  tldr: [
    "The work and where it's consumed are modeled separately — one LibraryItem can have several TrackingSources, so the same anime found through two sites doesn't become two duplicate entries.",
    "Smart Auto-Link only links automatically on an exact title and type match with exactly one candidate; anything ambiguous is left unlinked rather than guessed.",
    "A single \"Continue\" engine decides which source to resume from, only auto-selecting among several sources when their timestamps are genuinely comparable — otherwise it asks instead of guessing.",
    "Duplicate merges and deletes are covered by a short undo window that compares an exact post-action snapshot and refuses if anything real has changed since.",
    "AniList sync is read/import by default; writing changes back to a user's actual account requires explicitly opting in per connection.",
  ],
  sections: [
    {
      title: "Overview",
      items: [
        "Markly is a personal library for tracking what you're reading, watching, or playing — anime, manga, novels, movies, series, games, and bookmarked websites — in one place instead of scattered across separate apps and sites.",
        "The goal is narrow and specific: preserve both the work itself and where you left off in it, so coming back to something after a break costs nothing more than opening Markly. Alongside the web app, a browser extension and an installable PWA extend that tracking beyond whatever page happens to be open.",
      ],
    },
    {
      title: "My role",
      items: [
        "Markly is my personal project. I'm responsible for its product scope, architecture decisions, and delivery across the whole codebase: the data model, the Supabase schema and its row-level security policies, the Next.js web app and its API routes, the Manifest V3 browser extension, the installable PWA and share-target flow, and the AniList integration.",
      ],
      narrow: true,
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
        "Markly is live as a beta. Accounts and cloud persistence run on Supabase, with every table scoped to its owner at the database level through row-level security, rather than relying on the client to filter correctly. It also works without an account: in local mode, the library stays in the browser until the user chooses to sync it.",
        "All seven content types are supported end to end, including catalog search, manual entry, and progress tracking across multiple tracking sources per item, governed by the conservative linking rules described above. Duplicate detection and explicit merge are both covered by a short undo window, and AniList synchronization supports both inbound and outbound changes, though outbound writes are disabled by default and require explicit user approval.",
        "Beyond the web app, a browser extension and an installable PWA extend tracking into share-target capture from other apps. Backup and restore, Smart Views alongside manually organized Collections, optional push reminders (off by default), and full account deletion round out the current feature set.",
      ],
    },
  ],
};

export const mansarTruckingSystem: ProjectCaseStudy = {
  slug: "mansar-trucking-system",
  number: "02",
  title: "Mansar Trucking V2",
  subtitle: "Full-Stack Trucking Operations Platform",
  summary:
    "A ground-up TypeScript rebuild of my academic capstone: a NestJS API, a Next.js admin web app, and a React Native driver app for managing drivers, vehicles, trips, expenses, receipts, maintenance, and active-trip location tracking.",
  role: "Project owner and developer",
  context: "Rebuild of an academic capstone project",
  status: "In development — verified on staging, not in production",
  technologies: [
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Next.js",
    "React Native",
    "Kotlin",
    "Vitest",
    "Jest",
    "GitHub Actions",
  ],
  repositoryUrl: "https://github.com/ShadaTaran/mansar-trucking-v2",
  tldr: [
    "A complete rewrite rather than a migration: one TypeScript monorepo with a NestJS API, a Next.js admin web app, a React Native driver app, and shared packages for domain types and the API client.",
    "Scheduling rules are enforced by PostgreSQL itself — exclusion constraints reject overlapping trips for the same driver or vehicle, and partial unique indexes allow only one in-progress trip per driver and per vehicle.",
    "Browser JavaScript never sees an auth token: the admin web app keeps tokens in HttpOnly cookies behind a Next.js Backend-for-Frontend, and the driver app keeps its refresh token in Android Keystore-backed storage.",
    "Driver location is captured only during an in-progress trip, queued durably on the device while offline, and ingested idempotently with both device and server timestamps.",
    "Every workspace has automated tests, and GitHub Actions runs typecheck, lint, tests, build, and formatting checks; the staging environment deploys only after CI passes.",
  ],
  sections: [
    {
      title: "Overview",
      items: [
        "Mansar Trucking V2 manages the day-to-day records of a trucking operation: drivers and vehicles, trips from scheduling to closure, driver expenses and receipts, vehicle maintenance, and location tracking during active trips. Admins work in a web application; drivers use an Android app.",
        "It's still in development. The features described below are built and have been verified against a staging environment, but the system isn't deployed to production and isn't in live business use. Everything public — tests, seed data, screenshots — uses synthetic data only.",
      ],
    },
    {
      title: "My role",
      items: [
        "V2 is my personal rebuild of the capstone. I'm responsible for its architecture decisions, which are recorded as architecture decision records in the repository, and for delivering the API, the admin web app, the driver mobile app and its native Android modules, the database schema and migrations, the automated tests, the CI pipeline, and the staging deployment.",
      ],
      narrow: true,
    },
    {
      title: "From capstone to V2",
      items: [
        "The original Mansar Trucking Management System was my academic capstone, built as a team project: a React Native driver app, a PHP and MySQL backend with a Bootstrap admin dashboard, Firebase Realtime Database for current driver locations, and a Leaflet map. An early plan for dedicated in-vehicle GPS hardware was dropped in favor of the driver's phone, which the team could build and test reliably within the project's scope.",
        "V2 is a complete rewrite, not an upgrade: no code from the capstone is migrated or imported. It keeps the same business domain but rebuilds it as a typed, tested system, developed feature by feature in documented stages.",
      ],
      narrow: true,
    },
    {
      title: "One monorepo, clear boundaries",
      items: [
        "The repository is an npm-workspaces monorepo with three applications — a NestJS API, a Next.js admin web app, and a React Native driver app — plus shared packages for domain types and a typed API client. The shared packages are deliberately framework-independent: they can't depend on React, React Native, Next.js, NestJS, or a database client.",
        "Both clients go through the API, which stays the authority for authentication and data. PostgreSQL, accessed through Prisma, is the database. Login identities and operational driver records are kept as separate concepts: a driver record can exist without a user account, and the two are linked rather than merged.",
      ],
      narrow: true,
    },
    {
      title: "Letting the database enforce the rules",
      items: [
        "Trips follow a fixed state machine — draft, assigned, in progress, completed, verified, closed, or cancelled — with no backward transitions. Admins assign, verify, and close trips; drivers start and complete their own.",
        "Scheduling conflicts aren't checked with a read-then-write in application code. Two PostgreSQL exclusion constraints make it impossible for one driver or one vehicle to hold overlapping scheduled windows, and two partial unique indexes allow at most one in-progress trip per driver and per vehicle. The API translates those database violations into specific error responses, so two concurrent requests can't both pass a check that ran a moment too early.",
      ],
      narrow: true,
    },
    {
      title: "Authentication for two kinds of client",
      items: [
        "Passwords are hashed with Argon2id. Access tokens are short-lived JWTs; refresh tokens are random values that the database stores only as hashes, and every refresh rotates them. Presenting a refresh token that was already used is treated as a sign of theft: every session in that token's family is revoked and the event is audited. Login and refresh are rate limited.",
        "The admin web app never exposes tokens to browser JavaScript. The browser talks only to the app's own Next.js routes, which act as a Backend-for-Frontend: tokens live in HttpOnly cookies, unsafe requests must pass strict origin checks, and a constrained proxy forwards API calls server-side. The driver app keeps its access token in memory only and stores its refresh token in Android Keystore-backed secure storage. Each client accepts only its own role — admins on the web, drivers on mobile.",
      ],
      narrow: true,
    },
    {
      title: "Location tracking that survives bad connectivity",
      items: [
        "Location is captured only while a trip is in progress, by a native Android foreground service written in Kotlin. Samples are written to a durable on-device queue first and uploaded in the background when the network allows, so a dead zone delays data instead of losing it.",
        "Each sample carries a client-generated id, which makes retried uploads idempotent, and records both when the device captured it and when the server received it. Because a phone's clock can't be trusted outright, a sample is accepted only within a fixed tolerance around the trip's actual start and completion times. Uploads stay open after a trip completes, so positions captured offline aren't lost just because office work moved on.",
        "Admins see a trip's latest recorded position and its route history as a list of recorded positions. There is deliberately no fleet-wide live map: location belongs to a trip, not to a free-standing driver timeline.",
      ],
      narrow: true,
    },
    {
      title: "Receipts in private storage",
      items: [
        "Drivers attach receipt images to their expenses, which admins then approve or reject. Uploads go straight from the client to a private storage bucket through a presigned POST policy that binds the exact object key, content type, and declared size, so the storage service itself rejects anything that doesn't match. The API depends on a small provider-neutral storage interface rather than a specific vendor SDK.",
      ],
      narrow: true,
    },
    {
      title: "Testing and delivery",
      items: [
        "The API, the web app, and the shared packages are tested with Vitest; the mobile app with Jest and React Native Testing Library; and the native Android location code with its own unit tests. Separate API integration tests run against a real PostgreSQL test database, because the database constraints are part of the behavior being tested.",
        "GitHub Actions runs typecheck, lint, tests, build, and formatting checks across the monorepo. A Railway staging environment — API, web app, PostgreSQL, and a private receipt bucket — deploys only after CI passes, and features such as receipts, maintenance, and location tracking were verified there end to end with synthetic data.",
      ],
      narrow: true,
    },
    {
      title: "Tradeoffs",
      items: [
        "Enforcing scheduling rules with PostgreSQL constraints ties the design to PostgreSQL-specific features, in exchange for rules that hold under concurrent requests without application-level locking.",
        "Refresh-token reuse revokes the whole session family with no grace window. A client that accidentally refreshes the same token twice signs its user out, but a stolen refresh token can't be used quietly.",
        "Device timestamps are tolerated within a fixed bound rather than trusted, so a stored capture time is a bounded observation, not proof of exactly when a position was recorded.",
        "A compromised-password blocklist is deferred to a later stage, so the password policy deliberately doesn't claim full NIST SP 800-63B conformance yet.",
      ],
      variant: "list",
      narrow: false,
    },
    {
      title: "Current state",
      items: [
        "Built so far: authentication for both clients, driver and vehicle management, the full trip lifecycle — administered on the web and carried out in the driver app — expenses with receipt uploads, vehicle maintenance records, and active-trip location tracking with route history for admins.",
        "All of it runs on staging with synthetic data. V2 isn't deployed to production, isn't used by the business yet, and has no public demo.",
      ],
    },
  ],
};
