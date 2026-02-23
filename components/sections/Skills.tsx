'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SkillIcon from '@/components/ui/SkillIcon';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { skillCategories } from '@/lib/data/skills';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <SectionWrapper id="skills" className="py-20 relative overflow-hidden bg-light-base dark:bg-dark-base">
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

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-14"
          >
            {t('subtitle')}
          </motion.p>

          <div className="space-y-10 max-w-6xl mx-auto">
            {skillCategories.map((category, ci) => (
              <motion.div key={category.category} variants={fadeInUp}>
                {/* Category header — manga panel style */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-sm" style={{ background: 'linear-gradient(180deg, #3B82F6, #38BDF8)' }} />
                  <span className="font-mono text-[10px] text-sky-400/60 tracking-widest select-none">
                    [{String(ci + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="text-base font-bold tracking-wider uppercase" style={{ color: 'rgba(226,232,240,0.9)' }}>
                    {t(category.category)}
                  </h3>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.35) 0%, transparent 100%)' }} />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillIcon key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
