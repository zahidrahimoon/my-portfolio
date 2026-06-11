import { site, contact, hero } from "../data/content";

export function JsonLd() {
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
