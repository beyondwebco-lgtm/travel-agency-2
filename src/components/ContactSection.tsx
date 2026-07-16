"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          message: "",
        });
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAF8] border-t border-slate-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Connect With Our <span className="text-primary">Travel Experts</span>
          </h2>
          <p className="text-slate-500 font-sans text-sm md:text-base mt-4 leading-relaxed">
            Have questions about a destination or package? Contact our office in Jubilee Hills, Hyderabad, or drop us a line below.
          </p>
        </div>

        {/* Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="premium-card p-8 rounded-[28px] space-y-6 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Office Information</h3>
              
              {/* Office Address */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Our Office</h4>
                  <p className="text-dark font-sans text-sm mt-1 leading-relaxed">
                    Jubilee Hills, Hyderabad,<br />Telangana, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-amber-50 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Phone</h4>
                  <a href="tel:+919100045678" className="text-dark font-sans text-sm mt-1 hover:text-primary transition-colors block">
                    +91 91000 45678
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Email Address</h4>
                  <a href="mailto:hello@aarohantravels.in" className="text-dark font-sans text-sm mt-1 hover:text-primary transition-colors block">
                    hello@aarohantravels.in
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-success flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400">Business Hours</h4>
                  <p className="text-dark font-sans text-sm mt-1 leading-relaxed">
                    Monday – Saturday<br />9:00 AM – 7:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (Solid Design) */}
            <div className="premium-card p-4 rounded-[28px] overflow-hidden shadow-sm h-64 relative group select-none">
              <iframe
                title="Google Maps Location - Jubilee Hills Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.907954930143!2d78.39958741529124!3d17.43094898805206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d797184d0b%3A0xea21d120a17a02db!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1657801831849!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7">
            <div className="premium-card p-8 md:p-10 rounded-[28px] shadow-sm">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Send an Inquiry</h3>
              <p className="text-slate-500 font-sans text-xs md:text-sm mb-8 leading-relaxed">
                Fill out this quick contact form, and our Hyderabad office team will respond to you shortly.
              </p>

              {isSubmitted ? (
                /* Success Feedback */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="h-14 w-14 bg-success/10 rounded-full flex items-center justify-center text-success mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-dark mb-2">Message Sent!</h4>
                  <p className="text-slate-500 font-sans text-sm max-w-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-primary">{formData.name}</span>. We've received your query and will reply via email at <span className="font-semibold text-primary">{formData.email}</span> shortly.
                  </p>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full premium-input px-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full premium-input px-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                      />
                    </div>
                    {/* Phone field */}
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile no."
                        className="w-full premium-input px-4 py-3 rounded-2xl text-sm font-sans text-dark focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your travel questions or request specific customizations..."
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
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
