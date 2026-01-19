'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import { freelanceProjects, personalProjects } from '@/lib/data/projects';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <SectionWrapper id="projects" className="py-20">
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
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16"
          >
            {t('subtitle')}
          </motion.p>

          {/* FREELANCE PROJECT SECTION */}
          {freelanceProjects.length > 0 && (
            <div className="mb-20">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              >
                {t('freelanceTitle')}
              </motion.h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {freelanceProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* PERSONAL PROJECTS SECTION */}
          {personalProjects.length > 0 && (
            <div>
              <motion.h3
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent"
              >
                {t('personalTitle')}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {personalProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
