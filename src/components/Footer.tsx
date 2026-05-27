import { ActivePage } from '../types';
import { GUESTHOUSE_CONFIG } from '../config';
import Logo from './Logo';
import { MapPin, Phone, Mail, Facebook, ArrowUpRight, Shield, Globe } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: ActivePage) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0E0A] text-white/70 pt-20 pb-12 px-6 md:px-16 border-t border-white/5 font-sans relative z-10">
      
      {/* Decorative branding bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C49B4B] to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 mb-16">
        
        {/* Column 1: Core Brand Identity & Logo Block */}
        <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <Logo layout="grande" className="scale-95 origin-center md:origin-left" />
          <p className="text-[11.5px] font-light text-white/40 leading-relaxed max-w-xs">
            Flagship boutique accommodation in G-13/1 Islamabad, offering unparalleled safety, peaceful corporate retreats, and modern family stays.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-4 md:pl-4">
          <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C49B4B]">
            Navigate
          </h4>
          <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm cursor-pointer flex items-center gap-1 group"
            >
              <span>Home Overview</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C49B4B]" />
            </button>
            <button
              onClick={() => handleNavClick('rooms')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm cursor-pointer flex items-center gap-1 group"
            >
              <span>Rooms & Suites</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C49B4B]" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm cursor-pointer flex items-center gap-1 group"
            >
              <span>About Our Guesthouse</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C49B4B]" />
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm cursor-pointer flex items-center gap-1 group"
            >
              <span>Image Gallery</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C49B4B]" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm cursor-pointer flex items-center gap-1 group"
            >
              <span>Contact Desk</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C49B4B]" />
            </button>
          </nav>
        </div>

        {/* Column 3: Core Rooms Detail */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C49B4B]">
            Accommodations
          </h4>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('rooms')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm"
            >
              The Executive Suite (Master Bed)
            </button>
            <button
              onClick={() => handleNavClick('rooms')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm"
            >
              Premium Deluxe Room (Attached Bath)
            </button>
            <button
              onClick={() => handleNavClick('rooms')}
              className="text-xs font-light text-white/50 hover:text-[#C49B4B] transition-colors duration-200 text-left bg-transparent border-none p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49B4B] rounded-sm"
            >
              Comfortable Family Stay Suite
            </button>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-medium tracking-wider text-[#C49B4B] uppercase bg-[#C49B4B]/10 px-2.5 py-1">
                <Shield size={10} /> Family & Execs Only
              </span>
            </div>
          </div>
        </div>

        {/* Column 4: Strategic Location & Direct Action Contacts */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C49B4B]">
            Boutique Desk G-13
          </h4>
          <address className="not-italic space-y-3.5 text-xs font-light text-white/50">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[#C49B4B] shrink-0 mt-0.5" />
              <span>
                House 58 St 101, G-13/1, Islamabad <br />
                <span className="text-[11px] text-white/30">(Near Srinagar Highway entries)</span>
              </span>
            </div>
            
            <div className="h-[1px] bg-white/5 my-2" />

            <div className="space-y-2">
              <a
                href={`https://wa.me/${GUESTHOUSE_CONFIG.whatsappNumberUrl}?text=Hello%20RHA%20Guesthouse,%20I%20would%20like%20to%20reserve%20a%20stay.%20Please%20confirm%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C49B4B] transition-colors group text-white/60"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Booking Desk</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href={`tel:${GUESTHOUSE_CONFIG.phone}`}
                className="flex items-center gap-2.5 hover:text-[#C49B4B] transition-colors text-white/60"
              >
                <Phone size={13} className="text-[#C49B4B] shrink-0" />
                <span>{GUESTHOUSE_CONFIG.phone}</span>
              </a>

              <a
                href={GUESTHOUSE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#C49B4B] transition-colors group text-white/60"
              >
                <Globe size={13} className="text-[#C49B4B] shrink-0" />
                <span>Google Maps Landmark</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </address>
        </div>

      </div>

      {/* Copyright, Social Icons and Security Note Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-light text-white/30 gap-6">
        
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
          <span>© {currentYear} {GUESTHOUSE_CONFIG.name}. Developed for prestige hospitality and curated sanitization standards.</span>
        </div>

        {/* Right Side: Social Media Branding */}
        <div className="flex items-center gap-4">
          <a 
            href={GUESTHOUSE_CONFIG.facebookUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#C49B4B] transition-all bg-white/[0.01]"
            aria-label="Follow RHA Guest House on Facebook"
          >
            <Facebook size={12} />
          </a>
          <span className="text-[9px] text-[#C49B4B] font-semibold tracking-widest uppercase">G-13 ISLAMABAD</span>
        </div>

      </div>

    </footer>
  );
}
