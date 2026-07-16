"use client";

import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface DestinationItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

interface DestinationsProps {
  onSelectDestination: (destName: string) => void;
}

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  const destinations: DestinationItem[] = [
    {
      id: "kashmir",
      name: "Kashmir",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=600&q=80",
      description: "Paradise on Earth. Glide on serene Dal Lake and explore snowy valleys of Gulmarg.",
      price: "₹24,999",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
      description: "Land of high passes. Drive past emerald Pangong Tso Lake and ancient monasteries.",
      price: "₹29,999",
    },
    {
      id: "manali",
      name: "Manali",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
      description: "Himalayan retreat. Adventure through Solang Valley and snowy Rohtang Pass.",
      price: "₹18,999",
    },
    {
      id: "shimla",
      name: "Shimla",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
      description: "The Queen of Hills. Experience colonial charm, pine trails, and the Toy Train.",
      price: "₹16,999",
    },
    {
      id: "goa",
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
      description: "Sun, sand, and spice. Relax on golden beaches and explore Portuguese heritage.",
      price: "₹14,999",
    },
    {
      id: "kerala",
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
      description: "God's Own Country. Unwind on luxury houseboats floating in quiet backwaters.",
      price: "₹19,999",
    },
    {
      id: "andaman",
      name: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1589136777351-fdc9c9400c73?auto=format&fit=crop&w=600&q=80",
      description: "Tropical escape. Swim in crystal clear waters of Radhanagar Beach.",
      price: "₹31,999",
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
      description: "Royal grandeur. Marvel at historic forts and colorful desert stories.",
      price: "₹27,999",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80",
      description: "Yoga and rapids. Feel absolute serenity and high-energy river rafting.",
      price: "₹11,999",
    },
    {
      id: "coorg",
      name: "Coorg",
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80",
      description: "Scotland of India. Walk through aromatic coffee plantations and waterfalls.",
      price: "₹15,499",
    },
    {
      id: "ooty",
      name: "Ooty",
      image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80",
      description: "Nilgiri heights. Stroll past quiet lake shores and rolling hills.",
      price: "₹14,499",
    },
    {
      id: "munnar",
      name: "Munnar",
      image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80",
      description: "Emerald green hills. Wander through neat, misty tea plantation gardens.",
      price: "₹16,499",
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-[#FAFAF8] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
              Explore Our Destinations
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
              Discover the Jewels of <span className="text-primary">India</span>
            </h2>
          </div>
          <p className="text-slate-500 font-sans text-sm md:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
            From snow-bound peaks in the north to sun-drenched beaches in the south, find your next breathtaking domestic experience.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
              onClick={() => onSelectDestination(dest.name)}
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 w-full overflow-hidden select-none">
                <img
                  src={dest.image}
                  alt={`Scenery in ${dest.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-white py-1.5 px-3 rounded-full flex items-center gap-1 border border-slate-100 shadow-sm text-xs font-semibold text-primary">
                  <MapPin className="h-3 w-3" />
                  <span>{dest.name}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                  {dest.name}
                </h3>
                <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed mb-6 flex-1">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Starts From</span>
                    <span className="font-sans font-extrabold text-lg text-primary">{dest.price}</span>
                  </div>
                  <button className="h-10 w-10 rounded-full bg-slate-50 text-dark flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
