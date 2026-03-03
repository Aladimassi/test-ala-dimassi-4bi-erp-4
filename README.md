# Application de Gestion des Jardins

**Développé par: Ala Dimassi**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Description

Application Angular pour la gestion des jardins avec les fonctionnalités CRUD complètes.

## Entité Jardin

L'application gère les jardins avec les propriétés suivantes:
- **id**: string (identifiant unique)
- **adresse**: string (minimum 5 caractères)
- **surface**: number (doit être positive et minimum 50 m²)
- **dateentre**: date (date d'entrée)
- **statut**: boolean (actif/inactif)

## Fonctionnalités

- **Liste des jardins**: Affichage de tous les jardins avec recherche
- **Ajouter un jardin**: Formulaire de création avec validation
- **Détails du jardin**: Affichage des informations détaillées
- **Modifier un jardin**: Formulaire de modification avec validation
- **Supprimer un jardin**: Suppression d'un jardin

## Validations

- L'adresse doit contenir au moins 5 caractères
- La surface doit être d'au moins 50 m² et positive
- Tous les champs sont obligatoires

## Backend (JSON Server)

Pour tester l'application, vous devez démarrer un serveur JSON:

```bash
# Installer json-server (si ce n'est pas déjà fait)
npm install -g json-server

# Démarrer le serveur JSON
json-server --watch db.json --port 3000
```

Le serveur sera accessible sur `http://localhost:3000/jardins`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
