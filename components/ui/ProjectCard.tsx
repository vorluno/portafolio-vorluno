'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';
import Card from './Card';
import Button from './Button';
import { useTranslations } from 'next-intl';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY((x - centerX) / 10);
    setRotateX((centerY - y) / 10);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoPreview) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleViewProject = () => {
    if (project.demo && !project.isFreelance) {
      // Si tiene demo y no es freelance, ir directamente
      window.open(project.demo, '_blank');
    } else {
      // Si es freelance o no tiene demo, abrir modal
      setIsModalOpen(true);
    }
  };

  const handleViewCode = () => {
    if (project.github) {
      window.open(project.github, '_blank');
    }
  };

  return (
    <>
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="perspective-1000"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Card glassmorphism className="overflow-hidden h-full flex flex-col">
          {/* Imagen más grande - de h-48 a h-64 */}
          <div className="relative h-64 md:h-72 w-full mb-4 rounded-lg overflow-hidden bg-gradient-primary">
            {/* Imagen del proyecto con zoom */}
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Video preview */}
            {project.videoPreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-10"
              >
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  src={project.videoPreview}
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'top' }}
                />
              </motion.div>
            )}

            {project.featured && (
              <div className="absolute top-2 right-2 bg-gradient-primary text-white text-xs px-3 py-1 rounded-full z-20">
                {t('featured')}
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                +{project.technologies.length - 3} {t('moreLabel')}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <Button variant="primary" size="sm" className="flex-1" onClick={handleViewProject}>
              {t('viewProject')}
            </Button>
            {project.github && (
              <Button variant="outline" size="sm" className="flex-1" onClick={handleViewCode}>
                {t('viewCode')}
              </Button>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Modal de detalles */}
      <ProjectDetailModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
