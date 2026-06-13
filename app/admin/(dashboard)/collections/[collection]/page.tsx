import { notFound } from "next/navigation";
import { getCollectionDef } from "@/lib/content/registry";
import { CollectionEditor } from "./CollectionEditor";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const def = getCollectionDef(collection);
  if (!def) notFound();

  // Only serializable primitives cross to the client (no Zod schema).
  return (
    <CollectionEditor
      collectionKey={def.key}
      label={def.label}
      hasSlug={def.hasSlug}
    />
  );
}
