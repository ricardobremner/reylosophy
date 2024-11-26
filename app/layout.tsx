import type { Metadata } from 'next';
import { merriWeather } from '@/app/ui/fonts';
import './globals.css';
import NavBar from './ui/navbar';
import Footer from './ui/footer';

export const metadata: Metadata = {
  title: {
    template: 'Rey Hernández - %s',
    default: 'Rey Hernández'
  },
  description: 'Sitio oficial de Rey Hernández',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${merriWeather.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
