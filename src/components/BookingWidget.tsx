import React, { useState } from 'react';
import { Calendar, Users, Home as RoomIcon, MessageSquare, ChevronDown } from 'lucide-react';
import { GUESTHOUSE_CONFIG } from '../config';

export default function BookingWidget() {
  // Set default Check-In as tomorrow, and Check-Out as the day after tomorrow
  const getTomorrowString = () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  const getDayAfterTomorrowString = () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() + 2);
      return date.toISOString().split('T')[0];
    } catch {
      return '';
    }
  };

  const [checkIn, setCheckIn] = useState(getTomorrowString());
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrowString());
  const [roomType, setRoomType] = useState('Executive Suite');
  const [guests, setGuests] = useState('2 Adults');

  const rooms = ['Executive Suite', 'Deluxe Room', 'Family Room'];
  const guestOptions = ['1 Adult', '2 Adults', '3 Adults', 'Family (4+ Guests)'];

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format dates nicely for WhatsApp message text
    const formatDate = (dateString: string) => {
      if (!dateString) return 'Not selected';
      try {
        const parts = dateString.split('-');
        if (parts.length === 3) {
          const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
          return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        }
        return dateString;
      } catch {
        return dateString;
      }
    };

    const cin = formatDate(checkIn);
    const cout = formatDate(checkOut);
    
    const message = `Hello RHA Guest House Islamabad! 👋\n\n` +
      `I would like to check room availability and rates for a premium stay on your boutique property:\n\n` +
      `🏨 Bed/Room Type: *${roomType}*\n` +
      `📅 Check-In Date: *${cin}*\n` +
      `📅 Check-Out Date: *${cout}*\n` +
      `👥 Total Guests: *${guests}*\n\n` +
      `Please let me know of availability, rate packages, and booking confirmation process. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${GUESTHOUSE_CONFIG.whatsappNumberUrl}?text=${encodedText}`;
    
    // Redirect to WhatsApp - secure and respects popup restrictions
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form 
      onSubmit={handleBookNow}
      className="bg-white border border-[#E8E4DA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 shadow-2l max-w-[950px] w-full mx-auto relative z-30 transition-all font-sans"
    >
      {/* 1. Check-In */}
      <div className="p-5 px-6 flex flex-col gap-1.5 border-b border-[#E8E4DA] sm:border-r">
        <label htmlFor="booking-checkin" className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#A8813A] flex items-center gap-1 cursor-pointer">
          <Calendar size={10} /> Check-In
        </label>
        <input
          id="booking-checkin"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          aria-required="true"
          className="text-[13px] font-medium text-[#16150F] bg-transparent border-none outline-none w-full p-0 mt-0.5 cursor-pointer focus:ring-0 focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm"
        />
      </div>

      {/* 2. Check-Out */}
      <div className="p-5 px-6 flex flex-col gap-1.5 border-b border-[#E8E4DA] lg:border-r">
        <label htmlFor="booking-checkout" className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#A8813A] flex items-center gap-1 cursor-pointer">
          <Calendar size={10} /> Check-Out
        </label>
        <input
          id="booking-checkout"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn || new Date().toISOString().split('T')[0]}
          aria-required="true"
          className="text-[13px] font-medium text-[#16150F] bg-transparent border-none outline-none w-full p-0 mt-0.5 cursor-pointer focus:ring-0 focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm"
        />
      </div>

      {/* 3. Room Type */}
      <div className="p-5 px-6 flex flex-col gap-1.5 border-b border-[#E8E4DA] sm:border-b-0 sm:border-r">
        <label htmlFor="booking-room" className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#A8813A] flex items-center gap-1 cursor-pointer">
          <RoomIcon size={10} /> Room Type
        </label>
        <div className="relative mt-0.5">
          <select
            id="booking-room"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="text-[13px] font-medium text-[#16150F] bg-transparent border-none outline-none w-full p-0 pr-6 cursor-pointer focus:ring-0 focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm appearance-none relative z-10"
          >
            {rooms.map((room) => (
              <option key={room} value={room} className="text-[#16150F] bg-white">
                {room}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#8A897E] z-0">
            <ChevronDown size={11} className="opacity-75" />
          </div>
        </div>
      </div>

      {/* 4. Guests */}
      <div className="p-5 px-6 flex flex-col gap-1.5 border-b border-[#E8E4DA] sm:border-b-0 lg:border-r">
        <label htmlFor="booking-guests" className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#A8813A] flex items-center gap-1 cursor-pointer">
          <Users size={10} /> Guests
        </label>
        <div className="relative mt-0.5">
          <select
            id="booking-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="text-[13px] font-medium text-[#16150F] bg-transparent border-none outline-none w-full p-0 pr-6 cursor-pointer focus:ring-0 focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm appearance-none relative z-10"
          >
            {guestOptions.map((opt) => (
              <option key={opt} value={opt} className="text-[#16150F] bg-white">
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#8A897E] z-0">
            <ChevronDown size={11} className="opacity-75" />
          </div>
        </div>
      </div>

      {/* 5. Booking CTA Support */}
      <div className="sm:col-span-2 lg:col-span-1 flex">
        <button
          type="submit"
          className="bg-[#16150F] hover:bg-[#25D366] text-white transition-all duration-300 w-full px-6 py-4.5 lg:py-0 font-bold text-[10px] tracking-[0.14em] uppercase flex items-center justify-center gap-2 cursor-pointer min-h-[52px] lg:min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B]"
          aria-label="Submit WhatsApp booking inquiry details"
        >
          <MessageSquare size={13} className="text-white fill-current shrink-0" />
          <span className="text-center">Check WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
