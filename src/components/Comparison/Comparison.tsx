import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUpVariant } from '../../animations/variants';

const featuresList = [
  'Custom Branded App',
  'Automated Billing',
  'QR Code Check-ins',
  'Diet & Workout Plans',
  'Advanced Analytics',
  '24/7 Priority Support'
];

export function Comparison() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why Choose MuscleHub
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            See how we stack up against traditional gym management software.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional Software Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 opacity-70"
          >
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-8 text-center">
              Traditional Software
            </h3>
            <ul className="space-y-6">
              {featuresList.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                    <X size={14} className="text-red-500" />
                  </div>
                  <span className={i > 2 ? 'line-through opacity-50' : ''}>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* MuscleHub Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-[#E53935] shadow-[0_20px_50px_rgba(229,57,53,0.15)] relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E53935] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
              The Smart Choice
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              MuscleHub
            </h3>
            <ul className="space-y-6">
              {featuresList.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-900 dark:text-white font-medium">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                    className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0"
                  >
                    <Check size={14} className="text-green-600 dark:text-green-400" />
                  </motion.div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
