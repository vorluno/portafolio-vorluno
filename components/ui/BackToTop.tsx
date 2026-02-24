'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center font-mono text-sm"
          style={{
            background: 'rgba(2,8,23,0.92)',
            border: '1px solid rgba(37,99,235,0.5)',
            boxShadow: '0 0 16px rgba(37,99,235,0.2)',
            color: '#7dd3fc',
          }}
          aria-label="Volver arriba"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
