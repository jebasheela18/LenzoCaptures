'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { INITIAL_BLOGS } from '@/lib/mockData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--gold-primary)]/30 bg-[var(--gold-primary)]/10">
            <BookOpen className="w-3.5 h-3.5 text-[var(--gold-primary)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-primary)] font-semibold">
              JOURNAL & INSIGHTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            Stories, Lighting Guides & <br />
            <span className="text-gold-gradient font-normal italic">Destination Wedding Inspiration</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INITIAL_BLOGS.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[var(--gold-primary)] border border-[var(--gold-primary)]/30 uppercase tracking-widest font-semibold">
                    {blog.readTime}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-zinc-400 font-mono block">
                    {blog.date} &bull; By {blog.author}
                  </span>
                  <h3 className="text-xl font-serif text-white font-medium group-hover:text-[var(--gold-light)] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold-primary)] font-semibold hover:text-[var(--gold-light)] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
