'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-dark-lighter transition-colors duration-200"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold"
        animate={{ x: locale === 'en' ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {locale.toUpperCase()}
      </motion.div>
    </button>
  );
}
