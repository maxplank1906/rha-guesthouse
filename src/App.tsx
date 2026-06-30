
import { useState, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHandler from './components/SEOHandler';

// Primary Static Page (Inlined for immediate core rendering metrics)
import Home from './pages/Home';

// Highly Optimized Code-Splitting for Secondary Subpages
const Rooms = lazy(() => import('./pages/Rooms'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium, lightweight luxury loader avoiding heavy javascript utilities
function PageFallback() {
  return (
    <div id="route-loader" className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#FAFAF7]">
      <div className="w-24 h-[1.5px] bg-[#E8E4DA] relative overflow-hidden rounded-full">
        <div className="absolute top-0 inset-y-0 w-12 bg-gradient-to-r from-transparent via-[#A8813A] to-transparent animate-shimmer" 
             style={{
               animation: 'shimmer 1.8s infinite linear',
             }}
        />
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      let path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
      if (path === '') {
        path = 'home';
      }
      if (['home', 'rooms', 'gallery', 'about', 'contact'].includes(path)) {
        setActivePage((prev) => {
          if (prev !== path) {
            return path as ActivePage;
          }
          return prev;
        });
      } else {
        // Fallback for subpaths or undefined redirects
        setActivePage('home');
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/')) {
          const page = href.replace(/^\//, '') || 'home';
          if (['home', 'rooms', 'gallery', 'about', 'contact'].includes(page)) {
            e.preventDefault();
            handlePageChange(page as ActivePage);
          }
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('click', handleGlobalClick);
    
    // Synchronize initial pathname
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            onPageChange={handlePageChange} 
            onSelectRoom={handleSelectRoom} 
          />
        );
      case 'rooms':
        return (
          <Rooms 
            selectedRoomId={selectedRoomId} 
            onClearSelectedRoom={() => setSelectedRoomId(null)} 
          />
        );
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            onPageChange={handlePageChange} 
            onSelectRoom={handleSelectRoom} 
          />
        );
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#FAFAF7] text-[#16150F] flex flex-col justify-between selection:bg-[#F5EDD8] selection:text-[#A8813A]">
      {/* Head SEO Manager */}
      <SEOHandler activePage={activePage} />

      {/* Header Navigation Segment */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Content Area with elegant Framer Motion fade-in transition on page change */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <Suspense fallback={<PageFallback />}>
              {renderActivePage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Branding Segment */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
    

