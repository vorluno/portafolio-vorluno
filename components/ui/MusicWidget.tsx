'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const SPOTIFY_URL = 'https://open.spotify.com/user/bztqg38sgrkotle4c0mnldwgt';

const GENRES = ['Arctic Monkeys', 'Bachata', 'Metalcore', 'Pop', 'Sad songs'];

const BAR_HEIGHTS = [18, 28, 12, 24, 16, 22, 10];

export default function MusicWidget() {
  const [expanded, setExpanded] = useState(true);
  const t = useTranslations('universe');

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(2, 8, 23, 0.92)',
          border: '1px solid rgba(37, 99, 235, 0.4)',
          boxShadow: '0 0 24px rgba(37,99,235,0.3), 0 8px 32px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          minWidth: expanded ? '220px' : 'auto',
          transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Header */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-center gap-2 px-4 py-3 cursor-pointer"
          style={{ background: 'transparent', border: 'none' }}
          aria-label={expanded ? 'Colapsar widget de música' : 'Expandir widget de música'}
        >
          {/* Barras de ecualizador */}
          <div className="flex items-end gap-[2px]" style={{ height: '20px' }}>
            {BAR_HEIGHTS.map((maxH, i) => (
              <div
                key={i}
                style={{
                  width: '3px',
                  height: '4px',
                  background: 'linear-gradient(to top, #2563EB, #38BDF8)',
                  borderRadius: '2px',
                  animationName: 'eqBar',
                  animationDuration: `${0.6 + i * 0.13}s`,
                  animationDelay: `${i * 0.07}s`,
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  ['--bar-max' as string]: `${maxH}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
          <span
            className="text-xs font-semibold tracking-wide"
            style={{ color: '#38BDF8', textShadow: '0 0 8px rgba(56,189,248,0.6)' }}
          >
            José escucha...
          </span>
          <span
            className="ml-auto text-xs"
            style={{ color: 'rgba(148,163,184,0.6)' }}
          >
            {expanded ? '▾' : '▸'}
          </span>
        </button>

        {/* Contenido expandido */}
        {expanded && (
          <div className="px-4 pb-4">
            {/* Vinilo + artista */}
            <div className="flex items-center gap-3 mb-3">
              {/* Vinilo animado */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #1E3A8A 0%, #020817 60%, #0F172A 100%)',
                  border: '2px solid rgba(37,99,235,0.5)',
                  boxShadow: '0 0 12px rgba(37,99,235,0.4)',
                  animationName: 'vinylSpin',
                  animationDuration: '3s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                } as React.CSSProperties}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#38BDF8',
                    boxShadow: '0 0 6px rgba(56,189,248,0.8)',
                  }}
                />
              </div>
              <div>
                <p
                  className="text-sm font-bold"
                  style={{ color: '#f1f5f9', lineHeight: 1.2 }}
                >
                  Arctic Monkeys
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(148,163,184,0.7)' }}
                >
                  Do I Wanna Know?
                </p>
              </div>
            </div>

            {/* Progress bar fake */}
            <div
              className="w-full h-1 rounded-full mb-3"
              style={{ background: 'rgba(37,99,235,0.2)' }}
            >
              <div
                className="h-1 rounded-full"
                style={{
                  width: '58%',
                  background: 'linear-gradient(to right, #2563EB, #38BDF8)',
                  boxShadow: '0 0 6px rgba(37,99,235,0.6)',
                }}
              />
            </div>

            {/* Géneros */}
            <div className="flex flex-wrap gap-1 mb-3">
              {GENRES.map((genre) => (
                <span
                  key={genre}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(37,99,235,0.15)',
                    border: '1px solid rgba(37,99,235,0.35)',
                    color: '#93C5FD',
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Link Spotify */}
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(56,189,248,0.2) 100%)',
                border: '1px solid rgba(37,99,235,0.4)',
                color: '#38BDF8',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(37,99,235,0.5)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.6)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,99,235,0.4)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              {t('spotify')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
