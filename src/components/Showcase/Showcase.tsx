import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { fadeUpVariant } from '../../animations/variants';
import { cn } from '../../utils/cn';

// Simulated app screenshots using CSS
const screenshots = [
  { id: 1, title: 'Member Dashboard', color: 'bg-blue-500' },
  { id: 2, title: 'Workout Tracker', color: 'bg-green-500' },
  { id: 3, title: 'QR Check-in', color: 'bg-purple-500' },
  { id: 4, title: 'Analytics', color: 'bg-[#E53935]' },
  { id: 5, title: 'Diet Plan', color: 'bg-orange-500' },
];

export function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Beautiful App Experience
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Give your members a premium mobile experience to track their fitness journey.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8 perspective-1000">
            
            <button 
              onClick={handlePrev}
              className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E53935] hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-full flex justify-center py-10">
              <div className="relative w-[280px] h-[580px] flex justify-center items-center">
                <AnimatePresence mode="popLayout">
                  {screenshots.map((screen, index) => {
                    // Calculate relative position (-2, -1, 0, 1, 2)
                    let diff = index - currentIndex;
                    if (diff < -2) diff += screenshots.length;
                    if (diff > 2) diff -= screenshots.length;

                    if (Math.abs(diff) > 2) return null;

                    const zIndex = 10 - Math.abs(diff);
                    const scale = 1 - Math.abs(diff) * 0.15;
                    const xOffset = diff * 120; // 120px separation
                    const opacity = 1 - Math.abs(diff) * 0.3;

                    return (
                      <motion.div
                        key={screen.id}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity, 
                          scale, 
                          x: xOffset,
                          zIndex 
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={cn(
                          "absolute w-full h-full rounded-[40px] border-[8px] border-gray-900 bg-white shadow-2xl cursor-pointer overflow-hidden",
                          diff === 0 ? "hover:scale-[1.02] transition-transform shadow-red-500/20" : ""
                        )}
                        onClick={() => diff === 0 ? openModal(index) : null}
                      >
                         <div className={cn("w-full h-48", screen.color)}>
                            <div className="pt-10 px-6 text-white text-xl font-bold">{screen.title}</div>
                         </div>
                         <div className="p-6 space-y-4">
                           <div className="w-full h-24 bg-gray-100 rounded-xl"></div>
                           <div className="w-full h-12 bg-gray-100 rounded-xl"></div>
                           <div className="w-full h-12 bg-gray-100 rounded-xl"></div>
                         </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E53935] hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#E53935] transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-[340px] h-[700px] rounded-[48px] border-[12px] border-gray-800 bg-white overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
               <div className={cn("w-full h-64", screenshots[currentIndex].color)}>
                  <div className="pt-12 px-6 text-white text-2xl font-bold">{screenshots[currentIndex].title}</div>
               </div>
               <div className="p-6 space-y-4">
                 <div className="w-full h-32 bg-gray-100 rounded-2xl"></div>
                 <div className="w-full h-16 bg-gray-100 rounded-xl"></div>
                 <div className="w-full h-16 bg-gray-100 rounded-xl"></div>
                 <div className="w-full h-16 bg-gray-100 rounded-xl"></div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
