'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, MapPin, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'p-1',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    title: 'Gayathri & Shankar - Royal Wedding Moments',
    category: 'Weddings',
    location: 'Tirunelveli, Tamil Nadu',
    description: 'Cinematic traditional South Indian wedding rituals captured with authentic emotions and regal elegance.',
  },
  {
    id: 'p-2',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    title: 'Sun-Kissed Outdoor Pre-Wedding Romance',
    category: 'Outdoor Shoots',
    location: 'Courtallam Falls & Western Ghats',
    description: 'Golden hour outdoor portraits highlighting natural romance against cascading scenic landscapes.',
  },
  {
    id: 'p-3',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    title: 'Unscripted Candid Joy & Festive Laughter',
    category: 'Candid',
    location: 'Madurai Mandapam',
    description: 'Spontaneous family smiles and sacred vows documented with prime lens bokeh and subtle framing.',
  },
  {
    id: 'p-4',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
    title: 'Sacred Muhurtham Traditional Rituals',
    category: 'Traditional',
    location: 'Nellaiappar Temple Surroundings',
    description: 'Vibrant silk sarees, temple jewelry, and age-old sacred customs immortalized in high definition.',
  },
  {
    id: 'p-5',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    title: 'Corporate Leadership Summit & Brand Launch',
    category: 'Commercial',
    location: 'Chennai Conclave Centre',
    description: 'Dynamic corporate keynote speeches, product debuts, and high-impact executive imagery.',
  },
  {
    id: 'p-6',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    title: 'Maternity Glow & New Beginnings',
    category: 'Maternity & Baby',
    location: 'Lenzo Studio Suite, Tirunelveli',
    description: 'Tender studio portrait session highlighting the grace, intimacy, and anticipation of motherhood.',
  },
  {
    id: 'p-7',
    url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
    title: 'Enchanting Evening Reception Celebration',
    category: 'Weddings',
    location: 'Heritage Grand Palace',
    description: 'Glittering crystal chandeliers, joyful first dances, and celebratory sparkle captured in 4K.',
  },
  {
    id: 'p-8',
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    title: 'Lakeside Serenade Post-Wedding Session',
    category: 'Outdoor Shoots',
    location: 'Manimuthar Valley',
    description: 'Breathtaking reflections and serene scenic backdrops celebrating couple connection.',
  },
  {
    id: 'p-9',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    title: 'Pure Joy: Baby & Family Studio Portrait',
    category: 'Maternity & Baby',
    location: 'Lenzo Studio, KTC Nagar',
    description: 'Warm, patient studio photography capturing innocent toddler giggles and family bonds.',
  },
];

const CATEGORIES = ['All', 'Weddings', 'Candid', 'Outdoor Shoots', 'Traditional', 'Commercial', 'Maternity & Baby'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header matching SS Studio */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              FEATURED PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Your Moments, <br />
            <span className="text-gold-gradient font-normal italic">Our Cinematic Passion</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of stunning wedding films, dynamic corporate events, and creative short films—each frame crafted with passion and precision.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[var(--gold-primary)] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 bg-zinc-900/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-color)] shadow-xl bg-zinc-950"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.88] group-hover:brightness-100"
                />

                {/* Always-readable subtle bottom tag on mobile */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-black/60 backdrop-blur-md text-[var(--gold-primary)] border border-[var(--gold-primary)]/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 text-zinc-300 text-xs mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg font-serif text-white font-medium mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--gold-primary)] font-semibold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View In Lightbox</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Footer Action */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-[var(--gold-primary)]/80 hover:bg-[var(--gold-primary)] hover:text-black transition-all shadow-md"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--gold-primary)] transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--gold-primary)] transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image & Info */}
            <div 
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl max-h-[72vh]">
                <img
                  src={filteredItems[lightboxIndex].url}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-auto max-h-[72vh] object-contain"
                />
              </div>

              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-bold">
                  {filteredItems[lightboxIndex].category} • {filteredItems[lightboxIndex].location}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white font-semibold mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                  {filteredItems[lightboxIndex].description}
                </p>
                <span className="text-[11px] text-zinc-600 mt-2 block">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
