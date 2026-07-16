"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = "https://wa.me/919100045678?text=Hello%20Voyara%2C%20I%20am%20interested%20in%20planning%20an%20Indian%20holiday.%20Please%20connect%20me%20with%20a%20planner!";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block bg-slate-900 text-white font-sans text-xs font-semibold py-2 px-4.5 rounded-xl shadow-lg border border-slate-800 tracking-wide select-none"
          >
            Chat with our experts
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-[#25D366]/20 transition-shadow select-none relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Ring Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:animate-none pointer-events-none" />
        <MessageCircle className="h-7 w-7 relative z-10 fill-white text-[#25D366]" />
      </motion.a>
    </div>
  );
}
