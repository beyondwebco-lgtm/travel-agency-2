"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  image: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Siddharth Rao",
      city: "Hyderabad",
      rating: 5,
      review: "Aarohan Travels planned our family honeymoon to Kashmir. The arrangements in Gulmarg were absolute luxury! Having a private cab waiting at the airport and handpicked hotels with direct snow views made it magical.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 2,
      name: "Meera Deshmukh",
      city: "Mumbai",
      rating: 5,
      review: "The Ladakh tour was exceptionally planned. Given the high altitudes, the team made sure we had a full day of acclimatization and emergency medical oxygen support in the SUV. 10/10 for safety and guides!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      city: "Bangalore",
      rating: 5,
      review: "We booked a corporate retreat of 35 employees to Goa. Everything from direct conference room bookings at the resort to private beach dinners was executed with absolute precision. Incredible hospitality.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: 4,
      name: "Ananya Iyer",
      city: "Chennai",
      rating: 5,
      review: "Being a solo female traveler, safety was my biggest concern. Aarohan Travels curated a customized Kerala backwaters itinerary with verified private guides. I had a phenomenal, peaceful, and super safe trip.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }
    return () => {
      resetTimeout();
    };
  }, [activeIndex, isHovered]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#FAFAF8] border-t border-slate-100 scroll-mt-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            Voices of Trust
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Loved by Our <span className="text-primary">Travelers</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 leading-relaxed">
            Read stories of customized luxury, comfort, and absolute peace of mind shared by our domestic travel clients.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div
            className="w-full relative min-h-[300px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="premium-card rounded-[28px] p-8 md:p-12 relative shadow-xl">
                  {/* Quote decoration */}
                  <Quote className="absolute top-8 right-8 text-primary/5 h-24 w-24 -z-10 pointer-events-none" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-accent">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 font-sans text-sm md:text-lg leading-relaxed mb-8 italic">
                    "{testimonials[activeIndex].review}"
                  </p>

                  {/* Client Info Grid */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="h-14 w-14 rounded-full object-cover border border-primary/10 select-none"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-dark text-base md:text-lg leading-tight">
                        {testimonials[activeIndex].name}
                      </h4>
                      <span className="text-slate-400 font-sans text-xs md:text-sm">
                        Verified Guest from {testimonials[activeIndex].city}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator pagination buttons */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
