'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { socialLinks } from '@/lib/data/social';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export default function Contact() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <SectionWrapper id="contact" className="py-20">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Card glassmorphism>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-lighter border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-lighter border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {t('form.message')}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-lighter border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t('form.sending') : t('form.send')}
                  </Button>

                  {status === 'success' && (
                    <p className="text-green-600 dark:text-green-400 text-center">
                      {t('form.success')}
                    </p>
                  )}
                </form>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <Card glassmorphism>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-primary hover:underline"
                >
                  {socialLinks.email}
                </a>
              </Card>

              <Card glassmorphism>
                <h3 className="text-xl font-semibold mb-4">GitHub</h3>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {socialLinks.github}
                </a>
              </Card>

              <Card glassmorphism>
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {socialLinks.linkedin}
                </a>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
