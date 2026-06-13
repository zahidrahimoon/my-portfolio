import { getSection } from "@/lib/data/singletons";
import type {
  SiteSingleton,
  ContactSingleton,
  HeroSingleton,
} from "@/lib/validation/schemas";

export async function JsonLd() {
  const [siteData, contact, hero] = await Promise.all([
    getSection<SiteSingleton>("site"),
    getSection<ContactSingleton>("contact"),
    getSection<HeroSingleton>("hero"),
  ]);
  if (!siteData || !contact || !hero) return null;
  const { site } = siteData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": site.name,
    "jobTitle": hero.eyebrow,
    "description": hero.body,
    "email": site.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contact.location.split(",")[0].trim(),
      "addressCountry": contact.location.split(",")[1]?.trim() || "Pakistan",
    },
    "url": "https://zahidrahimoon.dev",
    "sameAs": contact.socials.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
