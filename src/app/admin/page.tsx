'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { StorageManager } from '@/lib/storage';
import { Enquiry, PortfolioItem, TestimonialItem, BlogPost, CategoryType } from '@/lib/types';
import {
  Camera,
  Users,
  Inbox,
  Image as ImageIcon,
  Film,
  Star,
  BookOpen,
  Sliders,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Search,
  Filter,
  Eye,
  X,
  Upload
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'portfolio' | 'services' | 'testimonials' | 'blogs' | 'media'>('enquiries');

  // State
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  // Search / Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // New Portfolio Item Form state
  const [showAddPortfolio, setShowAddPortfolio] = useState(false);
  const [newPortTitle, setNewPortTitle] = useState('');
  const [newPortCategory, setNewPortCategory] = useState<CategoryType>('Weddings');
  const [newPortType, setNewPortType] = useState<'image' | 'video'>('image');
  const [newPortUrl, setNewPortUrl] = useState('');
  const [newPortLocation, setNewPortLocation] = useState('');
  const [newPortCouple, setNewPortCouple] = useState('');

  // Load data on mount
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setEnquiries(StorageManager.getEnquiries());
    setPortfolio(StorageManager.getPortfolio());
    setTestimonials(StorageManager.getTestimonials());
    setBlogs(StorageManager.getBlogs());
  };

  // Enquiry Actions
  const handleUpdateStatus = (id: string, status: Enquiry['status']) => {
    const updated = StorageManager.updateEnquiryStatus(id, status);
    setEnquiries(updated);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status });
    }
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      const updated = StorageManager.deleteEnquiry(id);
      setEnquiries(updated);
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    }
  };

  // Portfolio Actions
  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPortTitle || !newPortUrl) return alert('Please enter Title and Image/Video URL');

    StorageManager.addPortfolioItem({
      title: newPortTitle,
      category: newPortCategory,
      mediaType: newPortType,
      url: newPortUrl,
      location: newPortLocation,
      coupleNames: newPortCouple,
      featured: true,
      description: 'Added via Admin Dashboard',
    });

    setNewPortTitle('');
    setNewPortUrl('');
    setNewPortLocation('');
    setNewPortCouple('');
    setShowAddPortfolio(false);
    refreshData();
  };

  const handleDeletePortfolio = (id: string) => {
    if (confirm('Delete this portfolio item?')) {
      const updated = StorageManager.deletePortfolioItem(id);
      setPortfolio(updated);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-zinc-100 font-sans">
      {/* Admin Top Navigation Bar */}
      <header className="border-b border-zinc-800 bg-[#0d0d0d] px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-[var(--gold-primary)] transition-colors"
            title="Return to Public Website"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-[var(--gold-primary)] flex items-center justify-center bg-black">
              <Camera className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <div>
              <h1 className="text-base font-serif tracking-widest text-white uppercase font-semibold">
                LENZO CAPTURES
              </h1>
              <span className="text-[10px] text-[var(--gold-primary)] uppercase tracking-widest block font-mono">
                STUDIO ADMIN PORTAL
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] border border-[var(--gold-primary)]/30">
            System Live &bull; Storage Ready
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metric Cards Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Total Enquiries</span>
              <Inbox className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <p className="text-3xl font-serif text-white font-bold">{enquiries.length}</p>
            <span className="text-[11px] text-emerald-400">
              {enquiries.filter((e) => e.status === 'New').length} New Leads Pending
            </span>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Portfolio Items</span>
              <ImageIcon className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <p className="text-3xl font-serif text-white font-bold">{portfolio.length}</p>
            <span className="text-[11px] text-zinc-400">Across 5 Categories</span>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Client Reviews</span>
              <Star className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <p className="text-3xl font-serif text-white font-bold">{testimonials.length}</p>
            <span className="text-[11px] text-[var(--gold-primary)]">5.0 Star Average</span>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs uppercase tracking-widest">Published Blogs</span>
              <BookOpen className="w-5 h-5 text-[var(--gold-primary)]" />
            </div>
            <p className="text-3xl font-serif text-white font-bold">{blogs.length}</p>
            <span className="text-[11px] text-zinc-400">Journal Articles</span>
          </div>
        </div>

        {/* Dashboard Tab Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-zinc-800 pb-4 mb-8">
          {[
            { id: 'enquiries', label: `Enquiries (${enquiries.length})`, icon: Inbox },
            { id: 'portfolio', label: `Portfolio (${portfolio.length})`, icon: ImageIcon },
            { id: 'services', label: 'Services (9)', icon: Sliders },
            { id: 'testimonials', label: `Testimonials (${testimonials.length})`, icon: Star },
            { id: 'blogs', label: `Blogs (${blogs.length})`, icon: BookOpen },
            { id: 'media', label: 'Media Library', icon: Upload },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[var(--gold-primary)] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-[#121212]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Enquiries Management */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-xl font-serif text-white font-medium">Customer Consultation Enquiries</h2>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search by client name, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#121212] border border-zinc-800 text-xs text-white outline-none focus:border-[var(--gold-primary)]"
                />
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-zinc-800">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#18181b] text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
                    <tr>
                      <th className="p-4">Client</th>
                      <th className="p-4">Event Date</th>
                      <th className="p-4">Venue</th>
                      <th className="p-4">Event Type</th>
                      <th className="p-4">Budget</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {enquiries
                      .filter(
                        (e) =>
                          e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.eventType.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((enq) => (
                        <tr key={enq.id} className="hover:bg-zinc-900/50 transition-colors">
                          <td className="p-4">
                            <div className="font-serif font-medium text-white text-sm">{enq.name}</div>
                            <div className="text-zinc-400 text-[11px]">{enq.email} &bull; {enq.phone}</div>
                          </td>
                          <td className="p-4 text-zinc-300 font-mono">{enq.weddingDate}</td>
                          <td className="p-4 text-zinc-300">{enq.venueLocation}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-[var(--gold-light)] border border-zinc-700">
                              {enq.eventType}
                            </span>
                          </td>
                          <td className="p-4 font-semibold text-zinc-200">{enq.budget}</td>
                          <td className="p-4">
                            <select
                              value={enq.status}
                              onChange={(e) => handleUpdateStatus(enq.id, e.target.value as any)}
                              className={`px-3 py-1 rounded-full text-[11px] font-semibold outline-none border cursor-pointer ${
                                enq.status === 'New'
                                  ? 'bg-amber-900/40 text-amber-300 border-amber-500/50'
                                  : enq.status === 'Booked'
                                  ? 'bg-emerald-900/40 text-emerald-300 border-emerald-500/50'
                                  : enq.status === 'Contacted'
                                  ? 'bg-blue-900/40 text-blue-300 border-blue-500/50'
                                  : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Booked">Booked</option>
                              <option value="Archived">Archived</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedEnquiry(enq)}
                                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
                                title="View Full Message"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 hover:text-red-200"
                                title="Delete Enquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Portfolio Manager */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif text-white font-medium">Manage Studio Portfolio Gallery</h2>
              <button
                onClick={() => setShowAddPortfolio(true)}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-black bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Portfolio Asset</span>
              </button>
            </div>

            {/* Add Portfolio Form Modal */}
            {showAddPortfolio && (
              <div className="p-6 rounded-2xl glass-panel border border-[var(--gold-primary)]/40 mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-serif text-[var(--gold-primary)]">Add New Portfolio Item</h3>
                  <button onClick={() => setShowAddPortfolio(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleAddPortfolio} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1">Title</label>
                    <input
                      type="text"
                      placeholder="Title of shoot"
                      value={newPortTitle}
                      onChange={(e) => setNewPortTitle(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1">Category</label>
                    <select
                      value={newPortCategory}
                      onChange={(e) => setNewPortCategory(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white"
                    >
                      <option value="Weddings">Weddings</option>
                      <option value="Pre-Weddings">Pre-Weddings</option>
                      <option value="Portraits">Portraits</option>
                      <option value="Events">Events</option>
                      <option value="Films">Films</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1">Media URL (Unsplash or Image Link)</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={newPortUrl}
                      onChange={(e) => setNewPortUrl(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="City or Venue"
                      value={newPortLocation}
                      onChange={(e) => setNewPortLocation(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddPortfolio(false)}
                      className="px-4 py-2 rounded-full text-xs text-zinc-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full text-xs font-semibold text-black bg-[var(--gold-primary)]"
                    >
                      Save Portfolio Item
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Grid display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((item) => (
                <div key={item.id} className="glass-card rounded-xl overflow-hidden border border-zinc-800 group relative">
                  <div className="h-44 overflow-hidden relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                    <button
                      onClick={() => handleDeletePortfolio(item.id)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-black/70 text-red-400 hover:text-red-200 border border-red-500/30"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-serif text-white font-medium">{item.title}</h4>
                    {item.location && <p className="text-[11px] text-zinc-400">{item.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Services */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white font-medium">Studio Service Offerings (9 Active)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {StorageManager.getServices().map((serv) => (
                <div key={serv.id} className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-serif text-white">{serv.title}</h3>
                    <span className="text-xs text-[var(--gold-primary)] font-bold">{serv.priceStarting}</span>
                  </div>
                  <p className="text-xs text-zinc-400">{serv.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white font-medium">Client Testimonials & Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test) => (
                <div key={test.id} className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={test.imageUrl} alt={test.clientName} className="w-10 h-10 rounded-full object-cover border border-[var(--gold-primary)]" />
                    <div>
                      <h4 className="text-sm font-serif text-white">{test.clientName}</h4>
                      <p className="text-[10px] text-[var(--gold-primary)]">{test.eventType}</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 italic">“{test.quote}”</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Blogs */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white font-medium">Journal & Blog Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <div key={b.id} className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-2">
                  <span className="text-[10px] text-zinc-400 font-mono">{b.date} &bull; {b.author}</span>
                  <h4 className="text-base font-serif text-white">{b.title}</h4>
                  <p className="text-xs text-zinc-400">{b.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Media Library */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white font-medium">Media Asset Storage & Hosting Links</h2>
            <div className="glass-card p-8 rounded-2xl border border-zinc-800 text-center space-y-4">
              <Upload className="w-12 h-12 text-[var(--gold-primary)] mx-auto" />
              <h3 className="text-base font-serif text-white">Media Manager Ready</h3>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Paste high-resolution images from Unsplash or Supabase Storage buckets directly into portfolio & service items above.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Enquiry Detail Drawer Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel max-w-lg w-full rounded-2xl border border-[var(--gold-primary)]/40 p-6 space-y-6 relative">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--gold-primary)] font-mono">
                ENQUIRY DETAILS #{selectedEnquiry.id}
              </span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">{selectedEnquiry.name}</h3>
            </div>

            <div className="space-y-2 text-xs border-y border-zinc-800 py-4">
              <div className="flex justify-between"><span className="text-zinc-400">Email:</span> <span className="text-white font-mono">{selectedEnquiry.email}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Phone:</span> <span className="text-white font-mono">{selectedEnquiry.phone}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Wedding Date:</span> <span className="text-white font-mono">{selectedEnquiry.weddingDate}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Venue Location:</span> <span className="text-white">{selectedEnquiry.venueLocation}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Event Service:</span> <span className="text-[var(--gold-primary)] font-semibold">{selectedEnquiry.eventType}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Estimated Budget:</span> <span className="text-emerald-400 font-bold">{selectedEnquiry.budget}</span></div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Client Message:</h4>
              <p className="p-4 rounded-xl bg-black border border-zinc-800 text-xs text-zinc-200 leading-relaxed font-light">
                {selectedEnquiry.message}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:${selectedEnquiry.email}?subject=Lenzo%20Captures%20Consultation%20Reply`}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[var(--gold-primary)]"
              >
                Reply via Email
              </a>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
