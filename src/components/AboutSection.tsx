'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function AboutSection() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid: Visuals & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-2xl border border-[var(--border-color)] shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                  alt="Lenzo Captures Cinematic Wedding Shot"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                    Cinematic Wedding Magic
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-[var(--border-color)] shadow-2xl mt-8 sm:mt-12 relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
                  alt="Lenzo Captures Candid Storytelling"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                    Where Passion Meets Precision
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[var(--gold-primary)]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight font-light leading-tight text-white">
              Where Passion Meets <span className="text-gold-gradient font-normal italic">Precision</span>
            </h2>

            {/* Exact SS Studio Copy */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              We are a team of dedicated filmmakers and storytellers who believe in the power of visual storytelling. With years of experience in the industry, we’ve had the privilege of capturing some of life’s most precious moments—from the joy of weddings to the excitement of corporate events and the artistry of short films.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl glass-card border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[var(--gold-primary)]/15 flex items-center justify-center text-[var(--gold-primary)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-white">Years of Experience</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  With years of experience, we bring expertise, creativity, and passion to every project, ensuring your memories are timeless.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[var(--gold-primary)]/15 flex items-center justify-center text-[var(--gold-primary)]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-white">Happy Customers</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Your smiles inspire us! We’ve created countless happy customers by turning their moments into cherished, timeless memories.
                </p>
              </div>
            </div>

            {/* Discover More link & Studio Location Tag */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] transition-all shadow-md"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-zinc-400">
                Studio in <strong>Tirunelveli, Tamil Nadu</strong> • Serving Worldwide
              </span>
            </div>
          </motion.div>
        </div>

        {/* SS Studio Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-gradient-to-r from-zinc-950 via-[#14120c] to-zinc-950 border border-[var(--gold-primary)]/30 shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug">
                Your moments deserve the best. <br />
                <span className="text-gold-gradient font-medium">Book us today and let’s make magic!</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                From weddings to corporate events, we turn your moments into cinematic magic. Let’s create something unforgettable together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => openBooking()}
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
              >
                Book An Appointment
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-widest text-white border border-white/20 hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)] transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Decorative Background Texture */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[var(--gold-primary)]/10 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
