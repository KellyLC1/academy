# Val'Academy International

Plateforme web pour centre de formation professionnelle : gestion des formations, galerie photos, avis clients, formulaires de contact et d'inscription, et espace admin sécurisé.

🌐 **Site en ligne :** https://academy-pearl-xi.vercel.app

## Technologies utilisées

- **Frontend** : Vue.js 3, Vite, Axios, Swiper, CSS3
- **Backend** : Node.js, Express, Mongoose (MongoDB), JWT, bcryptjs, express-rate-limit, express-validator, CORS, Nodemailer
- **Base de données** : MongoDB Atlas
- **Déploiement** : Vercel (frontend), Render (backend)
- **Outils de développement** : Git, GitHub, VS Code, Mailtrap

## Fonctionnalités principales

- **Frontend Vue.js 3**
  - Affichage dynamique des formations
  - Galerie photos responsive
  - Affichage des avis clients
  - Formulaires de contact et d'inscription
  - Espace d'administration

- **Administration**
  - Authentification admin avec JWT
  - Gestion des formations
  - Gestion de la galerie
  - Gestion des avis
  - Gestion des inscriptions
  - Gestion des demandes de contact
  - Gestion des administrateurs

- **Backend Node.js/Express/MongoDB**
  - API REST
  - Validation des données
  - Protection contre les requêtes excessives
  - CORS
  - Authentification JWT
  - Hashage des mots de passe avec bcrypt
  - Envoi d'emails avec Nodemailer

## Fonctionnement des avis clients

- L'administrateur génère une invitation pour un client
- Le client reçoit un lien unique par email
- Il accède à un formulaire pour laisser son avis
- L'avis peut ensuite être géré depuis l'espace admin

## Sécurité

- Authentification JWT pour l'administration
- Mots de passe hashés avec bcrypt
- Validation des données
- Rate limiting
- CORS configuré
- Variables sensibles stockées dans des variables d'environnement

## Déploiement

Le frontend est déployé sur Vercel et le backend sur Render.

La base de données utilise MongoDB Atlas.

Les emails sont gérés avec Nodemailer et testés avec Mailtrap.

## Installation & développement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/KellyLC1/academy.git

Installer les dépendances du backend

cd academy/academy/backend
npm install

Installer les dépendances du frontend

cd ../
npm install

Configurer les variables d'environnement

Créer un fichier .env dans le backend avec les variables nécessaires (MongoDB, JWT, SMTP, etc.).

Lancer le backend

node server.js

Lancer le frontend

npm run dev
Création d'un admin

Un script permet de créer un administrateur :

cd academy/academy/backend
node create-admin.js

Le mot de passe est hashé avant d'être enregistré dans MongoDB.

Démo

🌐 https://academy-pearl-xi.vercel.app

Auteur

KellyLC1