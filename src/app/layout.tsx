import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pizzaria',
  description: 'A melhor Pizzaria com a Melhor Pizza da Região!',
  icons: {
    icon: 'favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};