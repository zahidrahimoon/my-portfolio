import type { ZodTypeAny } from "zod";
import * as content from "@/app/components/data/content";
import * as S from "@/lib/validation/schemas";

/**
 * Single source of truth for the generic content engine.
 *
 * Adding a new editable section = adding an entry here (+ a Zod schema). The
 * generic API route, cached readers, admin pages, and the seed script all derive
 * their behaviour from this registry — no bespoke plumbing per section.
 *
 * Naming note: keys are chosen for clarity and may differ from the historical
 * `content.ts` export names (e.g. the `gallery` export holds review cards → `reviews`;
 * the `testimonials` export holds achievements → `achievements`).
 */

export interface CollectionDef {
  key: string;
  label: string;
  cacheTag: string;
  hasSlug: boolean;
  schema: ZodTypeAny;
  /** Heading shown above the section (editable as singleton `heading:<key>`). */
  heading: { eyebrow?: string; title?: string; body?: string };
  /** Seed payloads (the per-item `data` objects). */
  seed: () => Record<string, unknown>[];
}

export interface SingletonDef {
  key: string;
  label: string;
  cacheTag: string;
  schema: ZodTypeAny;
  seed: () => Record<string, unknown>;
}

export const COLLECTIONS: Record<string, CollectionDef> = {
  projects: {
    key: "projects",
    label: "Projects (showcase)",
    cacheTag: "projects",
    hasSlug: true,
    schema: S.projectItemSchema,
    heading: {
      eyebrow: content.projectsShowcase.eyebrow,
      title: content.projectsShowcase.title,
      body: content.projectsShowcase.body,
    },
    seed: () => content.projectsShowcase.items.map((x) => ({ ...x })),
  },
  reviews: {
    key: "reviews",
    label: "Reviews",
    cacheTag: "reviews",
    hasSlug: false,
    schema: S.reviewItemSchema,
    heading: {
      eyebrow: content.gallery.eyebrow,
      title: content.gallery.title,
      body: content.gallery.body,
    },
    seed: () => content.gallery.items.map((x) => ({ ...x })),
  },
  achievements: {
    key: "achievements",
    label: "Achievements",
    cacheTag: "achievements",
    hasSlug: false,
    schema: S.achievementItemSchema,
    heading: {
      eyebrow: content.testimonials.eyebrow,
      title: content.testimonials.title,
      body: content.testimonials.body,
    },
    seed: () => content.testimonials.items.map((x) => ({ ...x })),
  },
  experience: {
    key: "experience",
    label: "Experience",
    cacheTag: "experience",
    hasSlug: false,
    schema: S.experienceItemSchema,
    heading: { eyebrow: content.steps.eyebrow, title: content.steps.title },
    seed: () => content.steps.items.map((x) => ({ ...x })),
  },
  problems: {
    key: "problems",
    label: "Why work with me",
    cacheTag: "problems",
    hasSlug: false,
    schema: S.problemItemSchema,
    heading: { eyebrow: content.problems.eyebrow, title: content.problems.title },
    seed: () => content.problems.items.map((x) => ({ ...x })),
  },
  formats: {
    key: "formats",
    label: "Projects (grid)",
    cacheTag: "formats",
    hasSlug: false,
    schema: S.formatItemSchema,
    heading: { eyebrow: content.formats.eyebrow, title: content.formats.title },
    seed: () => content.formats.items.map((x) => ({ ...x })),
  },
  network: {
    key: "network",
    label: "Tech stack",
    cacheTag: "network",
    hasSlug: false,
    schema: S.networkItemSchema,
    heading: {
      eyebrow: content.network.eyebrow,
      title: content.network.title,
      body: content.network.body,
    },
    seed: () => content.network.communities.map((x) => ({ ...x })),
  },
  workProcess: {
    key: "workProcess",
    label: "How I work",
    cacheTag: "workProcess",
    hasSlug: false,
    schema: S.workProcessItemSchema,
    heading: {
      eyebrow: content.workProcess.eyebrow,
      title: content.workProcess.title,
      body: content.workProcess.body,
    },
    seed: () => content.workProcess.steps.map((x) => ({ ...x })),
  },
  education: {
    key: "education",
    label: "Education",
    cacheTag: "education",
    hasSlug: false,
    schema: S.educationItemSchema,
    heading: {
      eyebrow: content.education.eyebrow,
      title: content.education.title,
      body: content.education.body,
    },
    seed: () => content.education.items.map((x) => ({ ...x })),
  },
  faqs: {
    key: "faqs",
    label: "FAQs",
    cacheTag: "faqs",
    hasSlug: false,
    schema: S.faqItemSchema,
    heading: { title: content.faqs.title },
    seed: () => content.faqs.items.map((x) => ({ ...x })),
  },
  clientLogos: {
    key: "clientLogos",
    label: "Tech marquee",
    cacheTag: "clientLogos",
    hasSlug: false,
    schema: S.clientLogoItemSchema,
    heading: {},
    seed: () => content.clientLogos.map((label) => ({ label })),
  },
};

export const SINGLETONS: Record<string, SingletonDef> = {
  site: {
    key: "site",
    label: "Site / nav / footer",
    cacheTag: "singleton:site",
    schema: S.siteSingletonSchema,
    seed: () => ({ site: content.site, nav: content.nav, footer: content.footer }),
  },
  hero: {
    key: "hero",
    label: "Hero",
    cacheTag: "singleton:hero",
    schema: S.heroSingletonSchema,
    seed: () => ({ ...content.hero }),
  },
  about: {
    key: "about",
    label: "About",
    cacheTag: "singleton:about",
    schema: S.aboutSingletonSchema,
    seed: () => ({ ...content.about }),
  },
  whyItWorks: {
    key: "whyItWorks",
    label: "What I do",
    cacheTag: "singleton:whyItWorks",
    schema: S.whyItWorksSingletonSchema,
    seed: () => ({ ...content.whyItWorks }),
  },
  contact: {
    key: "contact",
    label: "Contact",
    cacheTag: "singleton:contact",
    schema: S.contactSingletonSchema,
    seed: () => ({ ...content.contact }),
  },
  finalCta: {
    key: "finalCta",
    label: "Final CTA",
    cacheTag: "singleton:finalCta",
    schema: S.finalCtaSingletonSchema,
    seed: () => ({ ...content.finalCta }),
  },
};

export function getCollectionDef(key: string): CollectionDef | undefined {
  return COLLECTIONS[key];
}

export function getSingletonDef(key: string): SingletonDef | undefined {
  return SINGLETONS[key];
}

export const collectionKeys = Object.keys(COLLECTIONS);
export const singletonKeys = Object.keys(SINGLETONS);
