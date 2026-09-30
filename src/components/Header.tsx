'use client';

import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiSearch, FiX, FiUser, FiHeart } from 'react-icons/fi';
import { useCartStore } from '@/utils/cart';
import { useState, useEffect } from 'react';

export function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                TechShop
              </span>
              <span className="text-xs text-gray-500 -mt-1">Premium Tech Store</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-600 transition-colors" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/products', label: 'Produits' },
              { href: '/categories', label: 'Catégories' },
              { href: '/about', label: 'À propos' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 ml-4">
            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
              <FiSearch className="w-5 h-5 text-gray-700" />
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative group">
              <FiHeart className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Account */}
            <button className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
              <FiUser className="w-5 h-5 text-gray-700" />
            </button>

            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative p-2.5 hover:bg-primary-50 rounded-xl transition-all duration-200 group"
            >
              <FiShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-scaleIn">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1">
            {/* Mobile Search */}
            <div className="px-2 pb-4 mb-2 border-b border-gray-200">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {[
              { href: '/', label: 'Accueil', icon: '🏠' },
              { href: '/products', label: 'Produits', icon: '🛍️' },
              { href: '/categories', label: 'Catégories', icon: '📁' },
              { href: '/about', label: 'À propos', icon: 'ℹ️' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium"
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </Link>
            ))}

            {/* Mobile Account Links */}
            <div className="pt-2 mt-2 border-t border-gray-200 space-y-1">
              <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium">
                <FiUser className="w-5 h-5" />
                Mon Compte
              </button>
              <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium">
                <FiHeart className="w-5 h-5" />
                Mes Favoris
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="py-2 text-center text-sm font-medium">
            <span className="hidden sm:inline">🎉 Livraison gratuite dès 50€ d'achat • </span>
            <span>Retours gratuits sous 30 jours</span>
          </div>
        </div>
      </div>
    </header>
  );
}
