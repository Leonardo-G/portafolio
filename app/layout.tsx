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
