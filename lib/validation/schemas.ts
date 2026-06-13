import { z } from "zod";

/**
 * Zod schemas mirroring the shapes in `app/components/data/content.ts`.
 * Shared by the API handlers (request validation) and the admin forms.
 *
 * Each *collection* schema validates the `data` payload of one item; the engine
 * adds `order`/`published`/timestamps around it. Each *singleton* schema validates
 * the whole section object.
 */

/* ----------------------------- shared bits ------------------------------ */

const linkRef = z.object({
  label: z.string(),
  href: z.string(),
});

const ctaRef = z.object({
  label: z.string(),
  href: z.string(),
});

const statRef = z.object({
  value: z.string(),
  label: z.string(),
});

/* Optional media attached to any item (Cloudinary). */
const mediaRef = z.object({
  imageUrl: z.string().url().optional().or(z.literal("")),
  imagePublicId: z.string().optional(),
});

/* ----------------------------- collections ------------------------------ */

// projectsShowcase.items
export const projectItemSchema = z
  .object({
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be a url-safe slug"),
    name: z.string().min(1),
    tagline: z.string().default(""),
    year: z.string().default(""),
    role: z.string().default(""),
    seed: z.string().default(""),
    accent: z.string().default("#000000"),
    summary: z.string().default(""),
    overview: z.string().default(""),
    highlights: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    links: z
      .object({ live: z.string().default("#"), code: z.string().default("#") })
      .default({ live: "#", code: "#" }),
  })
  .extend(mediaRef.shape);

// gallery.items — auto-scrolling review cards
export const reviewItemSchema = z.object({
  quote: z.string().min(1),
  name: z.string().default(""),
  role: z.string().default(""),
  company: z.string().default(""),
  rating: z.number().min(0).max(5).default(5),
});

// testimonials.items — Achievements & certifications
export const achievementItemSchema = z.object({
  company: z.string().min(1),
  quote: z.string().default(""),
  name: z.string().default(""),
  role: z.string().default(""),
  cta: z.string().default(""),
  icon: z.string().default(""),
  accent: z.string().default("#000000"),
});

// steps.items — experience timeline
export const experienceItemSchema = z.object({
  no: z.string().default(""),
  title: z.string().min(1),
  company: z.string().default(""),
  period: z.string().default(""),
  body: z.string().default(""),
  achievements: z.array(z.string()).default([]),
  tech: z.array(z.string()).default([]),
});

// problems.items — "why work with me"
export const problemItemSchema = z.object({
  tone: z.string().default("amber"),
  icon: z.string().default(""),
  title: z.string().min(1),
  body: z.string().default(""),
});

// formats.items — projects grid
export const formatItemSchema = z.object({
  name: z.string().min(1),
  desc: z.string().default(""),
  tech: z.string().default(""),
  icon: z.string().default(""),
  tone: z.string().default("tan"),
  popular: z.boolean().default(false),
});

// network.communities — tech stack tiles
export const networkItemSchema = z.object({
  name: z.string().min(1),
  slug: z.string().default(""),
});

// workProcess.steps
export const workProcessItemSchema = z.object({
  no: z.string().default(""),
  icon: z.string().default(""),
  title: z.string().min(1),
  desc: z.string().default(""),
});

// education.items
export const educationItemSchema = z.object({
  degree: z.string().min(1),
  school: z.string().default(""),
  period: z.string().default(""),
  note: z.string().default(""),
});

// faqs.items
export const faqItemSchema = z.object({
  q: z.string().min(1),
  a: z.string().default(""),
});

// clientLogos — plain string per item
export const clientLogoItemSchema = z.object({
  label: z.string().min(1),
});

/* ----------------------------- singletons ------------------------------- */

export const siteSingletonSchema = z.object({
  site: z.object({ name: z.string(), email: z.string() }),
  nav: z.object({
    primary: z.array(
      z.object({ label: z.string(), href: z.string(), caret: z.boolean().optional() }),
    ),
    menu: z.array(linkRef),
    actions: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        variant: z.enum(["outline", "primary"]),
      }),
    ),
  }),
  footer: z.object({
    name: z.string(),
    email: z.string(),
    socials: z.array(
      z.object({ label: z.string(), href: z.string(), icon: z.string() }),
    ),
    copyright: z.string(),
  }),
});

export const heroSingletonSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  primaryCta: ctaRef,
  secondaryCta: ctaRef,
  status: z.string(),
  stats: z.array(statRef),
});

export const aboutSingletonSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()),
  highlights: z.array(statRef),
  cta: z.object({ label: z.string() }),
});

export const whyItWorksSingletonSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  channels: z.array(
    z.object({ name: z.string(), icon: z.string(), note: z.string() }),
  ),
  highlight: z.object({ name: z.string() }),
});

export const contactSingletonSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  email: z.string(),
  location: z.string(),
  availability: z.string(),
  responseTime: z.string(),
  socials: z.array(
    z.object({ label: z.string(), href: z.string(), handle: z.string() }),
  ),
});

export const finalCtaSingletonSchema = z.object({
  title: z.string(),
  body: z.string(),
  primaryCta: ctaRef,
  secondaryCta: ctaRef,
});

/* Section headings that wrap collections (eyebrow/title/body). */
export const sectionHeadingSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  body: z.string().optional(),
});

/* ------------------------------- types ---------------------------------- */
/* Inferred shapes shared by the public sections (cached reads) and the API. */

// collections
export type ProjectItem = z.infer<typeof projectItemSchema>;
export type ReviewItem = z.infer<typeof reviewItemSchema>;
export type AchievementItem = z.infer<typeof achievementItemSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type ProblemItem = z.infer<typeof problemItemSchema>;
export type FormatItem = z.infer<typeof formatItemSchema>;
export type NetworkItem = z.infer<typeof networkItemSchema>;
export type WorkProcessItem = z.infer<typeof workProcessItemSchema>;
export type EducationItem = z.infer<typeof educationItemSchema>;
export type FaqItem = z.infer<typeof faqItemSchema>;
export type ClientLogoItem = z.infer<typeof clientLogoItemSchema>;

// singletons
export type SiteSingleton = z.infer<typeof siteSingletonSchema>;
export type HeroSingleton = z.infer<typeof heroSingletonSchema>;
export type AboutSingleton = z.infer<typeof aboutSingletonSchema>;
export type WhyItWorksSingleton = z.infer<typeof whyItWorksSingletonSchema>;
export type ContactSingleton = z.infer<typeof contactSingletonSchema>;
export type FinalCtaSingleton = z.infer<typeof finalCtaSingletonSchema>;

// section heading wrapper
export type SectionHeading = z.infer<typeof sectionHeadingSchema>;
