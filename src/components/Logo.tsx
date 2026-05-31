import React from 'react';

interface LogoProps {
  layout?: 'grande' | 'horizontal' | 'compact';
  light?: boolean;
  className?: string;
  height?: number;
}

export default function Logo({ layout = 'grande', light = false, className = '', height }: LogoProps) {
  const goldColor = '#C49B4B';
  const darkColor = light ? '#16150F' : '#FAFAF7';
  const accentColor = light ? '#2C2B24' : '#E8E4DA';

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 text-left ${className}`}>
        {/* Brand Emblem Image uploaded by user */}
        <img 
          src="/apple-touch-icon.png" 
          alt="RHA Lodges Brand Emblem" 
          className="w-[45px] h-[45px] object-contain shrink-0 rounded-md border border-[#C49B4B]/15"
          referrerPolicy="no-referrer"
        />

        {/* Text Area */}
        <div className="flex flex-col">
          <span 
            className="font-serif text-[18px] font-normal tracking-[0.08em] leading-none"
            style={{ color: darkColor }}
          >
            RHA
          </span>
          <span 
            className="text-[9px] font-bold tracking-[0.2em] uppercase leading-none mt-1"
            style={{ color: goldColor }}
          >
            LODGES
          </span>
          <span 
            className="text-[7.5px] font-light tracking-[0.14em] uppercase leading-none mt-1"
            style={{ color: accentColor }}
          >
            G-13, ISLAMABAD
          </span>
        </div>
      </div>
    );
  }

  if (layout === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Super simple wordmark */}
        <span 
          className="font-serif text-xl font-normal tracking-wide transition-colors"
          style={{ color: darkColor }}
        >
          RHA
        </span>
        <span 
          className="text-[10px] uppercase font-light tracking-[0.2em] ml-1"
          style={{ color: goldColor }}
        >
          Lodges
        </span>
      </div>
    );
  }

  // Grande (Stacked Version as seen in attachment)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      
      {/* 1. Brand Emblem Image uploaded by user */}
      <img
        src="/apple-touch-icon.png"
        alt="RHA Lodges Brand Emblem"
        style={{ width: height ? (height * 0.9) : 95, height: height || 95 }}
        className="mb-4 object-contain shrink-0 rounded-lg border border-[#C49B4B]/15"
        referrerPolicy="no-referrer"
      />

      {/* 2. Brand Name Header */}
      <h3 
        className="font-serif text-3xl font-light tracking-[0.16em] leading-none mb-1"
        style={{ color: darkColor }}
      >
        RHA
      </h3>

      {/* 3. Guesthouse Tag with ornamental side lines */}
      <div className="flex items-center gap-3 w-full justify-center my-1.5 whitespace-nowrap">
        <div className="h-[1px] w-5" style={{ backgroundColor: goldColor }} />
        <span 
          className="text-[10px] font-bold tracking-[0.24em] uppercase"
          style={{ color: goldColor }}
        >
          LODGES
        </span>
        <div className="h-[1px] w-5" style={{ backgroundColor: goldColor }} />
      </div>

      {/* 4. Location Subtext */}
      <span 
        className="text-[9.5px] font-light tracking-[0.28em] uppercase"
        style={{ color: accentColor }}
      >
        G-13 Islamabad
      </span>

      {/* 5. Minimal Bottom Ornamental Flourish (Fleur-de-lis equivalent shape) */}
      <svg 
        width="36" 
        height="12" 
        viewBox="0 0 36 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mt-3 opacity-80"
        aria-hidden="true"
      >
        <path d="M18 1 C15 5, 21 5, 18 11" stroke={goldColor} strokeWidth="1" />
        <path d="M18 1 C21 5, 15 5, 18 11" stroke={goldColor} strokeWidth="1" />
        <circle cx="18" cy="6" r="1.5" fill={goldColor} />
        <path d="M12 6 L18 6 L24 6" stroke={goldColor} strokeWidth="0.8" />
        <path d="M12 6 Q15 2 18 6" stroke={goldColor} strokeWidth="0.8" fill="none" />
        <path d="M24 6 Q21 2 18 6" stroke={goldColor} strokeWidth="0.8" fill="none" />
      </svg>

    </div>
  );
}
