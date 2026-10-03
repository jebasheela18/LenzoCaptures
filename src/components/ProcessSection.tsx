'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Palette, Camera, Sliders, Gift } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    desc: 'We sit down over coffee or Zoom to understand your love story, wedding schedule, and artistic preferences.',
    icon: Calendar,
  },
  {
    step: '02',
    title: 'Concept & Wardrobe Guidance',
    desc: 'Our creative team designs custom moodboards, assists with outfit choices, and scouts lighting for your venues.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Unobtrusive Event Capture',
    desc: 'On your wedding day, we blend into the background, guiding when needed while capturing natural candid moments.',
    icon: Camera,
  },
  {
    step: '04',
    title: 'Master Editing & Film Scoring',
    desc: 'Every image is individually color-graded, and your film is paired with a custom-licensed orchestral score.',
    icon: Sliders,
  },
  {
    step: '05',
    title: 'Heirloom Delivery & Album Reveal',
    desc: 'Receive your 48-hour Sneak Peek, full digital gallery, and handcrafted Italian leather album delivered to your door.',
    icon: Gift,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-semibold">
              OUR SEAMLESS PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            From First Hello to <br />
            <span className="text-gold-gradient font-normal italic">Forever Memories</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            A refined 5-step creative experience designed for peace of mind, effortless direction, and perfection at every turn.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-[var(--gold-primary)]/20 md:border-l-0 ml-4 md:ml-0 md:grid md:grid-cols-5 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0 mb-12 md:mb-0 space-y-4 group"
              >
                {/* Number Badge & Icon */}
                <div className="md:mx-auto w-14 h-14 rounded-full border border-[var(--gold-primary)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--gold-primary)] font-serif font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[var(--gold-primary)]" />
                      <h3 className="text-base font-serif text-white font-medium group-hover:text-[var(--gold-light)] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
