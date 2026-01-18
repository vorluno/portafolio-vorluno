'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import InfiniteCarousel from '@/components/ui/InfiniteCarousel';
import CertificationCard from '@/components/ui/CertificationCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { useState } from 'react';

const certifications = [
  {
    name: 'Fundamentos de Programación',
    file: '/images/estudios/certificado_FUNDAMENTOS_DE_PROGRAMACI_N.pdf',
    preview: '/images/estudios/preview-fundamentos-programacion.png',
    issuer: 'Certificación Profesional',
  },
  {
    name: 'Hoja de Cálculo Básica',
    file: '/images/estudios/certificado_HOJA_DE_CALCULO_B_SICA.pdf',
    preview: '/images/estudios/preview-hoja-calculo-basica.png',
    issuer: 'Certificación Profesional',
  },
  {
    name: 'Hoja de Cálculo Intermedio',
    file: '/images/estudios/certificado_HOJA_DE_CALCULO_INTERMEDIO (1).pdf',
    preview: '/images/estudios/preview-hoja-calculo-intermedio.png',
    issuer: 'Certificación Profesional',
  },
  {
    name: 'Diploma',
    file: '/images/estudios/DIPLOMA.pdf',
    preview: '/images/estudios/preview-diploma.png',
    issuer: 'Certificación Profesional',
  },
];

export default function Certifications() {
  const t = useTranslations('certifications');
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate certifications for infinite loop
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <SectionWrapper id="certifications" className="py-20 bg-light-base dark:bg-dark-base relative overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            {t('title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16"
          >
            {t('subtitle')}
          </motion.p>

          {/* Infinite Horizontal Carousel */}
          <motion.div variants={fadeInUp} className="w-full">
            <InfiniteCarousel isPaused={isPaused} gap={32}>
              {duplicatedCertifications.map((cert, index) => (
                <CertificationCard
                  key={`${cert.name}-${index}`}
                  name={cert.name}
                  preview={cert.preview}
                  file={cert.file}
                  issuer={cert.issuer}
                  index={index}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
              ))}
            </InfiniteCarousel>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
