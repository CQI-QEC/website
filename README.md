# Site web CQI 2025

Bienvenue dans le site web de la CQI! Ce projet est une application web construite avec SolidJS pour le frontend et Axum (Rust) pour le backend. L'application est conçue pour être performante, sécurisée et facile à maintenir.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Rust](https://www.rust-lang.org/) (version stable)
- [PostgreSQL](https://www.postgresql.org/) (pour la base de données)

## Installation

Clonez le dépôt et installez les dépendances pour le frontend et le backend.

```bash
git clone https://github.com/votre-utilisateur/cqi-qec2025.git
cd cqi-qec2025

# Installer les dépendances du frontend
cd client
bun install

# Installer les dépendances du backend
cd ../server
cargo build
```

## Configuration

Créez un fichier `.env` dans le répertoire `server` et ajoutez les variables d'environnement nécessaires :

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```

Assurez-vous que PostgreSQL est en cours d'exécution et que la base de données spécifiée dans `DATABASE_URL` est créée.

## Démarrage

Pour démarrer l'application, vous devez lancer à la fois le serveur backend et le serveur frontend.

### Démarrer le backend

```bash
cd server
cargo run
```

### Démarrer le frontend

```bash
cd client
bun dev
```

## Structure du projet

Voici un aperçu de la structure du projet :

```
cqi-qec2025/
├── client/                # Code source du frontend
│   ├── public/            # Fichiers statiques
│   ├── src/               # Code source de l'application SolidJS
│   ├── package.json       # Dépendances et scripts npm
│   └── ...                # Autres fichiers de configuration
├── server/                # Code source du backend
│   ├── src/               # Code source de l'application Axum
│   ├── Cargo.toml         # Dépendances et configuration de Rust
│   └── ...                # Autres fichiers de configuration
└── README.md              # Ce fichier
```

## Technologies

- **Frontend** : Construit avec SolidJS, un framework JavaScript réactif et performant.
- **Backend** : Construit avec Axum, un framework web rapide et sécurisé pour Rust.
- **Base de données** : Utilise PostgreSQL pour le stockage des données.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Commitez vos modifications (`git commit -am 'Ajoute une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-fonctionnalité`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
