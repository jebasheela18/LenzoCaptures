import { Enquiry, PortfolioItem, ServiceItem, TestimonialItem, BlogPost } from './types';
import { INITIAL_PORTFOLIO, INITIAL_SERVICES, INITIAL_TESTIMONIALS, INITIAL_BLOGS } from './mockData';

const STORAGE_KEYS = {
  ENQUIRIES: 'lenzo_enquiries_v1',
  PORTFOLIO: 'lenzo_portfolio_v1',
  SERVICES: 'lenzo_services_v1',
  TESTIMONIALS: 'lenzo_testimonials_v1',
  BLOGS: 'lenzo_blogs_v1',
};

// Helper for localStorage access safely in SSR
function getLocalItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
}

function setLocalItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
}

// Data Access API
export const StorageManager = {
  // --- ENQUIRIES ---
  getEnquiries(): Enquiry[] {
    return getLocalItem<Enquiry[]>(STORAGE_KEYS.ENQUIRIES, [
      {
        id: 'enq-1',
        name: 'Siddharth & Priya',
        phone: '+91 98765 43210',
        email: 'siddharth@example.com',
        weddingDate: '2026-11-20',
        venueLocation: 'Taj Lake Palace, Udaipur',
        eventType: 'Wedding Photography & Films',
        budget: '$5,000 - $10,000',
        message: 'Looking for full 2-day wedding coverage and drone film.',
        status: 'New',
        createdAt: new Date().toISOString(),
      }
    ]);
  },

  addEnquiry(data: Omit<Enquiry, 'id' | 'status' | 'createdAt'>): Enquiry {
    const enquiries = this.getEnquiries();
    const newEnquiry: Enquiry = {
      ...data,
      id: 'enq-' + Date.now(),
      status: 'New',
      createdAt: new Date().toISOString(),
    };
    enquiries.unshift(newEnquiry);
    setLocalItem(STORAGE_KEYS.ENQUIRIES, enquiries);
    return newEnquiry;
  },

  updateEnquiryStatus(id: string, status: Enquiry['status']): Enquiry[] {
    const enquiries = this.getEnquiries();
    const updated = enquiries.map((item) => (item.id === id ? { ...item, status } : item));
    setLocalItem(STORAGE_KEYS.ENQUIRIES, updated);
    return updated;
  },

  deleteEnquiry(id: string): Enquiry[] {
    const enquiries = this.getEnquiries();
    const updated = enquiries.filter((item) => item.id !== id);
    setLocalItem(STORAGE_KEYS.ENQUIRIES, updated);
    return updated;
  },

  // --- PORTFOLIO ---
  getPortfolio(): PortfolioItem[] {
    return getLocalItem<PortfolioItem[]>(STORAGE_KEYS.PORTFOLIO, INITIAL_PORTFOLIO);
  },

  addPortfolioItem(item: Omit<PortfolioItem, 'id' | 'createdAt'>): PortfolioItem {
    const portfolio = this.getPortfolio();
    const newItem: PortfolioItem = {
      ...item,
      id: 'port-' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    portfolio.unshift(newItem);
    setLocalItem(STORAGE_KEYS.PORTFOLIO, portfolio);
    return newItem;
  },

  deletePortfolioItem(id: string): PortfolioItem[] {
    const portfolio = this.getPortfolio();
    const updated = portfolio.filter((item) => item.id !== id);
    setLocalItem(STORAGE_KEYS.PORTFOLIO, updated);
    return updated;
  },

  // --- SERVICES ---
  getServices(): ServiceItem[] {
    return getLocalItem<ServiceItem[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  },

  // --- TESTIMONIALS ---
  getTestimonials(): TestimonialItem[] {
    return getLocalItem<TestimonialItem[]>(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
  },

  addTestimonial(item: Omit<TestimonialItem, 'id'>): TestimonialItem {
    const testimonials = this.getTestimonials();
    const newItem: TestimonialItem = { ...item, id: 'test-' + Date.now() };
    testimonials.unshift(newItem);
    setLocalItem(STORAGE_KEYS.TESTIMONIALS, testimonials);
    return newItem;
  },

  // --- BLOGS ---
  getBlogs(): BlogPost[] {
    return getLocalItem<BlogPost[]>(STORAGE_KEYS.BLOGS, INITIAL_BLOGS);
  },

  addBlog(item: Omit<BlogPost, 'id' | 'date'>): BlogPost {
    const blogs = this.getBlogs();
    const newBlog: BlogPost = {
      ...item,
      id: 'blog-' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };
    blogs.unshift(newBlog);
    setLocalItem(STORAGE_KEYS.BLOGS, blogs);
    return newBlog;
  }
};
