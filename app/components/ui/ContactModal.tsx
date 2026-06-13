import { getSection } from "@/lib/data/singletons";
import type { ContactSingleton } from "@/lib/validation/schemas";
import { ContactModalClient } from "./ContactModalClient";

/** Server wrapper: fetches contact content from the cached DAL, renders the client modal. */
export async function ContactModal() {
  const contact = await getSection<ContactSingleton>("contact");
  if (!contact) return null;
  return <ContactModalClient contact={contact} />;
}
