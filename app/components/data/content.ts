/* ------------------------------------------------------------------ */
/*  CONTENT MODEL — Zahid Rahimoon · Portfolio                          */
/*  All copy lives here so sections stay presentational. Export names   */
/*  are kept stable so each section keeps consuming the same key.       */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Zahid Rahimoon",
  email: "mtkinverse@gmail.com",
};

export const nav = {
  primary: [
    { label: "Experience", href: "#how", caret: false },
    { label: "Projects", href: "#formats", caret: false },
    { label: "Skills", href: "#network", caret: false },
    { label: "FAQ", href: "#faq", caret: false },
  ],
  actions: [
    { label: "Résumé", href: "#", variant: "outline" as const },
    { label: "Contact Me", href: "#contact", variant: "primary" as const },
  ],
};

export const hero = {
  eyebrow: "Associate Software Engineer",
  title: "I build products that perform.",
  body: "Full-Stack Engineer with 2+ years shipping production-ready systems across React, Next.js, Node.js and React Native. I optimize performance, write clean architecture, and turn ideas into reliable software.",
  primaryCta: { label: "Contact Me", href: "#contact" },
  secondaryCta: { label: "View my work", href: "#formats" },
  status: "Available for freelance & full-time",
  stats: [
    { value: "2+", label: "years experience" },
    { value: "25+", label: "projects shipped" },
    { value: "10+", label: "happy clients" },
  ],
};

/* Tech-stack marquee (was the client-logo wall). */
export const clientLogos = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Prisma",
  "Express.js",
  "Socket.IO",
];

/* "What I Do" (was Why It Works). */
export const whyItWorks = {
  eyebrow: "What I Do",
  title: "One engineer across the entire stack.",
  body: "From pixel-perfect interfaces to resilient backends and cross-platform mobile — I own the full product lifecycle.",
  channels: [
    {
      name: "Frontend",
      icon: "layout",
      note: "React, Next.js & TypeScript. Accessible, pixel-perfect UIs built straight from Figma.",
    },
    {
      name: "Backend",
      icon: "server",
      note: "Node.js, NestJS & Express. REST APIs, auth, and real-time with Socket.IO.",
    },
    {
      name: "Mobile",
      icon: "phone",
      note: "React Native & Expo. Cross-platform apps with up to 95% shared code.",
    },
    {
      name: "DevOps",
      icon: "cloud",
      note: "Docker, CI/CD & Vercel. Reliable, automated and repeatable deployments.",
    },
  ],
  highlight: { name: "Full-Stack Engineering" },
};

/* "Why Work With Me" — measurable impact (was The Problem). */
export const problems = {
  eyebrow: "Why Work With Me",
  title: "Measurable impact, not just code.",
  items: [
    {
      tone: "amber",
      icon: "zap",
      title: "40% faster apps",
      body: "Boosted performance through Next.js SSR/ISR strategies and optimized backend design under high traffic.",
    },
    {
      tone: "sage",
      icon: "clock",
      title: "30% quicker delivery",
      body: "Component-driven architecture with React and Tailwind cut development time across 15+ applications.",
    },
    {
      tone: "rose",
      icon: "shield",
      title: "25% fewer bugs",
      body: "TypeScript migrations and clean, tested patterns improved code quality and long-term reliability.",
    },
  ],
  testimonial: {
    quote:
      "I care about the details users actually feel — speed, reliability, and interfaces that just work. The best engineering is invisible.",
    name: "Zahid Rahimoon",
    role: "Full-Stack Engineer",
  },
};

/* Experience timeline (was How It Works steps). */
export const steps = {
  eyebrow: "Experience",
  title: "Where I've made an impact.",
  items: [
    {
      no: "01",
      title: "Associate Software Engineer",
      company: "360XpertSolutions",
      period: "Feb 2026 – Present",
      body: "Leading full-stack delivery with scalable architecture and high-traffic APIs.",
      achievements: [
        "Architected modular full-stack apps with scalable deployment pipelines",
        "Enhanced performance by 40% via Next.js SSR/ISR strategies",
        "Designed RESTful APIs with NestJS, PostgreSQL & Prisma ORM",
      ],
      tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    },
    {
      no: "02",
      title: "Full Stack Developer",
      company: "360XpertSolutions",
      period: "Jul 2025 – Feb 2026",
      body: "Shipped web and cross-platform mobile products from design to production.",
      achievements: [
        "Built 15+ responsive apps with pixel-perfect UI from Figma",
        "Delivered cross-platform mobile apps with 95% code reuse",
        "Cut development time 30% with component-driven architecture",
      ],
      tech: ["React", "React Native", "Expo", "Tailwind CSS", "Node.js"],
    },
    {
      no: "03",
      title: "Frontend Developer",
      company: "Techverse51",
      period: "Jan 2025 – Sep 2025",
      body: "Focused on reusable component systems and code-quality improvements.",
      achievements: [
        "Built dynamic, reusable UI component libraries",
        "Migrated codebase to TypeScript, reducing bugs by 25%",
        "Applied React best practices and proven design patterns",
      ],
      tech: ["React", "Next.js", "TypeScript", "CSS3"],
    },
    {
      no: "04",
      title: "Full Stack Developer — Freelance",
      company: "Self-Employed",
      period: "Sep 2024 – Present",
      body: "Owned end-to-end delivery for clients across e-commerce and custom apps.",
      achievements: [
        "Delivered 10+ full-stack projects including e-commerce platforms",
        "Owned the lifecycle from requirements to deployment & maintenance",
        "Maintained reliable production systems for ongoing clients",
      ],
      tech: ["MERN", "Next.js", "MongoDB", "Express.js"],
    },
  ],
};

/* Reviews — auto-scrolling testimonial cards (was the photo gallery). */
export const gallery = {
  eyebrow: "Testimonials",
  title: "What people I work with say.",
  body: "Feedback from clients, teammates and founders I've shipped products with.",
  items: [
    {
      quote:
        "Zahid turned a vague brief into a polished, production-ready platform faster than we expected. Clean code, clear communication, zero drama.",
      name: "Ayesha Khan",
      role: "Founder",
      company: "Oneviti",
      rating: 5,
    },
    {
      quote:
        "One of the few engineers who genuinely owns the whole stack. Our app got noticeably faster after his Next.js performance work.",
      name: "Daniel Roberts",
      role: "Product Lead",
      company: "360XpertSolutions",
      rating: 5,
    },
    {
      quote:
        "He shipped our React Native app across iOS and Android on a single codebase and hit every deadline. Highly recommend.",
      name: "Sara Malik",
      role: "CTO",
      company: "Techverse51",
      rating: 5,
    },
    {
      quote:
        "Reliable, detail-obsessed and easy to work with. The admin dashboard he built is still the backbone of our operations.",
      name: "Imran Sheikh",
      role: "Operations Manager",
      company: "Rahimoon Institute",
      rating: 5,
    },
    {
      quote:
        "Great architectural instincts. His boilerplate cut our project setup time dramatically and the code quality stayed high throughout.",
      name: "Hina Raza",
      role: "Engineering Manager",
      company: "Freelance Client",
      rating: 5,
    },
    {
      quote:
        "From API design to deployment, Zahid handled it all and kept us in the loop the whole way. Would hire again without hesitation.",
      name: "Bilal Ahmed",
      role: "Startup Founder",
      company: "E-Commerce Client",
      rating: 5,
    },
  ],
};

/* Projects (was What We Run formats). */
export const formats = {
  eyebrow: "Projects",
  title: "Things I've designed, built and shipped.",
  items: [
    {
      name: "Rahimoon Institute",
      desc: "Full college platform — student portal, CMS & admin dashboard with file uploads, email and role-based access.",
      tech: "MERN · Prisma · Cloudinary · JWT",
      icon: "book",
      tone: "tan",
      popular: true,
    },
    {
      name: "Next Boilerplate",
      desc: "Production-ready Next.js starter kit used in 10+ projects, cutting setup time by 60%.",
      tech: "Next.js 16 · Socket.IO · ShadCN · i18n",
      icon: "rocket",
      tone: "purple",
      popular: false,
    },
    {
      name: "360 Mock Server",
      desc: "Zero-config mock REST API server published on NPM with CRUD, faker data and pagination.",
      tech: "Node.js · Express · Faker.js",
      icon: "server",
      tone: "blue",
      popular: false,
    },
    {
      name: "Oneviti Dashboard",
      desc: "Personal productivity hub — tasks, notes, finance tracking and scheduling in one place.",
      tech: "React · Node.js · MongoDB",
      icon: "dashboard",
      tone: "rose",
      popular: false,
    },
    {
      name: "E-Commerce Platforms",
      desc: "10+ custom storefronts with carts, payments and admin panels delivered for clients.",
      tech: "MERN · Next.js · Stripe",
      icon: "cart",
      tone: "tan",
      popular: false,
    },
    {
      name: "Cross-Platform Mobile Apps",
      desc: "React Native & Expo apps sharing a single codebase across iOS and Android.",
      tech: "React Native · Expo",
      icon: "phone",
      tone: "gray",
      popular: false,
    },
  ],
};

/* Achievements & certifications (was Testimonials). */
export const testimonials = {
  eyebrow: "Achievements",
  title: "Recognition, research & published work.",
  body: "Beyond client projects — tools I've open-sourced, research I've published, and credentials I've earned.",
  items: [
    {
      company: "360 Mock Server",
      quote:
        "Published an NPM package — an API simulation tool for rapid prototyping, used across 10+ projects to unblock frontend work.",
      name: "",
      role: "Open Source · NPM",
      cta: "View on NPM",
      icon: "package",
      accent: "#c8431f",
    },
    {
      company: "IPv4 Optimization",
      quote:
        "Research on network address optimization using VLSM & CIDR, achieving a 30% address-efficiency improvement.",
      name: "",
      role: "Research",
      cta: "",
      icon: "research",
      accent: "#1b6fb0",
    },
    {
      company: "OOP with Java",
      quote:
        "Certified in object-oriented programming fundamentals, SOLID principles and design patterns.",
      name: "",
      role: "Certification",
      cta: "",
      icon: "certificate",
      accent: "#a9822c",
    },
    {
      company: "Computer Networking",
      quote:
        "Certification covering protocols, addressing, subnetting and core network architecture.",
      name: "",
      role: "Certification",
      cta: "",
      icon: "network",
      accent: "#0f9d8f",
    },
    {
      company: "Frontend Simulations",
      quote:
        "Completed industry frontend development job simulations and real-world engineering assessments.",
      name: "",
      role: "Certification",
      cta: "",
      icon: "code",
      accent: "#6d3bd4",
    },
    {
      company: "Diploma in Web Dev",
      quote:
        "Aptech Computer Education — a full-stack web development diploma covering the modern JavaScript ecosystem.",
      name: "",
      role: "Education",
      cta: "",
      icon: "cap",
      accent: "#c0397f",
    },
  ],
};

/* Tech stack tiles (was The Network). */
/* `slug` maps to a Simple Icons brand logo (cdn.simpleicons.org). */
export const network = {
  eyebrow: "Tech Stack",
  title: "The tools I reach for every day.",
  body: "Full coverage from frontend to deployment — frameworks, databases, infra and the glue in between.",
  communities: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "NestJS", slug: "nestjs" },
    { name: "Express", slug: "express" },
    { name: "React Native", slug: "react" },
    { name: "Expo", slug: "expo" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "ShadCN/UI", slug: "shadcnui" },
    { name: "Redux Toolkit", slug: "redux" },
    { name: "Zustand", slug: "" },
    { name: "Zod", slug: "zod" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MySQL", slug: "mysql" },
    { name: "Redis", slug: "redis" },
    { name: "Prisma", slug: "prisma" },
    { name: "Docker", slug: "docker" },
    { name: "Socket.IO", slug: "socketdotio" },
    { name: "RabbitMQ", slug: "rabbitmq" },
    { name: "Git", slug: "git" },
    { name: "Vercel", slug: "vercel" },
    { name: "Cloudinary", slug: "cloudinary" },
  ],
};

/* About — intro block above the contact CTA. */
export const about = {
  eyebrow: "About Me",
  title: "Engineer first, problem-solver always.",
  paragraphs: [
    "I'm Zahid Rahimoon, a Full-Stack Engineer based in Karachi with 2+ years turning ideas into reliable, production-grade software. I work end to end — interfaces, APIs, databases, real-time systems and deployments.",
    "I care about the details users actually feel: speed, reliability and interfaces that just work. Whether it's a dashboard, a developer tool or a cross-platform mobile app, I own the lifecycle from first commit to production.",
  ],
  highlights: [
    { value: "2+", label: "years experience" },
    { value: "25+", label: "projects shipped" },
    { value: "10+", label: "happy clients" },
  ],
  cta: { label: "Contact Me" },
};

/* Contact — left column data/links + right column form (rendered in modal). */
export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build something.",
  body: "Tell me about your project and I'll get back to you within a day.",
  email: "mtkinverse@gmail.com",
  location: "Karachi, Pakistan",
  availability: "Available for freelance & full-time",
  responseTime: "Replies within ~24 hours",
  socials: [
    { label: "GitHub", href: "https://github.com/", handle: "@zahidrahimoon" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      handle: "in/zahidrahimoon",
    },
    { label: "Email", href: "mailto:mtkinverse@gmail.com", handle: "mtkinverse@gmail.com" },
  ],
};

/* New auto-scrolling project showcase with dedicated detail pages.        */
/* The original `formats` projects grid above is left untouched on purpose. */
export const projectsShowcase = {
  eyebrow: "Featured Work",
  title: "Projects, up close.",
  body: "Six builds I'm proud of — slide through and open any one for the full story.",
  items: [
    {
      slug: "rahimoon-institute",
      name: "Rahimoon Institute",
      tagline: "College management platform",
      year: "2025",
      role: "Full-Stack Engineer",
      seed: "proj-institute",
      accent: "#8b1d1d",
      summary:
        "An end-to-end college platform with a student portal, content management system and admin dashboard.",
      overview:
        "Rahimoon Institute is a complete college management platform built to digitise admissions, course content and day-to-day administration. It pairs a student-facing portal with a powerful admin dashboard, all backed by role-based access control.",
      highlights: [
        "Role-based access for students, faculty and administrators",
        "File uploads and media handled through Cloudinary",
        "Transactional email for onboarding and notifications",
        "CMS for courses, announcements and resources",
      ],
      tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Cloudinary", "JWT"],
      links: { live: "#", code: "#" },
    },
    {
      slug: "next-boilerplate",
      name: "Next Boilerplate",
      tagline: "Production-ready starter kit",
      year: "2025",
      role: "Author",
      seed: "proj-boilerplate",
      accent: "#5a2db0",
      summary:
        "A batteries-included Next.js 16 starter used across 10+ projects, cutting setup time by 60%.",
      overview:
        "A production-ready Next.js starter kit that bundles auth, internationalisation, real-time, a component library and sensible defaults — so new projects start at sprint two, not zero.",
      highlights: [
        "Next.js 16 App Router with typed routes",
        "Socket.IO real-time layer wired in",
        "ShadCN/UI component system and theming",
        "i18n, linting and CI configured out of the box",
      ],
      tech: ["Next.js", "Socket.IO", "ShadCN/UI", "TypeScript", "i18n"],
      links: { live: "#", code: "#" },
    },
    {
      slug: "360-mock-server",
      name: "360 Mock Server",
      tagline: "Zero-config mock REST API",
      year: "2024",
      role: "Author · NPM",
      seed: "proj-mockserver",
      accent: "#1b2a4a",
      summary:
        "A zero-config mock REST API server published on NPM with CRUD, faker data and pagination.",
      overview:
        "360 Mock Server is an NPM package that spins up a fully working REST API from a single config — perfect for unblocking frontend work before the real backend lands. It ships CRUD, relationships, pagination and realistic faker data.",
      highlights: [
        "Zero-config CRUD endpoints from a schema",
        "Realistic seed data via Faker.js",
        "Pagination, filtering and sorting built in",
        "Published and versioned on NPM",
      ],
      tech: ["Node.js", "Express", "Faker.js", "NPM"],
      links: { live: "#", code: "#" },
    },
    {
      slug: "oneviti-dashboard",
      name: "Oneviti Dashboard",
      tagline: "Personal productivity hub",
      year: "2025",
      role: "Full-Stack Engineer",
      seed: "proj-oneviti",
      accent: "#10b3a3",
      summary:
        "A single hub for tasks, notes, finance tracking and scheduling — your day at a glance.",
      overview:
        "Oneviti brings tasks, notes, finance tracking and scheduling under one roof. A clean, fast dashboard that keeps everything in sync so you can plan, track and reflect without app-switching.",
      highlights: [
        "Unified tasks, notes and calendar",
        "Personal finance tracking with charts",
        "Fast, responsive React dashboard",
        "MongoDB-backed sync across views",
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      links: { live: "#", code: "#" },
    },
    {
      slug: "ecommerce-platforms",
      name: "E-Commerce Platforms",
      tagline: "10+ custom storefronts",
      year: "2024",
      role: "Full-Stack Engineer",
      seed: "proj-ecommerce",
      accent: "#ff7a45",
      summary:
        "More than ten custom storefronts with carts, payments and admin panels delivered for clients.",
      overview:
        "A series of custom e-commerce builds for clients across niches — each with a tailored storefront, cart, secure payments and a full admin panel for catalogue and order management.",
      highlights: [
        "Stripe-powered checkout and payments",
        "Cart, wishlist and order management",
        "Admin panels for catalogue and inventory",
        "Built on MERN and Next.js",
      ],
      tech: ["Next.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
      links: { live: "#", code: "#" },
    },
    {
      slug: "cross-platform-apps",
      name: "Cross-Platform Mobile Apps",
      tagline: "One codebase, iOS & Android",
      year: "2025",
      role: "Mobile Engineer",
      seed: "proj-mobile",
      accent: "#2f3b2a",
      summary:
        "React Native & Expo apps sharing a single codebase across iOS and Android with 95% code reuse.",
      overview:
        "A set of cross-platform mobile apps built with React Native and Expo, sharing up to 95% of code across iOS and Android — native feel, half the maintenance, fast delivery.",
      highlights: [
        "Up to 95% shared code across platforms",
        "Expo build and over-the-air updates",
        "Native navigation and gestures",
        "Push notifications and offline support",
      ],
      tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit"],
      links: { live: "#", code: "#" },
    },
  ],
};

export type ShowcaseProject = (typeof projectsShowcase.items)[number];

export function getProject(slug: string): ShowcaseProject | undefined {
  return projectsShowcase.items.find((p) => p.slug === slug);
}

/* How I Work — my delivery process, from idea to production. */
export const workProcess = {
  eyebrow: "How I Work",
  title: "From first idea to production.",
  body: "A clear, collaborative process — you always know what's shipping and what's next.",
  steps: [
    {
      no: "01",
      icon: "compass",
      title: "Discovery & Planning",
      desc: "We align on goals, scope and constraints, then turn them into a concrete technical plan and timeline.",
    },
    {
      no: "02",
      icon: "ruler",
      title: "Design & Architecture",
      desc: "Wireframes, data models and a scalable architecture — decided before a line of production code.",
    },
    {
      no: "03",
      icon: "code",
      title: "Build & Iterate",
      desc: "Rapid, component-driven development with frequent demos and tight feedback loops so nothing drifts.",
    },
    {
      no: "04",
      icon: "rocket",
      title: "Ship & Support",
      desc: "Automated deployment, monitoring and ongoing maintenance so the product keeps performing in production.",
    },
  ],
};

/* Education — from the CV. */
export const education = {
  eyebrow: "Education",
  title: "Where I studied.",
  body: "Formal computer-science foundations backed by a focused web-development diploma.",
  items: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Dawood University of Engineering and Technology, Karachi",
      period: "2023 – 2027",
      note: "Core CS — algorithms, systems, networks and software architecture.",
    },
    {
      degree: "Diploma in Web Development",
      school: "Aptech Computer Education",
      period: "2023 – 2024",
      note: "Hands-on training across the modern JavaScript and full-stack ecosystem.",
    },
  ],
};

export const faqs = {
  title: "Frequently asked questions",
  items: [
    {
      q: "Are you available for freelance or full-time work?",
      a: "Yes — I'm open to both freelance projects and full-time roles. The quickest way to reach me is email, and I usually reply within a day.",
    },
    {
      q: "What's your core tech stack?",
      a: "Day to day I work across the MERN stack and Next.js: React, Next.js, TypeScript and Tailwind on the frontend; Node.js, NestJS and Express on the backend; and MongoDB or PostgreSQL with Prisma for data. For mobile I use React Native and Expo.",
    },
    {
      q: "Do you build mobile apps too?",
      a: "Yes. I build cross-platform mobile apps with React Native and Expo, typically sharing 90%+ of the code across iOS and Android.",
    },
    {
      q: "How much experience do you have?",
      a: "2+ years of professional experience across associate software engineering, full-stack and frontend roles, plus freelance work delivering 10+ production projects.",
    },
    {
      q: "What's your educational background?",
      a: "I'm pursuing a B.S. in Computer Science at Dawood University of Engineering and Technology, Karachi (2023–2027), alongside a Diploma in Web Development from Aptech Computer Education.",
    },
    {
      q: "Can you own a project end to end?",
      a: "Absolutely — from requirements and architecture through development, deployment and maintenance. I handle UI, APIs, databases, auth, real-time features and DevOps.",
    },
    {
      q: "Where are you based?",
      a: "I'm based in Karachi, Pakistan, and work with clients and teams remotely across time zones.",
    },
  ],
};

export const finalCta = {
  title: "Have a project in mind? Let's build it.",
  body: "Whether it's a web app, a mobile product or an API — I'd love to hear about it.",
  primaryCta: { label: "Contact Me", href: "#contact" },
  secondaryCta: { label: "View Projects", href: "#formats" },
};

export const footer = {
  name: "Zahid Rahimoon.",
  email: "zahidrahimoon22@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
  ],
  copyright: "© 2026 Zahid Rahimoon. All rights reserved.",
};
