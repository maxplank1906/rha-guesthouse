import { useEffect } from 'react';
import { ActivePage } from '../types';

interface SEOHandlerProps {
  activePage: ActivePage;
}

export default function SEOHandler({ activePage }: SEOHandlerProps) {
  useEffect(() => {
    // 1. Dynamic Meta Definitions optimized for conversion with target keywords
    let title = '';
    let description = '';
    let keywords = '';

    switch (activePage) {
      case 'home':
        title = 'RHA Guest House — Premium Guest House in Islamabad G-13 near Srinagar Highway';
        description = 'Experience premium hospitality at RHA Guest House, the leading family guest house in G-13 Islamabad near Srinagar Highway and Islamabad Airport. Top rooms for rent in Islamabad with breakfast, WiFi, and gated parking courtyard.';
        keywords = 'guest house in Islamabad, guest house in G-13, guest house near Srinagar Highway, guest house near Islamabad airport, family guest house Islamabad, family guest house g-13, rha guesthouse islamabad, rooms for rent in islamabad, airbnb g13, book guest house';
        break;
      case 'rooms':
        title = 'Rooms for Rent in Islamabad G-13 — Executive & Family Suites | RHA Guest House';
        description = 'Secure premium rooms for rent in Islamabad G-13. Review our master bed Executive Suites and Deluxe Rooms. High-speed fiber internet, local breakfasts, and 24/7 security guard shelter.';
        keywords = 'rooms for rent in islamabad, guest house in G-13, guest house in Islamabad, family guest house g-13, rha guesthouse islamabad, airbnb g13';
        break;
      case 'about':
        title = 'Our Heritage & Security Standards — Family Guest House G-13 Islamabad | RHA';
        description = 'Established as the elite family guest house G-13 Islamabad near Srinagar Highway. Discover our strict visitor screening protocols, hygiene certifications, and complimentary organic breakfast services.';
        keywords = 'family guest house Islamabad, family guest house g-13, rha guesthouse islamabad, secure lodging islamabad, g13 guesthouse';
        break;
      case 'gallery':
        title = 'Ambient Gallery — Premium Guest House G-13 Islamabad close to Airport';
        description = 'View pristine high-definition interior images of RHA Guest House. Tour executive master bedding, attached sanitary restrooms, secure family lounges, and easy highway accesses.';
        keywords = 'rha guesthouse islamabad, guest house near Islamabad airport, guest house in G-13, guest house near Srinagar Highway, room pictures Islamabad';
        break;
      case 'contact':
        title = 'Contact & Book Guest House in Islamabad G-13 | RHA Guesthouse Desk';
        description = 'Ready to book a guest house? Contact our 24/7 G-13 Islamabad desk. Located 15 minutes from Islamabad Airport near Srinagar Highway exit. Fill the form to book instantly on WhatsApp.';
        keywords = 'book guest house, guest house in Islamabad, guest house in G-13, guest house near Islamabad airport, airbnb g13, contact rha guest house';
        break;
      default:
        title = 'RHA Guest House — Premium Guest House in Islamabad G-13 near Srinagar Highway';
        description = 'Boutique hospitality with top safety standards in G-13, Islamabad near Srinagar Highway. Gated parking, WiFi & complimentary breakfast.';
        keywords = 'guest house in Islamabad, guest house in G-13, guest house near Srinagar Highway';
    }

    // 2. Set Page Title
    document.title = title;

    // Helper functions to manage tags cleanly and avoid syntax errors
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
    updateOrCreateMeta('property', 'og:url', `https://rhaguesthouse.com/${activePage === 'home' ? '' : '#' + activePage}`);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:image', 'https://rhaguesthouse.com/images/resort_pool_guesthouse.webp');

    // 5. Update Twitter Cards Tags
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:image', 'https://rhaguesthouse.com/images/resort_pool_guesthouse.webp');

    // 6. Dynamic Canonical Link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://rhaguesthouse.com/${activePage === 'home' ? '' : '#' + activePage}`);

    // LOGIC: SCHEMA.ORG RICH JSON-LD INJECTION

    // Structure 1: Hotel Schema (Present across all pages as core representation)
    const hotelSchema = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      '@id': 'https://rhaguesthouse.com/#hotel',
      'name': 'RHA Guest House',
      'alternateName': 'RHA Guesthouse G-13 Islamabad',
      'description': 'Premium secure boutique guest house in G-13/1, Islamabad near Srinagar Highway and Islamabad Airport. Top amenities, private gated courtyard parking, and family-friendly environment.',
      'url': 'https://rhaguesthouse.com/',
      'logo': 'https://rhaguesthouse.com/images/resort_pool_guesthouse.webp',
      'image': 'https://rhaguesthouse.com/images/resort_pool_guesthouse.webp',
      'telephone': '+923337477769',
      'email': 'bookings@rhaguesthouse.com',
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
      'priceRange': 'PKR 7,000 - 15,000',
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
      '@id': 'https://rhaguesthouse.com/#localbusiness',
      'name': 'RHA Guest House',
      'image': 'https://rhaguesthouse.com/images/resort_pool_guesthouse.webp',
      'telephone': '+923337477769',
      'email': 'bookings@rhaguesthouse.com',
      'url': 'https://rhaguesthouse.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'House 58, Street 101, G-13/1',
        'addressLocality': 'Islamabad',
        'addressRegion': 'Islamabad Capital Territory',
        'postalCode': '44000',
        'addressCountry': 'PK'
      },
      'hasMap': 'https://www.google.com/maps/place/golden+Oak+Residence/@33.6428302,72.9626532,18z/data=!4m9!3m8!1s0x38df96473c8d046b:0x958e9929aefb3adf!5m2!4m1!1i2!8m2!3d33.642466!4d72.962583!16s%2Fg%2F11vkjt3hdg?entry=ttu',
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

    // Structure 3: FAQPage Schema (Only on pages containing FAQ items - home and contact)
    if (activePage === 'home' || activePage === 'contact') {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How far is Islamabad Airport from RHA Guest House?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RHA Guest House is located approximately 15 minutes away from the Islamabad International Airport via the sign-free, direct lanes of the Srinagar Highway, making arrivals and departures extremely quick and hassle-free.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is secure parking available at RHA Guest House G-13?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we provide completely free, fully gated, and highly secure private courtyard parking on-site for all our guests with 24/7 security guard presence.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is hot breakfast included in the booking?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Absolutely. We offer a delicious complimentary warm Pakistani breakfast (featuring hot parathas, custom omelettes, and Karak tea) or Continental options served daily in our clean dining lounge.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is high speed WiFi free?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, we provide complimentary ultra-fast, premium fiber optic Wi-Fi connection throughout all guest rooms, sitting lounges, and outdoor spaces.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I book a room at RHA Guest House?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can book directly with us by clicking any of our \'Book on WhatsApp\' buttons to connect instantly with our 24/7 reservation desk, or you can use our online details inquiry system to request a custom package.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is RHA Guest House a family-friendly establishment?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, RHA Guest House is fully family-friendly. We maintain a very quiet, secure, and highly ethical lodging standard strictly catered for families, diplomatic staffers, and corporate executives visiting Islamabad.'
            }
          }
        ]
      };

      let faqScript = document.getElementById('schema-faq') as HTMLScriptElement | null;
      if (!faqScript) {
        faqScript = document.createElement('script') as HTMLScriptElement;
        faqScript.id = 'schema-faq';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.text = JSON.stringify(faqSchema);
    } else {
      // Remove FAQ schema on other pages to keep metadata pristine
      const existingFaqScript = document.getElementById('schema-faq');
      if (existingFaqScript) {
        existingFaqScript.remove();
      }
    }

    // Clean up when active page changes or component unmounts
    return () => {
      // Keep main schemas, but clean up page-specific scripts if needed
    };
  }, [activePage]);

  return null; // This is a virtual head-side manager, renders nothing to UI
}
