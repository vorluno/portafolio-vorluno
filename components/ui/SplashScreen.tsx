'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const shown = sessionStorage.getItem('splashShown');
    if (shown) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('splashShown', '1');
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (visible === null || !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none"
          style={{ background: 'rgba(2,8,23,1)' }}
        >
          {/* Anillos animados */}
          <div className="relative flex items-center justify-center mb-10">
            {[80, 140, 200].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  border: '1px solid rgba(37,99,235,0.35)',
                }}
                animate={{ scale: [1, 1.07, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
              />
            ))}

            {/* ド central */}
            <motion.span
              className="text-7xl font-black"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              ド
            </motion.span>
          </div>

          {/* Nombre */}
          <motion.p
            className="font-mono text-[11px] text-sky-400/60 tracking-[0.35em] uppercase mb-5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            José González · Portfolio
          </motion.p>

          {/* Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-blue-500"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
