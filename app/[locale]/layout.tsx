import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SplashScreen from '@/components/ui/SplashScreen';
import '../globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = 'José González | Full Stack Developer';
  const description = isEs
    ? 'Desarrollador Full Stack especializado en .NET, React y arquitecturas modernas. Basado en Panamá.'
    : 'Full Stack Developer specializing in .NET, React, and modern web technologies. Based in Panama.';

  return {
    title,
    description,
    keywords: ['Full Stack Developer', 'Desarrollador Web', '.NET', 'React', 'Next.js', 'Panama', 'José González'],
    authors: [{ name: 'José González' }],
    creator: 'José González',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: isEs ? 'es_PA' : 'en_US',
      alternateLocale: isEs ? 'en_US' : 'es_PA',
      url: 'https://vorluno.dev',
      title,
      description,
      siteName: 'José González · Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <SplashScreen />
        <ScrollProgress />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ParticlesBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
