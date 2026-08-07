import { motion } from 'framer-motion';
import { 
  Users, UserCheck, CalendarCheck, QrCode, 
  Dumbbell, Apple, CreditCard, BarChart3, Bell 
} from 'lucide-react';
import { AnimatedCard } from '../Common/AnimatedCard';
import { staggerContainer, fadeUpVariant } from '../../animations/variants';

const features = [
  {
    title: 'Member Management',
    description: 'Easily track memberships, renewals, and member details in one unified dashboard.',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Trainer Dashboard',
    description: 'Empower your trainers to manage schedules, clients, and workout plans.',
    icon: UserCheck,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Attendance',
    description: 'Track daily attendance effortlessly with automated logs and reporting.',
    icon: CalendarCheck,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'QR Check-In',
    description: 'Touchless, fast entry for members using their personalized QR codes.',
    icon: QrCode,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Workout Plans',
    description: 'Create and assign customized workout routines for individual members.',
    icon: Dumbbell,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Diet Plans',
    description: 'Provide personalized nutrition planning integrated directly into the app.',
    icon: Apple,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Payment Tracking',
    description: 'Automated billing, invoicing, and payment reminders so you get paid on time.',
    icon: CreditCard,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Analytics',
    description: 'Deep insights into revenue, member retention, and gym usage statistics.',
    icon: BarChart3,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Push Notifications',
    description: 'Engage members with announcements, reminders, and promotional offers.',
    icon: Bell,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything you need to run a successful gym
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            MuscleHub replaces multiple tools with a single, powerful platform designed specifically for the fitness industry.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </AnimatedCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
