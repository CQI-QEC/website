# Site web CQI 2026

Bienvenue dans le site web de la CQI! Ce projet est une application web construite avec SolidJS pour le frontend et Axum (Rust) pour le backend. L'application est conçue pour être performante, sécurisée et facile à maintenir.

## Table des matières

- [Site web CQI 2026](#site-web-cqi-2026)
  - [Table des matières](#table-des-matières)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Démarrage](#démarrage)
    - [Démarrer le frontend](#démarrer-le-frontend)
  - [Structure du projet](#structure-du-projet)
  - [Technologies](#technologies)
  - [Contribuer](#contribuer)
  - [Licence](#licence)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 20 ou supérieure)

## Installation

Clonez le dépôt et installez les dépendances pour le frontend.

```bash
git clone <lien https://xyz.git>
cd cqi-qec2025

# Installer les dépendances du frontend
cd client
npm install
```

## Démarrage

Pour démarrer l'application, vous devez lancer à la fois le serveur backend et le serveur frontend.

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
└── README.md              # Ce fichier
```

## Technologies

- **Frontend** : Construit avec SolidJS, un framework JavaScript réactif et performant.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Commitez vos modifications (`git commit -am 'Ajoute une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-fonctionnalité`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
