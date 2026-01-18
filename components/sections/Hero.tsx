'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils/animations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 mb-2"
            >
              {t('greeting')}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            >
              {t('name')}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                href="https://github.com/vorluno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">github.com/vorluno</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/josé-gonzález-323b74248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-xl" />
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contacto@vorluno.dev"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-sm">contacto@vorluno.dev</span>
              </Link>
              <Link
                href="https://contacto.vorluno.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <HiDocumentText className="text-xl" />
                <span className="text-sm">Formulario</span>
              </Link>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-700 dark:text-gray-300">{t('available')}</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t('cta.contact')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t('cta.projects')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-full blur-3xl opacity-30" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-white/20 shadow-2xl bg-gradient-to-br from-[#1a0933] via-[#0f0520] to-[#012939]">
                  <Image
                    src="/images/vorluno-icon-transparent.png"
                    alt="Vorluno Logo"
                    fill
                    className="object-contain p-8 drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
