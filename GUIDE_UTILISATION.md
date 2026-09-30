# 🚀 Guide d'Utilisation - TechShop

## Accès au Site

Le site est maintenant en ligne sur **http://localhost:3000**

## 🎯 Pages Disponibles

### Page d'Accueil (`/`)
- Hero section avec présentation
- 6 catégories de produits
- 6 produits mis en avant
- Statistiques et avantages

### Catalogue Produits (`/products`)
- **18 produits au total** (3 par catégorie)
- Filtrage par catégorie
- Tri par: Popularité, Prix, Note, Réduction
- Affichage en grille responsive

### Détail Produit (`/products/[id]`)
- Galerie d'images
- Informations détaillées
- Note et avis
- Caractéristiques principales
- Spécifications techniques complètes
- Ajout au panier avec choix de quantité
- Lien vers AliExpress

### Panier (`/cart`)
- Liste des produits ajoutés
- Modification des quantités
- Suppression d'articles
- Calcul du total
- Frais de port (gratuit >100€)
- Bouton de commande

### Catégories (`/categories`)
- Vue d'ensemble des 6 catégories
- Accès rapide aux produits

### À Propos (`/about`)
- Présentation de TechShop
- Nos engagements
- Points forts

## 🛍️ Les 18 Produits (3 par catégorie)

### 💻 Laptops
1. **PC Portable Intel i7 16Go** - 549.99€ (-39%)
2. **Laptop Gaming Ryzen 7 32Go** - 899.99€ (-31%)
3. **Ultrabook Intel i5 8Go** - 399.99€ (-38%)

### ⌨️ Accessoires
1. **Clavier Mécanique RGB** - 45.99€ (-49%)
2. **Souris Gaming 16000 DPI** - 29.99€ (-57%)
3. **Webcam 4K** - 39.99€ (-56%)

### 💾 Stockage
1. **SSD NVMe 1To PCIe 4.0** - 79.99€ (-47%)
2. **Clé USB 256Go** - 19.99€ (-60%)
3. **Disque Dur 2To** - 54.99€ (-45%)

### 🎧 Audio
1. **Casque Gaming 7.1** - 59.99€ (-54%)
2. **Écouteurs Bluetooth ANC** - 34.99€ (-61%)
3. **Enceinte Bluetooth 40W** - 44.99€ (-55%)

### 🖥️ Écrans
1. **Moniteur Gaming 27" 165Hz** - 229.99€ (-42%)
2. **Écran 24" IPS** - 129.99€ (-41%)
3. **Portable 15.6" 4K** - 179.99€ (-40%)

### 📡 Réseau
1. **Routeur WiFi 6** - 69.99€ (-53%)
2. **Adaptateur WiFi USB** - 15.99€ (-60%)
3. **Switch 8 Ports** - 24.99€ (-58%)

## 🎨 Fonctionnalités

### Panier Intelligent
- ✅ Ajout/suppression de produits
- ✅ Modification des quantités
- ✅ Persistance avec localStorage
- ✅ Compteur dans le header
- ✅ Calcul automatique du total

### Filtres & Tri
- Par catégorie (7 options)
- Par prix (croissant/décroissant)
- Par note
- Par popularité
- Par réduction

### Design Responsive
- ✅ Mobile-first
- ✅ Tablette optimisée
- ✅ Desktop fluid
- ✅ Navigation adaptative

## 🔧 Technologies Utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **Zustand** - Gestion d'état du panier
- **React Hot Toast** - Notifications élégantes
- **React Icons** - Icônes

## 📊 Statistiques

- **18 produits** sélectionnés
- **6 catégories** complètes
- **Note moyenne** : 4.7/5
- **Réductions** : jusqu'à 61%
- **Prix** : de 15.99€ à 899.99€

## 🎯 Points Forts du Site

1. **Sélection Qualité**
   - Produits notés ≥ 4.6/5
   - Plus de 1500 avis par produit

2. **Interface Moderne**
   - Design épuré et professionnel
   - Navigation intuitive
   - Expérience utilisateur optimisée

3. **Informations Complètes**
   - Photos multiples
   - Spécifications détaillées
   - Avis et notes

4. **Panier Fonctionnel**
   - Gestion complète
   - Calcul automatique
   - Persistance des données

## 🚀 Commandes Utiles

```bash
# Démarrer le serveur
npm run dev

# Construire pour production
npm run build

# Lancer en production
npm start

# Linter le code
npm run lint
```

## 📱 Navigation Rapide

- 🏠 Accueil : `/`
- 🛍️ Produits : `/products`
- 📦 Catégories : `/categories`
- 🛒 Panier : `/cart`
- ℹ️ À propos : `/about`

## 💡 Astuce

Le site est entièrement fonctionnel localement. Pour le déployer en production, il suffit de le mettre sur Vercel, Netlify ou tout hébergeur Next.js compatible.

---

**TechShop** - Votre boutique informatique en ligne 🎯
