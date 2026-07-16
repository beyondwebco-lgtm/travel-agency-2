"use client";

import React, { useState, useEffect } from "react";
import { Compass, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onPlanTripClick: () => void;
}

export default function Navbar({ onPlanTripClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Experiences", href: "#experiences" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "solid-nav py-4 shadow-md text-dark"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
              <Compass className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-primary" : "text-accent"}`} />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl tracking-wide transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
                VOYARA
              </span>
              <span className={`block text-[9px] font-sans tracking-[0.25em] uppercase -mt-1 font-medium transition-colors duration-300 ${isScrolled ? "text-slate-500" : "text-slate-300"}`}>
                Travels
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide relative py-2 transition-colors duration-300 group ${
                  isScrolled 
                    ? "text-slate-600 hover:text-primary" 
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-primary" : "bg-accent"}`} />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919100045678"
              className={`flex items-center space-x-1.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-slate-600 hover:text-primary" : "text-slate-200 hover:text-white"
              }`}
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>+91 91000 45678</span>
            </a>
            <button
              onClick={onPlanTripClick}
              className="relative overflow-hidden group bg-primary hover:bg-primary/95 text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Plan My Trip</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-dark" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-dark" : "text-white"}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden p-6 mx-4 mt-2 rounded-2xl bg-white shadow-2xl border border-slate-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading font-medium text-slate-700 hover:text-primary transition-colors py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <a
                  href="tel:+919100045678"
                  className="flex items-center justify-center space-x-2 text-slate-600 font-semibold py-2"
                >
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <span>+91 91000 45678</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPlanTripClick();
                  }}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-sans text-xs font-semibold tracking-widest uppercase py-4 rounded-xl transition-colors shadow-md text-center"
                >
                  Plan My Trip
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
