'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    clientName: 'Suresh Kumar & Family',
    eventType: 'Studio Family Portrait',
    location: 'Tirunelveli Studio',
    rating: 5,
    quote:
      'We had gone to take family picture in the studio. The photographer took his time to take multiple photos. He had been patient with the kids as well throughout the session. And the girl at the reception was good at her service.',
  },
  {
    id: 2,
    clientName: 'Gayathri & Shankar',
    eventType: 'Cinematic Wedding & Reception',
    location: 'Tirunelveli',
    rating: 5,
    quote:
      "We had a wonderful experience with Lenzo Captures and their team. They work really hard. The crew is extremely friendly and supportive and innovative in their ideas and effects are unbelievable. Hats off to you guys!",
  },
  {
    id: 3,
    clientName: 'Karthik & Deepa',
    eventType: 'Wedding Photography & Video',
    location: 'Madurai',
    rating: 5,
    quote:
      'One of the most legendary photos and videos with budget-friendly packages. They put full effort and their skills to sacrifice and make a happy customer. That’s why I liked this team. Well done and maintain this hard work!',
  },
  {
    id: 4,
    clientName: 'Aravind Swaminathan',
    eventType: 'Fellow Photographer & Client',
    location: 'Tamil Nadu',
    rating: 5,
    quote:
      'One of the most dedicated and committed photography teams. They know well how to adapt to any hard situation and will give you the best results more than you expect. Not just saying only as a client, but as myself a photographer.',
  },
  {
    id: 5,
    clientName: 'Priya & Vignesh',
    eventType: 'Pre-Wedding Outdoor Shoot',
    location: 'Courtallam',
    rating: 5,
    quote:
      'Great photographer and energetic, engaging, and a lot of fun! We love our pictures and our wedding teaser video is loved by our entire family!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const current = REVIEWS[currentIndex];

  return (
    <section className="py-24 md:py-32 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header with SS Studio Typography */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              TESTIMONIAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white">
            Client <span className="text-gold-gradient font-normal italic">Feedback.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Real stories and heartfelt words from couples and families whose moments we’ve had the privilege of capturing.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-14 border border-[var(--gold-primary)]/30 shadow-2xl">
          <Quote className="w-16 h-16 text-[var(--gold-primary)]/15 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10 text-center flex flex-col items-center min-h-[220px] justify-center"
            >
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--gold-primary)] text-[var(--gold-primary)]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl font-serif font-light text-zinc-200 leading-relaxed max-w-3xl italic">
                “{current.quote}”
              </p>

              {/* Client Info */}
              <div className="pt-4 border-t border-zinc-800/80 w-full max-w-sm">
                <h3 className="text-base font-serif text-white font-medium">{current.clientName}</h3>
                <p className="text-xs text-[var(--gold-primary)] font-medium mt-0.5">
                  {current.eventType} &bull; {current.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800/60">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[var(--gold-primary)]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full border border-zinc-700 hover:border-[var(--gold-primary)] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-3 rounded-full border border-zinc-700 hover:border-[var(--gold-primary)] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
