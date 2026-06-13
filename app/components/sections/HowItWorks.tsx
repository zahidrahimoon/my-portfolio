import { getCollection, getSectionHeading } from "@/lib/data/collections";
import type { ExperienceItem } from "@/lib/validation/schemas";
import { HowItWorksClient } from "./HowItWorksClient";

/** Server wrapper: fetches the experience timeline from the cached DAL. */
export async function HowItWorks() {
  const [docs, heading] = await Promise.all([
    getCollection<ExperienceItem>("experience"),
    getSectionHeading("experience"),
  ]);
  return (
    <HowItWorksClient
      eyebrow={heading.eyebrow}
      title={heading.title}
      items={docs.map((d) => d.data)}
    />
  );
}
