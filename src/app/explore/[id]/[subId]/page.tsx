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

  return {
    title: `${subModule.title} | ${exhibit.title} | Root of Existence`,
    description: subModule.description,
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

  return <SubModuleClient exhibit={exhibit} subModule={subModule} />;
}
