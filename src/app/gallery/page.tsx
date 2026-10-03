import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import FilmsSection from '@/components/FilmsSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Gallery & Portfolio | Lenzo Captures Photography',
  description: 'Our goal is not just to take pictures, but to make memories that will last a lifetime. Explore our portfolio of wedding films, candid celebrations, and outdoor shoots.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      {/* Page Header matching SS Studio Gallery page */}
      <section className="pt-36 pb-20 relative bg-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop"
            alt="Gallery Lenzo Captures"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              PORTFOLIO ARCHIVE
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white font-light">
            Explore Stunning Moments <br />
            <span className="text-gold-gradient font-normal italic">Captured Through Our Lens</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Our goal is not just to take pictures, but to make memories that will last a lifetime. Discover visual stories that reflect emotion, celebration, and creativity beautifully documented through our cinematic style.
          </p>
        </div>
      </section>

      <PortfolioSection />
      <FilmsSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
