import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechShop - Boutique Informatique en Ligne | Produits AliExpress',
  description: 'Découvrez notre sélection de produits informatiques les mieux notés d\'AliExpress: laptops, accessoires, stockage, audio et plus. Prix compétitifs et livraison rapide.',
  keywords: ['informatique', 'ordinateurs', 'laptops', 'accessoires PC', 'gaming', 'AliExpress'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
