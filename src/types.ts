export type ActivePage = 'home' | 'rooms' | 'about' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: number; // in PKR
  capacity: string;
  bedType: string;
  size: string;
  amenities: string[];
  imageUrl: string;
  additionalImages?: string[];
  whatsappMessage: string;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
  location: string;
  avatarChar: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}
