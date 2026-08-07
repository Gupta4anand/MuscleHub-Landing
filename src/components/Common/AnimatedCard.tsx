import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AnimatedCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-700 overflow-hidden relative group",
        className
      )}
      {...props}
    >
      {/* Subtle hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
      {children}
    </motion.div>
  );
}
