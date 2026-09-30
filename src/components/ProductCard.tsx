'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { FiStar, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card card-hover group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="relative block">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on Hover */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount > 0 && (
              <div className="badge badge-discount px-3 py-1 font-bold shadow-lg">
                -{product.discount}%
              </div>
            )}
            {product.rating >= 4.7 && (
              <div className="badge bg-yellow-400 text-gray-900 px-3 py-1 font-semibold shadow-lg">
                ⭐ Top Rated
              </div>
            )}
          </div>

          {/* Quick Actions - Shown on Hover */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <button 
              className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors group/btn"
              title="Ajouter aux favoris"
            >
              <FiHeart className="w-5 h-5" />
            </button>
            <Link
              href={`/products/${product.id}`}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              title="Voir détails"
            >
              <FiEye className="w-5 h-5" />
            </Link>
          </div>

          {/* Stock Warning */}
          {product.stock < 10 && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Plus que {product.stock} en stock!
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Category Tag */}
        <div className="mb-2">
          <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg mb-3 line-clamp-2 hover:text-primary-600 transition-colors min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1 rounded-lg">
            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-900">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews.toLocaleString()} avis)
          </span>
        </div>

        {/* Price & Action */}
        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toFixed(2)} €
              </span>
            </div>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toFixed(2)} €
              </span>
            )}
          </div>

          <button 
            className="btn btn-primary px-4 py-2 shadow-lg hover:shadow-xl"
            title="Ajouter au panier"
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Shipping Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-green-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Livraison gratuite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
