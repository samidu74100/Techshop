import { FiAward, FiTruck, FiShield, FiHeart } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">À Propos de TechShop</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Votre destination pour les meilleurs produits informatiques d'AliExpress
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chez TechShop, nous nous engageons à vous offrir une sélection rigoureuse des
              meilleurs produits informatiques disponibles sur AliExpress. Nous analysons les
              notes, les avis et la qualité pour ne vous proposer que le meilleur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque produit est soigneusement sélectionné sur la base de critères stricts :
              note minimum de 4.5/5, au moins 1000 avis vérifiés, et un historique de vendeur
              fiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FiAward className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Qualité Garantie</h3>
              <p className="text-gray-600">
                Tous nos produits sont les mieux notés sur AliExpress, avec des milliers d'avis
                positifs de clients satisfaits.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FiTruck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Livraison Rapide</h3>
              <p className="text-gray-600">
                Expédition internationale suivie avec des délais optimisés. Suivi en temps réel
                de votre commande.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FiShield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Protection Acheteur</h3>
              <p className="text-gray-600">
                Protection complète de votre achat avec garantie de remboursement en cas de
                problème. Votre satisfaction est notre priorité.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FiHeart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Service Client</h3>
              <p className="text-gray-600">
                Une équipe dédiée pour répondre à toutes vos questions et vous accompagner dans
                vos achats.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à découvrir nos produits ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Explorez notre catalogue et trouvez le produit parfait pour vous
            </p>
            <a href="/products" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
              Voir tous les produits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
