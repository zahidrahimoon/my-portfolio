import { notFound } from "next/navigation";
import { getSingletonDef } from "@/lib/content/registry";
import { SingletonEditor } from "./SingletonEditor";

export default async function SingletonPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const def = getSingletonDef(key);
  if (!def) notFound();

  return <SingletonEditor sectionKey={def.key} label={def.label} />;
}
