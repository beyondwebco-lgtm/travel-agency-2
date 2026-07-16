"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Users, MapPin, CheckCircle, Mail, Phone, User, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackage?: string;
}

export default function BookingModal({ isOpen, onClose, prefilledPackage }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    guests: "2",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({ ...prev, destination: prefilledPackage }));
    }
  }, [prefilledPackage, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          date: "",
          guests: "2",
          notes: "",
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  const destinationsList = [
    "Kashmir", "Ladakh", "Manali", "Shimla", "Goa", 
    "Kerala", "Andaman Islands", "Rajasthan", "Rishikesh", 
    "Coorg", "Ooty", "Munnar"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#FAFAF8] rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-primary text-white p-6 md:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase block mb-1">Aarohan Travels</span>
              <h3 className="font-heading font-extrabold text-2xl">Plan Your Incredible Journey</h3>
              <p className="text-slate-200 text-xs mt-1.5 leading-relaxed font-sans">
                Tell us your travel details, and our local destination experts will design your personalized premium itinerary.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              {isSubmitted ? (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center text-success mb-6">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-dark mb-3">Inquiry Received Successfully!</h4>
                  <p className="text-slate-500 font-sans text-sm max-w-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-primary">{formData.name}</span>. An Aarohan Travels planner is reviewing your request. We will contact you at <span className="font-semibold text-primary">{formData.phone}</span> within 2 hours.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-8 block">This window will close automatically...</span>
                </motion.div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Fields (Email & Phone side-by-side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@mail.com"
                          className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile no."
                          className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Preferred Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                      <select
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none cursor-pointer appearance-none bg-white"
                      >
                        <option value="">Select destination...</option>
                        {destinationsList.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date and Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Travel Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                        <input
                          type="date"
                          name="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Total Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full premium-input pl-11 pr-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none cursor-pointer appearance-none bg-white"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5+">5+ Persons</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Travel Notes / Message */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Custom Requests (Optional)</label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="E.g., Honeymoon arrangements, corporate booking details, senior citizens support, choice of 5-star resort..."
                      className="w-full premium-input p-4 rounded-2xl text-sm font-sans text-dark focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
