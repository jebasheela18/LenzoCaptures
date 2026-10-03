'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919363745628?text=Hello%20Lenzo%20Captures,%20I%20would%20like%20to%20enquire%20about%20your%20photography%20and%20video%20packages."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.7)] transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform duration-300" />
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:+919363745628"
        aria-label="Direct Phone Call"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[var(--gold-primary)] text-black flex items-center justify-center shadow-[0_10px_25px_rgba(212,175,55,0.45)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(212,175,55,0.7)] transition-all duration-300 group"
      >
        <Phone className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
