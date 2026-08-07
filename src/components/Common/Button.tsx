import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative',
  {
    variants: {
      variant: {
        default: 'bg-[#E53935] text-white hover:bg-[#d32f2f]',
        destructive: 'bg-red-500 text-white hover:bg-red-500/90',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-secondary dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-100',
        secondary: 'bg-[#111827] text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        link: 'text-[#E53935] underline-offset-4 hover:underline',
        accent: 'bg-[#FFCC00] text-gray-900 hover:bg-[#e6b800]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props as React.ComponentProps<typeof motion.button>}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
