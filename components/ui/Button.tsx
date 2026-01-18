'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-primary text-white hover:opacity-90 focus:ring-primary-500':
              variant === 'primary',
            'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary-500':
              variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500':
              variant === 'outline',
            'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-lighter':
              variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-7 py-3.5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
