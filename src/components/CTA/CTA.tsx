import { motion } from 'framer-motion';
import { Button } from '../Common/Button';
import { fadeUpVariant } from '../../animations/variants';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E53935] to-[#c62828] z-0" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCA2MGg2MFYweiIvPjwvZz48L3N2Zz4=')] opacity-30 z-0 pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Ready to grow your gym?
        </motion.h2>
        
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto"
        >
          Join 500+ fitness businesses that use MuscleHub to streamline operations and increase revenue.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="https://wa.me/918591119641?text=Hi%2C%20I%20want%20a%20demo%20for%20MuscleHub" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#E53935] hover:bg-gray-50 text-lg px-8">
              Start Free Trial
            </Button>
          </a>
          <a href="https://wa.me/918591119641?text=Hi%2C%20I%20want%20a%20demo%20for%20MuscleHub" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Book Demo
            </Button>
          </a>
        </motion.div>
        
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="mt-8 text-sm text-red-200"
        >
          No credit card required. 14-day free trial.
        </motion.p>
      </div>
    </section>
  );
}
