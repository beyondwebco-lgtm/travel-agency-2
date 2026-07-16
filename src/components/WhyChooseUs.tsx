"use client";

import React from "react";
import { Headphones, BadgePercent, MapPinCheck, Hotel, ShieldAlert, BadgeCheck, Sliders, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      id: "support",
      title: "24×7 Premium Support",
      description: "Around-the-clock emergency support line and dedicated travel manager assistance.",
      icon: Headphones,
      colorClass: "bg-blue-50 text-blue-600",
    },
    {
      id: "best-price",
      title: "Best Price Guarantee",
      description: "Direct tie-ups with premium properties ensure you get top-tier rates.",
      icon: BadgePercent,
      colorClass: "bg-amber-50 text-amber-600",
    },
    {
      id: "guides",
      title: "Trusted Local Guides",
      description: "Accredited, English/Hindi speaking guides who know local tales and hidden paths.",
      icon: MapPinCheck,
      colorClass: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "hotels",
      title: "Handpicked Luxury Hotels",
      description: "Every hotel and resort is personally audited for quality, comfort, and view.",
      icon: Hotel,
      colorClass: "bg-purple-50 text-purple-600",
    },
    {
      id: "safe-travel",
      title: "100% Safe Travel",
      description: "Strict sanitation protocols, certified drivers, and travel insurance cover.",
      icon: ShieldAlert,
      colorClass: "bg-rose-50 text-rose-600",
    },
    {
      id: "easy-booking",
      title: "Easy & Quick Booking",
      description: "Paperless confirmation within minutes, flexible payment terms, and clear policies.",
      icon: BadgeCheck,
      colorClass: "bg-teal-50 text-teal-600",
    },
    {
      id: "custom-itineraries",
      title: "Customized Itineraries",
      description: "Tailor every package exactly as you wish—add destinations, upgrade rooms, change cabs.",
      icon: Sliders,
      colorClass: "bg-indigo-50 text-indigo-600",
    },
    {
      id: "customer-satisfaction",
      title: "Customer Satisfaction",
      description: "Thousands of happy Indian families and couples have created memories with us.",
      icon: HeartHandshake,
      colorClass: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#FAFAF8] border-t border-slate-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            Why Aarohan Travels
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Crafting Safe, Luxurious <span className="text-primary">Memories</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 leading-relaxed">
            We manage the details so you can focus entirely on experiencing the soul, beauty, and culture of India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-[24px] p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
              >
                {/* Icon Circle */}
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${feat.colorClass}`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed flex-grow">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
