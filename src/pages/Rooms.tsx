import React, { useEffect } from 'react';
import { roomsData } from '../data/rooms';
import { GUESTHOUSE_CONFIG } from '../config';
import { Check, MessageSquare } from 'lucide-react';
import { Room } from '../types';
import RoomCarousel from '../components/RoomCarousel';

interface RoomsPageProps {
  selectedRoomId?: string | null;
  onClearSelectedRoom?: () => void;
}

export default function Rooms({ selectedRoomId, onClearSelectedRoom }: RoomsPageProps) {
  
  useEffect(() => {
    if (selectedRoomId) {
      const element = document.getElementById(selectedRoomId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [selectedRoomId]);

  const handleInquiry = (room: Room) => {
    const formattedText = encodeURIComponent(`Hi, I want to book the ${room.name}`);
    const waUrl = `https://wa.me/${GUESTHOUSE_CONFIG.whatsappNumberUrl}?text=${formattedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-20 font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#FFFFFF] border-b border-[#E8E4DA] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#A8813A]">
            Luxurious Accommodations
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#16150F]">
            Rooms & Suites
          </h1>
          <p className="text-xs sm:text-sm font-light text-[#8A897E]">
            Premium guest rooms designed with unyielding comfort and quiet local aesthetic in mind. Fresh mornings start here in G-13, Islamabad.
          </p>
        </div>
      </div>

      {/* Main Rooms Checklist Container */}
      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16">
        {roomsData.map((room, index) => (
          <div 
            key={room.id}
            id={room.id}
            className={`flex flex-col lg:flex-row items-stretch border border-[#E8E4DA] bg-white transition-all hover:shadow-lg ${
              selectedRoomId === room.id ? 'ring-2 ring-[#C49B4B] shadow-md' : ''
            }`}
          >
            {/* Image Block with Premium Carousel */}
            <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-auto flex flex-col justify-stretch">
              <RoomCarousel images={room.carouselImages} roomName={room.name} />
              <div className="absolute top-4 left-4 bg-[#16150F] text-[#C49B4B] text-[8px] font-semibold tracking-wider uppercase py-1.5 px-3 z-10">
                {room.tag}
              </div>
            </div>

            {/* Spec details block */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-normal text-[#16150F] mb-2">{room.name}</h2>
                  <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Key specs */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#E8E4DA]/60">
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#A8813A]">Capacity</span>
                    <span className="text-xs text-[#16150F] mt-0.5 block">{room.capacity}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#A8813A]">Bedding</span>
                    <span className="text-xs text-[#16150F] mt-0.5 block">{room.bedType}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#A8813A]">Room Size</span>
                    <span className="text-xs text-[#16150F] mt-0.5 block">{room.size}</span>
                  </div>
                </div>

                {/* Amenities pills */}
                <div>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-[#A8813A] mb-3">Room Inclusions</span>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amen, idx) => (
                      <span key={idx} className="bg-[#FAEFAF7]/10 border border-[#E8E4DA] text-[#2C2B24] text-[10px] font-light py-1 px-2.5 flex items-center gap-1.5 rounded-none">
                        <Check size={9} className="text-[#A8813A]" /> {amen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking elements footer */}
              <div className="pt-8 mt-8 border-t border-[#E8E4DA] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
                <div>
                  <span className="text-[10px] uppercase font-light text-[#8A897E]">Price Per Night</span>
                  <div className="font-serif text-2xl font-semibold text-[#16150F]">
                    PKR {room.price.toLocaleString()}
                    <span className="text-xs font-sans font-light text-[#8A897E]"> / net rate</span>
                  </div>
                </div>

                <button
                  onClick={() => handleInquiry(room)}
                  aria-label={`Ask reservations desk about booking the ${room.name} standard starting at PKR ${room.price.toLocaleString()} per night`}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase py-4 px-6 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  <MessageSquare size={13} className="fill-current" aria-hidden="true" />
                  <span>Reserve via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Engine Friendly Contextual Navigation Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-12 border-t border-[#E8E4DA] text-center space-y-4">
        <p className="text-xs sm:text-sm font-light text-[#8A897E]">
          Unsure which accommodation best fits your travel itinerary? Read more <a href="#about" className="text-[#A8813A] font-medium underline decoration-[#C49B4B]/30 hover:decoration-[#A8813A] transition-colors">about RHA Lodges comforts & services</a> or browse our <a href="#gallery" className="text-[#A8813A] font-medium underline decoration-[#C49B4B]/30 hover:decoration-[#A8813A] transition-colors">pristine photo gallery</a>. For booking support, feel free to <a href="#contact" className="text-[#A8813A] font-medium underline decoration-[#C49B4B]/30 hover:decoration-[#A8813A] transition-colors">contact our 24/7 guest desk</a> instantly.
        </p>
      </div>

    </div>
  );
}
