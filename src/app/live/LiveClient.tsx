"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Rocket, Satellite, AlertCircle, Calendar } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Types ---
type ApodData = {
  title: string;
  explanation: string;
  url: string;
  hdurl: string;
  media_type: string;
  date: string;
};

type LaunchData = {
  id: string;
  name: string;
  net: string; // Launch date/time
  status: { name: string; description: string };
  launch_service_provider: { name: string };
  pad: { name: string; location: { name: string } };
  image: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function LiveClient() {
  const [apod, setApod] = useState<ApodData | null>(null);
  const [apodError, setApodError] = useState(false);
  const [apodLoading, setApodLoading] = useState(true);

  const [launches, setLaunches] = useState<LaunchData[]>([]);
  const [launchesError, setLaunchesError] = useState(false);
  const [launchesLoading, setLaunchesLoading] = useState(true);

  // Fetch NASA APOD
  useEffect(() => {
    async function fetchApod() {
      try {
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        if (!res.ok) throw new Error("NASA API limit reached or unavailable.");
        const data = await res.json();
        setApod(data);
      } catch (err) {
        setApodError(true);
      } finally {
        setApodLoading(false);
      }
    }
    fetchApod();
  }, []);

  // Fetch Upcoming Launches (Space Devs Dev API)
  useEffect(() => {
    async function fetchLaunches() {
      try {
        const res = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=5");
        if (!res.ok) throw new Error("Launch API rate limit reached.");
        const data = await res.json();
        setLaunches(data.results || []);
      } catch (err) {
        setLaunchesError(true);
      } finally {
        setLaunchesLoading(false);
      }
    }
    fetchLaunches();
  }, []);

  return (
    <div className="w-full min-h-screen pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <Link 
          href="/"
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors text-sm font-space tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Museum
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <Satellite className="w-8 h-8 text-blue-400" />
          <h1 className="font-space text-4xl md:text-6xl font-bold text-white">Live Telemetry</h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl"
        >
          Real-time global space data directly from NASA and the Space Devs tracking network.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLUMN 1: NASA APOD */}
        <motion.section 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <h2 className="font-space text-2xl font-bold">NASA Daily Feed</h2>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-space tracking-widest uppercase border border-blue-500/30">Live API</span>
          </div>

          <div className="glass-panel overflow-hidden flex flex-col group">
            {apodLoading ? (
              <div className="w-full h-[400px] flex items-center justify-center bg-white/5 animate-pulse">
                <span className="font-space text-white/50 tracking-widest uppercase text-sm">Establishing Uplink...</span>
              </div>
            ) : apodError || !apod ? (
              <div className="w-full h-[400px] flex flex-col items-center justify-center bg-red-900/10 border border-red-500/20 gap-4 p-8 text-center">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-white/70 font-space text-sm">NASA API rate limit exceeded. Please try again later.</p>
              </div>
            ) : (
              <>
                <div className="relative w-full h-[400px] overflow-hidden bg-black">
                  {apod.media_type === "image" ? (
                    <img 
                      src={apod.url} 
                      alt={apod.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <iframe 
                      src={apod.url} 
                      title={apod.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[10px] font-space tracking-widest text-white/70 uppercase">{apod.date}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-space text-2xl font-bold mb-4">{apod.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-h-[200px] overflow-y-auto scrollbar-thin pr-4">
                    {apod.explanation}
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.section>

        {/* COLUMN 2: Global Launch Schedule */}
        <motion.section 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <h2 className="font-space text-2xl font-bold">Global Launch Manifest</h2>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-space tracking-widest uppercase border border-amber-500/30">Live Tracking</span>
          </div>

          <div className="glass-panel p-6 flex flex-col gap-4">
            {launchesLoading ? (
              <div className="w-full py-12 flex items-center justify-center">
                 <span className="font-space text-white/50 tracking-widest uppercase text-sm animate-pulse">Syncing Telemetry...</span>
              </div>
            ) : launchesError || launches.length === 0 ? (
              <div className="w-full py-12 flex flex-col items-center justify-center bg-red-900/10 border border-red-500/20 rounded-xl gap-4 text-center">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-white/70 font-space text-sm">Launch tracking API currently offline or rate-limited.</p>
              </div>
            ) : (
              launches.map((launch) => {
                const launchDate = new Date(launch.net);
                return (
                  <div key={launch.id} className="glass-card p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-white/20 transition-colors">
                    
                    {/* Date/Time Block */}
                    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg min-w-[100px] border border-white/5">
                      <span className="text-xs text-blue-400 uppercase tracking-widest font-space mb-1">
                        {launchDate.toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-3xl font-bold font-space">
                        {launchDate.getDate()}
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                        {launchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {/* Mission Details */}
                    <div className="flex flex-col flex-grow">
                      <span className="text-[10px] text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Rocket className="w-3 h-3" />
                        {launch.launch_service_provider.name}
                      </span>
                      <h4 className="font-space text-lg font-bold text-white mb-2 line-clamp-2">
                        {launch.name}
                      </h4>
                      <p className="text-white/50 text-xs flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {launch.pad.name}, {launch.pad.location.name}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="hidden lg:flex items-center justify-center px-3 py-1 bg-white/5 rounded-full border border-white/10 whitespace-nowrap">
                       <span className="text-[10px] font-space tracking-widest text-white/70 uppercase">
                         {launch.status.name === "Go for Launch" ? (
                           <span className="text-green-400">T-MINUS GO</span>
                         ) : (
                           launch.status.name
                         )}
                       </span>
                    </div>

                  </div>
                );
              })
            )}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
