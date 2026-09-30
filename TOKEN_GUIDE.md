# 🔐 Guide Token GitHub - Permissions Requises

## ❌ Problème Rencontré

Le token fourni donne l'erreur:
```
Permission to samidu74100/Techshop.git denied to samidu74100
```

Cela signifie que le token **n'a pas les permissions (scopes) nécessaires** pour pousser du code.

---

## ✅ Solution: Créer un Nouveau Token avec les Bons Scopes

### Étape 1: Aller sur GitHub

Ouvrez ce lien:
```
https://github.com/settings/tokens
```

### Étape 2: Révoquer l'Ancien Token (Sécurité)

1. Trouvez le token que vous venez de créer
2. Cliquez "Delete" ou "Revoke"
3. Confirmez

⚠️ **Important**: Le token que vous avez partagé est maintenant visible dans l'historique de conversation et doit être révoqué pour la sécurité.

### Étape 3: Créer un Nouveau Token

1. Cliquer **"Generate new token"**
2. Sélectionner **"Generate new token (classic)"**

### Étape 4: Configurer le Token

**Nom / Note:**
```
TechShop Deployment
```

**Expiration:**
- Choisir **"30 days"** ou **"No expiration"** (pour éviter que ça expire)

**Scopes (IMPORTANT):**

✅ **Cocher TOUS ces scopes:**

```
✅ repo (Full control of private repositories)
   ✅ repo:status
   ✅ repo_deployment
   ✅ public_repo
   ✅ repo:invite
   ✅ security_events

✅ workflow (Update GitHub Action workflows)

✅ write:packages (Upload packages to GitHub Package Registry)
   ✅ read:packages
```

**Scopes minimum requis pour pousser:**
- `repo` (complet)
- `workflow`

### Étape 5: Générer et Copier

1. Cliquer **"Generate token"**
2. **COPIER LE TOKEN IMMÉDIATEMENT** (vous ne pourrez plus le voir après)
3. Il ressemble à: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🚀 Utiliser le Nouveau Token

Une fois que vous avez le nouveau token avec les bons scopes:

### Option A: Me Donner le Nouveau Token

Envoyez-moi le nouveau token ici et je pousserai le code automatiquement.

### Option B: Le Faire Vous-Même dans Cursor Desktop

```bash
cd /workspace
git push https://NOUVEAU_TOKEN@github.com/samidu74100/Techshop.git main
```

Remplacer `NOUVEAU_TOKEN` par votre nouveau token.

---

## 🔍 Vérifier les Scopes d'un Token

Pour vérifier les scopes de votre token actuel:

```bash
curl -H "Authorization: token VOTRE_TOKEN" https://api.github.com/user -I | grep x-oauth-scopes
```

Devrait afficher:
```
x-oauth-scopes: repo, workflow, write:packages
```

---

## 📊 État Actuel

```
✅ Git initialisé
✅ Code committé (2 commits, 41 fichiers)
✅ Remote configuré: github.com/samidu74100/Techshop
❌ Push échoué: Token sans permissions suffisantes
⏳ En attente: Nouveau token avec scopes corrects
```

---

## 🎯 Après le Push Réussi

Une fois le code poussé:

1. Vérifier: https://github.com/samidu74100/Techshop
2. Déployer sur Vercel: https://vercel.com
3. Import "Techshop"
4. Deploy!

---

## 🔐 Sécurité

**Après avoir fini:**

1. ✅ Révoquer le token de déploiement
2. ✅ Créer un nouveau token avec moins de permissions pour un usage quotidien
3. ✅ Ne jamais partager vos tokens publiquement

---

## 💡 Alternative: Utiliser SSH au Lieu de HTTPS

Si vous préférez ne pas utiliser de token:

### 1. Configurer une clé SSH

```bash
# Générer une clé SSH
ssh-keygen -t ed25519 -C "votre@email.com"

# Copier la clé publique
cat ~/.ssh/id_ed25519.pub
```

### 2. Ajouter à GitHub

1. Aller sur https://github.com/settings/keys
2. "New SSH key"
3. Coller votre clé publique
4. Sauvegarder

### 3. Changer le Remote

```bash
cd /workspace
git remote set-url origin git@github.com:samidu74100/Techshop.git
git push -u origin main
```

---

## ⏱️ Temps Estimé

- Créer nouveau token: 2 minutes
- Push avec token: 1 minute
- Déployer sur Vercel: 3 minutes
- **Total: 6 minutes**

---

╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║  🎯 PROCHAINE ACTION                                                 ║
║                                                                       ║
║  1. Aller sur: https://github.com/settings/tokens                   ║
║  2. Révoquer l'ancien token                                          ║
║  3. Créer nouveau token avec scopes: repo + workflow                 ║
║  4. Me donner le nouveau token OU l'utiliser dans Cursor Desktop     ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝

**Votre site sera en ligne dans quelques minutes!** 🚀
