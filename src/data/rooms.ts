import { Room } from '../types';

export const roomsData: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    tag: 'Classic Comfort',
    description: 'Perfect blend of cozy aesthetics and elegant functionality. Features pristine double bedding, warm lighting, and top-tier Islamabad tranquility.',
    price: 5000,
    capacity: '2 Adults',
    bedType: 'Double Bed',
    size: '250 sq. ft.',
    amenities: ['Complimentary Breakfast', 'Superfast Fiber WiFi', 'Climate Control AC', 'Smart LED TV', 'Modern Attached Bath'],
    imageUrl: '/images/standard6.webp',
    additionalImages: [
      '/images/standard1.webp',
      '/images/standard2.webp',
      '/images/standard3.webp'
    ],
    carouselImages: [
      '/images/standard1.webp',
      '/images/standard2.webp',
      '/images/standard3.webp',
      '/images/standard4.webp',
      '/images/standard5.webp',
      '/images/standard6.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Standard Room'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Boutique Deluxe',
    description: 'Elevated space with premium furnishings, customizable lighting, and pristine dual-gate security views. Ideal for business and solo travellers.',
    price: 8000,
    capacity: '3 Adults',
    bedType: 'King Bed',
    size: '320 sq. ft.',
    amenities: ['Complimentary Breakfast', 'Superfast Fiber WiFi', 'Climate Control AC Inverter', 'Smart LED 4K Screen', 'Premium Hand-crafted Desk', 'Pristine Bathroom'],
    imageUrl: '/images/deluxe1.webp',
    additionalImages: [
      '/images/deluxe2.webp'
    ],
    carouselImages: [
      '/images/deluxe1.webp',
      '/images/deluxe2.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Deluxe Room'
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    tag: 'Suites Luxury',
    description: 'Our flagship executive sanctuary featuring upscale local wood detailing, high-speed fiber internet, and complimentary Pakistani hot paratha breakfast.',
    price: 11000,
    capacity: '4-5 Adults',
    bedType: 'Super King Bed',
    size: '420 sq. ft.',
    amenities: ['Complimentary Breakfast', 'Superfast Fiber WiFi', 'Climate Control AC Inverter', '4K LED TV with Premium Streaming', 'Plush Sofa Seating Area', 'Standby Power Backup'],
    imageUrl: '/images/executive1.webp',
    additionalImages: [
      '/images/executive2.webp',
      '/images/executive3.webp'
    ],
    carouselImages: [
      '/images/executive1.webp',
      '/images/executive2.webp',
      '/images/executive3.webp',
      '/images/executive4.webp',
      '/images/executive5.webp',
      '/images/executive6.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Executive Room'
  }
];
