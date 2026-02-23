'use client';

import Image from 'next/image';

const BASE = '/images/Phone%20Link/';

function enc(filename: string): string {
  return BASE + encodeURIComponent(filename);
}

interface Panel {
  src: string;
  area: string;
  kanji?: string;
  num: number;
  speedLines?: boolean;
}

/*
  Grid 6 cols × 5 rows — gridTemplateAreas:
    "a b b c d e"
    "a f g c h i"
    "j f k l l m"
    "j n o p q r"
    "s t u v w w"

  Spans:
    a → col 1,     rows 1-2  (tall)
    b → cols 2-3,  row  1    (wide)
    c → col 4,     rows 1-2  (tall)
    f → col 2,     rows 2-3  (tall)
    j → col 1,     rows 3-4  (tall)
    l → cols 4-5,  row  3    (wide)
    w → cols 5-6,  row  5    (wide)
*/
const panels: Panel[] = [
  // ── row 1 ──────────────────────────────────────────────────────
  { src: 'WhatsApp Image 2026-02-23 at 12.40.32 AM.jpeg', area: 'a', kanji: '呪', num: 1  },
  { src: '070f0757b07ad7659085e69196a0b2e0.jpg',           area: 'b',               num: 2  },
  { src: '0cc8de40d11edcf82d995b4fac6a5e0e.jpg',           area: 'c',               num: 3  },
  { src: '1ebb6fcf0f7b3287554cbcf5a9eefb6b.jpg',           area: 'd', kanji: '斬',  num: 4  },
  { src: '122e6ca04c226a827dcba06238bb17a1.jpg',           area: 'e',               num: 5  },
  // ── row 2 ──────────────────────────────────────────────────────
  { src: '16e6bc08b7a6a414f9c060978bad259d.jpg',           area: 'f',               num: 6  },
  { src: '2c8fdaa9f4f69d63a9562b0b494d0008.jpg',           area: 'g',               num: 7  },
  { src: '2da24613fb6f6e07d0fc70e8333ddf1a.jpg',           area: 'h',               num: 8  },
  { src: '30d09363d44a5d5b62e491954045513d.jpg',           area: 'i',               num: 9  },
  // ── row 3 ──────────────────────────────────────────────────────
  { src: '32548d60f1f22aee83a6c66eb2987f35.jpg',           area: 'j', speedLines: true, num: 10 },
  { src: '3f7a59bbf770c1108841e5d4928da2c4.jpg',           area: 'k',               num: 11 },
  { src: '40539a5a09eeaf09956bc59225038740.jpg',           area: 'l',               num: 12 },
  { src: '4cfd1e0adb2eb95ef54741c9b9b0dde0.jpg',           area: 'm',               num: 13 },
  // ── row 4 ──────────────────────────────────────────────────────
  { src: '4da05aa4ca9cfea9949e84ab061e55e7.jpg',           area: 'n', kanji: '鬼',  num: 14 },
  { src: '53379c7efbfec7f063e502f5de7684ce.jpg',           area: 'o',               num: 15 },
  { src: '57f77040603a4f2a91d9280ba0e093cd.jpg',           area: 'p',               num: 16 },
  { src: '4d27473720f894ac5e9ab783032b3d18.jpg',           area: 'q',               num: 17 },
  { src: '561c621e9e3f256df8b9629fe42f43d1.jpg',           area: 'r',               num: 18 },
  // ── row 5 ──────────────────────────────────────────────────────
  { src: '580b0a986b55bb640748f919ad68dcec.jpg',           area: 's',               num: 19 },
  { src: '613ccc2156e0ff8cd0904f1dd5d3a1e6.jpg',           area: 't',               num: 20 },
  { src: '62812bd5823947a8aa0e8088d932b12a.jpg',           area: 'u',               num: 21 },
  { src: '62ff4d1fb640c360d7c3402004432621.jpg',           area: 'v',               num: 22 },
  { src: '6d54f757d1b57004694e436d2d4bb245.jpg',           area: 'w',               num: 23 },
];

const r4 = (n: number) => Math.round(n * 10000) / 10000;

function SpeedLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={100}
            y1={100}
            x2={r4(100 + Math.cos(angle) * 180)}
            y2={r4(100 + Math.sin(angle) * 180)}
            stroke="white"
            strokeWidth={i % 5 === 0 ? '1.5' : '0.5'}
            opacity={0.08 + (i % 3) * 0.02}
          />
        );
      })}
    </svg>
  );
}

export default function MangaCollage() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr 1fr 1.3fr 1fr 1.1fr',
        gridTemplateRows: '1fr 0.8fr 1fr 0.85fr 0.9fr',
        gridTemplateAreas: `
          "a b b c d e"
          "a f g c h i"
          "j f k l l m"
          "j n o p q r"
          "s t u v w w"
        `,
        gap: '3px',
        backgroundColor: '#000',
      }}
    >
      {panels.map((panel) => (
        <div
          key={panel.area}
          style={{
            gridArea: panel.area,
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid #000',
            outline: '1px solid rgba(37,99,235,0.25)',
            outlineOffset: '-2px',
          }}
          className="group"
        >
          <Image
            src={enc(panel.src)}
            alt={`manga panel ${panel.num}`}
            fill
            sizes="(max-width: 768px) 50vw, 17vw"
            loading={panel.num === 1 ? 'eager' : 'lazy'}
            style={{
              objectFit: 'cover',
              filter: 'grayscale(15%) contrast(1.1) brightness(0.75)',
              transition: 'filter 0.4s ease',
            }}
            className="group-hover:!filter-none"
          />

          {/* Blue-tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-400 group-hover:opacity-0"
            style={{ background: 'rgba(14,30,80,0.18)', mixBlendMode: 'multiply' }}
          />

          {/* Speed lines */}
          {panel.speedLines && <SpeedLines />}

          {/* Kanji overlay */}
          {panel.kanji && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                fontSize: 'clamp(28px, 5vw, 70px)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.40)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                userSelect: 'none',
              }}
            >
              {panel.kanji}
            </div>
          )}

          {/* Panel number — manga style */}
          <div
            className="absolute bottom-1 right-1.5 pointer-events-none"
            style={{
              fontFamily: 'monospace',
              fontSize: '8px',
              color: 'rgba(255,255,255,0.20)',
              userSelect: 'none',
            }}
          >
            [{String(panel.num).padStart(2, '0')}]
          </div>
        </div>
      ))}
    </div>
  );
}
