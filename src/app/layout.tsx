import { Metadata } from 'next';
import '@/style/globals.css';

export const metadata: Metadata = {
  title: 'Pizzaria',
  description: 'A melhor Pizzaria com a Melhor Pizza da Região!',
  icons: {
    icon: './src/assets/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};