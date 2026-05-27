import React from 'react';
import { Wifi, Car, Coffee, Shield, Thermometer, Clock, Flame, Wind, MapPin, Stars } from 'lucide-react';
import { GUESTHOUSE_CONFIG } from '../config';

export default function About() {
  const premiumFacilities = [
    {
      category: 'In-Room Luxury',
      items: [
        { name: 'Climate Control AC Inverters', desc: 'Individually adjustable cooling & heating to guarantee perfect sleep inside core Islamabad seasons.', icon: <Thermometer className="text-[#A8813A]" /> },
        { name: 'Modern Attached Bathrooms', desc: 'Fitted with local premium ceramics, fresh towels, shampoo, and high-pressure hot & cold water.', icon: <Wind className="text-[#A8813A]" /> },
        { name: 'Smart LED 4K Screens', desc: 'Instant access to Netflix, YouTube, and sports streaming during your leisure time.', icon: <Wifi className="text-[#A8813A]" /> },
      ],
    },
    {
      category: 'Safety & Convenience',
      items: [
        { name: '24/7 Gated Security Guard', desc: 'Active security checks, high gateway enclosures, and meticulous check-in verifications.', icon: <Shield className="text-[#A8813A]" /> },
        { name: 'CCTV Surveillance Cover', desc: 'State-of-the-art HD security cams tracking boundaries and public lounges round the clock.', icon: <Shield className="text-[#A8813A]" /> },
        { name: 'Complimentary Secure Parking', desc: 'Ample well-lit parking space inside the secure perimeter for personal or business SUVs and sedans.', icon: <Car className="text-[#A8813A]" /> },
      ],
    },
    {
      category: 'Gourmet & Care',
      items: [
        { name: 'Complimentary Cooked Breakfast', desc: 'Made-to-order desi omelettes, parathas, toast, preserves, and gourmet hot Karak tea.', icon: <Coffee className="text-[#A8813A]" /> },
        { name: '24/7 Room Attendants', desc: 'Fresh local tea, dry cleaning service, extra pillows, or luggage transfers are always a text away.', icon: <Clock className="text-[#A8813A]" /> },
        { name: 'Standby Power Generation', desc: 'Equipped with heavy duty power backup to prevent load-shedding and keep all systems online.', icon: <Flame className="text-[#A8813A]" /> },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 font-sans">
      
      {/* 1. Header Hero Banner */}
      <div className="bg-white border-b border-[#E8E4DA] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] font-semibold tracking-[0.26em] uppercase text-[#A8813A] flex items-center justify-center gap-1.5">
            <Stars size={12} className="text-[#A8813A]" /> RHA Guesthouse Story & Comfort
          </span>
          <h1 className="font-serif text-heading-section text-[#16150F] mt-2">
            Where Comfort Meets Elegance
          </h1>
          <p className="text-xs sm:text-sm font-light text-[#8A897E] max-w-xl mx-auto leading-relaxed">
            Nestled inside the elite G-13/1 sector of Islamabad right next to Srinagar Highway, RHA Guest House offers unmatched tranquility, elite security, and bespoke boutique style.
          </p>
        </div>
      </div>

      {/* 2. Visual Story Blocks (About Us Segment) */}
      <div className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-[#A8813A]">Our Philosophy</span>
          <h2 className="font-serif text-3xl font-normal text-[#16150F] leading-snug">
            Catering to Diplomatic, Corporate & Family Travelers
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed">
            RHA Guesthouse was born out of a desire to provide a peaceful oasis for visitors seeking premium, hotel-grade luxury combined with the warm, personalized touch of home. Over the years, we have hosted national and international visitors who praise our spotless cleanliness, attentive team, and secure prestige surroundings.
          </p>
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#A8813A]" />
              <span className="text-xs font-medium text-[#16150F]">Dual-gate security layout with specialized guards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#A8813A]" />
              <span className="text-xs font-medium text-[#16150F]">2 minutes transit to Srinagar Highway exit ramps</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#A8813A]" />
              <span className="text-xs font-medium text-[#16150F]">Pristine bathrooms & customized local paratha breakfast setups</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <img 
            src="/images/resort_sunset_palm.webp" 
            alt="Courtyard lounge seating"
            loading="lazy"
            decoding="async"
            className="w-full h-[400px] object-cover shadow-sm border border-[#E8E4DA]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#FAFAF7] border border-[#E8E4DA] p-6 hidden sm:block max-w-[240px]">
            <span className="font-serif text-2xl text-[#A8813A]">7+ Years</span>
            <p className="text-[10px] font-light text-[#8A897E] mt-1">Of pristine luxury hospitality inside Islamabad capital territory</p>
          </div>
        </div>
      </div>

      {/* 3. Detailed Amenities Grid */}
      <section className="max-w-5xl mx-auto px-6 mt-32 space-y-16">
        <div>
          <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-[#A8813A] block text-center mb-2">Specifications</span>
          <h2 className="font-serif text-3xl font-normal text-[#16150F] text-center">Thoughtful Conveniences</h2>
          <p className="text-xs font-light text-[#8A897E] text-center max-w-md mx-auto mt-2">
            Every feature is chosen to remove the friction from your trip and elevate your sense of well-being.
          </p>
        </div>

        {premiumFacilities.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-6">
            <h3 className="font-serif text-lg font-normal text-[#16150F] border-b border-[#E8E4DA] pb-2 text-left">
              {group.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {group.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-white border border-[#E8E4DA] p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-[#A8813A]/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#16150F]">{item.name}</h4>
                      <p className="text-[11px] font-light text-[#8A897E] mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. Luxury Quote block */}
      <div className="max-w-4xl mx-auto px-6 mt-28">
        <div className="bg-[#F5EDD8] border border-[#A8813A]/20 p-8 md:p-12 text-center space-y-4">
          <p className="font-serif text-base sm:text-lg italic text-[#16150F] leading-relaxed">
            "RHA Guest House has redefined what premium corporate travelers should expect in Rawalpindi & Islamabad. Unwavering security standards, incredibly clean spaces, and instant WhatsApp solutions keep us choosing them."
          </p>
          <span className="text-xs font-semibold tracking-wider text-[#A8813A] uppercase block">
            — Dr. Shahzad Ahmed, Regular Corporate Guest
          </span>
        </div>
      </div>

    </div>
  );
}
