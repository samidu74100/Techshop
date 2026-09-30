import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/ProductCard';
import { getProducts, getCategories } from '@/lib/products';
import { FiTrendingUp, FiAward, FiTruck, FiShield, FiStar, FiCreditCard, FiHeadphones, FiArrowRight, FiCheck } from 'react-icons/fi';

export default function HomePage() {
  const products = getProducts();
  const categories = getCategories();
  const featuredProducts = products.slice(0, 8);
  const bestSellers = products.sort((a, b) => b.reviews - a.reviews).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-700">Nouveaux produits chaque semaine</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Les Meilleurs
                <span className="gradient-text block mt-2">Produits Tech</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Découvrez notre sélection exclusive des produits informatiques les mieux notés.
                Qualité premium, prix imbattables, livraison rapide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn btn-primary text-lg group">
                  Découvrir la boutique
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/categories" className="btn btn-secondary text-lg">
                  Voir les catégories
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <FiCheck className="text-green-500" />
                  <span className="text-sm font-medium">Produits vérifiés</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiCheck className="text-green-500" />
                  <span className="text-sm font-medium">Notes 4.5+</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiCheck className="text-green-500" />
                  <span className="text-sm font-medium">Livraison gratuite</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="grid grid-cols-2 gap-6 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <div className="card card-hover p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <div className="text-5xl font-bold mb-2">4.7⭐</div>
                <div className="text-blue-100 text-lg">Note moyenne</div>
              </div>
              <div className="card card-hover p-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <div className="text-5xl font-bold mb-2">18</div>
                <div className="text-purple-100 text-lg">Produits premium</div>
              </div>
              <div className="card card-hover p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="text-5xl font-bold mb-2">30j</div>
                <div className="text-green-100 text-lg">Garantie retour</div>
              </div>
              <div className="card card-hover p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-orange-100 text-lg">Support client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explorez par <span className="gradient-text">Catégorie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              6 catégories soigneusement sélectionnées pour tous vos besoins informatiques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group card card-interactive p-6 text-center hover:border-primary-300 animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.productCount} produits
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section section-alt">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
                <FiTrendingUp className="text-xl" />
                <span className="font-semibold text-sm">Tendances</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                Meilleures Ventes
              </h2>
              <p className="text-lg text-gray-600">
                Les produits les plus populaires auprès de nos clients
              </p>
            </div>
            <Link 
              href="/products" 
              className="btn btn-outline mt-6 md:mt-0 group"
            >
              Voir tout
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
              <FiStar className="text-xl" />
              <span className="font-semibold text-sm">Sélection Premium</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Produits <span className="gradient-text">En Vedette</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre sélection exclusive des meilleurs produits du moment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fadeIn"
                style={{animationDelay: `${index * 0.08}s`}}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Choisir <span className="gradient-text">TechShop</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous offrons la meilleure expérience d'achat en ligne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiAward className="text-4xl" />,
                title: 'Qualité Premium',
                description: 'Produits soigneusement sélectionnés avec des notes supérieures à 4.5 étoiles',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <FiTruck className="text-4xl" />,
                title: 'Livraison Rapide',
                description: 'Expédition sous 24h et livraison gratuite pour toute commande',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <FiShield className="text-4xl" />,
                title: 'Paiement Sécurisé',
                description: 'Transactions protégées avec cryptage SSL et garantie satisfait ou remboursé',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <FiHeadphones className="text-4xl" />,
                title: 'Support 24/7',
                description: 'Notre équipe est disponible pour vous aider à tout moment',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card p-8 hover-lift group animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Découvrir les Meilleurs Produits Tech?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers de clients satisfaits et profitez de nos offres exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl">
                Commencer vos achats
              </Link>
              <Link href="/about" className="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 text-lg px-8 py-4">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
