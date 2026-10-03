'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Film, MapPin, X, ExternalLink } from 'lucide-react';

const WEDDING_FILMS = [
  {
    id: 'film-1',
    title: 'Best Cinematic Wedding Teaser 4K - Shankar & Gayathri',
    couple: 'Shankar & Gayathri',
    location: 'Tirunelveli, Tamil Nadu',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    duration: '04:15',
    videoUrl: 'https://www.facebook.com/Stephentirunelveli/videos/best-cinematic-wedding-teaser-4k-shankar-gayathri-ss-photography/5544144589011186/',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'film-2',
    title: 'Pre-Wedding Outdoor Romance & Sunset Melodies',
    couple: 'Vignesh & Kaviya',
    location: 'Courtallam Hills & Scenic Waterfalls',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    duration: '03:48',
    videoUrl: 'https://www.youtube.com/@ssstudios.in.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'film-3',
    title: 'Sacred Muhurtham & Royal Heritage Celebrations',
    couple: 'Arun & Meenakshi',
    location: 'Madurai Mandapam',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    duration: '05:20',
    videoUrl: 'https://www.youtube.com/@ssstudios.in.',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
];

export default function FilmsSection() {
  const [activeFilm, setActiveFilm] = useState<typeof WEDDING_FILMS[0] | null>(null);

  return (
    <section id="films" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Film className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              CINEMATIC WEDDING FILMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Movie-Grade Stories Scored <br />
            <span className="text-gold-gradient font-normal italic">To Your Unique Romance</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Every frame crafted with high-definition clarity and a storytelling approach. Relive the emotion, rituals, and joy of your special celebration.
          </p>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEDDING_FILMS.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveFilm(film)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-color)] bg-zinc-950 shadow-xl"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.8] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold-primary)]/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] group-hover:scale-115 group-hover:bg-[var(--gold-light)] transition-all duration-300">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                  {film.duration}
                </span>
              </div>

              {/* Film Details */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
                  <span>{film.location}</span>
                </div>
                <h3 className="text-base sm:text-lg font-serif text-white font-medium group-hover:text-[var(--gold-light)] transition-colors leading-snug">
                  {film.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://youtube.com/@ssstudios.in.?si=V11IFhqOGArU-bd2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-red-500/50 hover:bg-red-600/20 hover:border-red-500 transition-all shadow-md text-red-400 hover:text-red-300"
          >
            <span>Watch Full Teasers on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeFilm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveFilm(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveFilm(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-zinc-400 hover:text-white border border-white/20 cursor-pointer"
                aria-label="Close Film Player"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-bold">
                    Now Playing
                  </span>
                  <h3 className="text-lg font-serif text-white font-semibold mt-0.5">
                    {activeFilm.title}
                  </h3>
                </div>
                <a
                  href={activeFilm.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[var(--gold-primary)] hover:underline"
                >
                  <span>Open Video Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeFilm.embedUrl}
                  title={activeFilm.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
