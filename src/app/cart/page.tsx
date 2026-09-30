'use client';

import Link from 'next/link';
import { useCartStore } from '@/utils/cart';
import { FiTrash2, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();

  const handleRemove = (productId: string, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} retiré du panier`);
  };

  const handleClearCart = () => {
    if (confirm('Voulez-vous vraiment vider le panier ?')) {
      clearCart();
      toast.success('Panier vidé');
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <FiShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-gray-600 mb-8">Découvrez nos produits et ajoutez vos favoris au panier</p>
        <Link href="/products" className="btn btn-primary text-lg">
          Découvrir nos produits
        </Link>
      </div>
    );
  }

  const total = getTotal();
  const shipping = total > 100 ? 0 : 9.99;
  const finalTotal = total + shipping;

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Panier ({items.length})</h1>
          <button
            onClick={handleClearCart}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Vider le panier
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex gap-6">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <Link
                      href={`/products/${item.product.id}`}
                      className="text-xl font-semibold hover:text-primary-600 mb-2 block"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-2xl font-bold text-primary-600 mb-4">
                      {item.product.price.toFixed(2)} €
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-6 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-4 py-2 hover:bg-gray-100"
                          disabled={item.quantity >= item.product.stock}
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleRemove(item.product.id, item.product.name)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Récapitulatif</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-semibold">{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">GRATUIT</span>
                    ) : (
                      `${shipping.toFixed(2)} €`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    Plus que {(100 - total).toFixed(2)} € pour la livraison gratuite!
                  </p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary-600">
                      {finalTotal.toFixed(2)} €
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary w-full text-lg mb-4">
                Passer la commande
                <FiArrowRight />
              </button>
              
              <Link href="/products" className="btn btn-outline w-full">
                Continuer mes achats
              </Link>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 text-center">
                  Paiement sécurisé • Protection acheteur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
