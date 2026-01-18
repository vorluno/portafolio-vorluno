'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glassmorphism = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-300',
          glassmorphism
            ? 'bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20'
            : 'bg-white dark:bg-dark-card shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
