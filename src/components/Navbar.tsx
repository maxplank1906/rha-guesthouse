import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ActivePage } from '../types';
import { GUESTHOUSE_CONFIG } from '../config';
import Logo from './Logo';

interface NavbarProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActivePage }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Rooms', value: 'rooms' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = activePage === 'home';
  const isDarkBackground = isHome && !isScrolled;

  return (
    <nav
      id="nav2"
      aria-label="Primary Navigation"
      className={`fixed top-0 left-0 right-0 z-50 h-[76px] px-6 md:px-16 flex items-center justify-between transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#FAFAF7]/92 backdrop-blur-md border-b border-black/[0.06] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <button
        id="nav-logo"
        onClick={() => handleNavClick('home')}
        aria-label="RHA Guest House — Back to home overview"
        className="flex items-center text-left cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2 transition-transform duration-300 hover:opacity-95"
      >
        <Logo layout="horizontal" light={!isDarkBackground} />
      </button>

      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex items-center gap-10 list-none" role="menubar">
        {navItems.map((item) => (
          <li key={item.value} role="none">
            <button
              onClick={() => handleNavClick(item.value)}
              role="menuitem"
              aria-current={activePage === item.value ? 'page' : undefined}
              className={`text-[11px] font-normal tracking-[0.12em] uppercase cursor-pointer bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2 rounded-sm transition-colors duration-200 ${
                activePage === item.value 
                  ? 'text-[#C49B4B]' 
                  : isDarkBackground
                    ? 'text-white/85 hover:text-white'
                    : 'text-[#5F5B52] hover:text-[#C49B4B]'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Right side contact & booking - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href={`tel:${GUESTHOUSE_CONFIG.phone}`}
          aria-label={`Call boutique desk at ${GUESTHOUSE_CONFIG.phone}`}
          className={`text-[11px] font-light flex items-center gap-1.5 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2 ${
            isDarkBackground
              ? 'text-white/80 hover:text-white'
              : 'text-[#5F5B52] hover:text-[#C49B4B]'
          }`}
        >
          <Phone size={13} className="text-[#C49B4B]" aria-hidden="true" />
          {GUESTHOUSE_CONFIG.phone}
        </a>
        <a
          href="https://wa.me/923337477769"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book rooms instantly by contacting 24/7 WhatsApp concierge"
          className="text-[10px] font-medium tracking-[0.14em] uppercase py-3 px-6 transition-all duration-300 bg-[#16150F] text-[#FAFAF7] hover:bg-[#C49B4B] hover:text-[#16150F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2"
        >
          Book Now
        </a>
      </div>

      {/* Hamburger Menu - Mobile */}
      <button
        id="navbar-hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden p-1.5 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2 ${
          isDarkBackground ? 'text-white' : 'text-[#16150F]'
        }`}
        aria-label="Toggle main menu navigation dropdown panel"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-nav-panel"
      >
        {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          role="region"
          aria-label="Mobile Navigation Panel"
          className="absolute top-[76px] left-0 right-0 bg-[#FAFAF7] border-b border-[#E8E4DA] p-6 flex flex-col gap-5 md:hidden z-40 animate-fade-in shadow-lg text-[#16150F]"
        >
          <nav aria-label="Mobile Menu Links">
            <ul className="flex flex-col gap-4 list-none">
              {navItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => handleNavClick(item.value)}
                    aria-current={activePage === item.value ? 'page' : undefined}
                    className={`text-sm font-medium tracking-wide uppercase cursor-pointer bg-transparent border-none p-0 w-full text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] focus-visible:ring-offset-2 rounded-sm ${
                      activePage === item.value ? 'text-[#C49B4B]' : 'text-[#16150F]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="h-[1px] bg-[#E8E4DA] my-1" aria-hidden="true" />
          <div className="flex flex-col gap-4">
            <a
              href={`https://wa.me/${GUESTHOUSE_CONFIG.whatsappNumberUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp RHA concierge desk ${GUESTHOUSE_CONFIG.phone}`}
              className="text-xs font-light text-[#8A897E] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49B4B] rounded-sm"
            >
              <Phone size={14} className="text-[#A8813A]" aria-hidden="true" />
              {GUESTHOUSE_CONFIG.phone}
            </a>
            <a
              href="https://wa.me/923337477769"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book rooms instantly by starting WhatsApp conversation with the reservation clerk"
              className="bg-[#25D366] hover:bg-emerald-600 text-white text-[11px] font-semibold tracking-[0.12em] uppercase py-3.5 px-6 block text-center transition-colors duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
