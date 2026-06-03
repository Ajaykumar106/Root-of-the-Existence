import { MUSEUM_DATA } from "@/lib/museum";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Atom, BookOpen } from "lucide-react";

export default async function ExplorePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const exhibit = MUSEUM_DATA.find((e) => e.id === id);

  if (!exhibit) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <Link 
          href="/"
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors text-sm font-space tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Museum
        </Link>
      </nav>

      {/* Hero Banner with Custom AI Image */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end p-8 md:p-16 overflow-hidden">
        <Image
          src={exhibit.imagePath}
          alt={exhibit.title}
          fill
          className="object-cover opacity-60 mix-blend-lighten"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 max-w-4xl">
          <p className="text-blue-400 font-space tracking-widest uppercase text-sm mb-4">
            {exhibit.category} Research File
          </p>
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-4 text-white">
            {exhibit.title}
          </h1>
          <h2 className="text-2xl text-white/80 font-light max-w-2xl">
            {exhibit.subtitle}
          </h2>
        </div>
      </section>

      {/* Deep Research Content */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Column (Lore & Physics) */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          
          {/* Deep Lore */}
          <div className="glass-panel p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="font-space text-2xl font-bold">Deep Lore</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/80">
              {exhibit.deepLore}
            </p>
          </div>

          {/* Physics Engine */}
          <div className="glass-panel p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Atom className="w-6 h-6 text-blue-400" />
              <h3 className="font-space text-2xl font-bold">Physics Mechanics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exhibit.physics.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h4 className="font-space text-lg text-white font-semibold">{item.concept}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column (Timeline & Metrics) */}
        <div className="flex flex-col gap-12">
          
          {/* Historical Timeline */}
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="font-space text-xl font-bold">Timeline</h3>
            </div>
            <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-[7px] before:w-[2px] before:bg-white/10">
              {exhibit.timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-black" />
                  <span className="text-xs font-space text-blue-400 tracking-widest block mb-2">{item.year}</span>
                  <p className="text-sm text-white/70 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Metrics */}
          <div className="glass-card p-8">
            <h3 className="font-space text-xl font-bold mb-6">Core Metrics</h3>
            <div className="flex flex-col gap-6">
              {exhibit.metrics.map((metric, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs text-white/40 uppercase tracking-widest">{metric.label}</span>
                  <span className="font-space font-semibold text-right">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
