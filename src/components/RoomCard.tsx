import React from 'react';
import { Room } from '../types';
import { GUESTHOUSE_CONFIG } from '../config';
import { User, Maximize2, Compass, ArrowUpRight } from 'lucide-react';

interface RoomCardProps {
  room: any;
  onViewDetails: (id: string) => void;
}

export default function RoomCard({ room, onViewDetails }: RoomCardProps) {
  // Direct requested WhatsApp Booking link helper based on categories
  const getWhatsAppLink = (roomName: string) => {
    const formattedText = encodeURIComponent(`Hi, I want to book the ${roomName}`);
    return `https://wa.me/923337477769?text=${formattedText}`;
  };

  return (
    <article className="card-luxury card-luxury-hover bg-white flex flex-col justify-between h-[540px] group relative focus-within:ring-2 focus-within:ring-[#C49B4B]">
      
      {/* 1. Header Media Area */}
      <div className="relative overflow-hidden h-[240px]">
        <img 
          src={room.imageUrl} 
          alt={`${room.name} interior at RHA`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out sm:group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="luxury-badge">
            {room.tag}
          </span>
        </div>
        
        {/* Dynamic Price floating Badge */}
        <div className="absolute bottom-4 right-4 bg-[#16150f]/90 backdrop-blur-sm text-[#F5EDD8] py-2 px-3.5 border border-[#C49B4B]/20 text-[10px] tracking-wider uppercase">
          <span className="text-[8px] block opacity-70">Starting at</span>
          <span className="font-serif text-sm font-semibold text-white">PKR {room.price.toLocaleString()}</span>
          <span className="text-[8px] lowercase"> / night</span>
        </div>
      </div>

      {/* 2. Room Content Details Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        <div className="space-y-3.5">
          {/* Header & title */}
          <div className="flex justify-between items-baseline">
            <h3 className="font-serif text-[1.375rem] font-normal text-[#16150F] group-hover:text-[#A8813A] transition-colors">
              {room.name}
            </h3>
          </div>

          {/* Core Specs strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium text-[#8A897E]/90 bg-[#FAFAF7] py-2 px-3 border border-[#E8E4DA]/40">
            <span className="flex items-center gap-1.5">
              <User size={12} className="text-[#A8813A]" /> {room.capacity}
            </span>
            <span className="text-[#E8E4DA]">•</span>
            <span className="flex items-center gap-1.5">
              <Compass size={12} className="text-[#A8813A]" /> {room.bedType}
            </span>
            <span className="text-[#E8E4DA]">•</span>
            <span className="flex items-center gap-1.5">
              <Maximize2 size={11} className="text-[#A8813A]" /> {room.size}
            </span>
          </div>

          <p className="text-[11.5px] font-light text-[#8A897E] leading-relaxed line-clamp-2">
            {room.description}
          </p>

          {/* Quick core amenities chips list */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="bg-[#F5EDD8]/50 border border-[#A8813A]/10 text-[9.5px] text-[#A8813A] font-medium tracking-wide px-2 py-0.5 whitespace-nowrap">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-[9.5px] text-[#8A897E] font-medium px-1">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* 3. Action Dual CTAs footer segment */}
        <div className="pt-4 mt-4 border-t border-[#E8E4DA]/65 grid grid-cols-2 gap-3 bg-white">
          <button
            onClick={() => onViewDetails(room.id)}
            aria-label={`View detailed amenities and specifications for ${room.name}`}
            className="text-[10px] font-semibold tracking-[0.14em] uppercase border border-[#E8E4DA] hover:border-[#16150F] text-[#16150F] py-3 text-center transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B]"
          >
            Details <ArrowUpRight size={12} aria-hidden="true" />
          </button>
          
          <a
            href={getWhatsAppLink(room.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${room.name} suite package on WhatsApp`}
            className="text-[10px] font-bold tracking-[0.12em] uppercase bg-[#25D366] hover:bg-emerald-600 text-white py-3 text-center transition-all duration-300 flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            Book Now
          </a>
        </div>

      </div>

    </article>
  );
}
