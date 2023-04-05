# Réseau social avec NestJS et Prisma

Ce projet est un exercice de développement d'un backend pour un réseau social en utilisant NestJS et Prisma pour la gestion de la base de données MySQL.

## Technologies utilisées

- NestJS
- Prisma
- MySQL

## Comment utiliser ce projet

1. Clonez le dépôt du projet sur votre machine locale.
2. Installez les dépendances en utilisant la commande `npm install`.
3. Créez une base de données MySQL sur votre machine.
4. Créez un fichier `.env` à la racine du projet et définissez les variables d'environnement nécessaires pour la connexion à la base de données (voir `.env.example` pour les variables nécessaires).
5. Exécutez les migrations de la base de données en utilisant la commande `npm run migrate`.
6. Générez le Prisma Client en utilisant la commande `npx prisma generate`.
7. Pour utiliser le Prisma Studio, push la base de données en utilisant la commande `npx prisma db push` puis ouvrez le studio en utilisant `npx prisma studio`.
8. Lancez l'application avec la commande `npm run start:dev`.
