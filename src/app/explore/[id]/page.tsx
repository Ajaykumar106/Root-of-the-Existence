import { MUSEUM_DATA } from "@/lib/museum";
import { notFound } from "next/navigation";
import ExploreClient from "./ExploreClient";

export default async function ExplorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === id);

  if (!exhibit) {
    notFound();
  }

  return <ExploreClient exhibit={exhibit} />;
}
