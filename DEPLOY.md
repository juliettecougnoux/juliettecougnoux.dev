# 🚀 Guide de Déploiement - Hostinger

## Prérequis

- Node.js 18+ installé
- Compte Hostinger avec accès FTP ou File Manager

## Étapes de Déploiement

### 1. Générer le Site Statique

```bash
# Installer les dépendances (si pas déjà fait)
npm install

# Générer le site statique
npm run generate
```

Cela va créer un dossier `.output/public` contenant tous les fichiers statiques du site.

### 2. Préparer les Fichiers

Les fichiers à uploader se trouvent dans `.output/public/` :

- `index.html`
- `en/` (version anglaise)
- `cv/`, `contact/`, `legal/` (pages)
- `_nuxt/` (assets JavaScript et CSS)
- `projects/` (images)
- `favicon.ico`, `robots.txt`, `sitemap.xml`
- etc.

### 3. Upload sur Hostinger

#### Option A : Via FTP (recommandé)

1. Connectez-vous à votre compte Hostinger
2. Allez dans **Fichiers** > **Gestionnaire de fichiers** ou utilisez un client FTP (FileZilla)
3. Récupérez vos identifiants FTP depuis le panneau Hostinger
4. Connectez-vous via FTP à votre domaine
5. Naviguez vers le dossier `public_html` (ou le dossier racine de votre domaine)
6. **Supprimez tous les anciens fichiers** (si c'est une mise à jour)
7. Uploadez **tout le contenu** du dossier `.output/public/` vers `public_html`

**⚠️ Important** : N'uploadez pas le dossier `.output/public` lui-même, mais son **contenu**.

#### Option B : Via File Manager (interface web)

1. Connectez-vous au panneau Hostinger
2. Allez dans **Fichiers** > **Gestionnaire de fichiers**
3. Naviguez vers `public_html`
4. Supprimez les anciens fichiers (si mise à jour)
5. Uploadez les fichiers depuis `.output/public/`

### 4. Configuration du Serveur

#### Fichier .htaccess (important pour le routing)

Créez un fichier `.htaccess` dans `public_html` avec ce contenu :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Rediriger vers HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Servir les fichiers statiques directement
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # Gérer les routes SPA
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compression Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache des fichiers statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 5. Vérification

Une fois l'upload terminé, testez :

- ✅ https://juliettecougnoux.dev/ (page d'accueil FR)
- ✅ https://juliettecougnoux.dev/cv
- ✅ https://juliettecougnoux.dev/contact
- ✅ https://juliettecougnoux.dev/legal
- ✅ https://juliettecougnoux.dev/en (version anglaise)
- ✅ https://juliettecougnoux.dev/en/cv
- ✅ https://juliettecougnoux.dev/robots.txt
- ✅ https://juliettecougnoux.dev/sitemap.xml

### 6. Mise à Jour du Site

Pour chaque mise à jour :

```bash
# 1. Faire vos modifications
# 2. Régénérer le site
npm run generate

# 3. Uploader les nouveaux fichiers sur Hostinger
# (remplacer les anciens fichiers)
```

## Optimisations Post-Déploiement

### SSL/HTTPS

Assurez-vous que le certificat SSL est actif dans Hostinger :

1. Panneau Hostinger > **SSL**
2. Activer le SSL gratuit (Let's Encrypt)
3. Forcer HTTPS (via .htaccess ci-dessus)

### Performance

- ✅ Toutes les pages sont pré-rendues (SSG)
- ✅ Images optimisées en WebP
- ✅ Cache navigateur configuré via .htaccess
- ✅ Compression Gzip activée

### SEO

- ✅ Sitemap accessible : `/sitemap.xml`
- ✅ Robots.txt configuré : `/robots.txt`
- ✅ Meta tags optimisés
- ✅ Open Graph pour réseaux sociaux

## Dépannage

### Les routes ne fonctionnent pas (404)

➡️ Vérifiez que le fichier `.htaccess` est bien présent et contient les règles de réécriture.

### Les images ne s'affichent pas

➡️ Vérifiez que le dossier `projects/` a bien été uploadé avec toutes les images.

### La version anglaise ne fonctionne pas

➡️ Vérifiez que le dossier `en/` a bien été uploadé avec tous ses sous-dossiers.

### CSS/JavaScript ne se charge pas

➡️ Vérifiez que le dossier `_nuxt/` a bien été uploadé avec tous ses fichiers.

## Contact

Pour toute question : jcougnoux@gmail.com
