'use client';

import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiSearch } from 'react-icons/fi';
import { useCartStore } from '@/utils/cart';
import { useState } from 'react';

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TechShop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Produits
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Catégories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              À propos
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <FiShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-primary-600 py-2">
                Accueil
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary-600 py-2">
                Produits
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 py-2">
                Catégories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 py-2">
                À propos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
