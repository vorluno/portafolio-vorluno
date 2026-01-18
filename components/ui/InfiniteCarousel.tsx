'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfiniteCarouselProps {
  children: ReactNode;
  isPaused?: boolean;
  gap?: number;
}

export default function InfiniteCarousel({
  children,
  isPaused = false,
  gap = 32,
}: InfiniteCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(0.5);

  // Update scroll speed based on screen size
  useEffect(() => {
    const updateScrollSpeed = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScrollSpeed(0.5); // Mobile
      } else if (width < 1024) {
        setScrollSpeed(0.8); // Tablet
      } else {
        setScrollSpeed(1.2); // Desktop - más rápido
      }
    };

    updateScrollSpeed();
    window.addEventListener('resize', updateScrollSpeed);
    return () => window.removeEventListener('resize', updateScrollSpeed);
  }, []);

  // Auto-scroll with requestAnimationFrame
  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollSpeed;

        // Reset at midpoint (after first set of duplicated items)
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 2;

        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, scrollSpeed]);

  const handleNavigation = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 400;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleNavigation('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 dark:hover:bg-white/20 transition-all shadow-lg"
        aria-label="Previous"
      >
        <svg
          className="w-6 h-6 text-gray-900 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleNavigation('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 dark:hover:bg-white/20 transition-all shadow-lg"
        aria-label="Next"
      >
        <svg
          className="w-6 h-6 text-gray-900 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto hide-scrollbar gpu-accelerate"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Add CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .gpu-accelerate {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}
