#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════════════╗"
echo "║              🚀 SCRIPT DE DÉPLOIEMENT - TECHSHOP                      ║"
echo "╚════════════════════════════════════════════════════════════════════════╝"
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher avec couleur
print_step() {
    echo -e "${BLUE}[ÉTAPE]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Vérifier si Git est initialisé
print_step "Vérification de Git..."
if [ ! -d .git ]; then
    print_warning "Git n'est pas initialisé. Initialisation..."
    git init
    print_success "Git initialisé"
else
    print_success "Git déjà initialisé"
fi

# Vérifier si node_modules existe
print_step "Vérification des dépendances..."
if [ ! -d node_modules ]; then
    print_error "node_modules manquant. Exécutez 'npm install' d'abord"
    exit 1
fi
print_success "Dépendances présentes"

# Tester le build
print_step "Test du build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    print_success "Build réussi !"
else
    print_error "Build échoué. Corrigez les erreurs avant de déployer."
    npm run build
    exit 1
fi

# Créer .gitignore si absent
if [ ! -f .gitignore ]; then
    print_step "Création de .gitignore..."
    cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF
    print_success ".gitignore créé"
fi

# Afficher l'état Git
print_step "État Git actuel..."
git status --short

echo ""
print_step "Ajout des fichiers..."
git add .

echo ""
read -p "Message de commit (défaut: 'Deploy TechShop'): " commit_message
commit_message=${commit_message:-"Deploy TechShop"}

print_step "Commit..."
git commit -m "$commit_message"
print_success "Fichiers commités"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯 PROCHAINES ÉTAPES POUR DÉPLOYER:"
echo ""
echo "1️⃣  OPTION VERCEL (Recommandé - 2 minutes)"
echo "   ┌─────────────────────────────────────────────────────────────┐"
echo "   │ a) Créer un repo GitHub:                                   │"
echo "   │    → https://github.com/new                                 │"
echo "   │                                                              │"
echo "   │ b) Pousser le code:                                         │"
echo "   │    git remote add origin https://github.com/USER/techshop  │"
echo "   │    git branch -M main                                       │"
echo "   │    git push -u origin main                                  │"
echo "   │                                                              │"
echo "   │ c) Déployer sur Vercel:                                     │"
echo "   │    → https://vercel.com/new                                 │"
echo "   │    → Import repo GitHub                                     │"
echo "   │    → Deploy (automatique !)                                 │"
echo "   └─────────────────────────────────────────────────────────────┘"
echo ""
echo "2️⃣  OPTION VERCEL CLI (Ultra rapide)"
echo "   ┌─────────────────────────────────────────────────────────────┐"
echo "   │ npm i -g vercel                                             │"
echo "   │ vercel login                                                 │"
echo "   │ vercel --prod                                                │"
echo "   └─────────────────────────────────────────────────────────────┘"
echo ""
echo "3️⃣  OPTION NETLIFY"
echo "   ┌─────────────────────────────────────────────────────────────┐"
echo "   │ → https://app.netlify.com/start                             │"
echo "   │ → Import from GitHub                                         │"
echo "   │ → Deploy                                                     │"
echo "   └─────────────────────────────────────────────────────────────┘"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
print_success "Préparation terminée ! Votre projet est prêt à être déployé."
echo ""
echo "📄 Voir le guide complet: GUIDE_DEPLOIEMENT.md"
echo ""
