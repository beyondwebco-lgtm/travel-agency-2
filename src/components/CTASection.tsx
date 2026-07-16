"use client";

import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  onPlanTripClick: () => void;
}

export default function CTASection({ onPlanTripClick }: CTASectionProps) {
  return (
    <section className="relative py-24 bg-primary overflow-hidden text-center">
      {/* Visual background details (solid colors, no blurs) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none select-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none select-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-8 border border-white/10 select-none"
        >
          <Compass className="h-7 w-7 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight max-w-2xl">
          Ready to Explore <span className="text-accent">India?</span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 font-sans text-sm md:text-lg max-w-xl mt-6 leading-relaxed">
          Tell us where you dream of going, and we'll craft the perfect, high-end itinerary customized exactly for your tastes.
        </p>

        {/* Button */}
        <button
          onClick={onPlanTripClick}
          className="mt-10 group relative overflow-hidden bg-accent hover:bg-accent/95 text-slate-900 font-sans text-xs md:text-sm font-bold tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-accent/15 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>Plan My Journey</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
