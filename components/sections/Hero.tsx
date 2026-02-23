'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import TypewriterEffect from '@/components/ui/TypewriterEffect';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils/animations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const TYPEWRITER_TEXTS = [
  'Desarrollador Full Stack',
  'Otaku empedernido 🌀 ',
  'Gamer | Uncharted 4 fan',
  'Arctic Monkeys forever 🎸',
  'Seguidor de Gojo Satoru',
  'Amante del anime y lo melancólico',
];

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800/25 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      {/* Decoración geométrica: grid, paralelogramos, círculos rayados, speed lines, ド */}
      <GeometricDecor variant="hero" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side — Text */}
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

            {/* Typewriter effect en lugar del subtitle estático */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg mb-6 h-8"
              style={{ minHeight: '2rem' }}
            >
              <TypewriterEffect
                texts={TYPEWRITER_TEXTS}
                speed={70}
                deleteSpeed={40}
                pauseDuration={1800}
                className="text-gray-600 dark:text-gray-400"
              />
            </motion.div>

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

          {/* Right side — Foto personal con efecto Six Eyes */}
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
                {/* Glow de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full blur-3xl opacity-40" />

                {/* Anillos Six Eyes — exterior */}
                <div
                  className="absolute six-eyes-ring animate-glow-pulse"
                  style={{
                    inset: '-12px',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(37,99,235,0.5)',
                    borderRadius: '50%',
                    animationDelay: '0s',
                  }}
                />
                {/* Anillo intermedio */}
                <div
                  className="absolute six-eyes-ring animate-glow-pulse"
                  style={{
                    inset: '-24px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(56,189,248,0.3)',
                    borderRadius: '50%',
                    animationDelay: '0.8s',
                  }}
                />
                {/* Anillo exterior tenue */}
                <div
                  className="absolute"
                  style={{
                    inset: '-38px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgba(37,99,235,0.15)',
                    borderRadius: '50%',
                  }}
                />

                {/* Avatar circular — foto personal */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-700/40 shadow-2xl bg-gradient-to-br from-[#020817] via-[#0F172A] to-[#020817]"
                  style={{
                    boxShadow: '0 0 40px rgba(37,99,235,0.3), inset 0 0 20px rgba(37,99,235,0.1)',
                  }}
                >
                  <Image
                    src="/images/jose_2026_campanamá03.png"
                    alt="José González"
                    fill
                    className="object-cover"
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
