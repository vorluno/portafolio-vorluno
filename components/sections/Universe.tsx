'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import GeometricDecor from '@/components/ui/GeometricDecor';
import MangaCollage from '@/components/ui/MangaCollage';

interface BentoCardProps {
  title: string;
  jaTitle: string;
  text: string;
  tags: string[];
  colSpan?: 1 | 2 | 3;
  delay?: number;
  bgImage?: string;
}

function BentoCard({
  title,
  jaTitle,
  text,
  tags,
  colSpan = 1,
  delay = 0,
  bgImage,
}: BentoCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay }}
      className={`relative rounded-none p-5 flex flex-col gap-0 overflow-hidden ${
        colSpan === 2 ? 'md:col-span-2' : colSpan === 3 ? 'md:col-span-3' : ''
      }`}
      style={{
        background: 'rgba(2,8,23,0.88)',
        border: '2px solid rgba(255,255,255,0.10)',
        boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.25), 0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Background image (fondo de card) */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="pointer-events-none select-none"
          />
          {/* Overlay oscuro sobre la imagen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(2,8,23,0.72)' }}
          />
        </>
      )}

      {/* Japanese corner tag */}
      <div className="absolute top-2 right-3 font-mono text-[10px] text-sky-400/50 select-none z-10">
        {jaTitle}
      </div>

      {/* Blue accent bar */}
      <div className="w-8 h-0.5 bg-blue-500 mb-3 relative z-10" />

      {/* Title */}
      <h3 className="font-bold text-sm text-white/90 mb-3 tracking-wider uppercase relative z-10">
        {title}
      </h3>

      {/* Text */}
      <p
        className="text-[11px] leading-relaxed text-slate-300/85 flex-1 relative z-10"
        style={{
          fontFamily: 'system-ui',
          borderLeft: '2px solid rgba(37,99,235,0.4)',
          paddingLeft: '10px',
        }}
      >
        {text}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-3 relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] px-1.5 py-0.5 font-mono"
            style={{
              background: 'rgba(37,99,235,0.18)',
              border: '1px solid rgba(37,99,235,0.4)',
              color: '#7dd3fc',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Universe() {
  const t = useTranslations('universe');

  return (
    <section id="universe" className="py-28 relative overflow-hidden">
      {/* Background: manga panel collage */}
      <MangaCollage />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-dark-base/60 z-[1] pointer-events-none" />

      {/* Geometric decoration */}
      <GeometricDecor variant="minimal" className="z-[2]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('title')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Bento grid — 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Row 1: Anime & Manga (2 cols) + Series (2 cols) */}
            <BentoCard
              title={t('anime.title')}
              jaTitle="アニメ"
              text="Me gusta en general el mundo del anime y manga, he leído has novelas ligeras de mis animes favoritos, me encanta ver animes de romance y de acción, tengo mis favoritos y muchos otros que me encantan, mi personaje favorito en este momento es choso de jujutsu kaisen."
              tags={['JJK', 'Re:Zero', 'Mushoku Tensei', 'Choso', 'Isekai', 'Romance']}
              colSpan={2}
              delay={0.1}
            />
            <BentoCard
              title={t('series.title')}
              jaTitle="シリーズ"
              text="Me gustan muchos tipos de series, pero las series de acción, de superheroes o supervivencia son mis favoritas, algunas qué tienen ese suspenso y dramas sangrientos como You o The boys, diría que son series que disfruto. Un gusto culposo que agarre fueron los kdramas, hay kdramas románticos tan lindos que se te derrite el corazón y muchos otros que muestran caras de la sociedad muy fuertes, también hay de acción, uno que recomiendo es vagabond."
              tags={['The Boys', 'You', 'Vagabond', 'Kdramas', 'Superhéroes']}
              colSpan={2}
              delay={0.2}
            />

            {/* Row 2: Música (3 cols) + Gaming (1 col) */}
            <BentoCard
              title={t('music.title')}
              jaTitle="音楽"
              text="En temas musicales tengo un gusto demasiado variado, puedo disfrutar cualquier tipo de canción en español, reggaetón, salsa, merengue, vallenato, típico, bachata, rock... Pero también me encanta el pop inglés, el pop japonés, los openings de anime dirían, el kpop me gustan muchas bandas y idols. También diendo más profundo diría que el rock y metalcore, Luis Miguel, boleros... Hay demasiado que podría mencionar, pero esto es lo que normalmente escucho."
              tags={['Arctic Monkeys', 'Bachata', 'Metalcore', 'K-Pop', 'J-Pop', 'Luis Miguel']}
              colSpan={3}
              delay={0.3}
              bgImage="/images/lista%20de%20spotify.png"
            />
            <BentoCard
              title={t('gaming.title')}
              jaTitle="ゲーム"
              text="Soy fan de los videojuegos arcade y rpg, me encanta sumergirme en sus mundos, no llevar un camino específico, juegos como octopath traveler, dark souls, Celeste, silksong, hades, stardew valley, elden ring, sekiro. Aunque a algo más popular diría genshin impact, honkai star rail, league of legends, osu, Minecraft, fortnite y juegos más personales, uncharted, the walking dead, god of war."
              tags={['Elden Ring', 'Genshin', 'Celeste', 'Uncharted', 'Dark Souls']}
              colSpan={1}
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
