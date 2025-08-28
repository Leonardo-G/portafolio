import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from 'next-themes';
import { Open_Sans, Roboto } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
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
      className={`${openSans.variable} ${roboto.variable} scroll-smooth`}
    >
      <head>
        <title>Leonardo Guanuco</title>
      </head>
      <body className='font-roboto'>
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
