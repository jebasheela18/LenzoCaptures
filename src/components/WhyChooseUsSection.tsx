'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Film, Users, Camera, Clock, CheckCircle } from 'lucide-react';

const PILLARS = [
  {
    icon: Film,
    title: 'High-Definition Storytelling',
    description: 'We craft visually stunning films with high-definition clarity and a storytelling approach.',
  },
  {
    icon: Users,
    title: 'Skilled Photographers & Filmmakers',
    description: 'Our skilled photographers and filmmakers ensure every moment is captured with perfection.',
  },
  {
    icon: Camera,
    title: 'Cutting-Edge Gear & Lighting',
    description: 'We use cutting-edge cameras, lighting, and editing tools for a professional finish.',
  },
  {
    icon: Clock,
    title: 'Guaranteed On-Time Delivery',
    description: 'We guarantee on-time delivery, so you can relive your special moments without delay.',
  },
];

const METRICS = [
  { label: 'Filmed Weddings', value: '850+' },
  { label: 'Happy Clients', value: '1500+' },
  { label: 'Years of Experience', value: '10+' },
  { label: '5-Star Reviews', value: '98%' },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with SS Studio Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Excellence in Every Frame, <br />
            <span className="text-gold-gradient font-normal italic">Perfection in Every Moment!</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Lenzo Captures specializes in cinematic storytelling for weddings, corporate events, and short films, bringing your vision to life beautifully.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-7 space-y-4 group border border-[var(--border-color)] hover:border-[var(--gold-primary)]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-serif text-white font-medium mb-2 group-hover:text-[var(--gold-light)] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-[var(--gold-primary)] uppercase tracking-wider font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Metrics Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-2xl bg-black/60 border border-[var(--border-color)] grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif text-[var(--gold-primary)] font-bold block">
                {metric.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 block font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
