import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { getProducts, getCategories } from '@/lib/products';
import { FiTrendingUp, FiAward, FiTruck, FiShield } from 'react-icons/fi';

export default function HomePage() {
  const products = getProducts();
  const categories = getCategories();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Les Meilleurs Produits Informatiques
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Découvrez notre sélection des produits les mieux notés d'AliExpress.
              Qualité garantie, prix imbattables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
                Voir tous les produits
              </Link>
              <Link href="/categories" className="btn bg-primary-700 hover:bg-primary-800 border-2 border-white text-lg px-8 py-3">
                Explorer les catégories
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.7+</div>
              <div className="opacity-90">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="opacity-90">Produits sélectionnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30j</div>
              <div className="opacity-90">Garantie retour</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parcourir par Catégorie
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez exactement ce dont vous avez besoin
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="card p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.productCount} produits</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Produits Populaires
              </h2>
              <p className="text-lg text-gray-600">
                Les meilleures ventes de ce mois
              </p>
            </div>
            <Link href="/products" className="btn btn-outline hidden md:inline-flex">
              Voir tout
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/products" className="btn btn-primary w-full sm:w-auto">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-600">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité Garantie</h3>
              <p className="text-gray-600">
                Produits les mieux notés sur AliExpress
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-600">
                <FiTruck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">
                Expédition internationale suivie
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-600">
                <FiShield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achat Sécurisé</h3>
              <p className="text-gray-600">
                Protection acheteur garantie
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-600">
                <FiTrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meilleurs Prix</h3>
              <p className="text-gray-600">
                Prix directs usine compétitifs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire vos achats ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez notre sélection complète de produits informatiques
          </p>
          <Link href="/products" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
            Commencer maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
