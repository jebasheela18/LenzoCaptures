export type CategoryType = 'All' | 'Weddings' | 'Pre-Weddings' | 'Portraits' | 'Events' | 'Films';

export interface PortfolioItem {
  id: string;
  title: string;
  category: CategoryType;
  mediaType: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  featured: boolean;
  location?: string;
  coupleNames?: string;
  description?: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  priceStarting: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventType: string;
  quote: string;
  location: string;
  imageUrl: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  bestFor: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  venueLocation: string;
  eventType: string;
  budget: string;
  message: string;
  status: 'New' | 'Contacted' | 'Booked' | 'Archived';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
