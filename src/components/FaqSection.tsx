'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'What types of photography services do you offer?',
    answer:
      'We specialize in travel photography, portraits, event photography, wedding photography, commercial shoots, maternity photography, family photography, and fashion photography.',
  },
  {
    question: 'How can I book a photography session?',
    answer:
      'You can book a session by contacting us via phone (+91 9363745628), email (lenzocaptures@gmail.com), or through our website’s interactive booking form and WhatsApp chat.',
  },
  {
    question: 'What are your pricing and packages?',
    answer:
      'Our pricing varies based on the type of photography session, equipment requirements, and location. Please reach out to us for detailed packages, transparent inclusions, and customized quotes tailored to your exact event.',
  },
  {
    question: 'Can I request customized edits or retouching?',
    answer:
      'Yes! We provide professional editorial retouching, fine color grading, and skin-tone perfection based on your unique aesthetic preferences.',
  },
  {
    question: 'Do you offer destination wedding photography?',
    answer:
      'Yes! We love capturing destination weddings and can travel across Tamil Nadu, India, and global locations to document your special day with full mobile production gear.',
  },
  {
    question: 'Do you offer printed photo albums?',
    answer:
      'Yes, we provide heirloom-grade high-definition printed flush-mount albums (40 sheets each), premium acrylic covers, and large wooden wall frames (12x18, 20x30) upon request.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with SS Studio Typography */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Most Popular <span className="text-gold-gradient font-normal italic">Questions</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Get answers to common questions about our photography services, booking process, pricing, and more.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-[var(--border-color)] transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white hover:text-[var(--gold-light)] transition-colors cursor-pointer"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--gold-primary)] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/60 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Question Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-serif text-white font-semibold">Have more questions about your dates or package?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Chat directly with our studio lead on WhatsApp for instant assistance.</p>
          </div>
          <a
            href="https://wa.me/919363745628?text=Hi%20Lenzo%20Captures,%20I%20have%20a%20question%20regarding%20photography%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
