import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Services & Packages | Lenzo Captures Photography',
  description: 'Explore photography and cinematography services and crafted packages offered by Lenzo Captures, from traditional and candid weddings to drone coverage and fine art albums.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20 relative bg-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop"
            alt="Services Lenzo Captures"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              WHAT WE OFFER
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white font-light">
            Share Your Special Moments <br />
            <span className="text-gold-gradient font-normal italic">With People Who Care</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Create the stories you want people to remember. Whether weddings or corporate shoots, our packages are built to ensure a seamless and professional experience every time.
          </p>
        </div>
      </section>

      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
