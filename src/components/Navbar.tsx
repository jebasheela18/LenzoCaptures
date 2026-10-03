'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useBooking } from '@/context/BookingContext';
import { 
  Sun, Moon, Menu, X, Camera, Phone, MapPin 
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from '@/components/SocialIcons';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openBooking } = useBooking();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'About us', href: '/about-us', hash: '#about' },
    { name: 'Services', href: '/services', hash: '#services' },
    { name: 'Gallery', href: '/gallery', hash: '#gallery' },
    { name: 'Contact us', href: '/contact-us', hash: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; hash: string }) => {
    if (pathname === '/') {
      e.preventDefault();
      const targetElement = document.querySelector(item.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className={`hidden md:block transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'bg-black/85 backdrop-blur-md py-2 px-6'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-zinc-300">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919363745628" 
              className="flex items-center gap-2 hover:text-[var(--gold-primary)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
              <span>+91 9363745628</span>
              <span className="text-zinc-600">/</span>
              <span>+91 9363745629</span>
            </a>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
              <span>KTC Nagar, Tirunelveli, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400 font-light text-[11px] tracking-wide">Connect With Us:</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/Stephentirunelveli/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--gold-primary)] text-zinc-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.instagram.com/ss_photography_film_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--gold-primary)] text-zinc-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.youtube.com/@ssstudios.in." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--gold-primary)] text-zinc-400 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://wa.me/919363745628" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--gold-primary)] text-zinc-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-400 ${
          isScrolled
            ? 'glass-panel py-3.5 shadow-2xl backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[var(--gold-primary)]/80 flex items-center justify-center bg-black/50 group-hover:scale-105 group-hover:border-[var(--gold-primary)] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Camera className="w-5 h-5 text-[var(--gold-primary)] transition-transform group-hover:rotate-12 duration-300" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] font-bold text-white block uppercase leading-none">
                LENZO
              </span>
              <span className="text-[10px] tracking-[0.38em] text-[var(--gold-primary)] block font-medium uppercase mt-0.5">
                CAPTURES
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={pathname === '/' ? link.hash : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-[var(--gold-primary)] transition-colors duration-200 font-semibold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--gold-primary)] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-zinc-700/60 hover:border-[var(--gold-primary)] text-zinc-300 hover:text-[var(--gold-primary)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:+919363745628"
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:border-[var(--gold-primary)] text-zinc-300 hover:text-white text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
              <span>Call Us</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={() => openBooking()}
              className="relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full text-zinc-300 hover:text-white"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => openBooking()}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-black bg-[var(--gold-primary)]"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[var(--gold-primary)] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-[var(--gold-primary)]/20 px-6 py-6 bg-black/95 backdrop-blur-2xl space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={pathname === '/' ? link.hash : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm uppercase tracking-widest text-zinc-200 hover:text-[var(--gold-primary)] font-medium py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full text-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-[var(--gold-primary)] shadow-lg"
            >
              Book an Appointment
            </button>

            <a
              href="tel:+919363745628"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 text-xs uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
              Call +91 9363745628
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-6 text-zinc-400">
            <a href="https://www.facebook.com/Stephentirunelveli/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-primary)]" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/ss_photography_film_/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-primary)]" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@ssstudios.in." target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-primary)]" aria-label="YouTube">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919363745628" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-primary)]" aria-label="WhatsApp">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
