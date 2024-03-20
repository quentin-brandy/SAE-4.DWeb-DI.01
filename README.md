# SAE Starter
Ce repository a pour but de fournir une base pour un environnement Docker local pour la SAE4.DWeb-DI.01.

## Installation
Déplacer le code de votre application frontend dans un dossier `frontend`.
Faites de même avec votre application Symfony dans un dossier `backend`.

Remplacer le fichier `frontend/vite.config.js` par celui-ci:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
   port: 5173,
   strictPort: true,
  },
  server: {
   port: 5173,
   strictPort: true,
   host: true,
   origin: "http://0.0.0.0:5173",
  },
});
```

Il faut ensuite exécuter ces commandes :
```
# Installe les dépendances pour le frontend
docker-compose run --rm frontend npm install

# Installe les dépendances pour le backend
docker-compose run --rm backend composer install

# Lance l'environnement Docker
docker-compose up -d

# Lance les migrations pour avoir une base de données fonctionnelle
docker exec sae-backend php bin/console doctrine:migrations:migrate --no-interaction
```

## Lancer l'environnement
```
docker-compose up -d
```

## Liens
- Frontend : [http://localhost:8090](http://localhost:8090)
- Backend : [http://localhost:8080](http://localhost:8080)
- phpMyAdmin : [http://localhost:8070](http://localhost:8070)
