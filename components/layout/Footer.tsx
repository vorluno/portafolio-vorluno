'use client';

import { useTranslations } from 'next-intl';
import { socialLinks } from '@/lib/data/social';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white dark:bg-dark-base border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Vorluno. {t('rights')}.
          </p>

          <div className="flex gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">{t('built')}</p>
        </div>
      </div>
    </footer>
  );
}
