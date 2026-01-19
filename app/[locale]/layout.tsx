import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export const metadata = {
  title: 'Vorluno | Full Stack Developer',
  description:
    'Full Stack Developer specializing in .NET, React, and modern web technologies. Based in Panama.',
  keywords: ['Full Stack Developer', 'Web Development', '.NET', 'React', 'Next.js', 'Panama'],
  authors: [{ name: 'Vorluno' }],
  creator: 'Vorluno',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_PA',
    url: 'https://vorluno.dev',
    title: 'Vorluno | Full Stack Developer',
    description:
      'Full Stack Developer specializing in .NET, React, and modern web technologies.',
    siteName: 'Vorluno Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorluno | Full Stack Developer',
    description:
      'Full Stack Developer specializing in .NET, React, and modern web technologies.',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
