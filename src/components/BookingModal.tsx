'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, User, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export default function BookingModal({ isOpen, onClose, initialPackage = '' }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    servicePackage: initialPackage || 'Package 2 - Silver Candid & Traditional',
    eventDate: '',
    venue: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, servicePackage: initialPackage }));
    }
  }, [initialPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppBooking = () => {
    const text = `*New Booking Request - Lenzo Captures*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Package / Service:* ${formData.servicePackage}\n` +
      `*Event Date:* ${formData.eventDate || 'Not specified'}\n` +
      `*Location/Venue:* ${formData.venue || 'Not specified'}\n` +
      `*Notes:* ${formData.notes || 'None'}`;
    const url = `https://wa.me/919363745628?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-2xl bg-[#0f1115] border border-[var(--border-color)] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-700/60 text-zinc-400 hover:text-white hover:border-[var(--gold-primary)] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[var(--gold-primary)]/20 border border-[var(--gold-primary)] flex items-center justify-center text-[var(--gold-primary)] mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">Booking Request Received!</h3>
            <p className="text-zinc-400 max-w-md mx-auto mb-8 text-sm sm:text-base">
              Thank you, <span className="text-[var(--gold-primary)] font-semibold">{formData.name || 'there'}</span>. 
              Our team at Lenzo Captures will review your event details and contact you shortly to confirm your booking and schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with us on WhatsApp
              </button>
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-primary)]/10 border border-[var(--gold-primary)]/30 text-[var(--gold-primary)] text-xs uppercase tracking-widest font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Lenzo Captures • Appointment
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold tracking-tight">
                Book Your Photo & Video Session
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                From weddings to corporate events, we turn your moments into cinematic magic. Fill in your details or connect instantly via WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Shankar Ram"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9363745628"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Desired Package / Service
                  </label>
                  <select
                    name="servicePackage"
                    value={formData.servicePackage}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                  >
                    <option value="Package 1 - Classic Traditional Photo & Video">Package 1 - Classic Traditional Photo & Video</option>
                    <option value="Package 2 - Silver Candid & Traditional + Outdoor">Package 2 - Silver Candid & Traditional + Outdoor</option>
                    <option value="Package 3 - Gold Candid + Pre/Post Wedding Outdoor">Package 3 - Gold Candid + Pre/Post Wedding Outdoor</option>
                    <option value="Package 4 - Platinum 2 Albums & Multi-Frames">Package 4 - Platinum 2 Albums & Multi-Frames</option>
                    <option value="Package 5 - Royal Grand 4K Drone & 3 Albums">Package 5 - Royal Grand 4K Drone & 3 Albums</option>
                    <option value="Pre or Post Wedding Outdoor Shoot">Pre or Post Wedding Outdoor Shoot</option>
                    <option value="Corporate Event / Commercial Film">Corporate Event / Commercial Film</option>
                    <option value="Maternity, Baby & Family Photography">Maternity, Baby & Family Photography</option>
                    <option value="Custom Bespoke Package">Custom Bespoke Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    City / Venue Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. Tirunelveli / Madurai / Chennai"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Additional Notes / Ideas
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share details like ceremony dates, specific themes or special requests..."
                  className="w-full px-4 py-2 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Confirming...' : 'Submit Booking Request'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer border border-emerald-500/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-zinc-500">
                  Prefer direct phone? Call our studio director at{' '}
                  <a href="tel:+919363745628" className="text-[var(--gold-primary)] hover:underline font-medium">
                    +91 9363745628
                  </a>
                  {' / '}
                  <a href="tel:+919363745629" className="text-[var(--gold-primary)] hover:underline font-medium">
                    +91 9363745629
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
