import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export default function App() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // We can expose a global way to toggle theme, but for now we just apply class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // A quick way to toggle from anywhere - attach to window for simplicity in this demo, 
  // though typically you'd use a Context Provider.
  useEffect(() => {
    (window as any).toggleTheme = () => setIsDarkMode(prev => !prev);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" richColors theme={isDarkMode ? 'dark' : 'light'} />
    </AnimatePresence>
  );
}
