import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  CornerDownRight, 
  Compass, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { GUESTHOUSE_CONFIG } from '../config';

const FAQ_ITEMS = [
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

export default function Contact() {
  // Booking Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('Executive Suite (Master Bed)');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // State to copy address with micro feedback
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('House 58 St 101, G-13/1, Islamabad');
    setCopiedAddress(true);
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Compile booking details and build the WhatsApp link dynamically
  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please fill in your name to initialize WhatsApp booking.');
      return;
    }
    setFormError('');

    const compiledMessage = 
      `Hello RHA Guest House!\n\n` +
      `I would like to request a booking/reservation inquiry:\n\n` +
      `• Guest Name: ${name}\n` +
      `• Contact Phone: ${phone || 'Not specified'}\n` +
      `• Room Standard: ${roomType}\n` +
      `• Check-in Date: ${checkIn || 'To be decided'}\n` +
      `• Check-out Date: ${checkOut || 'To be decided'}\n` +
      `• Total Guests: ${guests}\n` +
      (message.trim() ? `\nSpecial Request details:\n"${message}"` : '\nPlease check availability for these dates.');

    const encodedText = encodeURIComponent(compiledMessage);
    const whatsappUrl = `https://wa.me/923337477769?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 pb-20 font-sans text-[#16150F] bg-[#FAFAF7]">
      
      {/* 1. SEO METRIC HERO HEADER */}
      <section className="bg-white border-b border-[#E8E4DA] py-20 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
            24/7 G-13 Concierge Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5.5xl font-normal text-[#16150F] leading-tight-none tracking-tight">
            Connect With RHA Guest House
          </h1>
          <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed max-w-2xl mx-auto">
            Conveniently positioned close to the <strong className="font-semibold text-[#16150F]">Srinagar Highway exit in G-13/1, Islamabad</strong>, we provide easy access to the motorway junctions, supreme corporate capitals, and international transit terminals.
          </p>
        </div>
      </section>

      {/* 2. CORE INTERACTIVE CONTAINER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DETAILS & INTERACTIVE EMBEDDED LOCATION [SPAN-5] */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3 text-left">
              <span className="text-[9px] font-bold tracking-widest text-[#A8813A] uppercase">Get in Touch</span>
              <h2 className="font-serif text-2.5xl font-normal text-[#16150F]">Contact & Coordinates</h2>
              <p className="text-xs font-light text-[#8A897E] leading-relaxed">
                Whether traveling for family, executive, or diplomatic stay needs, our concierge is prepared to arrange a signal-free pick-up or custom itinerary support.
              </p>
            </div>

            {/* Strategic Details Card */}
            <div className="bg-white border border-[#E8E4DA] p-6 sm:p-8 space-y-6">
              
              {/* Address card portion */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-[#A8813A]/20 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] shrink-0">
                  <MapPin size={17} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#16150F]">Address</h4>
                  <p className="text-xs font-medium text-[#16150F]">
                    House 58 St 101, G-13/1, Islamabad <br />
                    <span className="text-xs font-light text-[#8A897E]">Next to Srinagar Highway Ramps</span>
                  </p>
                  
                  {/* Interactive Address Tools */}
                  <div className="pt-2 flex items-center gap-4">
                    <button 
                      onClick={handleCopy}
                      aria-label="Copy guest house street address to your clipboard"
                      className="text-[10px] font-semibold uppercase tracking-wider text-[#A8813A] hover:text-[#16150F] transition-colors cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8813A] rounded-sm"
                    >
                      {copiedAddress ? '✓ Copied Address' : 'Copy Address'}
                    </button>
                    <span className="text-[#E8E4DA] text-xs">|</span>
                    <a 
                      href="https://www.google.com/maps/place/golden+Oak+Residence/@33.6428302,72.9626532,18z/data=!4m9!3m8!1s0x38df96473c8d046b:0x958e9929aefb3adf!5m2!4m1!1i2!8m2!3d33.642466!4d72.962583!16s%2Fg%2F11vkjt3hdg?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get Google driving coordinates maps navigation directions"
                      className="text-[10px] font-semibold uppercase tracking-wider text-[#A8813A] hover:text-[#16150F] transition-colors flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8813A] rounded-sm"
                    >
                      Get Directions <ArrowUpRight size={10} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-[#E8E4DA]/60" />

              {/* Direct Voice & Chat Portion */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-[#A8813A]/20 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] shrink-0">
                  <Phone size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#16150F]">24/7 Telephone Desk</h4>
                  <a 
                    href="tel:03337477769"
                    className="text-xs font-semibold text-[#16150F] hover:text-[#A8813A]"
                  >
                    +92 333 7477769
                  </a>
                  <p className="text-[10px] font-light text-[#8A897E]">Direct live voice calling or WhatsApp audio support.</p>
                </div>
              </div>

              <div className="h-[1px] bg-[#E8E4DA]/60" />

              {/* Email Support Portion */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-[#A8813A]/20 flex items-center justify-center text-[#A8813A] bg-[#FAFAF7] shrink-0">
                  <Mail size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#16150F]">Email Desk</h4>
                  <a 
                    href="mailto:contact@rhaguesthouse.com"
                    className="text-xs font-semibold text-[#16150F] hover:text-[#A8813A]"
                  >
                    contact@rhaguesthouse.com
                  </a>
                  <p className="text-[10px] font-light text-[#8A897E]">For general corporate inquiries, partnerships, or billing.</p>
                </div>
              </div>

            </div>

            {/* Google Maps Responsive Interactive Iframe Embed */}
            <div className="bg-white border border-[#E8E4DA] p-1 shadow-sm overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full bg-[#FAFAF7] overflow-hidden">
                <iframe 
                  title="Interactive Map view of RHA Guest House in G-13/1 Islamabad near Srinagar Highway"
                  src="https://maps.google.com/maps?q=33.642466,72.962583&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E8E4DA]/50 flex items-center justify-between gap-3 text-left">
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-[#A8813A] uppercase block">Location Coordinates</span>
                  <p className="font-serif text-[11px] text-[#16150F] font-semibold mt-0.5">Plot House 58, Street 101, G-13/1</p>
                </div>
                <a 
                  href="https://www.google.com/maps/place/golden+Oak+Residence/@33.6428302,72.9626532,18z/data=!4m9!3m8!1s0x38df96473c8d046b:0x958e9929aefb3adf!5m2!4m1!1i2!8m2!3d33.642466!4d72.962583!16s%2Fg%2F11vkjt3hdg?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#16150F] hover:bg-[#A8813A] text-white text-[9px] tracking-widest font-semibold py-2.5 px-4 uppercase transition-colors"
                >
                  Native Map View
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM DYNAMIC BOOKING SYSTEM & CHAT CONVERTER [SPAN-7] */}
          <div className="lg:col-span-7 bg-white border border-[#E1DBCE] p-8 sm:p-12 space-y-8 shadow-sm">
            
            <div className="space-y-2">
              <span className="text-[9px] font-bold tracking-widest text-[#A8813A] uppercase block">
                Dynamic Reservation Desk
              </span>
              <h3 className="font-serif text-2.5xl font-normal text-[#16150F]">
                Instant Booking Query Compiler
              </h3>
              <p className="text-xs font-light text-[#8A897E] leading-relaxed">
                Fill out the structured request parameters below. Submitting automatically formats and loads your query directly into a real WhatsApp message window, bypassing long reservation delays.
              </p>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Guest Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-name" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block animate-fade-in">
                    Your Name <span className="text-[#A8813A]">*</span>
                  </label>
                  <input 
                    id="form-name"
                    type="text" 
                    required
                    placeholder="e.g. Ahmed Khan"
                    className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white transition-all font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if(formError) setFormError(''); }}
                  />
                </div>

                {/* 2. Contact Phone */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-phone" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                    Phone Number
                  </label>
                  <input 
                    id="form-phone"
                    type="tel" 
                    placeholder="e.g. +92 300 1234567"
                    className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white transition-all font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 3. Room Type Selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-room" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                    Selected Space Standard
                  </label>
                  <div className="relative">
                    <select 
                      id="form-room"
                      className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white appearance-none cursor-pointer font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                    >
                      <option value="Executive Suite (Master Bed)">Executive Suite (Master Bed)</option>
                      <option value="Premium Deluxe Room">Premium Deluxe Room</option>
                      <option value="Comfortable Family suite">Comfortable Family Suite</option>
                      <option value="General Corporate Booking">General Corporate Quote</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8A897E]">
                      <ChevronDown size={14} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* 4. Total Guests */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-guests" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select 
                      id="form-guests"
                      className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white appearance-none cursor-pointer font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Guests (Family Suite)">4+ Guests (Family Suite)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8A897E]">
                      <Users size={14} aria-hidden="true" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 5. Check-In Date */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-checkin" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input 
                      id="form-checkin"
                      type="date" 
                      className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white transition-all font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>

                {/* 6. Check-Out Date */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-checkout" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input 
                      id="form-checkout"
                      type="date" 
                      className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white transition-all font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

              </div>

              {/* 7. Message query */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="form-message" className="text-[9px] font-bold uppercase tracking-wider text-[#16150F] block">
                  Additional Details & Special Requests
                </label>
                <textarea 
                  id="form-message"
                  rows={4}
                  placeholder="e.g. Please let me know if an early morning check-in at 8 AM is possible, and any additional room setups requested."
                  className="w-full bg-[#FAFAF7] border border-[#E1DBCE] px-4 py-3.5 text-xs text-[#16150F] outline-none focus:border-[#A8813A] focus:bg-white transition-all resize-none font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8813A] rounded-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* WhatsApp Redirection submission trigger and security declaration card */}
              <div className="space-y-4 pt-1">
                
                {formError && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 text-left animate-fade-in" role="alert">
                    <p className="text-xs font-semibold text-red-700">{formError}</p>
                  </div>
                )}

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] font-bold uppercase tracking-[0.16em] py-4.5 px-6 shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="fill-current shrink-0" aria-hidden="true">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  </svg>
                  <span>Book on WhatsApp</span>
                </button>
                
                <p className="text-[10px] text-[#8A897E] text-center font-light">
                  No transaction fees or mandatory card prerequisites. Clicking takes you straight into an encrypted chat with our frontdesk team.
                </p>
                
              </div>

            </form>

          </div>

        </div>
      </section>

      {/* 3. SEO-OPTIMIZED FAQ PREVIEW STRATEGIC ROW */}
      <section className="bg-white py-24 px-6 md:px-16 border-t border-b border-[#E8E4DA] relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#A8813A] block">
              Direct Travel Answers
            </span>
            <h2 className="font-serif text-3.5xl sm:text-5xl font-normal text-[#16150F] leading-tight">
              Location & Stay Questions
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#8A897E] leading-relaxed max-w-2xl mx-auto">
              If your corporate or leisure travels require quick access details, review our key localized answers below.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="border border-[#E8E4DA] bg-[#FAFAF7] hover:border-[#16150F]/25 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    id={`faq-panel-${index}`}
                    aria-controls={`faq-answer-${index}`}
                    type="button"
                    className="w-full text-left p-5 flex items-center justify-between gap-4 group focus:outline-none focus:bg-[#F5EDD8]/30 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A8813A]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-[15px] font-normal text-[#16150F] group-hover:text-[#A8813A] transition-colors">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[#8A897E] group-hover:text-[#A8813A] transition-colors" aria-hidden="true">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  <div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-panel-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
                    style={{ maxHeight: isOpen ? '180px' : '0' }}
                  >
                    <div className="p-5 font-light text-xs sm:text-sm text-[#8A897E] leading-relaxed bg-white border-t border-[#E8E4DA]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PREMIUM CONVERSION FOOTER ROW */}
      <section className="bg-[#16150F] text-white py-20 px-6 md:px-16 text-center border-t border-white/5 relative overflow-hidden">
        
        {/* Subtle background graphics */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
        </div>

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="text-[9px] font-bold tracking-[0.24em] uppercase text-[#C49B4B] block">
            Immediate Response Guarantee
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
            Ready to Experience Srinagar Highway's Elite Lodging?
          </h3>
          <p className="text-xs font-light text-white/60 leading-relaxed">
            No endless wait cycles. Direct reservation on WhatsApp offers dynamic availability quotes, personalized meal additions, and secure booking in less than a minute.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923337477769?text=Hello%20RHA%20Guest%20House,%20I'd%20like%20to%20reserve%20a%20Premium%20Deluxe%20stay.%20Please%20confirm%20availability."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct Instant WhatsApp Chat Reservation in G-13"
              className="inline-flex items-center gap-2 bg-[#C49B4B] hover:bg-[#A8813A] text-[#16150F] text-xs font-bold tracking-[0.16em] uppercase py-4 px-8 shadow-xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="fill-current shrink-0" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              <span>Instant Chat Reservation</span>
            </a>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[10px] uppercase font-light text-white/40 tracking-wider">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-[#C49B4B]" /> High Vigilance G-13 Guarding
            </div>
            <div className="flex items-center justify-center gap-2 border-y sm:border-y-0 sm:border-x border-white/5 py-2 sm:py-0">
              <Clock size={14} className="text-[#C49B4B]" /> Verified 15 Mins Airport Access
            </div>
            <div className="flex items-center justify-center gap-2">
              <Compass size={14} className="text-[#C49B4B]" /> Strict Family Sanctuary Environment
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
