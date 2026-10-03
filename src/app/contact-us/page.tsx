import React from 'react';
import Navbar from '@/components/Navbar';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Lenzo Captures Studio Tirunelveli',
  description: 'Get in touch with Lenzo Captures. Studio located at Mangammal Salai, KTC Nagar, Tirunelveli. Phone: +91 9363745628 / +91 9363745629. Book an appointment or send an inquiry.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-36 pb-20 relative bg-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Lenzo Captures"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/40 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white font-light">
            Let’s Create Something <br />
            <span className="text-gold-gradient font-normal italic">Amazing Together</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Planning an event or a special project? Let’s bring your vision to life with stunning photography and videography. Reach out directly or visit our studio in Tirunelveli.
          </p>
        </div>
      </section>

      <EnquirySection />

      {/* Studio Location Map Representation */}
      <section className="py-16 bg-[var(--bg-secondary)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-white font-medium">Find Our Studio in Tirunelveli</h3>
            <p className="text-sm text-zinc-400 mt-1">Conveniently located in KTC Nagar near Mangammal Salai</p>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[var(--gold-primary)]/30 relative shadow-2xl bg-zinc-950 flex items-center justify-center">
            {/* Map visual card */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
                alt="Map Background"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <div className="relative z-10 max-w-md p-6 rounded-2xl bg-black/85 backdrop-blur-md border border-[var(--gold-primary)]/50 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[var(--gold-primary)]/20 border border-[var(--gold-primary)] flex items-center justify-center text-[var(--gold-primary)] mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif text-white font-semibold">Lenzo Captures Studio</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Mangammal Salai, Mugambigai Nagar, KTC Nagar,<br />
                Tirunelveli, Tamil Nadu 627007, India
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href="https://maps.google.com/?q=KTC+Nagar+Tirunelveli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] transition-colors"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+919363745628"
                  className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-zinc-700 hover:border-zinc-500 transition-colors"
                >
                  Call Reception
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
