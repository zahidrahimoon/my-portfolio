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
  title: "I build scalable web & mobile products that actually perform.",
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

export const gallery = {
  eyebrow: "Selected Work",
  title: "A glimpse of what I build.",
  body: "Dashboards, platforms, developer tools and mobile apps — shipped to production.",
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
    },
    {
      company: "IPv4 Optimization",
      quote:
        "Research on network address optimization using VLSM & CIDR, achieving a 30% address-efficiency improvement.",
      name: "",
      role: "Research",
      cta: "",
    },
    {
      company: "OOP with Java",
      quote:
        "Certified in object-oriented programming fundamentals, SOLID principles and design patterns.",
      name: "",
      role: "Certification",
      cta: "",
    },
    {
      company: "Computer Networking",
      quote:
        "Certification covering protocols, addressing, subnetting and core network architecture.",
      name: "",
      role: "Certification",
      cta: "",
    },
    {
      company: "Frontend Simulations",
      quote:
        "Completed industry frontend development job simulations and real-world engineering assessments.",
      name: "",
      role: "Certification",
      cta: "",
    },
    {
      company: "Diploma in Web Dev",
      quote:
        "Aptech Computer Education — a full-stack web development diploma covering the modern JavaScript ecosystem.",
      name: "",
      role: "Education",
      cta: "",
    },
  ],
};

/* Tech stack tiles (was The Network). */
export const network = {
  eyebrow: "Tech Stack",
  title: "The tools I reach for every day.",
  body: "Full coverage from frontend to deployment — frameworks, databases, infra and the glue in between.",
  communities: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "ShadCN/UI",
    "Redux Toolkit",
    "Zustand",
    "Zod",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Prisma",
    "Docker",
    "Socket.IO",
    "RabbitMQ",
    "Git",
    "Vercel",
    "Cloudinary",
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
  description:
    "Full-Stack Engineer building scalable web and mobile products with React, Next.js, Node.js and React Native.",
  socials: [
    { label: "GitHub", href: "#", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X", href: "#", icon: "x" },
  ],
  columns: [
    {
      title: "Navigate",
      links: [
        { label: "Experience", href: "#how" },
        { label: "Projects", href: "#formats" },
        { label: "Tech Stack", href: "#network" },
      ],
    },
    {
      title: "Projects",
      links: [
        { label: "Rahimoon Institute", href: "#formats" },
        { label: "Next Boilerplate", href: "#formats" },
        { label: "360 Mock Server", href: "#formats" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "#contact" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Résumé", href: "#" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
  copyright: "© 2026 Zahid Rahimoon. Built with Next.js & Tailwind CSS.",
};
