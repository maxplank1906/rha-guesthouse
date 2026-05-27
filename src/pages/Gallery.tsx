import { useState } from 'react';
import { Camera, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'baths' | 'lounges'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const images = [
    { url: '/images/room_executive_blue.webp', category: 'rooms', caption: 'The Executive Suite Bedroom' },
    { url: '/images/room_standard_gray.webp', category: 'rooms', caption: 'Standard Modern King Setup' },
    { url: '/images/room_deluxe_green.webp', category: 'rooms', caption: 'Boutique Deluxe Room Styling' },
    { url: '/images/guesthouse_bunk_beds.webp', category: 'rooms', caption: 'Sophisticated Shared Dorm Setup' },
    { url: '/images/luxury_suite_art.webp', category: 'rooms', caption: 'Luxury Art Deco Bedroom' },
    { url: '/images/resort_pool_guesthouse.webp', category: 'lounges', caption: 'Classic Courtyard Facade' },
    { url: '/images/resort_evening_pool.webp', category: 'lounges', caption: 'Poolside Lounge Sitting' },
    { url: '/images/resort_sunset_palm.webp', category: 'lounges', caption: 'Stunning Sunset Courtyard' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="pt-24 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="bg-white border-b border-[#E8E4DA] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#A8813A]">
            A Glimpse of Serene Stay
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#16150F]">
            Visual Gallery
          </h1>
          <p className="text-xs sm:text-sm font-light text-[#8A897E]">
            Take a visual tour around the bedrooms, clean bathrooms, and shared spaces of our G-13 Islamabad RHA Guest House.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 py-8 border-b border-[#E8E4DA]/60">
        {(['all', 'rooms', 'baths', 'lounges'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 border transition-all duration-200 cursor-pointer ${
              activeFilter === filter 
                ? 'bg-[#16150F] text-white border-[#16150F]' 
                : 'bg-transparent text-[#8A897E] border-transparent hover:border-[#E8E4DA]'
            }`}
          >
            {filter === 'all' ? 'All Photos' : filter === 'rooms' ? 'Rooms' : filter === 'baths' ? 'Bath' : 'Lobby & Dining'}
          </button>
        ))}
      </div>

      {/* Gallery Photo Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedPhoto(img.url)}
              className="group relative overflow-hidden h-[240px] border border-[#E8E4DA] bg-white cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={img.url} 
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#16150f]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-[#C49B4B] uppercase tracking-widest">{img.category}</span>
                <h4 className="text-white text-xs font-light mt-1">{img.caption}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C49B4B] transition-colors focus:outline-none"
          >
            <X size={26} />
          </button>
          <img 
            src={selectedPhoto} 
            alt="Large preview" 
            className="max-w-full max-h-[85vh] object-contain border border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

    </div>
  );
}
