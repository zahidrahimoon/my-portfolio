import { getSection } from "@/lib/data/singletons";
import type { SiteSingleton } from "@/lib/validation/schemas";
import { NavbarClient } from "./NavbarClient";

/** Server wrapper: fetches site/nav from the cached DAL, renders the client navbar. */
export async function Navbar() {
  const site = await getSection<SiteSingleton>("site");
  if (!site) return null;
  return <NavbarClient nav={site.nav} siteName={site.site.name} />;
}
