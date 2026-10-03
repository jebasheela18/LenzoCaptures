'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Wedding Photography & Cinema',
    eventDate: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = () => {
    const text = `*New Contact Enquiry - Lenzo Captures*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Event Date:* ${formData.eventDate || 'Not specified'}\n` +
      `*Location:* ${formData.location || 'Not specified'}\n` +
      `*Message:* ${formData.message || 'None'}`;
    const url = `https://wa.me/919363745628?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF2AC', '#AA7C11'],
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-bold">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-light leading-tight text-white">
                We're Here to <br />
                <span className="text-gold-gradient font-normal italic">Capture Your Moments</span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Planning an event or a special project? Let’s bring your vision to life with stunning photography and videography. Fill out the form below, and we’ll connect with you soon!
              </p>
            </div>

            {/* Direct Studio Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--gold-primary)] font-bold mb-1">
                    Our Location
                  </h3>
                  <p className="text-sm text-zinc-200 leading-snug">
                    Lenzo Captures, Mangammal Salai, Mugambigai Nagar, KTC Nagar, Tirunelveli, 627007 Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--gold-primary)] font-bold mb-1">
                    Call Us Directly
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-200">
                    <a href="tel:+919363745628" className="hover:text-[var(--gold-primary)] transition-colors font-medium">
                      +91 9363745628
                    </a>
                    <span className="text-zinc-600">/</span>
                    <a href="tel:+919363745629" className="hover:text-[var(--gold-primary)] transition-colors font-medium">
                      +91 9363745629
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--gold-primary)] font-bold mb-1">
                    Email Inquiries
                  </h3>
                  <a href="mailto:lenzocaptures@gmail.com" className="text-sm text-zinc-200 hover:text-[var(--gold-primary)] transition-colors">
                    lenzocaptures@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/30 flex items-center justify-center text-[var(--gold-primary)] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--gold-primary)] font-bold mb-1">
                    Studio Timings
                  </h3>
                  <p className="text-sm text-zinc-200">
                    Monday – Sunday: 9:00 AM – 9:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[var(--gold-primary)]/30 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold-primary)]/20 border border-[var(--gold-primary)] flex items-center justify-center text-[var(--gold-primary)] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">Message Dispatched!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-[var(--gold-primary)] font-semibold">{formData.name}</span>. 
                    Our studio team at Lenzo Captures will connect with you promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-serif text-white font-medium mb-2">
                    Send Us an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Joshua Joe"
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9363745628"
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      >
                        <option value="Wedding Photography & Cinema">Wedding Photography & Cinema</option>
                        <option value="Pre or Post Wedding Outdoor Shoot">Pre or Post Wedding Outdoor Shoot</option>
                        <option value="Candid Photography & Highlights">Candid Photography & Highlights</option>
                        <option value="Corporate Events & Commercial">Corporate Events & Commercial</option>
                        <option value="Maternity, Baby & Family Portrait">Maternity, Baby & Family Portrait</option>
                        <option value="Drone 4K Aerial Cinematography">Drone 4K Aerial Cinematography</option>
                        <option value="Printed Albums & Custom Wall Frames">Printed Albums & Custom Wall Frames</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                        Event City / Venue
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Tirunelveli / Madurai / Chennai"
                        className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                      Tell Us About Your Vision & Events
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details like multiple day functions, preferred styles, questions..."
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--gold-primary)] focus:ring-1 focus:ring-[var(--gold-primary)] resize-none"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-3.5 px-6 rounded-xl font-medium text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer border border-emerald-500/40 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Inquire via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
