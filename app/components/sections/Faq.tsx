import { getCollection, getSectionHeading } from "@/lib/data/collections";
import type { FaqItem } from "@/lib/validation/schemas";
import { FaqClient } from "./FaqClient";

/** Server wrapper: fetches FAQ content from the cached DAL, renders the client accordion. */
export async function Faq() {
  const [docs, heading] = await Promise.all([
    getCollection<FaqItem>("faqs"),
    getSectionHeading("faqs"),
  ]);
  return <FaqClient title={heading.title} items={docs.map((d) => d.data)} />;
}
