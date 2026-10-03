'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { CheckCircle2, Sparkles, Crown, ArrowRight, MessageSquare, Phone } from 'lucide-react';

const PACKAGES = [
  {
    id: 'package-1',
    name: 'Package 1',
    badge: 'Essential',
    tagline: 'Traditional Photo & Video Foundation',
    features: [
      'Traditional Photo & Video Coverage',
      'Premium Album - 40 Sheets Each Album',
      'Photo Frame - 12*18 Dimension',
      'High-Speed Pendrive - Wedding Highlights',
      'Full Color Correction & Standard Edits',
    ],
    isPopular: false,
  },
  {
    id: 'package-2',
    name: 'Package 2',
    badge: 'Silver Edition',
    tagline: 'Candid & Traditional with Outdoor Shoot',
    features: [
      'Traditional Photo & Video',
      'Candid Photo & Video by Senior Crew',
      'Pre or Post Wedding Outdoor Session',
      'Premium Album - 40 Sheets Each Album',
      'Photo Frame - 12*16 Dimension',
      'Pendrive - Wedding Highlights & Raw Edits',
    ],
    isPopular: false,
  },
  {
    id: 'package-3',
    name: 'Package 3',
    badge: 'Most Popular',
    tagline: 'Comprehensive Candid & Outdoor Cinema',
    features: [
      'Traditional Photo & Video',
      'Candid Photo & Video',
      'Pre & Post Wedding Outdoor',
      'Premium Album - 40 Sheet Each Album',
      'Large Photo Frame - 20*30 Statement Piece',
      'Pendrive - Wedding Highlight & Teaser',
      'Full Cinematic Color Grading',
    ],
    isPopular: true,
  },
  {
    id: 'package-4',
    name: 'Package 4',
    badge: 'Platinum Multi-Album',
    tagline: 'Two Luxury Albums & Dual Master Frames',
    features: [
      'Traditional Photo & Video',
      'Candid Photo & Video',
      'Pre & Post Wedding Outdoor',
      '2 Nos of Premium Album - 40 Sheets Each Album',
      '2 Nos of Photo Frame - 12*18 & 20*30',
      'Pendrive - Wedding Highlight & Extended Reel',
      'Parent Keepsake Presentation Box',
    ],
    isPopular: false,
  },
  {
    id: 'package-5',
    name: 'Package 5',
    badge: 'Royal Grand',
    tagline: 'Ultimate 4K Drone, 3 Albums & Dual Frames',
    features: [
      'Traditional Photo & Video',
      'Candid Photo & Video',
      'Licensed 4K Drone Aerial Cinematography',
      'Pre or Post Wedding Outdoor Shoot',
      '3 Nos of Premium Flush-Mount Albums',
      '2 Nos of Luxury Photo Frames',
      'Custom Wooden Gift Box Pendrive Highlights',
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  const { openBooking } = useBooking();

  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              CHOOSE YOUR PACKAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Crafted Packages That Fit <br />
            <span className="text-gold-gradient font-normal italic">Every Event Perfectly</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Whether weddings or corporate shoots, our packages are built to ensure a seamless and professional experience every time.
          </p>
        </div>

        {/* 5 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES.slice(0, 3).map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.isPopular
                  ? 'glass-card border-2 border-[var(--gold-primary)] shadow-[0_0_40px_rgba(212,175,55,0.25)] bg-[#111317]'
                  : 'glass-card border border-[var(--border-color)]'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gold-primary)] text-black font-bold text-[10px] uppercase tracking-[0.25em] px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Crown className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-widest text-[var(--gold-primary)] font-bold block mb-1">
                  {pkg.badge}
                </span>

                <h3 className="text-2xl font-serif text-white font-semibold mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-zinc-400 font-light mb-6">
                  {pkg.tagline}
                </p>

                <div className="border-t border-zinc-800/80 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBooking(pkg.name)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-center transition-all duration-300 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[var(--gold-primary)] text-black hover:bg-[var(--gold-light)] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      : 'border border-[var(--gold-primary)] text-white hover:bg-[var(--gold-primary)] hover:text-black'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row: Package 4 & Package 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-20">
          {PACKAGES.slice(3).map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[var(--border-color)] hover:border-[var(--gold-primary)]/60 transition-all hover:-translate-y-1.5"
            >
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[var(--gold-primary)] font-bold block mb-1">
                  {pkg.badge}
                </span>

                <h3 className="text-2xl font-serif text-white font-semibold mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-zinc-400 font-light mb-6">
                  {pkg.tagline}
                </p>

                <div className="border-t border-zinc-800/80 pt-6 mb-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBooking(pkg.name)}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-center border border-[var(--gold-primary)] text-white hover:bg-[var(--gold-primary)] hover:text-black transition-all cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SS Studio "Need Custom Package?" Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-r from-black via-[#14120a] to-black border border-[var(--gold-primary)]/40 shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold block">
                Bespoke Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
                Need Custom Package?
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Your event, your way. Share your vision and we’ll customize the perfect package just for your special occasion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] shadow-lg transition-all"
              >
                Contact Us
              </a>

              <a
                href="https://wa.me/919363745628?text=Hi%20Lenzo%20Captures,%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20a%20custom%20photography%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white border border-emerald-500/50 hover:bg-emerald-600/20 transition-all text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Free Consultations
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
