import { MUSEUM_DATA } from "@/lib/museum";
import { notFound } from "next/navigation";
import SubModuleClient from "./SubModuleClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string; subId: string } }): Promise<Metadata> {
  const exhibit = MUSEUM_DATA.find((e) => e.id === params.id);
  const subModule = exhibit?.subModules?.find((s) => s.id === params.subId);
  
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

export default function SubModulePage({ params }: { params: { id: string; subId: string } }) {
  const exhibit = MUSEUM_DATA.find((e) => e.id === params.id);
  const subModule = exhibit?.subModules?.find((s) => s.id === params.subId);

  if (!exhibit || !subModule) {
    notFound();
  }

  return <SubModuleClient exhibit={exhibit} subModule={subModule} />;
}
