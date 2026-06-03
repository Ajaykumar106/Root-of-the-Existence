import { MUSEUM_DATA } from "@/lib/museum";
import { notFound } from "next/navigation";
import SubModuleClient from "./SubModuleClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string; subId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === resolvedParams.id);
  const subModule = exhibit?.subModules?.find((s) => s.id === resolvedParams.subId);
  
  if (!exhibit || !subModule) {
    return { title: "Not Found | Root of Existence" };
  }

  // Create a highly unique meta description for SEO
  const componentsList = subModule.components.map(c => c.label).join(", ");
  const description = `${subModule.title} explained - Deep dive into ${componentsList}. ${subModule.description}`;

  return {
    title: `${subModule.title} | ${exhibit.title} | Root of Existence`,
    description: description,
    openGraph: {
      title: `${subModule.title} | ${exhibit.title}`,
      description: description,
      images: [subModule.imagePath],
      url: `https://root-of-the-existence.vercel.app/explore/${exhibit.id}/${subModule.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${subModule.title} | Root of Existence`,
      description: description,
      images: [subModule.imagePath],
    }
  };
}

export function generateStaticParams() {
  const params: { id: string; subId: string }[] = [];
  
  MUSEUM_DATA.forEach((exhibit) => {
    if (exhibit.subModules) {
      exhibit.subModules.forEach((sub) => {
        params.push({ id: exhibit.id, subId: sub.id });
      });
    }
  });

  return params;
}

export default async function SubModulePage({ params }: { params: Promise<{ id: string; subId: string }> }) {
  const resolvedParams = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === resolvedParams.id);
  const subModule = exhibit?.subModules?.find((s) => s.id === resolvedParams.subId);

  if (!exhibit || !subModule) {
    notFound();
  }

  // Generate JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: subModule.title,
    headline: subModule.title,
    description: subModule.description,
    image: `https://root-of-the-existence.vercel.app${subModule.imagePath}`,
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
      <SubModuleClient exhibit={exhibit} subModule={subModule} />
    </>
  );
}
