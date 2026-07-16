type IconName = "Mail" | "Phone" | "MapPin" | "Github" | "Linkedin" | "Globe";

export const siteMeta = {
  initials: "AT",
  name: "Ahmed Tohamy Elsayed",
  role: "Senior Flutter Engineer",
  headline: "Enterprise Flutter lead blending IoT telemetry, commerce, and content-rich products into calm, high-trust journeys.",
  summary:
    "I help product orgs launch ambitious Flutter apps–whether that’s a sustainability IoT cockpit, a Motobox marketplace stack, or an Arabic reading platform–with the right mix of Clean Architecture, realtime telemetry, and human-grade UX polish. I slot into gnarly handoffs, replace brittle UI layers with modular BLoC/Cubit systems, and partner with backend teams (REST, Firebase, Laravel, React) to keep releases predictable. Currently delivering at The Art Click while mentoring engineers and advising on upper mid/senior Flutter hires.",
  location: "Cairo, Egypt",
  availability: "Open to upper mid/senior Flutter roles, architecture reviews, selective freelance launches, and mentorships.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Years Shipping", value: "4+" },
  { label: "Apps Launched", value: "15+" },
  { label: "Downloads", value: "150K+" },
];

export const highlightBadges = [
  "Enterprise Flutter",
  "Clean Architecture",
  "IoT & Sustainability",
  "Payments & Security",
  "Sockets & MQTT",
  "React + Laravel Support",
  "Mentorship & Instruction",
];

export const aboutQuickFacts = [
  {
    title: "Current Mission",
    items: ["Senior Flutter Developer", "The Art Click · KSA", "Platform modernization & launches"],
  },
  {
    title: "Recent Wins",
    items: ["Motobox ecosystem rollout", "IoT sustainability suites", "PRINCE2-aligned PMO tooling"],
  },
  {
    title: "Collaboration Modes",
    items: ["Flutter + BLoC leadership", "Firebase/REST orchestration", "React & Laravel bridge + mentorship"],
  },
];


export const skillCategories = [
  { title: "Programming", skills: ["Dart", "Java", "Kotlin", "Python", "C#", "JavaScript"] },
  { title: "Mobile Craft", skills: ["Flutter", "Android (Kotlin/Java)", "iOS"] },
  { title: "State & Logic", skills: ["BLoC/Cubit", "Provider", "GetX", "Redux"] },
  { title: "Architecture", skills: ["Clean Architecture", "MVVM", "SOLID", "Feature Modules"] },
  { title: "Frontend & Backend", skills: ["HTML/CSS/JS", "Angular", "REST APIs", "Firebase", "SQL/NoSQL"] },
  { title: "Workflow", skills: ["Git & GitHub", "Android Studio", "VS Code", "Agile/Scrum"] },
];

export const projects = [
  {
    title: "Motobox Store Manager",
    slug: "motobox-manager",
    description:
      "Flutter control center for Motobox restaurant partners, letting franchise teams manage orders, menus, payouts, and multi-store operations across mobile, web, and desktop.",
    brief:
      "A bilingual (AR/EN) partner console built with Flutter 3.6+, Clean Architecture, and Firebase messaging to keep Motobox restaurants synchronized with real-time demand, catalog changes, and finance workflows.",
    detail:
      "The Motobox Store Manager (Rest App) unifies everything a kitchen or franchise operator needs: secure store-owner login, live dashboards, segmented FCM queues, manual order entry, menu/catalog CRUD with add-ons, historical search, and payout/insights modules. Under the hood it leverages Flutter BLoC, get_it DI, Dio with shared interceptors pointing to https://app.motoboxapp.com/public/api, plus Firebase Auth/Messaging, local notifications, and shared helpers (StoreManager, DeviceIdManager) for offline resilience.",
    tags: ["Flutter", "Firebase", "Dio", "BLoC", "FCM"],
    github: undefined,
    demo: undefined,
    cover: "/motobox-manager/motobox-manager-1.png",
    gallery: ["/motobox-manager/motobox-manager-1.png", "/motobox-manager/motobox-manager-2.png", "/motobox-manager/motobox-manager-3.png"],
    features: [
      "Store-owner auth with multi-store selection, availability toggles, and bilingual UI via EasyLocalization.",
      "Realtime order queue with push notifications, audible alerts, manual order workflows, and mandated cancel reasons.",
      "Menu/catalog editor covering items, categories, add-ons, inactive SKUs, and promotion prep.",
      "Business insights for earnings, ratings, payout requests, and audit trails inside the `more` module.",
      "Clean Architecture with BLoC/Cubit, get_it DI, Dio REST client, SharedPref/secure storage helpers, and Firebase messaging.",
    ],
    sections: [
      {
        title: "Business Context",
        bullets: [
          "Targets Motobox marketplace partners who need a single pane for orders, menus, payouts, and store state.",
          "Key KPIs: order acceptance/prep SLAs, catalog health, payout reconciliation, notification delivery/action rates.",
          "Personas include store owners, in-store order managers, and catalog specialists with bilingual requirements.",
        ],
      },
      {
        title: "Core Modules",
        bullets: [
          "Store login & selection using `/store-owner/login` and `/store-owner/get-store-status` endpoints.",
          "Dashboard with live counters, inactive-item alerts, and online/offline toggles.",
          "Notifications/manual orders module for new/ongoing/preparing/pickup queues plus guest orders.",
          "Menu/catalog management with CRUD, status toggles, inactive audits, and price/availability updates.",
          "Past orders search for customer care, and `more` module for earnings, ratings, payouts, audit logs.",
        ],
      },
      {
        title: "Technology",
        bullets: [
          "Flutter 3.6+ with Material components, `flutter_screenutil` for responsive sizing, Cupertino transitions.",
          "BLoC/Cubit architecture, feature-driven folders, get_it DI, repository layer around `MyApi` (Dio + interceptors).",
          "Firebase Core/Messaging + flutter_local_notifications + audioplayers for FCM-driven realtime alerts.",
          "Localization via EasyLocalization (AR/EN) and SamsungOneArabic fonts for RTL polish.",
          "Helpers like SharedPrefHelper, StoreManager, UserManager, DeviceIdManager, permission handling, and secure storage.",
        ],
      },
      {
        title: "Ops & QA",
        bullets: [
          "Supports Android, iOS, web, desktop; release builds handled via `flutter build apk/appbundle/ipa` with signing configs.",
          "Testing flows cover multi-store logins, segmented order handling, menu edits, locale switching, and push notifications.",
          "Monitoring through Firebase, troubleshooting guidance for auth, store status, push delivery, and RTL text alignment.",
        ],
      },
    ],
  },
  {
    title: "Motobox Customer",
    slug: "motobox-cust",
    description:
      "Consumer-side Motobox experience for discovering restaurants, tracking live orders, and managing wallets/offers across Arabic and English locales.",
    brief:
      "A polished Flutter client that lets Motobox customers browse hero promos, track delivery ETA, and manage saved addresses, wallets, and vouchers with real-time updates.",
    detail:
      "The Motobox customer app complements the partner tooling by giving end users a fast, visual storefront. Hero sections highlight featured restaurants, dynamic carousels surface curated categories, and cards show delivery SLAs with live status pills. The UI includes wallet balances, loyalty points, and voucher management plus a segmented order tracker (e.g., preparing, on-the-way). Built with the same Flutter BLoC foundation, it consumes Motobox REST APIs and Firebase push to keep timelines accurate.",
    tags: ["Flutter", "Customer App", "Realtime", "Wallet", "Offers"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.motoboxapp.customer",
    cover: "/motobox-cust/motobox-cust-1.png",
    gallery: ["/motobox-cust/motobox-cust-1.png", "/motobox-cust/motobox-cust-2.png", "/motobox-cust/motobox-cust-3.png"],
    features: [
      "Hero banners + curated carousels highlighting trending restaurants, offers, and categories.",
      "Delivery cards with ETA, vendor badges, minimum order info, and status pills.",
      "Wallet overview displaying balance, saved cards, vouchers, and loyalty progress.",
      "Order timeline widget showing preparing/on the way/delivered states with live updates.",
      "Arabic and English localization with RTL support, consistent with the rest of the Motobox ecosystem.",
    ],
    sections: [
      {
        title: "Browse & Discover",
        bullets: [
          "Hero carousel for seasonal promos plus quick filters (New, Nearby, Offers).",
          "Horizontal cards with vendor logos, cuisine tags, SLA, and rating indicators.",
          "Search shortcuts and curated chips (e.g., Burger, Healthy, Desserts).",
        ],
      },
      {
        title: "Orders & Tracking",
        bullets: [
          "Live timeline component summarizing current orders (Preparing, On the Way).",
          "Push-enabled status updates mirroring driver/kitchen events.",
          "Support for multiple concurrent orders with CTA buttons.",
        ],
      },
      {
        title: "Wallet & Offers",
        bullets: [
          "Wallet card shows balance, linked cards, and quick add money actions.",
          "Voucher list with validity dates, discount types, and redemption progress bars.",
          "Loyalty progress indicator encouraging repeat orders.",
        ],
      },
      {
        title: "Technology Notes",
        bullets: [
          "Shared Flutter stack with partner apps, leveraging BLoC, Dio, Firebase messaging, and theming.",
          "Modular screens for hero sections, wallet modules, and order timelines, designed for reuse across other Motobox verticals.",
          "Prepared for future features like scheduled delivery, multi-address checkout, and driver chat.",
        ],
      },
    ],
  },
  {
    title: "Motobox Delivery",
    slug: "motobox-dlvry",
    description:
      "Driver companion app powering Motobox’s last-mile fleet with realtime orders, telemetry, and payout transparency across Android, iOS, web, and desktop.",
    brief:
      "Built with Flutter for multi-platform reach, the delivery app gives riders an orders board (new/accepted/picked up), background buzz alerts, GPS streaming, and a finance ledger so dispatch, drivers, and finance stay synchronized.",
    detail:
      "The Drivers App focuses on operational resilience: authentication hydrates sessions, OrdersCubit polls Motobox REST APIs every second, FlutterBackgroundService keeps orders flowing even when UI is killed, and LocationWebSocketService streams telemetry to HQ. Drivers toggle online/offline, accept jobs, capture proof of delivery, and review finances, while dispatch gets compliance guardrails (permissions, forced notification channels).",
    tags: ["Flutter", "Delivery", "Realtime", "WebSocket", "FCM"],
    github: undefined,
    demo: undefined,
    cover: "/motobox-dlvry/motobox-dlvry-1.png",
    gallery: ["/motobox-dlvry/motobox-dlvry-1.png", "/motobox-dlvry/motobox-dlvry-2.png", "/motobox-dlvry/motobox-dlvry-3.png", "/motobox-dlvry/motobox-dlvry-4.png"],
    features: [
      "Order lifecycle tabs (new, accepted, picked up) with CTA buttons to accept, mark picked up, deliver, or cancel with reasons.",
      "Background order detection combining second-level polling, audio buzz alerts, and FlutterBackgroundService notifications.",
      "Online/offline gating plus profile controls so drivers cannot take jobs while unavailable.",
      "Telemetry stream via secure WebSocket + location permissions delivering live lat/long/heading to HQ.",
      "Transaction ledger allowing riders to audit payouts, COD, and cash reconciliation from the app.",
    ],
    sections: [
      {
        title: "Operations & Personas",
        bullets: [
          "Drivers triage orders, confirm pickups/drop-offs, log proof of delivery, and track payouts.",
          "Dispatch teams monitor online status, broadcast jobs, and intervene when orders linger.",
          "Finance teams audit transaction logs, reconcile COD, and export payout-ready statements.",
        ],
      },
      {
        title: "Realtime & Compliance",
        bullets: [
          "Orders board diffed once per second; buzz audio + high-importance notifications when new jobs arrive.",
          "Background isolate reinitializes DI and user session to handle process death.",
          "Permission helpers enforce location/notification grants, battery optimizations, and offline gating to reduce field escalations.",
        ],
      },
      {
        title: "Technology Stack & Services",
        bullets: [
          "Flutter 3.24 (commit edada7c) + Dart 3.8.1 with feature-driven architecture, BLoC/Cubit, get_it/injectable DI.",
          "Networking via Dio/MyApi with retry/backoff; JSON serialization through json_serializable/freezed.",
          "Background services: flutter_background_service, location, web_socket_client, flutter_local_notifications, audioplayers.",
          "Storage/security via shared_preferences and flutter_secure_storage; tokens injected via interceptors.",
        ],
      },
      {
        title: "Testing & Deployment",
        bullets: [
          "Manual smoke flows: login, accept→pickup→deliver, cancellation, offline gating, background notifications, transaction pagination, permission denial.",
          "Release builds using `flutter build apk/appbundle/ipa/web` with signing configs outside VCS.",
          "Roadmap includes push-based order fan-out, Crashlytics/Sentry integration, configurable SLA thresholds, and enhanced analytics.",
        ],
      },
    ],
  },
  {
    title: "Negoom El-Rewayat",
    slug: "negoom",
    description:
      "Arabic-first digital novel ecosystem (158K+ Android readers) spanning mobile, web, and community channels with real-time engagement, author tooling, and AdMob monetization.",
    brief:
      "Nogoom El-Rewayat bridges Arabic readers and writers through a modern Flutter stack, offering curated discovery, social reading, author analytics, and admin dashboards while monetizing through AdMob placements and planned subscriptions.",
    detail:
      "Built for the MENA region, the platform combines a premium Flutter reading experience (offline caching, RTL, theming) with community features, writer dashboards, and admin controls. The business model mixes free access, AdMob revenue, and future subscriptions, all backed by clean architecture (Flutter 3.2.5, BLoC, Firebase, Dio, get_it) and a multi-channel ecosystem (app, web, Telegram, WhatsApp).",
    tags: ["Flutter", "Firebase", "AdMob", "Community", "Arabic"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.fahem.poem",
    cover: "/negoom/negoom-1.png",
    gallery: ["/negoom/negoom-1.png", "/negoom/negoom-2.png", "/negoom/negoom-3.png", "/negoom/negoom-4.png", "/negoom/negoom-5.jpeg", "/negoom/negoom-6.png"],
    features: [
      "Arabic-first reading experience with RTL layout, offline caching, theming, and personalization.",
      "Built-in social layer: likes, ratings, comments, favorites, notifications, and community updates.",
      "Writer/administrator tooling for novel CRUD, chapter publishing, analytics, and content moderation.",
      "AdMob integration (interstitial, banner, rewarded, app-open, native) plus roadmap for subscriptions and IAP.",
      "Clean Architecture with Flutter 3.2.5, BLoC, Dio, Firebase (Auth/Firestore/Storage/Messaging), and get_it DI.",
    ],
    sections: [
      {
        title: "Audience & Market",
        bullets: [
          "Targets Arabic readers (16–45) across Egypt, GCC, and the diaspora with 30% YoY growth in digital reading.",
          "Multi-channel ecosystem: mobile apps, responsive web, Telegram channel, WhatsApp groups, newsletters.",
          "Community-first approach connecting writers and readers while preserving Arabic literature.",
        ],
      },
      {
        title: "Reader Experience",
        bullets: [
          "Curated discovery by genre, trending, highest rated, and advanced search with bilingual UI (AR/EN).",
          "Chapter-based reading with offline caching, bookmarks, font controls, dark mode, and RTL polishing.",
          "Social engagement: likes, 1–5 ratings, comments, sharing, favorite shelves, and push notifications.",
        ],
      },
      {
        title: "Writer & Admin Tooling",
        bullets: [
          "Publish novels, add chapters incrementally, manage covers, categories, and metadata.",
          "Analytics for views, ratings, favorites, reader demographics, and engagement trends.",
          "Admin console for novel/user moderation, push broadcasts, and community governance.",
        ],
      },
      {
        title: "Business & Growth",
        bullets: [
          "Current revenue via AdMob placements (interstitial, banner, rewarded, app-open, native).",
          "Planned premium tiers, in-app purchases, partnerships with publishers, and educational licenses.",
          "Growth roadmap covering influencer marketing, regional expansion, original content, and ML recommendations.",
        ],
      },
      {
        title: "Technology Foundation",
        bullets: [
          "Flutter 3.2.5 + Dart with BLoC/Cubit, Clean Architecture layers, repository pattern, get_it DI.",
          "Firebase Auth, Firestore, Storage, Messaging plus Google Mobile Ads, Dio networking, cached images.",
          "Workmanager + local notifications for background polling, Flutter localization for AR/EN, and CI/CD-ready structure.",
        ],
      },
    ],
  },
  {
    title: "Qurani",
    slug: "qurani",
    description: "A single app for every Muslim daily need: Quran reading, Khatmah planner, Duas, Qibla finder, prayer alerts, and mosque locator.",
    brief:
      "Cross-platform Flutter experience with customizable Quran reader, last-read tracking, tafsir/translation search, prayer notifications, Qibla AR compass, and planners for Khatmah, Duas, and Hijri events.",
    detail:
      "Qurani centralizes daily worship flows: scalable Quran scripts with tafsir/translations, auto-scroll + audio playback, AR/map Qibla finder, precise prayer times with flexible alerts, Khatmah planners, dua collections, mosque locator, Hijri/Gregorian calendar, and visual Quran casting. Built in Flutter with theming support, offline-friendly caching, and Play Store distribution (500+ installs, Android 5.0+).",
    tags: ["Flutter", "Religious", "Audio", "Localization", "PWA"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.quraniapp",
    cover: "/qurani/qurani-1.png",
    gallery: ["/qurani/qurani-1.png", "/qurani/qurani-2.png", "/qurani/qurani-3.png", "/qurani/qurani-4.png", "/qurani/qurani-5.png", "/qurani/qurani-6.png"],
    features: [
      "Advanced Quran reader with easy navigation (Sura/Juz/Hizb), bookmarks, last-read position, search with tafsir, auto-scroll, and audio playback.",
      "Customizable fonts/themes, zoom gestures, and support for world-renowned reciters.",
      "Prayer alerts with precise location-based timings, flexible notification scheduling, and Qibla compass with AR/map modes.",
      "Khatmah planner, dua collections (with translation), mosque locator, Hijri-Gregorian calendar, and visual Quran casting.",
      "Themes (Modern/Classic/Dark), wallet-style downloads counter, and versioning (2.0.5, updated Jul 2025).",
    ],
    sections: [
      {
        title: "Daily Worship Toolkit",
        bullets: [
          "Dashboard surfaces prayers, Khatmah progress, bookmarked duas, and reminders.",
          "Reader supports navigation by Sura/Juz/Hizb with saved last-read state and tafsir search.",
          "Audio playback, auto-scroll, and customizable fonts/themes for comfortable recitation.",
        ],
      },
      {
        title: "Utilities",
        bullets: [
          "Prayer alerts tuned to location with adjustable notifications.",
          "Qibla finder via compass, AR overlay, and map view.",
          "Masjid locator, Hijri calendar, event reminders, dua library, and best-reciter playlists.",
        ],
      },
      {
        title: "Platform",
        bullets: [
          "Flutter app targeting Android 5.0+, delivered via Play Store (500+ downloads).",
          "Version 2.0.5 (updated Jul 21, 2025) with Motif Agency as publisher.",
          "Offline-friendly caching so last read and downloads persist between sessions.",
        ],
      },
    ],
  },
  {
    title: "Sleep Manager OSS",
    slug: "sleep-manager",
    description: "Open-source Flutter sleep tracker that logs sessions, experiments with ML insights, and syncs via Firebase.",
    brief: "A public repo proving out sleep-session logging with Flutter/BLoC architecture, Firebase backend, and room to extend ML experiments.",
    tags: ["Flutter", "Open Source", "Firebase"],
    github: "https://github.com/ahmedtohamy1/sleep_manager",
    demo: undefined,
    cover: "/placeholder.svg",
    gallery: [],
    features: [
      "Flutter app scaffold with BLoC + modular folders ready for sleep tracking features.",
      "Firebase integration hooks plus platform runners for Android, iOS, web, desktop.",
      "Open-source code so teams can fork, experiment with ML models, and extend scheduling/analytics flows.",
    ],
    sections: [
      {
        title: "Notes",
        bullets: [
          "Public repo only (no production screenshots available).",
          "Technology: Flutter, Dart, Firebase, cross-platform runners.",
        ],
      },
    ],
  },
  {
    title: "CloudMate Sensor Platform",
    slug: "cloudmate",
    description:
      "Private enterprise IoT stack streaming MQTT telemetry from buildings and streets into Flutter dashboards for real-time status.",
    brief:
      "Industrial IoT monitoring suite with MQTT streams, QR-enabled sensor management, alerting, analytics, and customizable dashboards powering real-world infrastructure deployments.",
    detail:
      "CloudMate is a multi-platform Flutter experience inspired by the PulseHub architecture: it ingests live MQTT sensor data across city infrastructure, visualizes operational/critical states, offers date-range analytics, and lets field teams manage sensors via QR codes, GPS coordinates, and calibration logs. Built with modular BLoC, repository, and Material 3 theming to keep enterprise delivery calm and maintainable.",
    tags: ["Flutter", "IoT", "MQTT", "Realtime", "BLoC"],
    github: undefined,
    demo: undefined,
    cover: "/cloudmate/cloudmate-1.png",
    gallery: ["/cloudmate/cloudmate-1.png", "/cloudmate/cloudmate-2.png", "/cloudmate/cloudmate-3.png", "/cloudmate/cloudmate-4.png", "/cloudmate/cloudmate-5.png", "/cloudmate/cloudmate-6.png"],
    features: [
      "Industrial IoT monitoring with live MQTT streams, dynamic charts, sensor health, and alerting.",
      "Sensor management toolkit covering QR-based identification, calibration schedules, and GPS coordinates.",
      "Project dashboard with budgeting, documentation, and customizable Material 3 layouts.",
      "Team collaboration with role-based access, group hierarchies, and activity logging.",
      "Security controls including MFA, biometrics, secure APIs, and data backup policies.",
    ],
    sections: [
      {
        title: "Industrial IoT Monitoring",
        bullets: [
          "Real-time visualization of sensor telemetry with configurable refresh rates and health indicators.",
          "Advanced sensor detail pages with tab navigation, QR scanning, and state tracking (Operational/Warning/Critical).",
          "Historical trend explorer with custom date ranges, comparative analysis, and exportable datasets.",
          "Sensor inventory with automated discovery, categorization, calibration history, and coordinate/GPS positioning.",
        ],
      },
      {
        title: "Project & Team Management",
        bullets: [
          "Card-based dashboard summarizing project financials, documents, and milestone timelines.",
          "Material 3 theme customization plus personalized alert thresholds per workspace.",
          "Role-based access control with hierarchical groups, permission inheritance, and full audit trails.",
        ],
      },
      {
        title: "Security & Architecture",
        bullets: [
          "Authentication stack with multi-factor auth, biometrics, session management, and password policies.",
          "End-to-end encrypted API communication, automated backups, and compliance-aligned storage.",
          "Layered architecture inspired by PulseHub: Flutter 3 + BLoC + MVVM, repository pattern, and modular feature folders.",
          "IoT gateway bridging MQTT brokers with backend services, feeding dashboards across mobile, web, and PWA clients.",
        ],
      },
    ],
  },
  {
    title: "ProjectsHub",
    slug: "projectshub",
    description:
      "PRINCE2-inspired program delivery workspace (ProjectsHub) for PMOs managing portfolios, risks, and knowledge bases in one Flutter app.",
    brief:
      "ProjectsHub centralizes intake, execution tracking, risk governance, and reusable assets so agencies can manage dozens of engagements with PRINCE2 guardrails and client-ready reporting.",
    detail:
      "Built on Flutter 3.8 with BLoC, go_router, get_it/injectable DI, and dio networking, ProjectsHub unifies portfolios, Manage Hub admin, deep project workspaces, risk registers, and media libraries. WebSocket notifications, theme toggles, multi-factor auth, and reusable templates help teams deliver consistent outcomes while staying audit-ready.",
    tags: ["Flutter", "PRINCE2", "Portfolio", "Risk", "Knowledge"],
    github: undefined,
    demo: undefined,
    cover: "/projectshub/projectshub-1.png",
    gallery: [
      "/projectshub/projectshub-1.png",
      "/projectshub/projectshub-2.png",
      "/projectshub/projectshub-3.png",
      "/projectshub/projectshub-4.png",
      "/projectshub/projectshub-5.png",
      "/projectshub/projectshub-6.png",
      "/projectshub/projectshub-7.png",
      "/projectshub/projectshub-8.png",
    ],
    features: [
      "Portfolio control center consolidating proposals, active engagements, and archived work with filters and workload views.",
      "Manage Hub tooling for organizations, taxonomies, and reusable templates accelerating proposal-to-project conversion.",
      "Deep project workspace covering work packages, deliverables, milestones, meetings, objectives, and notification feeds.",
      "Risk register with assessments, stages, mitigation logging, and audit histories aligned with PRINCE2 governance.",
      "Knowledge reuse through media library, document intelligence center, and reusable work package patterns.",
    ],
    sections: [
      {
        title: "Business Pillars",
        bullets: [
          "Portfolio control: leaders see burn-downs, staffing, and milestones from a single intake-to-execution view.",
          "Risk & compliance: integrated risk register, mitigation logging, and audit trails satisfy regulated teams.",
          "Knowledge reuse: shared media libraries, DIC entries, and work package templates reduce start-up time.",
          "Stakeholder trust: live notifications, dashboards, and exportable reports replace ad-hoc status emails.",
        ],
      },
      {
        title: "PRINCE2 Alignment",
        bullets: [
          "Stages & registers mirror PRINCE2 controls (risk, quality, change, progress).",
          "Manage Hub ensures organization, user, and taxonomy governance before project execution.",
          "Project detail pages track work packages, milestones, and exceptions per PRINCE2 processes.",
        ],
      },
      {
        title: "Architecture & Stack",
        bullets: [
          "Flutter 3.8 + Dart 3.8, feature-driven structure, Cubit state management, get_it/injectable DI.",
          "go_router for navigation, dio + interceptors for networking, WebSocketService for notifications.",
          "SharedPref + secure storage for tokens/env overrides, EnvConfig for prod/dev/demo toggles.",
          "ThemeCubit + ScreenUtil keep layout consistent in light/dark modes and across platforms.",
        ],
      },
      {
        title: "Workflow Modules",
        bullets: [
          "Authentication with OTP/TOTP, biometrics, and secure token caching.",
          "Project home: infinite scroll, status tabs, date filters, and sort options.",
          "Task & milestone registers with dedicated cubits, linking, and pagination.",
          "Media Library for contracts/assets plus notifications/sessions panel for device management.",
        ],
      },
      {
        title: "Ops & KPIs",
        bullets: [
          "KPIs: proposal-to-project conversion, milestone cycle time, risk mitigation SLA, notification engagement.",
          "Testing suite: unit, widget, integration tests plus `flutter analyze` & `flutter lints` guardrails.",
          "Deployment via `flutter build apk/ipa/web`; environment toggles handled through EnvConfig or secure prefs.",
          "Roadmap: OKR dashboards, GRC webhooks, AI copilots, offline caching, GraphQL hooks.",
        ],
      },
    ],
  },
  {
    title: "Delta University Tables",
    slug: "delta-tables",
    description: "Flutter Web/PWA console for Delta University staff to manage class schedules, task registers, and risk logs from any browser.",
    brief:
      "A lightweight scheduling workspace that lets administrators edit timetables, track risks/tasks, and review histories inside a responsive Flutter Web app.",
    tags: ["Flutter Web", "PWA", "Admin"],
    github: undefined,
    demo: "https://deltastaff.org/",
    cover: "/delta-tables/delta-tables-1.png",
    gallery: ["/delta-tables/delta-tables-1.png", "/delta-tables/delta-tables-2.png"],
    features: [
      "Projects view listing faculties/programs with quick filters for risk/task registers.",
      "Risk register + history pages documenting assessments, owners, and mitigation status.",
      "Task register/editor for assigning responsibilities, due dates, and completion state.",
      "Runs as a Flutter Web PWA so staff can pin it on desktop kiosks or tablets for offline-friendly access.",
    ],
  },
  {
    title: "IGotPlans",
    description:
      "Event and itinerary planning app for The Art Click with App Store availability, secure auth, and remote feature flags.",
    tags: ["Flutter", "Firebase", "Feature Flags", "App Store"],
    github: undefined,
    demo: "https://apps.apple.com/us/app/igotplans-ksa/id6467752440",
    cover: "/placeholder.svg",
  },
];

export const experiences = [
  {
    title: "Senior Flutter Developer",
    company: "The Art Click · KSA",
    period: "Sep 2025 – Present",
    location: "Mohandessin, Cairo",
    type: "Full time – On-site",
    highlights: [
      "Own end-to-end delivery of customer and merchant Flutter apps from discovery through release and observability.",
      "Designed modular Clean Architecture with feature packages and BLoC/Cubit for scalable, testable code.",
      "Integrated payments (SDK/REST), secure auth (JWT with rotation), and role-based feature flags via remote config.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Digital Innovation Centre (DIC)",
    period: "Nov 2024 – Sep 2025",
    location: "UK / CZ",
    type: "Full time – Remote",
    highlights: [
      "Led enterprise Flutter apps for sustainability and digitalization programs across EMEA.",
      "Architected cross-platform systems marrying IoT sensors, analytics, and cloud infrastructure.",
      "Partnered with international research teams to move experiments into production.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Extend IT Solutions",
    period: "Jul 2024 – Jan 2025",
    location: "Aleppo, Syria",
    type: "Full time – Remote",
    highlights: [
      "Built restaurant management suites with Flutter, Dio, and BLoC plus secure REST APIs.",
      "Implemented real-time sync and authentication across mobile platforms.",
      "Optimized rendering and state performance, reducing render times by 40%.",
    ],
  },
  {
    title: "Programming Instructor",
    company: "MCIT · Digital Egypt Cubs Initiative",
    period: "Dec 2023 – Oct 2024",
    location: "Nasr City, Cairo",
    type: "Part time – On-site",
    highlights: [
      "Taught 100+ participants programming fundamentals, algorithms, and data structures.",
      "Developed curricula spanning OOP, mobile fundamentals, and project-based learning.",
      "Mentored student teams, achieving ~85% project completion with positive feedback.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Smart Code – System and Administrative Solutions",
    period: "May 2022 – Aug 2023",
    location: "Shoubra, Cairo",
    type: "Full time – On-site",
    highlights: [
      "Improved enterprise apps using .NET, C#, SQL while reducing system latency by 35%.",
      "Introduced automated testing, boosting coverage by 40% and lowering bug reports by 25%.",
      "Delivered features that increased user satisfaction by ~30%.",
    ],
  },
  {
    title: "Manual QA Tester (MIUI/HyperOS)",
    company: "Xiaomi Egypt",
    period: "May 2019 – Apr 2022",
    location: "Downtown, Cairo",
    type: "Full time – On-site",
    highlights: [
      "Executed QA cycles for MIUI/HyperOS OTA builds across devices, validating installs, rollbacks, and system flows.",
      "Captured and triaged defects with adb logcat + bugreports, coordinating with firmware teams for fixes.",
    ],
  },
];

export const educationHistory = [
  {
    institution: "Benha University – Shoubra Faculty of Engineering",
    location: "Shoubra, Cairo",
    credential: "B.Eng. Computer & Communications",
    period: "Sep 2020 – Jun 2025",
    details: ["CGPA 3.01", "Graduation project: Flutter + ESP32 mobile-IoT system (Excellent rating)."],
  },
  {
    institution: "Mobile Apps Development – Digital Egypt Pioneers Initiative (DEPI)",
    location: "Nasr City, Cairo",
    credential: "Trainee",
    period: "May 2024 – Oct 2024",
    details: ["Built Kotlin, Java, and Flutter apps focused on performance.", "Implemented BLoC-based state flows for resilient UI."],
  },
  {
    institution: "Full Stack Web Development using React and Laravel",
    location: "Benha",
    credential: "Trainee",
    period: "Feb 2023 – May 2023",
    details: [
      "Built full-stack modules with React frontends and Laravel 10 APIs, wiring JWT auth and role-based access.",
      "Hands-on training in REST design, Eloquent ORM, automated testing, and deployment pipelines.",
    ],
  },
];

export const volunteering = [
  {
    organization: "Resala Charity Organization",
    role: "Flutter Development Instructor",
    period: "Jan 2024",
    location: "Dokki Branch, Cairo",
    highlights: [
      "Delivered weekly advanced Flutter workshops for 30+ participants covering architecture and REST.",
      "Authored curriculum and hands-on exercises for production-grade app builds.",
      "Mentored 15+ learners, enabling 10 published apps.",
    ],
  },
];

export type ContactChannel = {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
};

export type SocialLink = {
  icon: IconName;
  label: string;
  href: string;
};

export const contactInfo: ContactChannel[] = [
  { icon: "Mail", label: "Email", value: "1ahmed.tohamy@gmail.com", href: "mailto:1ahmed.tohamy@gmail.com" },
  { icon: "Phone", label: "Phone", value: "+20 109 348 0689", href: "tel:+201093480689" },
  { icon: "MapPin", label: "Location", value: "Cairo, Egypt" },
];

export const socialLinks: SocialLink[] = [
  { icon: "Github", label: "GitHub", href: "https://github.com/ahmedtohamy1" },
  { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com/in/1ahmedtohamy" },
  { icon: "Globe", label: "Bio", href: "https://bio.ahmedtohamy.is-a.dev" },
];

