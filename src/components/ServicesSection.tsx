'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import {
  Camera,
  Film,
  Heart,
  Sparkles,
  Users,
  Video,
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  Compass,
  Layers
} from 'lucide-react';

const SERVICES = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography & Films',
    category: 'Flagship Service',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    description: 'Capturing sacred traditions and timeless romance with dual traditional and candid coverage, delivered in high-definition clarity.',
    features: [
      'Traditional Photo & 4K Video Coverage',
      'Candid Photography by Senior Artists',
      'Cinematic Wedding Teaser & Full Highlights',
      'High-Resolution Master Deliverables'
    ],
  },
  {
    id: 'outdoor-shoots',
    title: 'Pre & Post Wedding Outdoor',
    category: 'Cinematic Romance',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    description: 'Creative outdoor storytelling across breathtaking scenic locations, heritage sites, and intimate natural landscapes.',
    features: [
      'Scenic Outdoor Location Scouting',
      'Styling & Creative Direction Guidance',
      'Drone Aerial Perspectives',
      'Cinematic Music Video Edit'
    ],
  },
  {
    id: 'candid-cinematography',
    title: 'Candid Cinematography',
    category: 'Emotional Storytelling',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    description: 'Unscripted, spontaneous laughter, joyful tears, and honest emotions documented without forced poses.',
    features: [
      'Natural, Unobtrusive Shooting Style',
      'Prime Lens Bokeh & Low Light Mastery',
      'Cinema Sound Recording & Audio Mixing',
      'Color Graded Editorial Finish'
    ],
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events & Commercial',
    category: 'Professional Coverage',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    description: 'Dynamic corporate gatherings, brand launches, conferences, and executive portraits captured with corporate excellence.',
    features: [
      'Multi-Camera Live Event Coverage',
      'Keynote & Speaker Focus Shots',
      'Rapid Turnaround for PR & Social Media',
      'Commercial Brand Story Videos'
    ],
  },
  {
    id: 'maternity-family',
    title: 'Maternity, Baby & Family',
    category: 'Cherished Milestones',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    description: 'Gentle and patient studio and outdoor portraits celebrating the magic of new life, motherhood, and growing families.',
    features: [
      'Comfortable, Kid-Friendly Studio Sessions',
      'Maternity Glow & Artistic Lighting',
      'Milestone Keepsake Photo Packages',
      'Custom Framed Wall Art Options'
    ],
  },
  {
    id: 'albums-frames',
    title: 'Premium Albums & Fine Art Frames',
    category: 'Heirloom Keepsakes',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    description: 'Handcrafted luxury flush-mount albums and archival photo frames created to preserve memories for generations.',
    features: [
      '40-Sheet High-Gloss / Matte Flush-Mount Albums',
      'Large Format Photo Frames (12x18 to 20x30)',
      'Custom Embossed Hardcover Binding',
      'Delivered in Signature Presentation Cases'
    ],
  },
];

export default function ServicesSection() {
  const { openBooking } = useBooking();
  const [activeModal, setActiveModal] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with SS Studio Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              WHAT WE OFFER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Capturing Every Moment, <br />
            <span className="text-gold-gradient font-normal italic">Every Emotion</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Create the stories you want people to remember. We bring vision, technical mastery, and heartfelt storytelling to every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between group hover:border-[var(--gold-primary)]/60 transition-all duration-300"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-bold bg-black/40 px-3 py-1 rounded-full border border-[var(--gold-primary)]/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-white font-medium mb-3 group-hover:text-[var(--gold-light)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-6 border-t border-zinc-800/80 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold-primary)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800/60">
                  <button
                    onClick={() => openBooking(service.title)}
                    className="text-xs uppercase tracking-wider font-semibold text-[var(--gold-primary)] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveModal(service)}
                    className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Packages Quick Nav */}
        <div className="mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
          >
            <span>Explore Crafted Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#0f1115] border border-[var(--gold-primary)]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--gold-primary)]/20 border border-[var(--gold-primary)]/50 flex items-center justify-center text-[var(--gold-primary)]">
                  {React.createElement(activeModal.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-bold block">
                    {activeModal.category}
                  </span>
                  <h3 className="text-xl font-serif text-white font-semibold">{activeModal.title}</h3>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                {activeModal.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Included in this experience:</h4>
                {activeModal.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold-primary)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const title = activeModal.title;
                    setActiveModal(null);
                    openBooking(title);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-black text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Book This Experience
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-3 rounded-xl border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
