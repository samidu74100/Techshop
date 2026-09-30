import Link from 'next/link';
import { Product } from '@/types';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="card group">
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 badge badge-discount font-bold">
            -{product.discount}%
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews} avis)</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary-600">
              {product.price.toFixed(2)} €
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toFixed(2)} €
              </span>
            )}
          </div>

          <button className="btn btn-primary">
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {product.stock < 10 && (
          <p className="text-xs text-red-600 mt-2">
            Plus que {product.stock} en stock!
          </p>
        )}
      </div>
    </Link>
  );
}
