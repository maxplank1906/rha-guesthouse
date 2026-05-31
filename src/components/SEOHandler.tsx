import { useEffect } from 'react';
import { ActivePage } from '../types';
import { GUESTHOUSE_CONFIG } from '../config';

interface SEOHandlerProps {
  activePage: ActivePage;
}

export default function SEOHandler({ activePage }: SEOHandlerProps) {
  useEffect(() => {
    // 1. Dynamic Meta Definitions optimized for conversion with target keywords
    let title = '';
    let description = '';
    let keywords = '';

    const bName = GUESTHOUSE_CONFIG.name; // RHA Lodges
    const bPhone = GUESTHOUSE_CONFIG.phone; // +92 314 5961156
    const bEmail = GUESTHOUSE_CONFIG.email; // rhalodges@gmail.com
    const bAddress = GUESTHOUSE_CONFIG.address;

    switch (activePage) {
      case 'home':
        title = `${bName} — Luxury Lodges in G-13, Islamabad`;
        description = `Experience premium family hospitality at ${bName} G-13 Islamabad. Enjoy secure gated parking, high-speed WiFi, and deluxe rooms near Srinagar Highway.`;
        keywords = 'lodges in Islamabad, guest house in G-13, lodges in G-13, luxury stay G13, guest house near Srinagar Highway, family guest house Islamabad, rha lodges islamabad, rha guesthouse islamabad, rooms for rent in islamabad, airbnb g13 islamabad';
        break;
      case 'rooms':
        title = `Rooms & Executive Suites for Rent G-13 Islamabad | ${bName}`;
        description = `Book pristine rooms for rent in Islamabad G-13. Discover our master Bed Executive Suites and Deluxe Rooms featuring climate AC, high-speed fiber internet, and complimentary Pakistani breakfast.`;
        keywords = 'rooms for rent in islamabad, guest house in G-13, lodges in G-13, rha lodges rooms, luxury accommodation islamabad, airbnb g13';
        break;
      case 'about':
        title = `Heritage & Security Standards — Family Lodges G-13 Islamabad | ${bName}`;
        description = `Established as the premier secure lodging destination in G-13 Islamabad. Learn about our dual-gate security shielding, immaculate hygiene standards, and organic home breakfasts.`;
        keywords = 'family guest house Islamabad, family lodges g-13, rha lodges security, secure lodging islamabad, g13 premium stay';
        break;
      case 'gallery':
        title = `Visual Gallery — Premium Interior & Rooms Preview | ${bName}`;
        description = `Explore high-definition photos of ${bName} G-13 Islamabad. Tour our executive bedrooms, spotless attached bathrooms, elegant dining layouts, and scenic balcony terraces.`;
        keywords = 'rha lodges gallery, room pictures Islamabad, guest house photo tour, luxury lodging spaces G13';
        break;
      case 'contact':
        title = `Contact & WhatsApp Booking Desk G-13 Islamabad | ${bName}`;
        description = `Ready to book? Connect with our 24/7 G-13 concierge desk. Located near Srinagar Highway exit, 15 minutes from Islamabad Airport. Instant WhatsApp booking form.`;
        keywords = 'book guest house, contact rha lodges, book rha guest house, lodges near Islamabad airport, whatsapp booking g13';
        break;
      default:
        title = `${bName} — Luxury Lodges in G-13, Islamabad`;
        description = `Boutique hospitality with uncompromised safety standards in G-13, Islamabad near Srinagar Highway. Gated parking, high speed WiFi & complimentary breakfast.`;
        keywords = 'lodges in Islamabad, guest house in G-13, lodges near Srinagar Highway';
    }

    // 2. Set Page Title
    document.title = title;

    // Helper functions to manage tags cleanly
    const updateOrCreateMeta = (nameAttr: string, valueAttr: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    updateOrCreateMeta('name', 'description', description);
    updateOrCreateMeta('name', 'keywords', keywords);

    // 4. Update OpenGraph Tags
    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', `https://rhalodges.com/${activePage === 'home' ? '' : '#' + activePage}`);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:image', 'https://rhalodges.com/images/outside.webp');

    // 5. Update Twitter Cards Tags
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:image', 'https://rhalodges.com/images/outside.webp');

    // 6. Dynamic Canonical Link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://rhalodges.com/${activePage === 'home' ? '' : '#' + activePage}`);

    // LOGIC: SCHEMA.ORG RICH JSON-LD INJECTION

    // Structure 1: Hotel Schema (Present across all pages as core representation)
    const hotelSchema = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      '@id': 'https://rhalodges.com/#hotel',
      'name': bName,
      'alternateName': 'RHA Lodges G-13 Islamabad',
      'description': 'Premium secure boutique lodges in G-13/1, Islamabad near Srinagar Highway and Islamabad Airport. Top amenities, private gated courtyard parking, and family-friendly environment.',
      'url': 'https://rhalodges.com/',
      'logo': 'https://rhalodges.com/images/outside.webp',
      'image': 'https://rhalodges.com/images/outside.webp',
      'telephone': bPhone.replace(/\s+/g, ''),
      'email': bEmail,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'House 58, Street 101, G-13/1',
        'addressLocality': 'Islamabad',
        'addressRegion': 'Islamabad Capital Territory',
        'postalCode': '44000',
        'addressCountry': 'PK'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '33.6429',
        'longitude': '72.9796'
      },
      'priceRange': 'PKR 5,000 - 15,000',
      'starRating': {
        '@type': 'Rating',
        'ratingValue': '4.9'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '150',
        'bestRating': '5',
        'worstRating': '1'
      },
      'amenityFeature': [
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Free Fiber WiFi',
          'value': 'true'
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Complimentary Cooked Breakfast',
          'value': 'true'
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Gated Private Parking Courtyard',
          'value': 'true'
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': '24/7 Security Guard Surveillance',
          'value': 'true'
        }
      ]
    };

    // Inject Hotel Core Schema
    let hotelScript = document.getElementById('schema-hotel') as HTMLScriptElement | null;
    if (!hotelScript) {
      hotelScript = document.createElement('script') as HTMLScriptElement;
      hotelScript.id = 'schema-hotel';
      hotelScript.type = 'application/ld+json';
      document.head.appendChild(hotelScript);
    }
    hotelScript.text = JSON.stringify(hotelSchema);

    // Structure 2: LocalBusiness Schema for Maps and Local SEO Listing
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'BedAndBreakfast',
      '@id': 'https://rhalodges.com/#localbusiness',
      'name': bName,
      'image': 'https://rhalodges.com/images/outside.webp',
      'telephone': bPhone.replace(/\s+/g, ''),
      'email': bEmail,
      'url': 'https://rhalodges.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'House 58, Street 101, G-13/1',
        'addressLocality': 'Islamabad',
        'addressRegion': 'Islamabad Capital Territory',
        'postalCode': '44000',
        'addressCountry': 'PK'
      },
      'hasMap': GUESTHOUSE_CONFIG.googleMapsUrl,
      'openingHours': 'Mo-Su 00:00-23:59',
      'paymentAccepted': 'Cash, Bank Transfer'
    };

    let localScript = document.getElementById('schema-local') as HTMLScriptElement | null;
    if (!localScript) {
      localScript = document.createElement('script') as HTMLScriptElement;
      localScript.id = 'schema-local';
      localScript.type = 'application/ld+json';
      document.head.appendChild(localScript);
    }
    localScript.text = JSON.stringify(localBusinessSchema);

  }, [activePage]);

  return null; // Head-side manager, renders nothing to UI
}
