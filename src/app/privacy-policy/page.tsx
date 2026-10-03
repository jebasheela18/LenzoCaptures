import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Lenzo Captures',
  description: 'Privacy Policy for Lenzo Captures Photography and Cinematography Studio.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <section className="pt-36 pb-24 max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Legal Documentation
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-light">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            Last Updated: January 2025 • Lenzo Captures
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[var(--border-color)] space-y-8 text-zinc-300 text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">1. Introduction</h2>
            <p>
              At <strong>Lenzo Captures</strong> (formerly SS Studio), we respect your privacy and are committed to protecting any personal information you share with us. This policy describes how we collect, use, and safeguard personal information obtained through our website, appointment forms, and client consultations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">2. Information We Collect</h2>
            <p>
              When you book a session or submit an inquiry, we collect information including your name, contact phone number, email address, event dates, celebration locations, and aesthetic preferences. This information is solely used to plan and execute your photography and cinematic services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">3. Media Rights & Client Privacy</h2>
            <p>
              We treat your wedding photos, candid films, and family portraits with the utmost respect. We only showcase imagery in our public portfolio and social channels with client permission, celebrating the sacred moments we have co-created.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-medium">4. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact our studio director at:
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs space-y-1">
              <p><strong>Lenzo Captures</strong></p>
              <p>Mangammal Salai, Mugambigai Nagar, KTC Nagar, Tirunelveli, 627007 Tamil Nadu, India</p>
              <p>Phone: +91 9363745628 / +91 9363745629</p>
              <p>Email: lenzocaptures@gmail.com</p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
