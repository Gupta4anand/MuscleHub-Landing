import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function MainLayout() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-[#E53935] selection:text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#E53935] z-[60] transition-all duration-150 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
