import { motion } from 'framer-motion';
import { Store, UserPlus, Users, LineChart } from 'lucide-react';
import { fadeUpVariant } from '../../animations/variants';

const steps = [
  {
    title: 'Register Gym',
    description: 'Sign up and configure your gym profile, hours, and branding in minutes.',
    icon: Store,
  },
  {
    title: 'Add Trainers',
    description: 'Invite your staff, assign roles, and set up their working schedules.',
    icon: UserPlus,
  },
  {
    title: 'Add Members',
    description: 'Import existing members or let them sign up via the MuscleHub app.',
    icon: Users,
  },
  {
    title: 'Track Everything',
    description: 'Monitor attendance, revenue, and growth through your live dashboard.',
    icon: LineChart,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How MuscleHub Works
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Get your gym up and running on our platform in four simple steps. No technical knowledge required.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gray-200 via-[#E53935] to-gray-200 dark:from-gray-700 dark:to-gray-700 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold flex items-center justify-center text-sm shadow-lg z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center mb-8 relative z-10 border-4 border-gray-50 dark:border-gray-800 group-hover:scale-110 group-hover:border-[#E53935]/20 transition-all duration-300">
                    <Icon size={32} className="text-[#E53935]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-8 text-gray-300 dark:text-gray-700">
                      ↓
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
