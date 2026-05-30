import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomCarouselProps {
  images: string[];
  roomName: string;
}

export default function RoomCarousel({ images, roomName }: RoomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  // Track swipe gestures
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Autoplay intervals
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div 
      className="relative w-full h-full min-h-[350px] lg:min-h-[480px] overflow-hidden bg-[#16150F] select-none group/carousel focus:outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      aria-label={`${roomName} image gallery carousel, use arrow keys or swipe to navigate`}
    >
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-500 ease-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img 
              src={src} 
              alt={`${roomName} view ${index + 1} of ${images.length}`}
              // Preload only the absolute first image, lazy load others
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark vignette bottom and top for overlay legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Manual Left/Right Chevrons */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-[#C49B4B] text-white transition-all rounded-xs opacity-0 group-hover/carousel:opacity-100 z-10 focus-visible:opacity-100 focus:outline-none focus:ring-1 focus:ring-[#C49B4B] cursor-pointer"
        aria-label={`Previous image for ${roomName}`}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-[#C49B4B] text-white transition-all rounded-xs opacity-0 group-hover/carousel:opacity-100 z-10 focus-visible:opacity-100 focus:outline-none focus:ring-1 focus:ring-[#C49B4B] cursor-pointer"
        aria-label={`Next image for ${roomName}`}
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom Indicators & Current Counter Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10 bg-black/30 backdrop-blur-xs py-1.5 px-3 border border-white/5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index 
                ? 'bg-[#C49B4B] scale-120' 
                : 'bg-white/40 hover:bg-white'
            }`}
            aria-label={`Load slide ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Visual Image Index Counter */}
      <div className="absolute top-4 right-4 bg-[#16150F]/80 backdrop-blur-xs text-[9px] font-bold text-[#C49B4B] tracking-wider py-1 px-2.5 border border-[#C49B4B]/20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
