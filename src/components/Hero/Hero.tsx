import { motion } from 'framer-motion';
import { Button } from '../Common/Button';
import { useMousePosition } from '../../hooks/useMousePosition';
import { fadeUpVariant, staggerContainer } from '../../animations/variants';

export function Hero() {
  const { x, y } = useMousePosition();

  // Calculate parallax based on mouse position (normalized from center)
  const xOffset = typeof window !== 'undefined' ? (x - window.innerWidth / 2) / 40 : 0;
  const yOffset = typeof window !== 'undefined' ? (y - window.innerHeight / 2) / 40 : 0;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#E53935]/10 rounded-full blur-[120px] animate-[blob_7s_infinite] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#FFCC00]/10 rounded-full blur-[100px] animate-[blob_7s_infinite_2s] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMxMTE4MjciIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgNjBoNjBWMHoiLz48L2c+PC9zdmc+')] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E53935] text-sm font-medium mb-6 border border-red-100 dark:bg-red-500/10 dark:border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E53935] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E53935]"></span>
              </span>
              MuscleHub v2.0 is live
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Manage Your Gym <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] to-[#FFCC00]">
                Smarter
              </span> with MuscleHub
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              The all-in-one platform to manage members, trainers, payments, and grow your fitness business effortlessly.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://wa.me/918591119641?text=Hi%2C%20I%20want%20a%20demo%20for%20MuscleHub" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 shadow-lg shadow-red-500/25">Book Demo</Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.musclehub" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8">Get it on Google Play</Button>
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</p>
                <p className="text-sm text-gray-500 font-medium">Gyms</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100K+</p>
                <p className="text-sm text-gray-500 font-medium">Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">99.9%</p>
                <p className="text-sm text-gray-500 font-medium">Uptime</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[600px] flex justify-center items-center perspective-1000"
          >
            <motion.div 
              style={{
                rotateX: -yOffset,
                rotateY: xOffset,
              }}
              className="relative w-[300px] h-[600px] bg-gray-900 rounded-[48px] border-[12px] border-gray-900 shadow-2xl shadow-black/40 overflow-hidden"
            >
              {/* Dynamic Island Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20 mt-2">
                <div className="w-24 h-7 bg-black rounded-full"></div>
              </div>
              
              {/* Screen Content - Rotating Screenshots */}
              <div className="relative w-full h-full bg-white flex flex-col items-center justify-center pt-10">
                 {/* Decorative mock UI elements to look like an app */}
                 <div className="w-full px-6 flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-12 h-2 bg-gray-100 rounded animate-pulse"></div>
                      </div>
                    </div>
                 </div>

                 <div className="w-full px-6 mb-6">
                   <div className="w-full h-32 bg-gradient-to-br from-[#E53935] to-[#FFCC00] rounded-2xl p-4 shadow-lg flex flex-col justify-between text-white">
                      <div className="text-sm opacity-80">Total Revenue</div>
                      <div className="text-3xl font-bold">$12,450</div>
                   </div>
                 </div>

                 <div className="w-full px-6 space-y-4">
                   <div className="flex justify-between items-center">
                     <div className="text-sm font-semibold">Recent Check-ins</div>
                   </div>
                   {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="w-full p-3 border border-gray-100 rounded-xl flex items-center gap-3 shadow-sm">
                       <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                       <div className="flex-1 space-y-2">
                         <div className="w-24 h-2 bg-gray-200 rounded"></div>
                         <div className="w-16 h-2 bg-gray-100 rounded"></div>
                       </div>
                       <div className="w-12 h-4 bg-green-100 rounded text-[10px] text-green-700 font-bold flex items-center justify-center">In</div>
                     </div>
                   ))}
                 </div>
              </div>
              
              {/* Screen Gloss Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none"></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 -right-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold">New Member</p>
                <p className="text-xs text-gray-500">Alex joined</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -left-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl flex flex-col z-20 border border-gray-100 dark:border-gray-700"
            >
              <p className="text-xs text-gray-500 mb-1">Daily Attendance</p>
              <div className="flex items-end gap-2">
                <div className="w-3 h-8 bg-gray-200 rounded-sm"></div>
                <div className="w-3 h-12 bg-gray-200 rounded-sm"></div>
                <div className="w-3 h-10 bg-gray-200 rounded-sm"></div>
                <div className="w-3 h-16 bg-[#E53935] rounded-sm"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
