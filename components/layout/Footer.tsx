'use client';

import { useTranslations } from 'next-intl';
import { socialLinks } from '@/lib/data/social';

const KANJIS = [
  { char: '終', x: '5%',  y: '10%', size: '100px', opacity: 0.04 },
  { char: '道', x: '45%', y: '20%', size: '80px',  opacity: 0.03 },
  { char: '命', x: '88%', y: '5%',  size: '90px',  opacity: 0.04 },
];

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative overflow-hidden dark:bg-dark-base bg-white">
      {/* Línea decorativa superior — degradado azul */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 30%, rgba(56,189,248,0.8) 50%, rgba(37,99,235,0.6) 70%, transparent 100%)' }}
      />

      {/* Kanjis sutiles de fondo */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {KANJIS.map((k) => (
          <span
            key={k.char}
            className="absolute font-black dark:text-white text-black"
            style={{
              left: k.x,
              top: k.y,
              fontSize: k.size,
              opacity: k.opacity,
              fontFamily: 'system-ui, sans-serif',
              lineHeight: 1,
            }}
          >
            {k.char}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Nombre con acento azul */}
          <p className="text-sm font-mono" style={{ color: 'rgba(148,163,184,0.7)' }}>
            © {new Date().getFullYear()}{' '}
            <span style={{ color: '#38BDF8' }}>José</span>
            {' '}·{' '}{t('rights')}
          </p>

          {/* Links sociales */}
          <div className="flex gap-6">
            {[
              { href: socialLinks.github, label: 'GitHub' },
              { href: socialLinks.linkedin, label: 'LinkedIn' },
              { href: `mailto:${socialLinks.email}`, label: 'Email' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-sm font-mono transition-colors"
                style={{ color: 'rgba(148,163,184,0.6)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#38BDF8'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(148,163,184,0.6)'; }}
              >
                {label}
              </a>
            ))}
          </div>

          <p className="text-xs font-mono" style={{ color: 'rgba(148,163,184,0.35)' }}>
            {t('built')}
          </p>
        </div>
      </div>
    </footer>
  );
}
