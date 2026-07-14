# Ménara Préfa — Frontend

Frontend de l'assistant IA et du site vitrine Ménara Préfa.

## Stack technique

- **React 19** + **TypeScript** + **Vite**
- **React Router** (v7) pour la navigation SPA
- **Bootstrap 5.3** + **Bootstrap Icons** (installés via npm)
- **Leaflet** pour la carte des implantations (page Contact)

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Le serveur de développement démarre sur `http://localhost:5173` par défaut.

## Variables d'environnement

Copiez `.env.example` vers `.env` et ajustez les valeurs :

```bash
cp .env.example .env
```

| Variable | Description | Valeur par défaut |
|---|---|---|
| `VITE_API_BASE_URL` | URL de base du backend API (sans slash final) | `http://localhost:8080` |

En production, définissez `VITE_API_BASE_URL` vers l'URL de votre serveur backend déployé.

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement avec HMR |
| `npm run build` | Build TypeScript + bundle production |
| `npm run lint` | Lint ESLint |
| `npm run preview` | Prévisualisation du build de production |

## Structure du projet

```
src/
├── assets/css/       # Feuilles de styles (style.css, responsive.css, chat.css, etc.)
├── components/       # Composants réutilisables (layout, chat)
├── data/             # Données typées statiques (navigation, produits, clients, etc.)
├── pages/            # Pages principales (Home, Expertises, Contact, QHSE, References, ChatAI)
├── services/         # Services API (ai.service.ts)
├── App.tsx           # Routes principales
└── main.tsx          # Point d'entrée
```

## Pages

- **Accueil** (`/`) — Présentation, produits, certifications, clients
- **Expertises** (`/expertises`) — Domaines d'expertise
- **Références** (`/references`) — Clients, projets réalisés, témoignages
- **QHSE** (`/qhse`) — Politique qualité, hygiène, sécurité, environnement
- **Contact** (`/contact`) — Formulaire de contact, carte Leaflet, implantations
- **Assistant IA** (`/chatAI`) — Chat avec l'assistant IA Ménara Préfa
