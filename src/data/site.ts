type IconName = "Mail" | "Phone" | "MapPin" | "Github" | "Linkedin" | "Globe";

export const siteMeta = {
  initials: "AT",
  name: "Ahmed Tohamy Elsayed",
  role: "Senior Flutter Engineer",
  headline: "Enterprise Flutter engineer translating complex requirements into calm, high-trust mobile journeys.",
  summary:
    "Flutter developer with 4+ years building cross-platform, enterprise applications spanning sustainability, commerce, and IoT programs. Currently shipping customer and merchant apps at The Art Click after leading sustainability suites at the Digital Innovation Centre. Strengths in IoT integrations, clean architecture, security, and I also jump in with React and Laravel whenever supporting web touchpoints matters.",
  location: "Cairo, Egypt",
  availability: "Open to senior Flutter roles, architecture reviews, and selective freelance launches.",
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
    items: ["Senior Flutter Developer", "The Art Click · KSA", "Sep 2025 – Present"],
  },
  {
    title: "Recent Focus",
    items: ["Sustainability & infrastructure suites", "POS + ERP experiences", "Role-based access & security"],
  },
  {
    title: "Tooling I Reach For",
    items: ["Flutter + BLoC", "Firebase & REST", "React & Laravel bridges"],
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
    title: "Motobox App Ecosystem",
    description:
      "Suite of three Flutter apps powering logistics, merchants, and customers; public customer app on Play Store with 15K+ users and live order sockets.",
    tags: ["Flutter", "BLoC", "Sockets", "REST"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.motoboxapp.customer",
    cover: "/placeholder.svg",
  },
  {
    title: "Negoom Rewyat",
    description:
      "Storytelling and poetry platform with 158K+ Android users, offline caching, analytics-driven recommendations, and AdMob monetization.",
    tags: ["Flutter", "AdMob", "Firebase", "Analytics"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.fahem.poem",
    cover: "/placeholder.svg",
  },
  {
    title: "Qurani App Tunisia",
    description:
      "Modern Quran experience localized for Tunisian audiences with bookmarking, audio, and cloud sync; shipped via Play Store.",
    tags: ["Flutter", "Firebase", "Localization", "Audio"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.quraniapp",
    cover: "/placeholder.svg",
  },
  {
    title: "Delta University Tables",
    description:
      "PWA built with Flutter Web for Delta University staff, enabling timetable publishing, notifications, and offline access.",
    tags: ["Flutter Web", "PWA", "Firebase", "Notifications"],
    github: undefined,
    demo: "https://deltastaff.org/",
    cover: "/placeholder.svg",
  },
  {
    title: "Sleep Tracking OSS",
    description:
      "Open-source sleep analytics app with ML-based recommendations, Firebase sync, and GDPR-friendly data handling.",
    tags: ["Flutter", "BLoC", "Firebase", "ML"],
    github: "https://github.com/ahmedtohamy1/sleep_manager",
    demo: undefined,
    cover: "/placeholder.svg",
  },
  {
    title: "CloudMate Sensor Platform",
    description:
      "Private enterprise IoT stack streaming MQTT telemetry from buildings and streets into Flutter dashboards for real-time status.",
    tags: ["Flutter", "IoT", "MQTT", "Realtime", "BLoC"],
    github: undefined,
    demo: undefined,
    cover: "/placeholder.svg",
  },
  {
    title: "PulseFin Expense Suite",
    description:
      "Private mobile/web solution tracking company expenses for travel and site visits with secure APIs, encryption, and forecasting.",
    tags: ["Flutter", "Secure API", "Encryption", "Analytics"],
    github: undefined,
    demo: undefined,
    cover: "/placeholder.svg",
  },
  {
    title: "ProjectsHub Operations",
    description:
      "Private project management platform tightly integrated with CloudMate and PulseFin for resource planning and live collaboration.",
    tags: ["Flutter", "Firestore", "REST", "Realtime"],
    github: undefined,
    demo: undefined,
    cover: "/placeholder.svg",
  },
  {
    title: "IGotPlans",
    description:
      "Event and itinerary planning app for The Art Click with Play Store availability, secure auth, and remote feature flags.",
    tags: ["Flutter", "Firebase", "Feature Flags", "Play Store"],
    github: undefined,
    demo: "https://play.google.com/store/apps/details?id=com.artclick.igotplan.testing",
    cover: "/placeholder.svg",
  },
];

export const experiences = [
  {
    title: "Senior Flutter Developer",
    company: "The Art Click · KSA",
    period: "Sep 2025 – Present",
    location: "Mohandessin, Cairo",
    type: "Full time — On-site",
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
    type: "Full time — Remote",
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
    type: "Full time — Remote",
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
    type: "Part time — On-site",
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
    type: "Full time — On-site",
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
    type: "Full time — On-site",
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
    details: ["Developed React and Laravel services."],
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
  { icon: "Globe", label: "Portfolio", href: "https://bio.ahmedtohamy.is-a.dev" },
];

