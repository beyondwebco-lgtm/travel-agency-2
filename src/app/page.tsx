"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Experiences from "@/components/Experiences";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledPackage, setPrefilledPackage] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade up sections on scroll
    const sections = ["#destinations", "#packages", "#experiences", "#why-choose-us", "#gallery", "#testimonials", "#contact"];
    
    sections.forEach((id) => {
      gsap.fromTo(
        id,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: id,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Parallax scroll on hero image
    gsap.to("#home img", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const handleOpenBookingModal = (packageTitle: string = "") => {
    setPrefilledPackage(packageTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setPrefilledPackage("");
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar onPlanTripClick={() => handleOpenBookingModal()} />

      {/* Main Content Layout */}
      <main className="flex flex-col min-h-screen">
        {/* Full-screen Hero Section */}
        <Hero
          onExplorePackages={() => {
            const section = document.getElementById("packages");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          onCustomizeTrip={() => handleOpenBookingModal()}
        />

        {/* Popular Destinations Grid */}
        <Destinations onSelectDestination={(dest) => handleOpenBookingModal(dest)} />

        {/* Statistics Dashboard */}
        <Stats />

        {/* Featured Tours Catalog */}
        <Packages onBookNow={(title) => handleOpenBookingModal(title)} />

        {/* Horizontal Experience Pickers */}
        <Experiences />

        {/* Why Choose Us trust factors */}
        <WhyChooseUs />

        {/* Pinterest Gallery Layout */}
        <Gallery />

        {/* Auto-sliding Testimonials Slider */}
        <Testimonials />

        {/* Direct Action Lead Banner */}
        <CTASection onPlanTripClick={() => handleOpenBookingModal()} />

        {/* Location Maps & Inquiries Grid */}
        <ContactSection />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Sticky Floating Widgets */}
      <WhatsAppButton />

      {/* Modal Popup Reservation */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        prefilledPackage={prefilledPackage}
      />
    </>
  );
}
