import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import Link from 'next/link';
import { Camera, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'About Us | Lenzo Captures Photography & Cinema Studio',
  description: 'Learn about Lenzo Captures, a team of passionate filmmakers and visual storytellers based in Tirunelveli, Tamil Nadu, turning life’s precious moments into cinematic magic.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20 relative bg-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="About Lenzo Captures"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              ABOUT LENZO CAPTURES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white font-light">
            Passionate Storytellers United To Create <br />
            <span className="text-gold-gradient font-normal italic">Cinematic Magic Together</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Making every second of your story visually unforgettable. Our team of passionate filmmakers and visual storytellers work together to capture emotions, craft compelling narratives, and transform moments into breathtaking cinematic masterpieces.
          </p>
        </div>
      </section>

      <AboutSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
