'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { fadeInUp } from '@/lib/utils/animations';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
