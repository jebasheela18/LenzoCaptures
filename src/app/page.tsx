import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import FilmsSection from '@/components/FilmsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import BlogSection from '@/components/BlogSection';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export const metadata = {
  title: 'Lenzo Captures | Luxury Wedding Photography & Cinematic Films',
  description: 'Lenzo Captures is an elite luxury photography studio specializing in royal destination weddings, candid portraits, pre-wedding films, drone coverage, and fine-art albums worldwide.',
  keywords: 'Luxury Wedding Photography, Cinematic Wedding Films, Destination Wedding Photographer, Udaipur Royal Weddings, Pre-Wedding Shoots, Fine Art Photography',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--gold-primary)] selection:text-black">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FilmsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogSection />
      <EnquirySection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
