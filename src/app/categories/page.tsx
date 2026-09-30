import Link from 'next/link';
import { getCategories, getProductsByCategory } from '@/lib/products';

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4">Toutes les Catégories</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explorez nos catégories de produits informatiques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const products = getProductsByCategory(category.id);
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="card p-8 hover:shadow-2xl transition-all group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm font-medium text-primary-600">
                  {category.productCount} produits disponibles
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
