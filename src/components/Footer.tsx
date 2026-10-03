'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from '@/components/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[var(--gold-primary)]/20 pt-16 pb-12 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[var(--gold-primary)] flex items-center justify-center bg-black/50 group-hover:scale-105 transition-transform">
                <Camera className="w-5 h-5 text-[var(--gold-primary)]" />
              </div>
              <div>
                <span className="text-xl font-serif tracking-[0.2em] font-bold text-white block uppercase">
                  LENZO
                </span>
                <span className="text-[10px] tracking-[0.38em] text-[var(--gold-primary)] block font-medium uppercase">
                  CAPTURES
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              Lenzo Captures specializes in cinematic storytelling for weddings, corporate events, and short films, bringing your vision to life beautifully.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/Stephentirunelveli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-zinc-800 hover:border-[var(--gold-primary)] flex items-center justify-center text-zinc-400 hover:text-[var(--gold-primary)] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/ss_photography_film_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-zinc-800 hover:border-[var(--gold-primary)] flex items-center justify-center text-zinc-400 hover:text-[var(--gold-primary)] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@ssstudios.in."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-zinc-800 hover:border-[var(--gold-primary)] flex items-center justify-center text-zinc-400 hover:text-[var(--gold-primary)] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919363745628"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-zinc-800 hover:border-[var(--gold-primary)] flex items-center justify-center text-zinc-400 hover:text-[var(--gold-primary)] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              USEFUL LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
              CONTACT US
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--gold-primary)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Lenzo Captures, Mangammal Salai, Mugambigai Nagar, KTC Nagar, Tirunelveli, 627007 Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--gold-primary)] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:+919363745628" className="hover:text-white transition-colors font-medium">
                    +91 9363745628
                  </a>
                  <span>/</span>
                  <a href="tel:+919363745629" className="hover:text-white transition-colors font-medium">
                    +91 9363745629
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--gold-primary)] shrink-0" />
                <a href="mailto:lenzocaptures@gmail.com" className="hover:text-white transition-colors">
                  lenzocaptures@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            Copyright © 2025 Lenzo Captures. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[var(--gold-primary)] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
