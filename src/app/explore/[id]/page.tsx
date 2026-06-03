import { MUSEUM_DATA } from "@/lib/museum";
import { notFound } from "next/navigation";
import ExploreClient from "./ExploreClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === id);

  if (!exhibit) {
    return { title: "Exhibit Not Found" };
  }

  // Create a dynamic, unique meta description
  const description = `${exhibit.title} explained - ${exhibit.physics.map(p => p.concept).join(", ")}. ${exhibit.simpleExplanation}`;

  return {
    title: `${exhibit.title} | Root of Existence`,
    description: description,
    openGraph: {
      title: `${exhibit.title} | Root of Existence`,
      description: description,
      images: [exhibit.imagePath],
      url: `https://root-of-the-existence.vercel.app/explore/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${exhibit.title} | Root of Existence`,
      description: description,
      images: [exhibit.imagePath],
    }
  };
}

export default async function ExplorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === id);

  if (!exhibit) {
    notFound();
  }

  // Generate JSON-LD Structured Data for the exhibit
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: exhibit.title,
    headline: exhibit.subtitle,
    description: exhibit.description,
    image: `https://root-of-the-existence.vercel.app${exhibit.imagePath}`,
    author: {
      "@type": "Organization",
      name: "Root of Existence Museum"
    },
    publisher: {
      "@type": "Organization",
      name: "Root of Existence"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExploreClient exhibit={exhibit} />
    </>
  );
}
