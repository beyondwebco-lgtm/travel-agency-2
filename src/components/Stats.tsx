"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Map, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  decimals?: number;
}

function Counter({ targetValue, suffix, duration = 2000, decimals = 0 }: { targetValue: number; suffix: string; duration?: number; decimals?: number }) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      
      setValue(easedProgress * targetValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, targetValue, duration]);

  return (
    <span ref={elementRef} className="font-heading font-extrabold text-4xl md:text-5xl text-white">
      {value.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList: StatItem[] = [
    {
      id: "travelers",
      label: "Happy Travelers",
      targetValue: 20000,
      suffix: "+",
      icon: Users,
    },
    {
      id: "destinations",
      label: "Indian Destinations",
      targetValue: 150,
      suffix: "+",
      icon: Map,
    },
    {
      id: "rating",
      label: "Average Rating",
      targetValue: 4.9,
      suffix: " ★",
      icon: Star,
      decimals: 1,
    },
    {
      id: "experience",
      label: "Years Experience",
      targetValue: 8,
      suffix: "+",
      icon: Calendar,
    },
  ];

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Decorative Blur Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                {/* Icon wrapper */}
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-4 border border-white/5">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Counter */}
                <Counter
                  targetValue={stat.targetValue}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
                
                {/* Label */}
                <span className="block text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] text-slate-300 mt-2">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
