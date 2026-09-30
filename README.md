# 🛒 TechShop - Boutique Informatique

Boutique en ligne moderne présentant une sélection des meilleurs produits informatiques d'AliExpress.

## ✨ Fonctionnalités

- 🏪 **18 produits** soigneusement sélectionnés (3 par catégorie)
- 📦 **6 catégories** : Laptops, Accessoires, Stockage, Audio, Écrans, Réseau
- ⭐ **Produits les mieux notés** : Note minimum 4.6/5
- 🛍️ **Panier intelligent** avec persistence des données
- 💳 **Interface moderne** avec Tailwind CSS
- 📱 **Design responsive** pour tous les appareils

## 🎯 Catégories de Produits

### 💻 Ordinateurs Portables (3)
- PC Portable Intel Core i7 16Go - 549.99€
- Laptop Gaming AMD Ryzen 7 32Go - 899.99€
- Ultrabook Intel i5 Ultra Léger - 399.99€

### ⌨️ Accessoires PC (3)
- Clavier Mécanique RGB Gaming - 45.99€
- Souris Gaming Sans Fil 16000 DPI - 29.99€
- Webcam 4K Ultra HD - 39.99€

### 💾 Stockage (3)
- SSD NVMe M.2 1To PCIe 4.0 - 79.99€
- Clé USB 3.2 256Go - 19.99€
- Disque Dur Externe 2To - 54.99€

### 🎧 Audio (3)
- Casque Gaming 7.1 Surround - 59.99€
- Écouteurs Bluetooth ANC - 34.99€
- Enceinte Bluetooth 40W - 44.99€

### 🖥️ Écrans (3)
- Écran Gaming 27" 165Hz QHD - 229.99€
- Moniteur 24" Full HD IPS - 129.99€
- Écran Portable 15.6" 4K - 179.99€

### 📡 Réseau (3)
- Routeur WiFi 6 AX3000 - 69.99€
- Adaptateur WiFi USB AC1300 - 15.99€
- Switch Réseau Gigabit 8 Ports - 24.99€

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

## 🛠️ Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Zustand** - Gestion d'état globale
- **React Hot Toast** - Notifications
- **React Icons** - Bibliothèque d'icônes

## 📁 Structure du Projet

```
/workspace
├── src/
│   ├── app/                 # Pages Next.js App Router
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── products/        # Catalogue & détails produits
│   │   ├── cart/            # Panier
│   │   ├── categories/      # Catégories
│   │   └── about/           # À propos
│   ├── components/          # Composants React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── lib/                 # Données et logique
│   │   └── products.ts      # Base de données produits
│   ├── types/               # Types TypeScript
│   │   └── index.ts
│   └── utils/               # Utilitaires
│       └── cart.ts          # Store Zustand du panier
```

## 🎨 Caractéristiques des Produits

Chaque produit inclut:
- ✅ Images haute qualité
- ✅ Note et nombre d'avis
- ✅ Prix et réduction
- ✅ Caractéristiques principales
- ✅ Spécifications techniques détaillées
- ✅ Stock disponible
- ✅ Lien vers AliExpress

## 🛒 Fonctionnalités du Panier

- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique du total
- Frais de port (gratuit >100€)
- Persistence avec localStorage
- Badge de compteur dans le header

## 📱 Pages Disponibles

- `/` - Page d'accueil avec produits vedettes
- `/products` - Catalogue complet avec filtres
- `/products/[id]` - Détails d'un produit
- `/cart` - Panier d'achat
- `/categories` - Vue d'ensemble des catégories
- `/about` - À propos de TechShop

## 🎯 Filtres & Tri

- **Par catégorie** : Toutes / Laptops / Accessoires / etc.
- **Tri** : Popularité / Prix / Note / Réduction

## 💡 Points Forts

- 🌟 Produits avec note ≥ 4.6/5
- 💬 Tous les produits ont >1500 avis
- 💰 Réductions jusqu'à 61%
- 📦 Livraison internationale
- 🛡️ Protection acheteur garantie

## 📄 Licence

Ce projet est un exemple de démonstration.
