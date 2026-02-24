'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { workExperiences, educationEntries, courseEntries } from '@/lib/data/experience';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <SectionWrapper id="experience" className="py-20 bg-light-base dark:bg-dark-base relative overflow-hidden">
      <GeometricDecor variant="section" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Título */}
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
            className="text-center text-slate-400 mb-14 text-base"
          >
            {t('subtitle')}
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-10">

            {/* ── Experiencia Laboral ── */}
            <motion.div variants={fadeInUp}>
              <div
                className="relative rounded-none p-7 overflow-hidden"
                style={{
                  background: 'rgba(2,8,23,0.82)',
                  border: '2px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.22), 0 8px 40px rgba(0,0,0,0.5)',
                }}
              >
                {/* Acento japonés */}
                <div className="absolute top-3 right-4 font-mono text-[11px] text-sky-400/40 select-none">
                  職歴
                </div>

                {/* Barra azul + título subsección */}
                <div className="w-10 h-0.5 bg-blue-500 mb-3" />
                <h3 className="text-sm font-mono text-sky-300/70 uppercase tracking-widest mb-6">
                  {t('work.title')}
                </h3>

                {/* Timeline */}
                <div className="relative pl-6" style={{ borderLeft: '2px solid rgba(37,99,235,0.35)' }}>
                  <div className="space-y-8">
                    {workExperiences.map((job) => (
                      <div key={job.id} className="relative">
                        {/* Dot de timeline */}
                        <span
                          className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-blue-500"
                          style={{ background: job.current ? '#2563EB' : 'rgba(2,8,23,0.9)' }}
                        />

                        {/* Cabecera */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-100 tracking-wide">
                            {job.role}
                          </span>
                          {job.current && (
                            <span
                              className="text-[10px] px-2 py-0.5 font-mono"
                              style={{
                                background: 'rgba(37,99,235,0.18)',
                                border: '1px solid rgba(37,99,235,0.4)',
                                color: '#7dd3fc',
                              }}
                            >
                              {t('current')}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-400/80 mb-3 font-mono">
                          <span className="text-sky-400/80">{job.company}</span>
                          <span>·</span>
                          <span>{job.period}</span>
                          <span>·</span>
                          <span>{job.location}</span>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-1.5 mb-3">
                          {job.bulletKeys.map((key) => (
                            <li key={key} className="flex gap-2 text-sm text-slate-300/80">
                              <span className="text-blue-400/60 mt-0.5 shrink-0">›</span>
                              <span>{t(`bullets.${key}`)}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags de tecnología */}
                        {job.tech && job.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {job.tech.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 font-mono"
                                style={{
                                  background: 'rgba(37,99,235,0.12)',
                                  border: '1px solid rgba(37,99,235,0.25)',
                                  color: '#7dd3fc',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Formación Académica ── */}
            <motion.div variants={fadeInUp}>
              <div
                className="relative rounded-none p-7 overflow-hidden"
                style={{
                  background: 'rgba(2,8,23,0.82)',
                  border: '2px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.22), 0 8px 40px rgba(0,0,0,0.5)',
                }}
              >
                {/* Acento japonés */}
                <div className="absolute top-3 right-4 font-mono text-[11px] text-sky-400/40 select-none">
                  学歴
                </div>

                {/* Barra azul + título subsección */}
                <div className="w-10 h-0.5 bg-blue-500 mb-3" />
                <h3 className="text-sm font-mono text-sky-300/70 uppercase tracking-widest mb-6">
                  {t('education.title')}
                </h3>

                <div className="space-y-5">
                  {educationEntries.map((edu) => (
                    <div
                      key={edu.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 pb-5"
                      style={{ borderBottom: '1px solid rgba(37,99,235,0.15)' }}
                    >
                      {/* Icono */}
                      <div
                        className="w-9 h-9 flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(37,99,235,0.12)',
                          border: '1px solid rgba(37,99,235,0.3)',
                        }}
                      >
                        <svg className="w-4 h-4 text-sky-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-sm font-semibold text-slate-100">
                            {t(`degrees.${edu.degreeKey}`)}
                          </span>
                          {edu.ongoing && (
                            <span
                              className="text-[10px] px-2 py-0.5 font-mono"
                              style={{
                                background: 'rgba(37,99,235,0.18)',
                                border: '1px solid rgba(37,99,235,0.4)',
                                color: '#7dd3fc',
                              }}
                            >
                              {t('ongoing')}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 text-xs text-slate-400/80 font-mono">
                          <span className="text-sky-400/80">{edu.institution}</span>
                          <span>·</span>
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Cursos & Certificaciones ── */}
            <motion.div variants={fadeInUp}>
              <div
                className="relative rounded-none p-7 overflow-hidden"
                style={{
                  background: 'rgba(2,8,23,0.82)',
                  border: '2px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 0 0 1px rgba(37,99,235,0.22), 0 8px 40px rgba(0,0,0,0.5)',
                }}
              >
                {/* Acento japonés */}
                <div className="absolute top-3 right-4 font-mono text-[11px] text-sky-400/40 select-none">
                  資格
                </div>

                {/* Barra azul + título subsección */}
                <div className="w-10 h-0.5 bg-blue-500 mb-3" />
                <h3 className="text-sm font-mono text-sky-300/70 uppercase tracking-widest mb-6">
                  {t('courses.title')}
                </h3>

                <div className="space-y-4">
                  {courseEntries.map((course, i) => (
                    <div
                      key={course.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4"
                      style={{
                        borderBottom: i < courseEntries.length - 1
                          ? '1px solid rgba(37,99,235,0.15)'
                          : 'none',
                      }}
                    >
                      {/* Icono */}
                      <div
                        className="w-9 h-9 flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(37,99,235,0.12)',
                          border: '1px solid rgba(37,99,235,0.3)',
                        }}
                      >
                        <svg className="w-4 h-4 text-sky-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-sm font-semibold text-slate-100">
                            {t(`courses.${course.titleKey}`)}
                          </span>
                          {course.ongoing && (
                            <span
                              className="text-[10px] px-2 py-0.5 font-mono"
                              style={{
                                background: 'rgba(37,99,235,0.18)',
                                border: '1px solid rgba(37,99,235,0.4)',
                                color: '#7dd3fc',
                              }}
                            >
                              {t('ongoing')}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 text-xs text-slate-400/80 font-mono">
                          <span className="text-sky-400/80">{course.institution}</span>
                          <span>·</span>
                          <span>{course.date}</span>
                          {course.hours && (
                            <>
                              <span>·</span>
                              <span>{course.hours} {t('courses.hours')}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
