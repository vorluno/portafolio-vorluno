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
