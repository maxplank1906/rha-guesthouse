import { useState } from 'react';
import { Camera, X } from 'lucide-react';

interface GalleryImage {
  url: string;
  category: 'rooms' | 'bathrooms' | 'terrace' | 'dining' | 'office' | 'kitchen' | 'outside';
  caption: string;
  alt: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'bathrooms' | 'terrace' | 'dining' | 'office' | 'kitchen' | 'outside'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const images: GalleryImage[] = [
    // OUTSIDE
    { 
      url: '/images/outside.webp', 
      category: 'outside', 
      caption: 'Secured Courtyard Entrance & Facade', 
      alt: 'Highly secure gated external courtyard and beautiful outer building facade of RHA Lodges G-13 Islamabad' 
    },
    // OFFICE
    { 
      url: '/images/office.webp', 
      category: 'office', 
      caption: 'Reception and Assistance Desk', 
      alt: 'Warm and professional reception details booking desk at RHA Lodges Islamabad' 
    },
    // DINING
    { 
      url: '/images/dinning.webp', 
      category: 'dining', 
      caption: 'Main Dining & Breakfast Hall', 
      alt: 'Clean family dining hall lounge featuring polished wood setup inside RHA Lodges' 
    },
    // TERRACE
    { 
      url: '/images/terrace1.webp', 
      category: 'terrace', 
      caption: 'Rooftop Terrace Sitting Area', 
      alt: 'Spacious rooftop sitting space with scenic skies of G-13 Islamabad' 
    },
    { 
      url: '/images/terrace2.webp', 
      category: 'terrace', 
      caption: 'Calm Balcony Sitting Space', 
      alt: 'Clean outdoor balcony chairs with private and cool atmosphere at RHA Lodges' 
    },
    // BATHROOMS
    { 
      url: '/images/bath1.webp', 
      category: 'bathrooms', 
      caption: 'Modern Attached Bathroom', 
      alt: 'Spotless bathroom design, fresh sanitization, and en-suite facilities' 
    },
    { 
      url: '/images/bath2.webp', 
      category: 'bathrooms', 
      caption: 'Premium Sanitized Washroom', 
      alt: 'Clean vanity sink and modern ceramic restroom layout' 
    },
    { 
      url: '/images/bath3.webp', 
      category: 'bathrooms', 
      caption: 'Deluxe Restroom Fixtures', 
      alt: 'Attached guest house sanitary bathroom with clean ventilation' 
    },
    // KITCHEN
    { 
      url: '/images/kitchen1.webp', 
      category: 'kitchen', 
      caption: 'Chef-Grade Culinary Kitchen', 
      alt: 'Sparkling clean guest house kitchen preparing homemade desi organic breakfasts' 
    },
    { 
      url: '/images/kitchen2.webp', 
      category: 'kitchen', 
      caption: 'Hygienic Preparation Pantry', 
      alt: 'Fully supplied and modern kitchen cabinets with standard utilities' 
    },
    // ROOMS (Standard)
    { 
      url: '/images/standard1.webp', 
      category: 'rooms', 
      caption: 'Standard Room Twin Bedroom', 
      alt: 'Charming standard double bedding layout with clean linens' 
    },
    { 
      url: '/images/standard2.webp', 
      category: 'rooms', 
      caption: 'Standard Room Comfort Bed', 
      alt: 'Tuck-in standard room bed with side drawer and elegant lighting' 
    },
    { 
      url: '/images/standard3.webp', 
      category: 'rooms', 
      caption: 'Standard Bedroom Single Comfort', 
      alt: 'Perfect setting of single standard bed with comfortable pillows' 
    },
    { 
      url: '/images/standard4.webp', 
      category: 'rooms', 
      caption: 'Standard Wardrobe Space', 
      alt: 'Polished master wood cabinets and wardrobe closets inside standard rooms' 
    },
    { 
      url: '/images/standard5.webp', 
      category: 'rooms', 
      caption: 'Standard Room Cozy Workdesk', 
      alt: 'Small writing workstation and reading lamp inside standard room' 
    },
    { 
      url: '/images/standard6.webp', 
      category: 'rooms', 
      caption: 'Standard Double Master Bed', 
      alt: 'Double bedding setup with premium comfortable blanket in standard room' 
    },
    { 
      url: '/images/standard7.webp', 
      category: 'rooms', 
      caption: 'Standard Suite Warm Mood', 
      alt: 'Ambient side desk lamps and comfortable bedding arrangement' 
    },
    { 
      url: '/images/standard8.webp', 
      category: 'rooms', 
      caption: 'Standard Room Scenic Window', 
      alt: 'Sun-drenched windows inside standard room for a fresh morning view' 
    },
    { 
      url: '/images/standard9.webp', 
      category: 'rooms', 
      caption: 'Standard Master Wooden Locker', 
      alt: 'Clean storage lockers and clothes drawer units for guest comfort' 
    },
    { 
      url: '/images/standard10.webp', 
      category: 'rooms', 
      caption: 'Standard Double Bed Layout', 
      alt: 'Symmetrical standard room design featuring fresh laundered blankets' 
    },
    // ROOMS (Deluxe)
    { 
      url: '/images/deluxe1.webp', 
      category: 'rooms', 
      caption: 'Deluxe King Bed Suite', 
      alt: 'Stately deluxe room master bed setting with decorative items' 
    },
    { 
      url: '/images/deluxe2.webp', 
      category: 'rooms', 
      caption: 'Boutique Deluxe Room Styling', 
      alt: 'Upscale deluxe room side board and warm custom light fixtures' 
    },
    { 
      url: '/images/deluxe3.webp', 
      category: 'rooms', 
      caption: 'Deluxe Suite Twin Bedding', 
      alt: 'Twin bed Deluxe option suited for family members and coworkers' 
    },
    // ROOMS (Executive)
    { 
      url: '/images/executive1.webp', 
      category: 'rooms', 
      caption: 'Executive Master Suite Bed', 
      alt: 'Royal master bed design with cozy cushions inside premium Executive Suite' 
    },
    { 
      url: '/images/executive2.webp', 
      category: 'rooms', 
      caption: 'Executive Suite Sofa Lounge', 
      alt: 'Upholstered high-end seating corner inside executive room' 
    },
    { 
      url: '/images/executive3.webp', 
      category: 'rooms', 
      caption: 'Executive Room Workdesk', 
      alt: 'Full executive desk setup with writing space for business travelers' 
    },
    { 
      url: '/images/executive4.webp', 
      category: 'rooms', 
      caption: 'Executive Suite Cozy Bedding', 
      alt: 'Upscale king dimensions mattress and soft sheets of executive boutique room' 
    },
    { 
      url: '/images/executive5.webp', 
      category: 'rooms', 
      caption: 'Executive Room Coffee Corner', 
      alt: 'In-room electric kettle tray and water arrangement' 
    },
    { 
      url: '/images/executive6.webp', 
      category: 'rooms', 
      caption: 'Executive Suite Scenic View', 
      alt: 'Bright balcony exit and scenic sunrise view of executive guest room' 
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Group images for category headings when "all" is active
  const categoriesList: { value: typeof activeFilter; label: string }[] = [
    { value: 'rooms', label: 'Rooms & Suites' },
    { value: 'bathrooms', label: 'Bathrooms' },
    { value: 'terrace', label: 'Terrace & Views' },
    { value: 'dining', label: 'Dining Hall' },
    { value: 'office', label: 'Office & Reception' },
    { value: 'kitchen', label: 'Kitchen & Pantry' },
    { value: 'outside', label: 'Exterior Facade' },
  ];

  return (
    <div className="pt-24 pb-20 font-sans text-[#16150F] bg-[#FAFAF7]">
      
      {/* Page Header */}
      <section className="bg-white border-b border-[#E8E4DA] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#A8813A] flex items-center justify-center gap-1.5">
            <Camera size={12} className="text-[#A8813A]" /> A Glimpse of RHA Lodges
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#16150F]">
            Visual Gallery
          </h1>
          <p className="text-xs sm:text-sm font-light text-[#8A897E]">
            Take a visual tour around the bedrooms, clean bathrooms, and common spaces of our premium lodges in G-13 Islamabad.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-8 px-4 border-b border-[#E8E4DA]/60 sticky top-[76px] bg-[#FAFAF7]/95 backdrop-blur-md z-30">
        <button
          onClick={() => setActiveFilter('all')}
          className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3.5 py-2 border transition-all duration-200 cursor-pointer ${
            activeFilter === 'all' 
              ? 'bg-[#16150F] text-white border-[#16150F]' 
              : 'bg-white text-[#8A897E] border-[#E8E4DA] hover:border-[#16150F]'
          }`}
        >
          All Photos
        </button>
        {categoriesList.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3.5 py-2 border transition-all duration-200 cursor-pointer ${
              activeFilter === cat.value 
                ? 'bg-[#16150F] text-white border-[#16150F]' 
                : 'bg-white text-[#8A897E] border-[#E8E4DA] hover:border-[#16150F]'
          }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-16">
        {activeFilter !== 'all' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(img.url)}
                className="group relative overflow-hidden h-[250px] border border-[#E8E4DA] bg-white cursor-pointer shadow-sm hover:shadow-lg transition-transform duration-300"
              >
                <img 
                  src={img.url} 
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#16150f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-[#C49B4B] uppercase tracking-widest">{img.category}</span>
                  <h4 className="text-white text-xs font-light mt-1">{img.caption}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grouped by Category sections when 'all' is chosen (Masonry grid look with Section headings)
          categoriesList.map((categoryObj) => {
            const catImages = images.filter(img => img.category === categoryObj.value);
            if (catImages.length === 0) return null;
            return (
              <div key={categoryObj.value} className="space-y-6">
                <div className="border-b border-[#E8E4DA] pb-2 flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-normal text-[#16150F] capitalize">
                    {categoryObj.label}
                  </h2>
                  <span className="text-[10px] text-[#A8813A] font-bold uppercase tracking-wider">
                    {catImages.length} {catImages.length === 1 ? 'Photo' : 'Photos'}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {catImages.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedPhoto(img.url)}
                      className="group relative overflow-hidden h-[250px] border border-[#E8E4DA] bg-white cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <img 
                        src={img.url} 
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#16150f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <span className="text-[9px] font-bold text-[#C49B4B] uppercase tracking-widest">{img.category}</span>
                        <h4 className="text-white text-xs font-light mt-1">{img.caption}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox preview"
        >
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C49B4B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] p-2 bg-black/50 hover:bg-black/80"
            aria-label="Close darkroom light box"
          >
            <X size={26} />
          </button>
          
          <div className="relative max-w-full max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedPhoto} 
              alt="Large preview" 
              className="max-w-full max-h-[85vh] object-contain border border-white/10"
              referrerPolicy="no-referrer"
            />
            {/* Display caption dynamically in lightbox */}
            {(() => {
              const matchedImg = images.find(img => img.url === selectedPhoto);
              if (matchedImg) {
                return (
                  <div className="absolute bottom-0 inset-x-0 bg-black/75 px-6 py-4 border-t border-white/10 text-center">
                    <p className="text-[#C49B4B] text-[10px] font-bold uppercase tracking-wider">{matchedImg.category}</p>
                    <p className="text-white text-sm font-light mt-0.5">{matchedImg.caption}</p>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        </div>
      )}

    </div>
  );
}
