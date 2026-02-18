# 🚀 Mon Portfolio - Hanse Roland Parfait

Bienvenue sur mon portfolio interactif ! Un site web moderne et immersif showcasant mon travail en tant que **Développeur Web FullStack** avec plus de 3 ans d'expérience.

## 🎨 Caractéristiques uniques

- 🌐 **Design immersif** : Scènes interactives (bureau, meubles, galerie murale)
- 🎬 **Animations fluides** : Animations Framer Motion pour une expérience utilisateur captivante
- 🌙 **Mode sombre/clair** : Thème dynamique avec Material-UI
- 📱 **Responsive** : Entièrement optimisé pour mobile et desktop
- ⚡ **Performance** : Construit avec Next.js pour une vitesse maximale
- 🎯 **Multi-pages** : À propos, projets, compétences, CV, contact

## 📋 Pages

- **Accueil** (`/`) - Présentation avec scènes interactives
- **À propos** (`/about`) - Mon histoire et expérience
- **Projets** (`/projects`) - Portfolio de mes travaux
- **Compétences** (`/skills`) - Technologies et domaines d'expertise
- **CV** (`/cv`) - Document détaillé de mon parcours
- **Contact** (`/contact`) - Me contacter

## 🛠️ Technologies utilisées

- **Framework** : [Next.js](https://nextjs.org/) 16
- **UI Library** : [Material-UI](https://mui.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Iconographie** : React Icons
- **Carousel** : React Slick
- **Parallax** : React Scroll Parallax
- **Styling** : Emotion (with MUI)

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd my-portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📦 Scripts disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire pour la production
npm start        # Démarrer le serveur de production
npm run lint     # Lancer ESLint
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── DeskScene.js    # Scène bureau 3D
│   ├── WallScene.js    # Scène mur 3D
│   ├── FurnitureScene.js # Scène meublé 3D
│   └── UI/             # Composants d'interface
├── pages/              # Routes de l'application
├── data/               # Données (projets, expériences, compétences)
├── styles/             # Feuilles de style globales
├── context/            # Contexte React (thème)
└── theme/              # Configuration Material-UI
```

## 🎯 Fonctionnalités principales

- **Expérience utilisateur immersive** : Scènes interactives pour une présentation unique
- **Gestion dynamique du thème** : Basculage facile entre modes clair/sombre
- **Contenu modulaire** : Données centralisées pour projets, expériences et compétences
- **SEO optimisé** : Métadonnées et descriptions pour meilleur référencement
- **Accessibilité** : Conçu avec accessibilité en tête

## 💡 Personnalisation

### Ajouter vos projets
Modifiez le fichier `src/data/projects.js` pour ajouter vos projets :
```javascript
export const projects = [
  {
    id: 1,
    title: "Mon Projet",
    description: "Une description courte",
    // ... autres propriétés
  }
];
```

### Ajouter vos compétences
Modifiez `src/data/skills.js` pour ajouter vos technologies et domaines d'expertise.

### Ajouter vos expériences
Modifiez `src/data/experiences.js` pour documenter votre parcours professionnel.

## 📞 Contact

Pour me joindre ou discuter de collaborations :
- Email : [votre-email@example.com]
- LinkedIn : [votre-profile]
- GitHub : [votre-github]

## 🚀 Déploiement

### Sur Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Options alternatives
- Netlify
- GitHub Pages
- Railway
- Render
- Vercel

Consultez la [documentation Next.js](https://nextjs.org/docs/pages/building-your-application/deploying) pour plus de détails.

## 📄 Licence

Ce projet est personnel. Vous êtes libre d'explorer et d'apprendre de son code.

---

✨ **Portfolio Version 2.0** - Créé avec passion et technologie moderne
