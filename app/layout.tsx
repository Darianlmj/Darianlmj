import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from './_components/nav-bar';
import { ThemeProvider } from 'next-themes';

const inter = localFont({
  src: './fonts/Inter-VF.ttf',
  variable: '--font-inter',
  weight: '100 900',
});
const jetBrainsMono = localFont({
  src: './fonts/JetBrainsMonoVF.ttf',
  variable: '--font-jetbrains-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Darian Lee',
  description: 'Software engineer by day, photographer by later day (sometimes night)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
