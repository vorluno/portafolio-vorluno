'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function About() {
  const t = useTranslations('about');

  return (
    <SectionWrapper id="about" className="py-20 bg-light-base dark:bg-dark-base relative overflow-hidden">
      <GeometricDecor variant="section" flip />
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
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('title')}
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mt-12">
            {/* Card estilo manga — mismo lenguaje visual que Universe */}
            <div
              className="relative rounded-none p-7 overflow-hidden"
              style={{
                background: 'rgba(2,8,23,0.82)',
                border: '2px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.22), 0 8px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Acento japonés en esquina */}
              <div className="absolute top-3 right-4 font-mono text-[11px] text-sky-400/40 select-none">
                自己紹介
              </div>

              {/* Barra azul superior */}
              <div className="w-10 h-0.5 bg-blue-500 mb-5" />

              <div className="space-y-5">
                <p
                  className="text-base leading-relaxed text-slate-300/90"
                  style={{ borderLeft: '2px solid rgba(37,99,235,0.45)', paddingLeft: '14px' }}
                >
                  {t('bio')}
                </p>

                <p className="text-sm leading-relaxed text-slate-400/80 pl-4">
                  {t('intro')}
                </p>

                <p className="text-sm leading-relaxed text-slate-400/80 pl-4">
                  {t('passion')}
                </p>

                <p className="text-sm leading-relaxed text-slate-400/80 pl-4">
                  {t('approach')}
                </p>

                <div
                  className="flex items-center gap-2 pt-4"
                  style={{ borderTop: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <svg className="w-4 h-4 text-sky-400/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-mono text-sky-400/60">{t('location')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
