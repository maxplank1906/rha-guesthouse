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
    imageUrl: '/images/room_standard_gray.webp',
    additionalImages: [
      '/images/room_deluxe_green.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Standard Room'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Boutique Deluxe',
    description: 'Elevated space with premium furnishings, customizable lighting, and pristine dual-gate security views. Ideal for business and solo travellers.',
    price: 8000,
    capacity: '2 Adults',
    bedType: 'King Bed',
    size: '320 sq. ft.',
    amenities: ['Complimentary Breakfast', 'Superfast Fiber WiFi', 'Climate Control AC Inverter', 'Smart LED 4K Screen', 'Premium Hand-crafted Desk', 'Pristine Bathroom'],
    imageUrl: '/images/room_deluxe_green.webp',
    additionalImages: [
      '/images/room_standard_gray.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Deluxe Room'
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    tag: 'Suites Luxury',
    description: 'Our flagship executive sanctuary featuring upscale local wood detailing, high-speed fiber internet, and complimentary Pakistani hot paratha breakfast.',
    price: 11000,
    capacity: '3 Adults',
    bedType: 'Super King Bed',
    size: '420 sq. ft.',
    amenities: ['Complimentary Breakfast', 'Superfast Fiber WiFi', 'Climate Control AC Inverter', '4K LED TV with Premium Streaming', 'Plush Sofa Seating Area', 'Standby Power Backup'],
    imageUrl: '/images/room_executive_blue.webp',
    additionalImages: [
      '/images/luxury_suite_art.webp',
      '/images/room_standard_gray.webp'
    ],
    whatsappMessage: 'Hi, I want to book the Executive Room'
  }
];
