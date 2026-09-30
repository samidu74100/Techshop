# 🚀 Guide de Déploiement - TechShop

## 3 Options de Déploiement (Gratuit)

---

## 🌟 OPTION 1: VERCEL (Recommandé - Le Plus Simple)

### Pourquoi Vercel ?
- ✅ **100% Gratuit** pour projets personnels
- ✅ **Optimisé pour Next.js** (créé par l'équipe Next.js)
- ✅ **Déploiement en 2 minutes**
- ✅ **HTTPS automatique**
- ✅ **Domaine gratuit** (.vercel.app)
- ✅ **Mises à jour automatiques** via Git

### Étapes de Déploiement

#### 1. Créer un compte Vercel
```
🌐 Aller sur: https://vercel.com/signup
📧 S'inscrire avec GitHub (recommandé)
```

#### 2. Préparer le projet
```bash
# Dans votre terminal local (pas dans Cursor)
cd /chemin/vers/votre/projet

# Initialiser Git si pas déjà fait
git init
git add .
git commit -m "Initial commit - TechShop"

# Créer un repo GitHub
# Aller sur github.com/new
# Créer un nouveau repository "techshop"

# Lier le repo
git remote add origin https://github.com/VOTRE_USERNAME/techshop.git
git branch -M main
git push -u origin main
```

#### 3. Déployer sur Vercel

**Option A: Via le site web**
1. Aller sur https://vercel.com/new
2. Cliquer "Import Git Repository"
3. Sélectionner votre repo "techshop"
4. Cliquer "Deploy" (Vercel détecte automatiquement Next.js)
5. ✅ **C'est tout !** Votre site est en ligne en ~2 minutes

**Option B: Via CLI**
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

#### 4. Votre site sera disponible sur:
```
https://techshop-[votre-username].vercel.app
```

### Configuration Post-Déploiement

Dans le dashboard Vercel, vous pouvez:
- 🌐 Ajouter un **domaine personnalisé** (gratuit)
- ⚡ Voir les **analytics**
- 🔄 Activer les **preview deployments**
- 🌍 Configurer les **variables d'environnement**

---

## 🎯 OPTION 2: NETLIFY

### Pourquoi Netlify ?
- ✅ **Gratuit** (100GB bandwidth/mois)
- ✅ **Interface simple**
- ✅ **Formulaires gratuits**
- ✅ **Fonctions serverless**

### Étapes de Déploiement

#### 1. Créer un compte
```
🌐 https://app.netlify.com/signup
```

#### 2. Préparer le build
```bash
# Ajouter un fichier netlify.toml
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
EOF

# Commiter
git add netlify.toml
git commit -m "Add Netlify config"
git push
```

#### 3. Déployer
1. Dashboard Netlify → "Add new site" → "Import existing project"
2. Connecter votre repo GitHub
3. Build settings (détecté automatiquement):
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Cliquer "Deploy site"

#### 4. Votre site sera sur:
```
https://[nom-aleatoire].netlify.app
```

Vous pouvez changer le nom dans: Site settings → Change site name

---

## 💙 OPTION 3: RAILWAY

### Pourquoi Railway ?
- ✅ **$5 gratuits/mois**
- ✅ **Base de données incluses**
- ✅ **Déploiement Docker**
- ✅ **Backend + Frontend**

### Étapes de Déploiement

#### 1. Créer un compte
```
🌐 https://railway.app/
```

#### 2. Déployer
1. Cliquer "New Project"
2. "Deploy from GitHub repo"
3. Sélectionner votre repo
4. Railway détecte automatiquement Next.js
5. Cliquer "Deploy"

#### 3. Votre site sera sur:
```
https://techshop-production.up.railway.app
```

---

## 🔧 CONFIGURATION PRÉALABLE

### 1. Fichier `.gitignore` (déjà créé)
```
node_modules
.next
.env.local
```

### 2. Vérifier `package.json`
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3. Optimiser `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ae01.alicdn.com', 'ae04.alicdn.com', 'img.alicdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.alicdn.com',
      },
    ],
  },
  // Pour déploiement
  output: 'standalone', // Optionnel: réduit la taille
}

module.exports = nextConfig
```

---

## 🌐 AJOUTER UN DOMAINE PERSONNALISÉ

### Sur Vercel
1. Project Settings → Domains
2. Ajouter votre domaine (ex: `techshop.com`)
3. Configurer les DNS chez votre registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Acheter un domaine pas cher
- **Namecheap**: ~$1/an (.xyz, .site)
- **Cloudflare**: Prix coûtant (~$9/an .com)
- **OVH**: ~€5/an

---

## 📊 APRÈS LE DÉPLOIEMENT

### Analytics Gratuits

**1. Vercel Analytics** (recommandé)
```bash
npm install @vercel/analytics

# Dans src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**2. Google Analytics**
```javascript
// Ajouter dans layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

**3. Plausible** (Privacy-friendly)
```
https://plausible.io
```

---

## 🔒 SÉCURITÉ & PERFORMANCE

### Variables d'Environnement
Si vous ajoutez des API keys:

**Sur Vercel:**
1. Project Settings → Environment Variables
2. Ajouter vos clés
3. Redéployer

**Exemple `.env.local` (ne JAMAIS commit):**
```bash
NEXT_PUBLIC_SITE_URL=https://votresite.com
ALIEXPRESS_API_KEY=votre_cle_api
```

### Headers de Sécurité (next.config.js)
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ];
},
```

---

## 📈 OPTIMISATIONS PRE-DEPLOYMENT

### 1. Optimiser les Images
```bash
# Installer sharp (déjà installé)
npm install sharp

# Next.js l'utilisera automatiquement
```

### 2. Générer un Sitemap
```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://votresite.com',
      lastModified: new Date(),
    },
    {
      url: 'https://votresite.com/products',
      lastModified: new Date(),
    },
    // ... autres pages
  ];
}
```

### 3. Ajouter robots.txt
```typescript
// src/app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://votresite.com/sitemap.xml',
  };
}
```

---

## 🎯 CHECKLIST AVANT DÉPLOIEMENT

- [ ] Code committé sur GitHub
- [ ] `npm run build` fonctionne localement
- [ ] Pas d'erreurs dans la console
- [ ] Images s'affichent correctement
- [ ] Panier fonctionne
- [ ] Responsive testé (mobile/desktop)
- [ ] Metadata SEO présents
- [ ] `.gitignore` configuré
- [ ] `package.json` à jour

---

## 🚀 COMMANDES RAPIDES

### Build local (tester avant déploiement)
```bash
npm run build
npm start
# Ouvrir http://localhost:3000
```

### Déployer sur Vercel (le plus rapide)
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 📞 SUPPORT & RESSOURCES

### Documentation
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **Next.js**: https://nextjs.org/docs

### Communautés
- Discord Vercel: https://vercel.com/discord
- Forum Netlify: https://answers.netlify.com/

---

## 💡 RECOMMANDATION FINALE

**Pour TechShop, je recommande VERCEL:**

✅ Gratuit à vie  
✅ Parfait pour Next.js  
✅ Déploiement en 2 clics  
✅ HTTPS automatique  
✅ Domaine gratuit  
✅ Mises à jour auto via Git  

**Temps estimé**: 5-10 minutes pour être en ligne ! 🎉

---

## 🎬 RÉSUMÉ EN 3 ÉTAPES

```bash
# 1. Pusher sur GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Aller sur vercel.com
# - Créer compte
# - Import repo
# - Deploy

# 3. ✅ SITE EN LIGNE !
# https://techshop.vercel.app
```

C'est vraiment aussi simple que ça ! 🚀
