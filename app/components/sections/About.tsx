import { getSection } from "@/lib/data/singletons";
import type { AboutSingleton } from "@/lib/validation/schemas";
import { AboutClient } from "./AboutClient";

/** Server wrapper: fetches About content from the cached DAL. */
export async function About() {
  const about = await getSection<AboutSingleton>("about");
  if (!about) return null;
  return <AboutClient about={about} />;
}
