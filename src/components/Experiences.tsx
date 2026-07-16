"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  name: string;
  image: string;
  subtext: string;
}

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: "adventure",
      name: "Adventure",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80",
      subtext: "River rafting, paragliding, and mountain trekking.",
    },
    {
      id: "luxury",
      name: "Luxury Escapes",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
      subtext: "Palace hotels, private villas, and royal pampering.",
    },
    {
      id: "wildlife",
      name: "Wildlife Safaris",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=600&q=80",
      subtext: "Bengal tigers, national parks, and jungle lodging.",
    },
    {
      id: "hills",
      name: "Hill Stations",
      image: "https://images.unsplash.com/photo-1545893835-aba7f94b2816?auto=format&fit=crop&w=600&q=80",
      subtext: "Cool mountain breezes, clouds, and tea garden trails.",
    },
    {
      id: "beaches",
      name: "Beaches & Coastal",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      subtext: "Sunsets, coral reefs, and water adventure sports.",
    },
    {
      id: "roadtrips",
      name: "Scenic Road Trips",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      subtext: "Breathtaking highways, pass drives, and self-discoveries.",
    },
    {
      id: "pilgrimage",
      name: "Pilgrimage & Sacred",
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=600&q=80",
      subtext: "Varanasi ghats, spiritual temples, and absolute peace.",
    },
    {
      id: "weekends",
      name: "Weekend Getaways",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80",
      subtext: "Quick escapes, eco-resorts, and stress-free breaks.",
    },
    {
      id: "photography",
      name: "Photography Tours",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      subtext: "Capture sunrise glows, ethnic costumes, and architecture.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="experiences" className="py-24 bg-[#FAFAF8] scroll-mt-10 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
              Curated Style Pickers
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
              Signature Travel <span className="text-primary">Experiences</span>
            </h2>
          </div>
          {/* Scroll Buttons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white text-dark flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white hover:bg-primary hover:text-white text-dark flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex-shrink-0 w-80 sm:w-96 snap-start"
            >
              <div className="group relative h-96 w-full rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-900 border border-slate-100 select-none">
                {/* Background Image */}
                <img
                  src={exp.image}
                  alt={`Experience representing ${exp.name}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-1/2">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {exp.name}
                  </h3>
                  <p className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {exp.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
