import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUpVariant } from '../../animations/variants';

const faqs = [
  {
    question: 'How long does it take to get started?',
    answer: 'You can set up your gym profile and start adding members in less than 15 minutes. Our onboarding wizard guides you through the entire process.',
  },
  {
    question: 'Do members need to download a separate app?',
    answer: 'Yes, we provide a white-labeled or standard MuscleHub app for your members to track workouts, check-in, and manage their payments.',
  },
  {
    question: 'Can I migrate my data from another software?',
    answer: 'Absolutely! Our support team provides free data migration from Mindbody, ZenPlanner, GymMaster, and Excel/CSV spreadsheets.',
  },
  {
    question: 'Is there a contract or setup fee?',
    answer: 'No. MuscleHub is a month-to-month service with zero setup fees or hidden costs. You can cancel anytime.',
  },
  {
    question: 'How does the payment processing work?',
    answer: 'We integrate with Stripe to provide seamless, secure payment processing for memberships, drop-ins, and point-of-sale purchases.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
