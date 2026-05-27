import React, { useState } from 'react';
import { roomsData } from '../data/rooms';
import { reviewsData } from '../data/reviews';
import BookingWidget from '../components/BookingWidget';
import RoomCard from '../components/RoomCard';
import { GUESTHOUSE_CONFIG } from '../config';
import { Wifi, Car, Coffee, Shield, Thermometer, Clock, ArrowRight, Star, Check, Plane, Users, MapPin, Sparkles, Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { ActivePage, Room } from '../types';

interface HomeProps {
  onPageChange: (page: ActivePage) => void;
  onSelectRoom: (roomId: string) => void;
}

export default function Home({ onPageChange, onSelectRoom }: HomeProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How far is Islamabad Airport?",
      answer: "RHA Guest House is located approximately 15 minutes away from the Islamabad International Airport via the sign-free, direct lanes of the Srinagar Highway, making arrivals and departures extremely quick and hassle-free."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we provide completely free, fully gated, and highly secure private courtyard parking on-site for all our guests with 24/7 security guard presence."
    },
    {
      question: "Is breakfast included?",
      answer: "Absolutely. We offer a delicious complimentary warm Pakistani breakfast (featuring hot parathas, custom omelettes, and Karak tea) or Continental options served daily in our clean dining lounge."
    },
    {
      question: "Is WiFi free?",
      answer: "Yes, we provide complimentary ultra-fast, premium fiber optic Wi-Fi connection throughout all guest rooms, sitting lounges, and outdoor spaces."
    },
    {
      question: "How can I book a room?",
      answer: "You can book directly with us by clicking any of our 'Book on WhatsApp' buttons to connect instantly with our 24/7 reservation desk, or you can use our online details inquiry system to request a custom package."
    },
    {
      question: "Is family stay available?",
      answer: "Yes, RHA Guest House is fully family-friendly. We maintain a very quiet, secure, and highly ethical lodging standard strictly catered for families, diplomatic staffers, and corporate executives visiting Islamabad."
    }
  ];
  // We can render standard Lucide icons based on standard strings
  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'Free WiFi':
        return <Wifi size={18} />;
      case 'Free Parking':
        return <Car size={18} />;
      case 'Breakfast':
        return <Coffee size={18} />;
      case 'Security':
        return <Shield size={18} />;
      case 'AC All Rooms':
        return <Thermometer size={18} />;
      case '24/7 Service':
        return <Clock size={18} />;
      default:
        return <Check size={18} />;
    }
  };

  const overviewAmenities = [
    { title: 'Free WiFi', desc: 'Premium high-speed optic fiber Wi-Fi throughout the entire building.', icon: <Wifi size={18} /> },
    { title: 'Free Parking', desc: 'Gated, secure, and spacious parking located in our private courtyard.', icon: <Car size={18} /> },
    { title: '24/7 Security', desc: 'Vigilant guard support, high boundary fences, and active CCTV coverage.', icon: <Shield size={18} /> },
    { title: 'Air Conditioned Rooms', desc: 'Fitted climate-control AC inverters keeping you completely relaxed.', icon: <Thermometer size={18} /> },
    { title: 'Family Friendly', desc: 'Quiet, ethical, and entirely secure environment for families.', icon: <Users size={18} /> },
    { title: 'Breakfast Available', desc: 'Hot cooked parathas, customized omelettes, and Karak tea.', icon: <Coffee size={18} /> },
    { title: 'Daily Housekeeping', desc: 'Spotless cleanliness routines with new linens and standard setups.', icon: <Sparkles size={18} /> },
    { title: 'Near Srinagar Highway', desc: 'Incredibly easy transport access located in prime G-13/1.', icon: <MapPin size={18} /> },
    { title: 'Near Airport', desc: 'Strategic highway connection gets you to Islamabad Airport in 15 mins.', icon: <Plane size={18} /> },
    { title: 'Comfortable Executive Rooms', desc: 'Upscale furniture, work desks, sofa seating, and Smart TV screens.', icon: <Star size={18} /> },
  ];

  const handleRoomClick = (roomId: string) => {
    onSelectRoom(roomId);
    onPageChange('rooms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans flex flex-col min-h-screen">
      
      {/* 1. HERO HEADER AREA */}
      <header className="relative min-h-[680px] h-screen flex items-center justify-center overflow-hidden">
        {/* Optimized Hero Background image using prioritised img tag to secure optimal FCP & LCP */}
        <img 
          src="/images/room_executive_blue.webp" 
          alt="Luxury premium suite at RHA Guest House Islamabad" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 saturate-110 select-none pointer-events-none"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        {/* Dark elegant premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16150f] via-[#16150f]/75 to-[#16150f]/50 z-20" />
        
        {/* Hero Content */}
        <div className="relative z-30 text-center px-6 max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 bg-[#C49B4B]/15 backdrop-blur-md border border-[#C49B4B]/30 py-2 px-5 mb-8 rounded-none">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C49B4B] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-white">
              Boutique Hospitality — Islamabad Capital Territory
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.12] tracking-tight mb-6">
            Your Premium Stay<br className="hidden sm:inline" /> in Islamabad
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base font-light text-white/80 leading-relaxed max-w-2xl mb-8">
            Elegant guest house in G-13 Islamabad near Srinagar Highway. 15 mins from Islamabad Airport, Faisal Masjid, Centaurus Mall, and Pakistan Monument.
          </p>

          {/* Premium Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#F5EDD8]">
              <Star size={11} className="fill-[#C49B4B] text-[#C49B4B]" /> 4.9 Guest Rating
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white">
              <Wifi size={11} className="text-[#C49B4B]" /> Free WiFi
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white">
              <Car size={11} className="text-[#C49B4B]" /> Free Parking
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white">
              <Check size={11} className="text-[#C49B4B]" /> Family Friendly
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="https://wa.me/923337477769"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] text-white text-xs font-bold tracking-[0.14em] uppercase py-4.5 px-8 shadow-lg transition-all duration-300 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="fill-current" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/></svg>
              Book on WhatsApp
            </a>
            <button
              onClick={() => onPageChange('rooms')}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/45 hover:border-white text-white text-xs font-semibold tracking-[0.14em] uppercase py-4.5 px-8 transition-all duration-300 cursor-pointer w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Explore Rooms
            </button>
          </div>
        </div>

      </header>

      {/* FLOATING BOOKING WIDGET (OVERLAY) - Positioned relative and outside overflow-hidden header */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 -mt-16 md:-mt-10 mb-8 md:mb-0">
        <BookingWidget />
      </div>

      {/* Spacer for Floating Widget on Desktop & Mobile */}
      <div className="h-10 md:h-20 bg-[#FAFAF7]" />

      {/* 2. LUXURY TRUST STRIP */}
      <section className="bg-white py-12 px-6 md:px-16 border-b border-[#E8E4DA] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-start text-center">
            
            {/* Stat 1: 4.9 Rating */}
            <div className="flex flex-col items-center p-2 space-y-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#A8813A] transition-transform duration-300 group-hover:scale-105">
                <Star size={16} className="fill-[#A8813A]" />
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#16150F]">4.9 Rating</span>
                <span className="block text-[9px] font-medium tracking-[0.16em] uppercase text-[#8A897E] mt-1 leading-snug">Outstanding Guest Reviews</span>
              </div>
            </div>

            {/* Stat 2: 24/7 Service */}
            <div className="flex flex-col items-center p-2 space-y-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#A8813A] transition-transform duration-300 group-hover:scale-105">
                <Clock size={16} />
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#16150F]">24/7 Service</span>
                <span className="block text-[9px] font-medium tracking-[0.16em] uppercase text-[#8A897E] mt-1 leading-snug">Round-the-Clock Attendants</span>
              </div>
            </div>

            {/* Stat 3: Free Parking */}
            <div className="flex flex-col items-center p-2 space-y-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#A8813A] transition-transform duration-300 group-hover:scale-105">
                <Car size={16} />
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#16150F]">Free Parking</span>
                <span className="block text-[9px] font-medium tracking-[0.16em] uppercase text-[#8A897E] mt-1 leading-snug">Secure Gated Courtyard</span>
              </div>
            </div>

            {/* Stat 4: Near Islamabad Airport */}
            <div className="flex flex-col items-center p-2 space-y-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#A8813A] transition-transform duration-300 group-hover:scale-105">
                <Plane size={16} />
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#16150F]">Near Airport</span>
                <span className="block text-[9px] font-medium tracking-[0.16em] uppercase text-[#8A897E] mt-1 leading-snug">15 Mins via Srinagar Hwy</span>
              </div>
            </div>

            {/* Stat 5: Family Friendly */}
            <div className="flex flex-col items-center p-2 space-y-2.5 col-span-2 md:col-span-1 group">
              <div className="w-10 h-10 rounded-full bg-[#F5EDD8] flex items-center justify-center text-[#A8813A] transition-transform duration-300 group-hover:scale-105">
                <Users size={16} />
              </div>
              <div>
                <span className="block font-serif text-xl font-normal text-[#16150F]">Family Friendly</span>
                <span className="block text-[9px] font-medium tracking-[0.16em] uppercase text-[#8A897E] mt-1 leading-snug">Safe & Peaceful Living</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LUXURY ACCOMMODATION SNAPSHOT */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-[9px] font-semibold tracking-[0.26em] uppercase text-[#A8813A]">Accommodations</span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
              Sophisticated Suites<br />& Comfort Rooms
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#8A897E] max-w-md">
              Each choice has been curated to serve business professionals, diplomats, and families visiting Islamabad with an uncompromising standard.
            </p>
          </div>
          
          <button
            onClick={() => onPageChange('rooms')}
            aria-label="Browse full catalog of suites and rooms"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#A8813A] hover:text-[#16150F] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A]"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Rooms Showcase Layout - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard 
              key={room.id} 
              {...({ room, onViewDetails: handleRoomClick } as any)} 
            />
          ))}
        </div>
      </section>

      {/* 4. PREMIUM AMENITIES & CONVENIENCES SECTION */}
      <section className="bg-[#1A1914] text-white py-24 px-6 md:px-16 border-t border-b border-[#E8E4DA]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C49B4B] block">
              Amenities & Services
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Crafted for Your Absolute Comfort
            </h2>
            <p className="text-xs sm:text-sm font-light text-white/60 leading-relaxed">
              Every detail of your experience at RHA Guest House is curated to provide seamless corporate, diplomatic, and family stays right near the heart of the capital.
            </p>
          </div>

          {/* Premium 10-Item Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {overviewAmenities.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/2 border border-white/5 p-6 hover:bg-white/5 hover:border-[#C49B4B]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-10 h-10 border border-[#C49B4B]/20 group-hover:border-[#C49B4B]/55 flex items-center justify-center text-[#C49B4B] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-semibold text-white group-hover:text-[#C49B4B] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer Block */}
          <div className="text-center pt-4">
            <button
              onClick={() => onPageChange('about')}
              className="inline-flex items-center gap-2 bg-[#C49B4B] hover:bg-[#A8813A] text-[#16150f] text-xs font-bold tracking-[0.14em] uppercase py-4 px-8 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2"
            >
              Explore Full Guest Story
            </button>
          </div>
          
        </div>
      </section>

      {/* 4.5. NEARBY ATTRACTIONS & LOCAL SEO STRATEGIC CONNECTIVITY */}
      <section className="bg-[#FAFAF7] py-24 px-6 md:px-16 border-b border-[#E8E4DA] relative z-20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header with semantic local positioning */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
                Strategic Location & Connectivity
              </span>
              <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
                Explore Islamabad's Top Landmarks
              </h2>
              <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed">
                Located in the prestigious <strong className="font-medium text-[#16150F]">G-13 sector of Islamabad</strong> near the <strong className="font-semibold text-[#16150F]">Srinagar Highway</strong> entry ramps, <strong className="text-[#A8813A] font-medium">RHA GUEST HOUSE</strong> places you within minutes of major transport lanes, commercial hotspots, and tourist destinations.
              </p>
            </div>
            
            {/* Address badge */}
            <div className="bg-white border border-[#E8E4DA] p-5 text-left min-w-[260px] self-stretch md:self-auto flex flex-col justify-center">
              <span className="text-[9px] font-semibold tracking-wider uppercase text-[#8A897E] block">Search Location</span>
              <p className="font-serif text-xs font-semibold text-[#16150F] flex items-center gap-2.5 mt-1.5">
                <MapPin size={14} className="text-[#A8813A] shrink-0" /> G-13 Islamabad, Srinagar Highway
              </p>
              <span className="text-[10px] font-light text-[#8A897E] mt-1">Easy Uber/Careem pick-ups and food deliveries</span>
            </div>
          </div>

          {/* Core Attractions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Attraction 1: Islamabad International Airport */}
            <div className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md hover:border-[#A8813A]/45 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#A8813A]/25 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] transition-all group-hover:bg-[#F5EDD8]">
                  <Plane size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">15 Mins Drive</span>
                  <h3 className="font-serif text-lg font-normal text-[#16150F] mt-1 group-hover:text-[#A8813A] transition-colors">Islamabad Airport</h3>
                  <p className="text-[11px] font-light text-[#8A897E] leading-relaxed mt-2">
                    Enjoy seamless, signal-free travel to the flight gates using the Srinagar Highway. Ideal for international travelers.
                  </p>
                </div>
              </div>
            </div>

            {/* Attraction 2: Faisal Masjid */}
            <div className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md hover:border-[#A8813A]/45 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#A8813A]/25 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] transition-all group-hover:bg-[#F5EDD8]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">18 Mins Drive</span>
                  <h3 className="font-serif text-lg font-normal text-[#16150F] mt-1 group-hover:text-[#A8813A] transition-colors">Faisal Masjid</h3>
                  <p className="text-[11px] font-light text-[#8A897E] leading-relaxed mt-2">
                    Visit the national mosque of Pakistan, situated majestically at the northernmost point of the capital against Margalla Hills.
                  </p>
                </div>
              </div>
            </div>

            {/* Attraction 3: Centaurus Mall */}
            <div className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md hover:border-[#A8813A]/45 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#A8813A]/25 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] transition-all group-hover:bg-[#F5EDD8]">
                  <Compass size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">15 Mins Drive</span>
                  <h3 className="font-serif text-lg font-normal text-[#16150F] mt-1 group-hover:text-[#A8813A] transition-colors">Centaurus Mall</h3>
                  <p className="text-[11px] font-light text-[#8A897E] leading-relaxed mt-2">
                    A premier retail landmark and shopping core, featuring high-end international brands and exceptional restaurant dining sets.
                  </p>
                </div>
              </div>
            </div>

            {/* Attraction 4: Pakistan Monument */}
            <div className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md hover:border-[#A8813A]/45 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#A8813A]/25 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] transition-all group-hover:bg-[#F5EDD8]">
                  <Star size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">13 Mins Drive</span>
                  <h3 className="font-serif text-lg font-normal text-[#16150F] mt-1 group-hover:text-[#A8813A] transition-colors">Pakistan Monument</h3>
                  <p className="text-[11px] font-light text-[#8A897E] leading-relaxed mt-2">
                    Located on Shakarparian hills, this striking petaled monument represents national unity, cultural legacy, and panoramic city views.
                  </p>
                </div>
              </div>
            </div>

            {/* Attraction 5: F-10 Markaz */}
            <div className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md hover:border-[#A8813A]/45 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#A8813A]/25 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] transition-all group-hover:bg-[#F5EDD8]">
                  <Users size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">12 Mins Drive</span>
                  <h3 className="font-serif text-lg font-normal text-[#16150F] mt-1 group-hover:text-[#A8813A] transition-colors">F-10 Markaz</h3>
                  <p className="text-[11px] font-light text-[#8A897E] leading-relaxed mt-2">
                    Explore one of the busiest business and dining markazs in Islamabad, complete with leading financial services, cafes, and markets.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GUEST FEEDBACK SLIDER REVIEWS */}
      <section className="bg-[#FAF9F5] py-24 px-6 md:px-16 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-24">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
              Boutique Hospitality Reviews
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed">
              We take immense pride in preserving absolute security, perfect sanitization standards, and custom hospitality.
            </p>
            <div className="flex items-center gap-4 bg-white border border-[#E8E4DA] p-5">
              <span className="font-serif text-5xl font-normal text-[#16150F]">4.9</span>
              <div>
                <div className="flex gap-0.5 text-[#A8813A]">
                  <Star size={13} className="fill-[#A8813A]" />
                  <Star size={13} className="fill-[#A8813A]" />
                  <Star size={13} className="fill-[#A8813A]" />
                  <Star size={13} className="fill-[#A8813A]" />
                  <Star size={13} className="fill-[#A8813A]" />
                </div>
                <p className="text-[10px] font-semibold tracking-wider text-[#16150F] uppercase mt-1">Average Rating</p>
                <p className="text-[10px] font-light text-[#8A897E] mt-0.5">Verified stays near Srinagar Highway</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {reviewsData.map((review) => (
              <div 
                key={review.id} 
                className="bg-white border border-[#E8E4DA] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 text-[#C49B4B] mb-4">
                    <Star size={12} className="fill-[#C49B4B]" />
                    <Star size={12} className="fill-[#C49B4B]" />
                    <Star size={12} className="fill-[#C49B4B]" />
                    <Star size={12} className="fill-[#C49B4B]" />
                    <Star size={12} className="fill-[#C49B4B]" />
                  </div>
                  <p className="font-serif text-[15px] italic text-[#2C2B24] leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DA]/50">
                  <div className="w-10 h-10 rounded-full bg-[#F5EDD8] border border-[#A8813A]/20 flex items-center justify-center font-serif text-xs font-semibold text-[#A8813A] uppercase">
                    {review.avatarChar}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#16150F]">{review.author}</h4>
                    <p className="text-[10px] font-medium tracking-wide text-[#8A897E] uppercase mt-0.5">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5. PREMIUM HOMEPAGE GALLERY PREVIEW SECTION */}
      <section className="bg-white py-24 px-6 md:px-16 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Block */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
              Aesthetic Visual Tour
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
              Premium Interior Preview
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed">
              Step inside RHA Guest House in G-13 Islamabad. Tour our pristine execution spaces, elegant fittings, and calm environments.
            </p>
          </div>

          {/* Premium Asymmetric Masonry/Grid of 6 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Gallery Item 1: Facade Entrance */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/resort_pool_guesthouse.webp" 
                alt="RHA Guest House outdoor ambient view"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Exterior Facade</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Atmospheric Entrance</h4>
              </div>
            </div>

            {/* Gallery Item 2: Executive Room */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/luxury_suite_art.webp" 
                alt="Executive suite room styling and interior layout"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Executive Suite</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Crafted Corporate Sanctuary</h4>
              </div>
            </div>

            {/* Gallery Item 3: Deluxe bedding */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/room_deluxe_green.webp" 
                alt="Pristine white boutique bed setup"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Boutique Details</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Pristine Linen & Hygiene</h4>
              </div>
            </div>

            {/* Gallery Item 4: Modern Bunk Space */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/guesthouse_bunk_beds.webp" 
                alt="High-end bunk room and dual layout setup"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Bunk/Cozy space</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Modern Fitting Standards</h4>
              </div>
            </div>

            {/* Gallery Item 5: Twilight Evening Courtyard */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/resort_evening_pool.webp" 
                alt="Illuminated twilight pool and dining area"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Boutique Evening</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Twilight Pool Reflections</h4>
              </div>
            </div>

            {/* Gallery Item 6: Comfort Suite */}
            <div className="relative overflow-hidden group aspect-[4/3] bg-[#16150f] border border-[#E8E4DA]/40 shadow-sm focus-within:ring-2 focus-within:ring-[#C49B4B]">
              <img 
                src="/images/room_standard_gray.webp" 
                alt="Comfort executive bedroom suite"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out sm:group-hover:scale-105 opacity-90 sm:group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#16150f]/85 via-[#16150f]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[8px] font-bold text-[#C49B4B] tracking-[0.16em] uppercase block">Boutique Suite</span>
                <h4 className="font-serif text-sm text-white font-normal mt-0.5">Relaxed Living Environment</h4>
              </div>
            </div>

          </div>

          {/* CTA Footer Wrapper */}
          <div className="text-center pt-4">
            <button
              onClick={() => onPageChange('gallery')}
              className="inline-flex items-center gap-2 bg-[#16150F] hover:bg-[#A8813A] text-white text-xs font-semibold tracking-[0.14em] uppercase py-4 px-8 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2"
            >
              View Full Gallery
            </button>
          </div>

        </div>
      </section>

      {/* 5.8. SEO-FRIENDLY ACCESSIBLE FAQ ACCORDION SECTION */}
      <section 
        className="bg-white py-24 px-6 md:px-16 border-b border-[#E8E4DA]" 
        id="faq-section"
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
              Frequently Answered Queries
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed max-w-2xl mx-auto">
              Find quick answers to common questions about your premium boutique stay at RHA Guest House in G-13 Islamabad.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-[#E8E4DA] bg-[#FAFAF7] hover:border-[#16150f]/30 transition-all duration-300"
                  itemProp="mainEntity" 
                  itemScope 
                  itemType="https://schema.org/Question"
                >
                  {/* Accordion Header Trigger */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 group focus:outline-none focus:bg-[#F5EDD8]/30 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A8813A]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-header-${index}`}
                    type="button"
                  >
                    <span 
                      itemProp="name" 
                      className="font-serif text-[15px] sm:text-[17px] font-normal text-[#16150F] group-hover:text-[#A8813A] transition-colors"
                    >
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#8A897E] group-hover:text-[#A8813A] transition-colors" aria-hidden="true">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Accordion Content Panel with elegant maxHeight css animation */}
                  <div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
                    style={{ maxHeight: isOpen ? '240px' : '0' }}
                    itemProp="acceptedAnswer" 
                    itemScope 
                    itemType="https://schema.org/Answer"
                  >
                    <div className="p-5 sm:p-6 text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed bg-white border-t border-[#E8E4DA]">
                      <div itemProp="text" className="space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. PREMIUM WHATSAPP BOOKING CONVERSION CTA */}
      <section className="bg-[#16150F] text-white py-24 px-6 md:px-16 relative overflow-hidden border-t border-white/5">
        
        {/* Abstract design elements reinforcing upscale boutique background aesthetics */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C49B4B] block">
              Boutique Lodging Experience
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-white leading-tight">
              Reserve Your Stay in Islamabad
            </h2>
            <p className="text-xs sm:text-base font-light text-white/75 leading-relaxed max-w-2xl mx-auto">
              Book directly on WhatsApp for quick confirmation and personalized assistance.
            </p>
          </div>

          {/* Core Booking Trigger Action button */}
          <div className="flex flex-col items-center gap-6 pt-2">
            <a
              href="https://wa.me/923337477769"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] hover:scale-[1.02] text-white text-xs font-bold tracking-[0.16em] uppercase py-5 px-10 shadow-2xl transition-all duration-300 w-full sm:w-auto text-center justify-center rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="fill-current shrink-0" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              Book on WhatsApp
            </a>

            {/* Structured Premium Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-10 border-t border-white/10 w-full max-w-2xl mx-auto">
              {/* Metric 1 */}
              <div className="space-y-1 text-center">
                <span className="block text-white font-serif text-xs sm:text-sm font-semibold tracking-wide">Instant response</span>
                <span className="block text-[9px] text-white/40 uppercase tracking-widest leading-none mt-1">24/7 Concierge Support</span>
              </div>
              {/* Metric 2 */}
              <div className="space-y-1 text-center border-x border-white/10 px-2">
                <span className="block text-white font-serif text-xs sm:text-sm font-semibold tracking-wide">Easy booking</span>
                <span className="block text-[9px] text-[#25D366] font-semibold uppercase tracking-widest leading-none mt-1">Direct Chat Sync</span>
              </div>
              {/* Metric 3 */}
              <div className="space-y-1 text-center">
                <span className="block text-white font-serif text-xs sm:text-sm font-semibold tracking-wide">Secure stay</span>
                <span className="block text-[9px] text-white/40 uppercase tracking-widest leading-none mt-1">Safe G-13 Courtyard</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
