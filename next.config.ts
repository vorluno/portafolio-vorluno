import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'standalone',

  // Optimize bundle for production
  swcMinify: true,

  // Reduce memory usage during build
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
};

export default withNextIntl(nextConfig);
