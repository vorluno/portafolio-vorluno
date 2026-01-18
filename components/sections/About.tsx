'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function About() {
  const t = useTranslations('about');

  return (
    <SectionWrapper id="about" className="py-20 bg-light-base dark:bg-dark-base">
      <div className="container mx-auto px-4">
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

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mt-12">
            <Card glassmorphism>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('bio')}
                </p>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('intro')}
                </p>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('passion')}
                </p>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('approach')}
                </p>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{t('location')}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
