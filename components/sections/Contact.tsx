'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { socialLinks } from '@/lib/data/social';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const inputClass = [
  'w-full px-4 py-2.5 font-mono text-sm',
  'bg-[rgba(2,8,23,0.7)] text-slate-200',
  'border border-white/10 rounded-none',
  'focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30',
  'placeholder:text-slate-600',
  'transition-colors',
].join(' ');

const MANGA_CARD: React.CSSProperties = {
  background: 'rgba(2,8,23,0.88)',
  border: '2px solid rgba(255,255,255,0.10)',
  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.25), 0 4px 24px rgba(0,0,0,0.4)',
};

export default function Contact() {
  const t = useTranslations('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000);
    }
  };

  const infoLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      ja: 'メール',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/vorluno',
      href: socialLinks.github,
      ja: 'ギット',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'José González',
      href: socialLinks.linkedin,
      ja: 'リンク',
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-20 relative overflow-hidden">
      <GeometricDecor variant="section" />

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

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12"
          >
            {t('subtitle')}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* ── Form card ── */}
            <motion.div variants={fadeInUp} className="relative p-6" style={MANGA_CARD}>
              <div className="absolute top-2 right-3 font-mono text-[10px] text-sky-400/50 select-none">
                お問い合わせ
              </div>
              <div className="w-8 h-0.5 bg-blue-500 mb-5" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-sky-400/80 mb-1.5 tracking-widest uppercase">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={inputClass}
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-sky-400/80 mb-1.5 tracking-widest uppercase">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-sky-400/80 mb-1.5 tracking-widest uppercase">
                    {t('form.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={inputClass}
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                <Button type="submit" className="w-full mt-1" disabled={isSubmitting}>
                  {isSubmitting ? t('form.sending') : t('form.send')}
                </Button>

              </form>
            </motion.div>

            {/* ── Info + tagline ── */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">

              {infoLinks.map(({ icon: Icon, label, value, href, ja }, i) => (
                <div
                  key={label}
                  className="relative p-5 flex items-center gap-4"
                  style={{
                    background: 'rgba(2,8,23,0.88)',
                    border: '2px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.18), 0 4px 20px rgba(0,0,0,0.35)',
                  }}
                >
                  <div className="absolute top-2 right-3 font-mono text-[9px] text-sky-400/35 select-none">
                    {ja} [{String(i + 1).padStart(2, '0')}]
                  </div>

                  <div
                    className="flex items-center justify-center w-10 h-10 shrink-0"
                    style={{
                      background: 'rgba(37,99,235,0.15)',
                      border: '1px solid rgba(37,99,235,0.4)',
                    }}
                  >
                    <Icon className="text-sky-400 text-lg" />
                  </div>

                  <div>
                    <div className="font-mono text-[10px] text-sky-400/70 tracking-widest uppercase mb-0.5">
                      {label}
                    </div>
                    <a
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-300/80 hover:text-sky-400 transition-colors font-mono"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Tagline manga card */}
              <div
                className="relative p-5 flex-1 flex flex-col justify-center"
                style={{
                  background: 'rgba(2,8,23,0.88)',
                  border: '2px solid rgba(37,99,235,0.3)',
                  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.12)',
                }}
              >
                <div className="absolute top-2 right-3 font-mono text-[10px] text-sky-400/50 select-none">
                  連絡
                </div>
                <div className="w-6 h-0.5 bg-blue-500 mb-3" />
                <p
                  className="font-mono text-[11px] text-slate-400/80 leading-relaxed"
                  style={{ borderLeft: '2px solid rgba(37,99,235,0.45)', paddingLeft: '10px' }}
                >
                  {t('tagline')}
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Toast flotante */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 font-mono text-xs flex items-center gap-2"
            style={{
              background: status === 'success' ? 'rgba(2,8,23,0.96)' : 'rgba(2,8,23,0.96)',
              border: `1px solid ${status === 'success' ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'}`,
              boxShadow: status === 'success'
                ? '0 0 20px rgba(34,197,94,0.15)'
                : '0 0 20px rgba(239,68,68,0.15)',
              color: status === 'success' ? '#86efac' : '#fca5a5',
            }}
          >
            <span>{status === 'success' ? '✓' : '✗'}</span>
            <span>{status === 'success' ? t('form.success') : t('form.error')}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
