import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy | Lenzo Captures',
  description: 'Cookie Policy for Lenzo Captures Photography Studio website.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <section className="pt-36 pb-24 max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-semibold uppercase tracking-widest">
            <Cookie className="w-4 h-4" />
            Cookie Transparency
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-light">
            Cookie Policy
          </h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            Lenzo Captures • Tirunelveli, Tamil Nadu
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] space-y-8 text-zinc-300 text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">1. How We Use Cookies</h2>
            <p>
              We use essential cookies to maintain your theme preference (Dark Mode / Light Mode) and remember your browsing state across pages. No invasive tracking or third-party advertising cookies are deployed on our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">2. Managing Preferences</h2>
            <p>
              You can control or clear cookies at any time through your browser settings. Opting out will not degrade your ability to explore our portfolio or book appointments with Lenzo Captures.
            </p>
          </section>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
