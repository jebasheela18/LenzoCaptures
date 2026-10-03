import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  weddingDate: z.string().min(1, 'Please select your wedding date'),
  venueLocation: z.string().min(3, 'Please enter the venue name or city'),
  eventType: z.enum([
    'Wedding Photography',
    'Wedding Films',
    'Pre-Wedding Shoots',
    'Engagement Photography',
    'Maternity Photography',
    'Birthday & Event Photography',
    'Drone Coverage',
    'Live Streaming',
    'Album Design',
    'Comprehensive Luxury Package'
  ], {
    required_error: 'Please select an event type',
  }),
  budget: z.enum([
    'Under $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Custom / Undecided'
  ], {
    required_error: 'Please select your budget range',
  }),
  message: z.string().min(10, 'Please share a few details about your vision (at least 10 characters)'),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
