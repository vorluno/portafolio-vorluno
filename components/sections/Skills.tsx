'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SkillIcon from '@/components/ui/SkillIcon';
import { skillCategories } from '@/lib/data/skills';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <SectionWrapper id="skills" className="py-20 bg-light-base dark:bg-dark-base">
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

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12"
          >
            {t('subtitle')}
          </motion.p>

          <div className="space-y-12 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {t(category.category)}
                </h3>
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
