"use client";

import React, { useState } from "react";
import { Search, Calendar, Users, MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onExplorePackages: () => void;
  onCustomizeTrip: () => void;
}

export default function Hero({ onExplorePackages, onCustomizeTrip }: HeroProps) {
  const [searchDest, setSearchDest] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchGuests, setSearchGuests] = useState("2");

  const destinationsList = [
    "Kashmir", "Ladakh", "Manali", "Shimla", "Goa", 
    "Kerala", "Andaman Islands", "Rajasthan", "Rishikesh", 
    "Coorg", "Ooty", "Munnar"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a live system, we would trigger search results filtering
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Subtle Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 select-none">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85"
          alt="Mighty Indian Himalayas covered in snow"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft Multi-Layer Overlays for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-slate-950/40 to-slate-950/60" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden xl:block z-10 w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-700 shadow-2xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-16 hidden xl:block z-10 w-16 h-16 rounded-full bg-slate-800/60 border border-slate-700 shadow-2xl"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="text-accent font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase block">
            Aarohan Travels presents
          </span>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mx-auto">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">Incredible India</span>
          </h1>
        </motion.div>

        {/* Animated Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-slate-200 font-sans text-sm md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Curated journeys across India's most breathtaking destinations—from the snow-capped peaks of the Himalayas to serene southern backwaters and royal desert palaces.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
        >
          <button
            onClick={onExplorePackages}
            className="w-full sm:w-auto bg-accent hover:bg-accent/95 text-slate-900 font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-accent/20 hover:scale-105"
          >
            Explore Packages
          </button>
          <button
            onClick={onCustomizeTrip}
            className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-slate-900 text-white border border-white/40 font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
          >
            Customize Trip
          </button>
        </motion.div>

        {/* Animated Search Bar widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="w-full mt-16 max-w-4xl"
        >
          <form
            onSubmit={handleSearch}
            className="premium-card-dark p-4 md:p-3 rounded-[24px] grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-left"
          >
            {/* Destination Field */}
            <div className="md:col-span-4 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-white/10">
              <MapPin className="text-accent h-5 w-5 shrink-0" />
              <div className="flex-1">
                <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Where to?
                </label>
                <select
                  value={searchDest}
                  onChange={(e) => setSearchDest(e.target.value)}
                  className="bg-transparent text-white font-sans text-sm font-medium w-full focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="" className="bg-slate-900 text-slate-300">Choose destination...</option>
                  {destinationsList.map((dest) => (
                    <option key={dest} value={dest} className="bg-slate-900 text-white">
                      {dest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Travel Date Field */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-white/10">
              <Calendar className="text-accent h-5 w-5 shrink-0" />
              <div className="flex-1">
                <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={searchDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="bg-transparent text-white font-sans text-sm font-medium w-full focus:outline-none cursor-pointer mt-0.5 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests Field */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-2">
              <Users className="text-accent h-5 w-5 shrink-0" />
              <div className="flex-1">
                <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Travelers
                </label>
                <select
                  value={searchGuests}
                  onChange={(e) => setSearchGuests(e.target.value)}
                  className="bg-transparent text-white font-sans text-sm font-medium w-full focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="1" className="bg-slate-900">1 Traveler</option>
                  <option value="2" className="bg-slate-900">2 Travelers</option>
                  <option value="3" className="bg-slate-900">3 Travelers</option>
                  <option value="4" className="bg-slate-900">4 Travelers</option>
                  <option value="5+" className="bg-slate-900">5+ Travelers</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/95 text-slate-900 p-4 md:p-3.5 rounded-2xl flex items-center justify-center gap-2 font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 group"
              >
                <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={onExplorePackages}
      >
        <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">Scroll Down</span>
        <ArrowDown className="text-accent h-4 w-4" />
      </motion.div>
    </section>
  );
}
