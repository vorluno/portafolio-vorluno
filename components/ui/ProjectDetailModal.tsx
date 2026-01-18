'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl text-gray-700 dark:text-gray-300" />
              </button>

              {/* Content */}
              <div className="h-full overflow-y-auto p-6 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {project.longDescription || project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                      >
                        <FaGithub className="text-xl" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>View Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {project.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          {/* Imagen con proporción más compacta */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Información en hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <h4 className="text-lg font-bold text-white mb-1">
                                {image.title}
                              </h4>
                              <p className="text-sm text-gray-200 line-clamp-2">
                                {image.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* README Content */}
                {project.readmeContent && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Documentation
                    </h3>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        {project.readmeContent}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
