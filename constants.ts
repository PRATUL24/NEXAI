import { Product, Pricing } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'ha-01',
    name: 'NEXAI Home Assistance',
    category: 'Smart Hub',
    price: Pricing.HOME_ASSISTANCE,
    description: 'A smart AI-powered home assistant that connects and manages all your NEXAI appliances, automates routines, and provides proactive support.',
    features: ['Central Control Hub', 'Voice Command', 'AI Automation'],
    image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ac-01',
    name: 'NEXAI Breeze X1',
    category: 'Air Conditioner',
    price: Pricing.AIR_CONDITIONER,
    description: 'AI-calibrated cooling that adapts to your body temperature and room occupancy.',
    features: ['Motion Sensing', 'Energy Saver Mode', 'Voice Control'],
    image: 'https://images.unsplash.com/photo-1624021703649-65239e320d7d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'wm-01',
    name: 'NEXAI Wash Pro',
    category: 'Washing Machine',
    price: Pricing.WASHING_MACHINE,
    description: 'Smart fabric sensing technology determines the perfect cycle for every load.',
    features: ['Auto-Dosing', 'Steam Hygiene', 'Silent Drive'],
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ap-01',
    name: 'NEXAI Pure',
    category: 'Air Purifier',
    price: Pricing.AIR_PURIFIER,
    description: 'Real-time air quality monitoring with HEPA-14 AI filtration systems.',
    features: ['Laser Particle Sensor', '360° Intake', 'Sleep Mode'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vr-01',
    name: 'NEXAI Bot V3',
    category: 'Vacuum Robot',
    price: Pricing.VACUUM_ROBOT,
    description: 'LiDAR-guided navigation with AI obstacle avoidance and self-emptying base.',
    features: ['LiDAR Mapping', 'Mop Function', 'Pet Recognition'],
    image: 'https://images.unsplash.com/photo-1596238626243-7f3e827254a6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'rf-01',
    name: 'NEXAI FrostGuard',
    category: 'Refrigerator',
    price: Pricing.REFRIGERATOR,
    description: 'Inventory tracking and freshness preservation powered by deep learning.',
    features: ['Smart Screen', 'Inventory Cam', 'InstaView'],
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop',
  },
];

export const FEATURES = [
  {
    title: 'AI Neural Core',
    description: 'Every appliance learns your habits to optimize performance and save energy.',
    icon: 'Brain'
  },
  {
    title: '2-Year Warranty',
    description: 'Full coverage on all parts and labor. We stand behind our futuristic tech.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Free Maintenance',
    description: 'Complimentary service and maintenance for the first 1.5 years of ownership.',
    icon: 'Wrench'
  },
  {
    title: 'Smart Ecosystem',
    description: 'Control everything seamlessly via the NEXAI Hub smartphone app.',
    icon: 'Smartphone'
  }
];