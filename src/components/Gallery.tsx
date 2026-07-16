"use client";

import React, { useState } from "react";
import { X, ZoomIn, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  location: string;
  image: string;
  aspectRatio: string; // for masonry card styles
}

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Serene Dal Lake Shikara",
      location: "Srinagar, Kashmir",
      image: "/images/kashmir.jpg",
      aspectRatio: "h-72",
    },
    {
      id: 2,
      title: "Majestic Amber Fort",
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-96",
    },
    {
      id: 3,
      title: "Misty Munnar Tea Estates",
      location: "Munnar, Kerala",
      image: "/images/munnar.jpg",
      aspectRatio: "h-80",
    },
    {
      id: 4,
      title: "High Passes of Pangong",
      location: "Leh Ladakh, Jammu & Kashmir",
      image: "/images/ladakh.jpg",
      aspectRatio: "h-96",
    },
    {
      id: 5,
      title: "Houseboats on Alleppey",
      location: "Alleppey, Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-72",
    },
    {
      id: 6,
      title: "Golden Hour Beach Sunsets",
      location: "Vagator, Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-80",
    },
    {
      id: 7,
      title: "The Holy Ganga Aarti",
      location: "Varanasi, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1561361062-856753549c46?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-96",
    },
    {
      id: 8,
      title: "Shimla Himalayan Toy Train",
      location: "Shimla, Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-72",
    },
    {
      id: 9,
      title: "Lakshman Jhula Bridges",
      location: "Rishikesh, Uttarakhand",
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-80",
    },
    {
      id: 10,
      title: "Lush Valleys of Coorg",
      location: "Madikeri, Karnataka",
      image: "/images/coorg.jpg",
      aspectRatio: "h-96",
    },
    {
      id: 11,
      title: "Radhanagar Beach Shores",
      location: "Havelock Island, Andaman",
      image: "/images/andaman.jpg",
      aspectRatio: "h-72",
    },
    {
      id: 12,
      title: "The Golden Sanctuary",
      location: "Amritsar, Punjab",
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
      aspectRatio: "h-80",
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAFAF8] scroll-mt-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            Visual Inspirations
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Our India <span className="text-primary">Photo Gallery</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 leading-relaxed">
            Take a visual tour across the royal corridors, majestic hills, and golden seascapes captured by our travelers.
          </p>
        </div>

        {/* Pinterest Masonry columns layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance] w-full space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="break-inside-avoid relative rounded-[24px] overflow-hidden group cursor-zoom-in bg-slate-900 border border-slate-100 select-none"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full ${item.aspectRatio} object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                loading="lazy"
              />
              
              {/* Zoom overlay on Hover */}
              <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <ZoomIn className="absolute top-6 right-6 text-white h-5 w-5 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                <span className="text-accent text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-1">
                  <MapPin className="h-3 w-3" /> {item.location}
                </span>
                <h4 className="text-white font-heading font-bold text-base leading-snug">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-slate-950/95"
            />

            {/* Lightbox Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-2 text-white/80 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Arrow navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors focus:outline-none z-20"
                aria-label="Previous Image"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors focus:outline-none z-20"
                aria-label="Next Image"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Main Image View */}
              <div className="relative rounded-2xl overflow-hidden max-h-[75vh] w-full flex items-center justify-center bg-black">
                <img
                  src={galleryItems[selectedImageIndex].image}
                  alt={galleryItems[selectedImageIndex].title}
                  className="max-h-[75vh] object-contain w-auto select-none"
                />
              </div>

              {/* Photo description panel */}
              <div className="w-full text-center mt-4 text-white">
                <h4 className="font-heading font-bold text-lg md:text-xl">
                  {galleryItems[selectedImageIndex].title}
                </h4>
                <p className="text-slate-400 font-sans text-xs md:text-sm mt-1 flex items-center justify-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span>{galleryItems[selectedImageIndex].location}</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
