import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from 'next-themes';
import { Open_Sans, Roboto, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400'],
});

export const metadata = {
  title: 'Leonardo Guanuco | Desarrollador de Software',
  description:
    'Portfolio de Leonardo Guanuco, desarrollador web especializado en React, Next.js, NestJS y bases de datos SQL/NoSQL. Creación de aplicaciones modernas, escalables y optimizadas.',
  keywords: [
    'Leonardo Guanuco',
    'Desarrollador Web',
    'Full Stack Developer',
    'Next.js',
    'React',
    'NestJS',
    'PostgreSQL',
    'TypeScript',
  ],
  openGraph: {
    title: 'Leonardo Guanuco | Desarrollador de Software',
    description:
      'Desarrollo de aplicaciones web modernas con Next.js, React, NestJS. Portafolio de Leonardo Guanuco.',
    url: 'https://www.leonardoguanuco.com',
    siteName: 'Leonardo Guanuco',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={`${openSans.variable} ${roboto.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <head>
          <meta
            name='description'
            content='Portfolio de Leonardo Guanuco, desarrollador de software especializado en React, Next.js, NestJS y bases de datos SQL/NoSQL.'
          />
          <meta
            name='keywords'
            content='Leonardo Guanuco, Desarrollador de software, Web, Full Stack, Next.js, React, TypeScript'
          />
        </head>
        <title>Leonardo Guanuco</title>
      </head>
      <body className='font-roboto'>
        <GoogleAnalytics gaId={process.env.ANALYTICS_ID!} />
        <ThemeProvider
          themes={['light', 'dark']}
          defaultTheme='light'
          enableSystem
          attribute={'class'}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
