'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import GeometricDecor from '@/components/ui/GeometricDecor';
import { freelanceProjects, personalProjects } from '@/lib/data/projects';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

// Mapeo de project.id → clave en projectsData
const ID_MAP: Record<string, string> = {
  'planilla-saas-freelance': 'sistemaPlanilla',
  'clau-formulario-freelance': 'clauFormulario',
  'menu-digital': 'menuDigital',
  'formulario-vorluno': 'formularioVorluno',
};

export default function Projects() {
  const t = useTranslations('projects');
  const tData = useTranslations('projectsData');

  function translateProject(project: Project): Project {
    const key = ID_MAP[project.id];
    if (!key) return project;

    const translated: Project = {
      ...project,
      title: tData(`${key}.title`),
      description: tData(`${key}.description`),
      longDescription: tData(`${key}.longDescription`),
    };

    // Traducir gallery (solo para proyectos con 2 imágenes y traducciones disponibles)
    if (project.gallery && project.gallery.length === 2) {
      try {
        translated.gallery = [
          {
            ...project.gallery[0],
            alt: tData(`${key}.galleryAlt1`),
            title: tData(`${key}.galleryTitle1`),
            description: tData(`${key}.galleryDesc1`),
          },
          {
            ...project.gallery[1],
            alt: tData(`${key}.galleryAlt2`),
            title: tData(`${key}.galleryTitle2`),
            description: tData(`${key}.galleryDesc2`),
          },
        ];
      } catch {
        // Si no hay traducciones de galería, mantener originales
      }
    }

    return translated;
  }

  const translatedFreelance = freelanceProjects.map(translateProject);
  const translatedPersonal = personalProjects.map(translateProject);

  return (
    <SectionWrapper id="projects" className="py-20 relative overflow-hidden">
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
            className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16"
          >
            {t('subtitle')}
          </motion.p>

          {/* FREELANCE */}
          {translatedFreelance.length > 0 && (
            <div className="mb-20">
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-cyan-500/50" />
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {t('freelanceTitle')}
                </h3>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-cyan-500/50" />
              </motion.div>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {translatedFreelance.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* PERSONAL */}
          {translatedPersonal.length > 0 && (
            <div>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-blue-500/50" />
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {t('personalTitle')}
                </h3>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-blue-500/50" />
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {translatedPersonal.map((project) => (
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
