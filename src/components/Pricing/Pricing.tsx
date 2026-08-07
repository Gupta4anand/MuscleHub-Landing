import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../Common/Button';
import { fadeUpVariant } from '../../animations/variants';
import { cn } from '../../utils/cn';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for small gyms just getting started.',
    features: ['Up to 100 Members', 'Basic Analytics', 'Manual Check-ins', 'Email Support'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '129',
    description: 'Everything you need to grow your fitness business.',
    features: ['Unlimited Members', 'QR Code Check-ins', 'Trainer Dashboard', 'Workout & Diet Plans', 'Priority Support'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'Advanced features for large gyms and franchises.',
    features: ['Custom Branded App', 'Multiple Locations', 'API Access', 'Dedicated Account Manager', 'Custom Integrations'],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            No hidden fees. No surprises. Choose the plan that fits your gym.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative bg-white dark:bg-gray-800 rounded-3xl p-8 flex flex-col shadow-xl",
                plan.isPopular 
                  ? "border-2 border-[#E53935] shadow-[#E53935]/10 transform md:-translate-y-4" 
                  : "border border-gray-100 dark:border-gray-700"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E53935] text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 h-12">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                <span className="text-xl text-gray-500 ml-1">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-[#E53935] shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? 'default' : 'outline'} 
                size="lg" 
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
