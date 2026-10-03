'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Camera, Film, Award } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop',
    badge: 'WELCOME TO LENZO CAPTURES',
    headline: 'Making Every Second Of Your Story Visually Unforgettable',
    description: 'We believe in the power of visual storytelling—capturing life’s most precious moments from radiant weddings to dynamic corporate events.',
    tag: 'CINEMATIC WEDDING FILMS & CANDID PHOTOGRAPHY',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop',
    badge: 'WHERE PASSION MEETS PRECISION',
    headline: 'Your Moments, Our Cinematic Passion',
    description: 'Every frame crafted with passion, high-definition 4K clarity, and movie-grade storytelling that stays timeless forever.',
    tag: 'PRE & POST WEDDING OUTDOOR CINEMA',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop',
    badge: 'EXCELLENCE IN EVERY FRAME',
    headline: 'Turning Precious Moments Into Cherished Memories',
    description: 'Dedicated team of master filmmakers equipped with cutting-edge cameras, artistic lighting, and guaranteed on-time delivery.',
    tag: 'LUXURY TRADITIONAL & CANDID COVERAGE',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openBooking } = useBooking();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center pt-20">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[currentSlide].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={SLIDES[currentSlide].url}
            alt="Lenzo Captures Hero"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08]"
          />
          {/* Layered Cinematic Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">
        {/* Welcome Tag */}
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold-primary)]/50 bg-black/60 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[var(--gold-light)] font-semibold">
            {SLIDES[currentSlide].badge}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-[1.15] max-w-4xl tracking-wide drop-shadow-2xl"
        >
          {SLIDES[currentSlide].headline}
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide mb-10 leading-relaxed drop-shadow"
        >
          {SLIDES[currentSlide].description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Book Now Button */}
          <button
            onClick={() => openBooking()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Book Now
          </button>

          {/* Discover More / Explore Button */}
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-xs uppercase tracking-[0.2em] text-white border border-white/30 hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)] backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
          >
            <span>Discover More</span>
            <ArrowRight className="w-4 h-4 text-[var(--gold-primary)]" />
          </a>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center w-full max-w-3xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[var(--gold-primary)]">10+</span>
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[var(--gold-primary)]">1500+</span>
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[var(--gold-primary)]">850+</span>
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Filmed Weddings</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[var(--gold-primary)]">100%</span>
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">On-Time Delivery</span>
          </div>
        </motion.div>
      </div>

      {/* Slider Nav Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md items-center justify-center text-white hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md items-center justify-center text-white hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Dot Indicators */}
      <div className="absolute bottom-6 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-8 h-2 bg-[var(--gold-primary)]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
