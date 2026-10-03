import { PortfolioItem, ServiceItem, TestimonialItem, BlogPost, PricingPackage, FAQItem } from './types';

export const STUDIO_CONTACT = {
  address: 'TNHB1/1S/1, Ma Salam Plaza Shop Site - 1, 7th Main Road, KTC Nagar North, Tirunelveli - 627011, Tamil Nadu',
  phones: ['+91 9363745628', '+91 9363745629'],
  whatsapp: '+91 9363745628',
  email: 'lenzocaptures@gmail.com',
  instagram: 'lenzoccaptures',
  instagramUrl: 'https://instagram.com/lenzoccaptures',
  googleMapsUrl: 'https://maps.app.goo.gl/8ELahCGiuBPD48XC6',
};

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Golden Hour Sunset Silhouette',
    category: 'Weddings',
    mediaType: 'image',
    url: '/images/hero-silhouette.png',
    featured: true,
    location: 'Tirunelveli, Tamil Nadu',
    coupleNames: 'Karthik & Revathi',
    description: 'A serene sunset portrait capturing warm golden backlight and traditional South Indian bridal attire.',
    createdAt: '2026-05-12',
  },
  {
    id: 'port-2',
    title: 'Traditional Temple Moon Silhouette',
    category: 'Weddings',
    mediaType: 'image',
    url: '/images/bride-moon-silhouette.png',
    featured: true,
    location: 'Madurai, Tamil Nadu',
    coupleNames: 'Sundar & Meenakshi',
    description: 'Editorial silhouette framing elegant gajra floral hair details against a warm illuminated backdrop.',
    createdAt: '2026-06-04',
  },
  {
    id: 'port-3',
    title: 'Heritage Antique Jhumka Craftsmanship',
    category: 'Portraits',
    mediaType: 'image',
    url: '/images/jhumka-jewelry.jpg',
    featured: true,
    location: 'Studio Fine-Art Detail',
    description: 'High-detail macro focus highlighting handcrafted South Indian gold temple jewelry and traditional gems.',
    createdAt: '2026-04-18',
  },
  {
    id: 'port-4',
    title: 'Royal Temple Necklace & Kanchipuram Silk',
    category: 'Portraits',
    mediaType: 'image',
    url: '/images/necklace-detail.jpg',
    featured: true,
    location: 'Chennai, Tamil Nadu',
    description: 'Rich contrast, warm gold tones, and intricate weaving patterns of authentic bridal attire.',
    createdAt: '2026-03-30',
  },
  {
    id: 'port-5',
    title: 'Traditional Muhurtham Ceremony',
    category: 'Weddings',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    featured: false,
    location: 'Tirunelveli Mandapam',
    coupleNames: 'Arun & Divya',
    description: 'Capturing candid smiles and emotional blessings during sacred family rituals.',
    createdAt: '2026-02-14',
  },
  {
    id: 'port-6',
    title: 'Coastal Pre-Wedding Story',
    category: 'Pre-Weddings',
    mediaType: 'image',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
    featured: true,
    location: 'Kanyakumari Coast',
    coupleNames: 'Vijay & Sneha',
    description: 'Unscripted laughter and organic moments framed against gentle ocean waves.',
    createdAt: '2026-01-22',
  }
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Wedding Photography',
    slug: 'wedding-photography',
    shortDesc: 'Warm, respectful candid and traditional wedding coverage preserving your family legacy with grace.',
    fullDesc: 'Our wedding photography team focuses on capturing the true essence of your sacred rituals and family emotions. We bring technical precision, soft natural lighting, and respectful dedication to every moment of your auspicious day.',
    iconName: 'Camera',
    imageUrl: '/images/hero-silhouette.png',
    priceStarting: 'On Request',
    features: ['Experienced Lead Photographers & Editors', 'Comprehensive Muhurtham & Reception Coverage', 'High-Resolution Edited Digital Files', 'Private Online Client Gallery']
  },
  {
    id: 'serv-2',
    title: 'Wedding Films',
    slug: 'wedding-films',
    shortDesc: 'Cinematic 4K films with meaningful audio scoring, documenting every emotion and ritual with clarity.',
    fullDesc: 'We craft timeless wedding films using high-definition cinema equipment, ambient natural sound recording, and professional color grading. Each film reflects the warmth and tradition of your family gathering.',
    iconName: 'Film',
    imageUrl: '/images/bride-moon-silhouette.png',
    priceStarting: 'On Request',
    features: ['4K Multi-Camera Cinema Coverage', 'Teaser Trailer & Highlight Feature Film', 'Crisp Audio & Traditional Scoring', 'Full Length Event Documentation']
  },
  {
    id: 'serv-3',
    title: 'Pre-Wedding Shoots',
    slug: 'pre-wedding-shoots',
    shortDesc: 'Relaxed, romantic outdoor and outdoor-concept sessions tailored to express your personal chemistry.',
    fullDesc: 'Enjoy an easygoing pre-wedding shoot experience. We guide you gently through comfortable poses and picturesque South Indian landscapes, creating natural portraits.',
    iconName: 'Heart',
    imageUrl: '/images/jhumka-jewelry.jpg',
    priceStarting: 'On Request',
    features: ['Full Outdoor Session Guidance', 'Multiple Outfit & Location Scouting', 'Hand-Retouched Fine Art Prints', 'Social Media Preview Reel']
  },
  {
    id: 'serv-4',
    title: 'Engagement Photography',
    slug: 'engagement-photography',
    shortDesc: 'Focused event photography documenting ring exchanges and joyful family celebrations.',
    fullDesc: 'Capture the beginning of your wedding journey with crisp, vibrant images highlighting ring exchange rituals, floral decorations, and family greetings.',
    iconName: 'Sparkles',
    imageUrl: '/images/necklace-detail.jpg',
    priceStarting: 'On Request',
    features: ['Complete Engagement Function Coverage', 'Quick Preview Deliverables', 'High-Res Digital Archives', 'Print-Ready Image Formats']
  },
  {
    id: 'serv-5',
    title: 'Maternity Photography',
    slug: 'maternity-photography',
    shortDesc: 'Gentle, graceful portraits celebrating new beginnings and family blessings.',
    fullDesc: 'Honour the warmth of motherhood with soft, tasteful portraits created in comfortable studio lighting or peaceful outdoor setups.',
    iconName: 'UserCheck',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop',
    priceStarting: 'On Request',
    features: ['Relaxed Studio / Home Environment', 'Family & Spouse Inclusion', 'Fine-Art Retouched Gallery', 'Archival Album Options']
  },
  {
    id: 'serv-6',
    title: 'Birthday & Event Photography',
    slug: 'birthday-event-photography',
    shortDesc: 'Punctual, energetic coverage for family milestone birthdays, ear-piercing ceremonies, and receptions.',
    fullDesc: 'From milestone birthdays to traditional family gatherings, our team ensures every guest smile and key ceremony is captured clearly.',
    iconName: 'PartyPopper',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    priceStarting: 'On Request',
    features: ['Complete Function Coverage', 'Punctual On-Site Arrival', 'Vibrant Natural Color Grading', 'Digital Album Delivery']
  },
  {
    id: 'serv-7',
    title: 'Drone Coverage',
    slug: 'drone-coverage',
    shortDesc: 'Certified 4K aerial photography and videography capturing grand venue architecture and processions.',
    fullDesc: 'Add a majestic aerial perspective to your celebration with smooth, safe 4K drone cinematography capturing venue grandeur and outdoor ceremonies.',
    iconName: 'Video',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
    priceStarting: 'On Request',
    features: ['Certified Drone Camera Pilot', 'Smooth Aerial Video & Still Angles', 'Safety-Compliant Operations', 'Full High-Res Aerial Footage']
  },
  {
    id: 'serv-8',
    title: 'Live Streaming',
    slug: 'live-streaming',
    shortDesc: 'High-definition live broadcast allowing out-of-station relatives and global family to join your event.',
    fullDesc: 'Keep your distant relatives connected. We provide stable multi-camera HD live broadcasting with clear audio streams so everyone can witness your rituals live.',
    iconName: 'Radio',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    priceStarting: 'On Request',
    features: ['Private Secure Stream Link', 'Multi-Cam Live Switching', 'Stable Cellular Encoders', 'Full High-Quality Recording']
  },
  {
    id: 'serv-9',
    title: 'Album Design',
    slug: 'album-design',
    shortDesc: 'Premium handcrafted flush-mount heirloom albums designed with archival quality paper and velvet finishes.',
    fullDesc: 'We transform your wedding memories into tangible, hand-bound heirloom albums crafted with thick silk pages, metallic embossing, and protective presentation cases.',
    iconName: 'BookOpen',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    priceStarting: 'On Request',
    features: ['Handcrafted Archival Flush Mount Albums', 'Thick Non-Tearable Silk Pages', 'Custom Embossing & Title Foil', 'Matching Parent Mini-Albums']
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Suresh & Preeti',
    eventType: 'Traditional Wedding, Tirunelveli',
    quote: 'The team at Lenzo Captures showed utmost respect to our elders and cultural traditions throughout our wedding. Their dedication, punctuality, and photography quality exceeded all our expectations.',
    location: 'Tirunelveli',
    imageUrl: '/images/hero-silhouette.png',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Anand & Swetha',
    eventType: 'Pre-Wedding & Muhurtham',
    quote: 'From our pre-wedding shoot to the final album delivery, Lenzo Captures made us feel completely comfortable. The colors and video scoring were so emotional and beautiful.',
    location: 'Madurai',
    imageUrl: '/images/bride-moon-silhouette.png',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Ramesh & Lakshmi',
    eventType: 'Grand Reception & Live Stream',
    quote: 'Our relatives abroad watched our wedding live with crystal clarity. The drone shots and detailed jewelry portraits are true treasures for our family.',
    location: 'Chennai',
    imageUrl: '/images/necklace-detail.jpg',
    rating: 5
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Preserving Traditional South Indian Wedding Customs Through Photography',
    slug: 'traditional-south-indian-wedding-photography-guide',
    excerpt: 'Insights into capturing the sacred auspicious moments of Muhurtham, Oornjal, and Kanyadaan with reverence and artistry.',
    content: `South Indian weddings are rich in heritage, sacred mantras, and intricate rituals...`,
    coverImage: '/images/bride-moon-silhouette.png',
    author: 'Lenzo Captures Team',
    date: 'July 2026',
    readTime: '4 min read'
  },
  {
    id: 'blog-2',
    title: 'Essential Guidelines for Selecting Bridal Jewelry & Saree Lighting',
    slug: 'bridal-jewelry-saree-photography-lighting',
    excerpt: 'How custom studio lighting brings out the rich luster of temple gold and Kanchipuram zari work.',
    content: `Antique temple jewelry requires balanced soft lighting to capture delicate filigree details without reflections...`,
    coverImage: '/images/necklace-detail.jpg',
    author: 'Lenzo Captures Team',
    date: 'June 2026',
    readTime: '3 min read'
  }
];

export const INITIAL_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-1',
    name: 'Bespoke Traditional Photography',
    tagline: 'Ideal for intimate ceremonies & single-day functions',
    price: 'Custom Quote',
    features: [
      'Experienced Senior Lead Photographers',
      'Candid & Traditional Coverage',
      'High-Res Retouched Digital Gallery',
      'Pre-Event Planning Consultation',
      'Full Printing & Personal Usage Rights'
    ],
    bestFor: 'Single-Day Celebrations'
  },
  {
    id: 'pkg-2',
    name: 'The Heirloom Collection',
    tagline: 'Our signature multi-event photography & cinematic film package',
    price: 'Custom Quote',
    isPopular: true,
    features: [
      'Comprehensive Multi-Day Wedding Coverage',
      'Lead Photographers + 4K Cinematographers',
      '4K Cinematic Teaser Trailer & Highlight Film',
      'Complimentary Pre-Wedding Shoot Session',
      'Handcrafted Archival Silk Heirloom Album',
      'Licensed 4K Aerial Drone Coverage'
    ],
    bestFor: 'Grand Weddings & Multi-Day Celebrations'
  },
  {
    id: 'pkg-3',
    name: 'The Complete Masterpiece',
    tagline: 'Full event team coverage with live streaming & parent albums',
    price: 'Custom Quote',
    features: [
      'Unlimited Multi-Day Ceremony Access',
      'Full Photography, Film & Aerial Crew',
      'Live HD Multi-Camera Streaming Setup',
      '2x Handcrafted Albums + Matching Parent Mini-Albums',
      'Priority Delivery & Velvet Presentation Drive'
    ],
    bestFor: 'Palatial Celebrations & Extended Functions'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    question: 'Where is Lenzo Captures located and do you travel for events?',
    answer: 'Our main studio is located at TNHB1/1S/1, Ma Salam Plaza Shop Site - 1, 7th Main Road, KTC Nagar North, Tirunelveli - 627011. We regularly travel across Tamil Nadu, South India, and out-of-station destinations for weddings.',
    category: 'Location'
  },
  {
    question: 'What is your photography style?',
    answer: 'We blend warm, respectful candid storytelling with crisp traditional portraiture. Our focus is on genuine emotions, sacred family rituals, and rich natural colors without artificial exaggerations.',
    category: 'Style'
  },
  {
    question: 'How do we book your team for our wedding date?',
    answer: 'You can reach out to us directly via call or WhatsApp at +91 9363745628, or fill out the enquiry form on our website. We discuss your event schedule and provide a clear, customized proposal.',
    category: 'Booking'
  },
  {
    question: 'How quickly do we receive our photos and videos?',
    answer: 'We provide an initial preview gallery of curated images within 48 to 72 hours. Complete photo collections and cinematic films are delivered punctually within 4 to 6 weeks.',
    category: 'Delivery'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Team',
    desc: 'Our team comprises passionate, highly trained photographers and editors with years of practical industry expertise.',
    iconName: 'Camera'
  },
  {
    title: 'Punctual & Reliable',
    desc: 'We arrive well ahead of schedule and honor every commitment with dedication and professionalism.',
    iconName: 'Zap'
  },
  {
    title: 'Respectful Approach',
    desc: 'We operate with utmost respect for your elders, family traditions, and sacred temple/mandapam customs.',
    iconName: 'Smile'
  },
  {
    title: 'High-Grade Equipment',
    desc: 'We utilize professional cinema optics, prime lenses, 4K drones, and calibrated color monitors.',
    iconName: 'Sliders'
  },
  {
    title: 'Creative Storytelling',
    desc: 'Focusing on natural smiles, organic interactions, and timeless compositions that feel real.',
    iconName: 'Sparkles'
  },
  {
    title: 'Transparent Communication',
    desc: 'Clear, polite communication and dedicated personal assistance throughout your wedding journey.',
    iconName: 'MessageSquare'
  }
];
