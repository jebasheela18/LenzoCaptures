import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Lenzo Captures',
  description: 'Terms and Conditions for Lenzo Captures Photography and Cinematography Studio.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <section className="pt-36 pb-24 max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-semibold uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            Terms of Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-light">
            Terms & Conditions
          </h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            Lenzo Captures • Tirunelveli, Tamil Nadu
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] space-y-8 text-zinc-300 text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">1. Booking & Retainers</h2>
            <p>
              Dates for weddings, outdoor shoots, and commercial projects are reserved upon receipt of an agreed booking advance and consultation agreement. This guarantees dedicated crew, gear, and travel preparation exclusively for your date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">2. Deliverables & Timelines</h2>
            <p>
              We guarantee on-time delivery. Sneak peek highlights and teasers are shared within 7 to 14 days, followed by full 4K edits, processed high-res photo galleries, and luxury printed flush-mount albums (40 sheets each) as per the selected package specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">3. Equipment & Quality Assurance</h2>
            <p>
              All shoots are conducted using state-of-the-art Sony cinema and full-frame bodies, prime G-Master lenses, licensed drone operators, and professional audio gear to ensure cinematic excellence in every frame.
            </p>
          </section>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
