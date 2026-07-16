"use client";

import React from "react";
import { Clock, Utensils, Building2, Car, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

interface PackageItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviewsCount: number;
  image: string;
  meals: string;
  hotels: string;
  transport: string;
  sightseeing: string;
}

interface PackagesProps {
  onBookNow: (packageTitle: string) => void;
}

export default function Packages({ onBookNow }: PackagesProps) {
  const packages: PackageItem[] = [
    {
      id: "kashmir-paradise",
      title: "Kashmir Paradise",
      duration: "6 Days / 5 Nights",
      price: "₹24,999",
      rating: 4.9,
      reviewsCount: 324,
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=800&q=80",
      meals: "Breakfast & Dinner Included",
      hotels: "Luxury Houseboat & 4★ Hotel Stays",
      transport: "Private Sedan for all transfers",
      sightseeing: "Gulmarg, Pahalgam & Sonamarg Tours",
    },
    {
      id: "golden-rajasthan",
      title: "Golden Rajasthan Tour",
      duration: "7 Days / 6 Nights",
      price: "₹27,999",
      rating: 4.8,
      reviewsCount: 198,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      meals: "Buffet Breakfast Included",
      hotels: "Heritage Haveli & Palace Resorts",
      transport: "AC SUV cab with expert driver",
      sightseeing: "Jaipur, Jodhpur & Udaipur palaces",
    },
    {
      id: "kerala-backwaters",
      title: "Kerala Backwaters Cruise",
      duration: "5 Days / 4 Nights",
      price: "₹19,999",
      rating: 4.9,
      reviewsCount: 275,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      meals: "All Meals on Houseboat",
      hotels: "Premium Houseboat & Tea Garden Resort",
      transport: "Private AC Cab transfers",
      sightseeing: "Munnar tea gardens & Alleppey lagoons",
    },
    {
      id: "goa-escape",
      title: "Goa Tropical Escape",
      duration: "4 Days / 3 Nights",
      price: "₹14,999",
      rating: 4.7,
      reviewsCount: 156,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      meals: "Breakfast & Evening Drinks",
      hotels: "5★ Beachside Luxury Resort",
      transport: "Airport pick & drop plus scooter rental",
      sightseeing: "North/South Goa & Dudhsagar falls",
    },
    {
      id: "ladakh-adventure",
      title: "Ladakh Adventure Trail",
      duration: "7 Days / 6 Nights",
      price: "₹29,999",
      rating: 4.9,
      reviewsCount: 412,
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      meals: "Breakfast, Lunch & Dinner",
      hotels: "Premium Valley Camps & Hotels",
      transport: "Private 4x4 SUV for high passes",
      sightseeing: "Pangong Lake, Nubra Valley & Khardung La",
    },
    {
      id: "andaman-bliss",
      title: "Andaman Islands Bliss",
      duration: "5 Days / 4 Nights",
      price: "₹31,999",
      rating: 4.8,
      reviewsCount: 142,
      image: "https://images.unsplash.com/photo-1589136777351-fdc9c9400c73?auto=format&fit=crop&w=800&q=80",
      meals: "Breakfast & Seafood Dinners",
      hotels: "Private Lagoon Villas & Beach Resorts",
      transport: "Private Cruise transfers between islands",
      sightseeing: "Radhanagar Beach & Cellular Jail Light show",
    },
  ];

  return (
    <section id="packages" className="py-24 bg-[#FAFAF8] scroll-mt-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            Handpicked Curations
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Featured India <span className="text-primary">Packages</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 leading-relaxed">
            Unpack wonders with signature travel itineraries featuring high-end stays, custom private transfers, and seamless guided activities.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Header Image */}
              <div className="relative h-60 w-full overflow-hidden select-none">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-md text-white font-sans text-xs font-semibold py-1.5 px-3 rounded-full flex items-center gap-1 border border-white/10">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-dark font-sans text-xs font-bold py-1.5 px-3 rounded-full flex items-center gap-1 border border-white/40">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span>{pkg.rating}</span>
                  <span className="text-slate-400 text-[10px] font-normal">({pkg.reviewsCount})</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-dark mb-4 tracking-tight">
                  {pkg.title}
                </h3>

                {/* Features List */}
                <div className="space-y-3.5 mb-8 flex-1 text-slate-600 font-sans text-xs md:text-sm">
                  <div className="flex items-start gap-3">
                    <Utensils className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{pkg.meals}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{pkg.hotels}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{pkg.transport}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>{pkg.sightseeing}</span>
                  </div>
                </div>

                {/* Footer and Price */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">All-inclusive Price</span>
                    <span className="font-sans font-extrabold text-2xl text-primary">{pkg.price}</span>
                    <span className="block text-[9px] text-slate-400 -mt-0.5">per person</span>
                  </div>
                  <button
                    onClick={() => onBookNow(pkg.title)}
                    className="relative overflow-hidden group bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
                  >
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
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
