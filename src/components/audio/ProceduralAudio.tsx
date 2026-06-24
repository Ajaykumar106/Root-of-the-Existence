"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function ProceduralAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.1; // Keep it ambient/low
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Drone Oscillator 1
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, ctx.currentTime); // Low drone (A1)
    
    // Drone Oscillator 2
    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(55.5, ctx.currentTime); // Slight detune for beating effect

    // Reverb / Filter (Lowpass to keep it muffled/distant)
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 400;

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterGain);

    osc1.start();
    osc2.start();

    // LFO for filter sweep
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.05; // Very slow sweep
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 200;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
  };

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }
    
    if (isPlaying) {
      audioCtxRef.current?.suspend();
    } else {
      audioCtxRef.current?.resume();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] group"
      aria-label="Toggle Procedural Ambience"
      title="Toggle Procedural Ambience"
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
      ) : (
        <VolumeX className="w-5 h-5 text-white/50 group-hover:text-white" />
      )}
    </button>
  );
}
