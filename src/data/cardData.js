export const cardData = [

    {
        id: 1,
        img: '/images/dash-shine-1.png',
        title: "📌 Nana Head Spa – Plateforme de suivi client et de réservation",
        images: [
            {
                src: '/images/mobile-head.png',
                alt: 'Capture d\'écran mobile de l\'application Nana Head Spa'
            },
            {
                src: '/images/dash-shine-1.png',
                alt: 'Capture d\'écran Tableau de bord Nana Head Spa'
            },
            {
                src: '/images/head-site-web.png',
                alt: 'Capture d\'écran Site Web Nana Head Spa'
            },
        ],
        tag: 'Freelance / Fullstack : MongoDB - Express - Node.js - Next.js',
        context: "Nana Head Spa est un institut de bien-être qui souhaitait digitaliser l’ensemble de ses services : prise de rendez-vous en ligne, suivi client personnalisé, messagerie instantanée, blog et galerie photo. L’objectif était d’améliorer l’expérience client, d’automatiser la gestion interne et de renforcer l’image de marque de l’institut.",
        objective: "Centraliser la gestion des rendez-vous, automatiser l’envoi des emails, offrir une messagerie sécurisée, gérer la fidélité client, et permettre la publication facile de contenu attractif.",
        mainFeatures: [
            "Réservation et gestion des rendez-vous avec notifications en temps réel.",
            //"Fidélisation interactive via visionnage publicitaire et suivi des niveaux clients.",
            "Messagerie instantanée sécurisée entre clients et institut avec persistance des messages.",
            "Gestion des fiches clients avec historique des soins détaillé.",
            "Articles et blog SEO-friendly avec images Cloudinary.",
            "Formules de soins personnalisables avec activation/désactivation.",
            "Galerie photos et médias avec Cloudinary et ordonnancement.",
            "Bannières dynamiques par page du site (image/vidéo).",
            "Emails transactionnels (confirmation, annulation, reset password).",
            "Administration complète : utilisateurs, contenus, bannières, galeries."
        ],
        techStack: [
            "Node.js, Express.js",
            "MongoDB + Mongoose",
            "Socket.IO",
            "JWT pour authentification",
            "Nodemailer (SMTP Gandi)",
            "Cloudinary pour les médias",
            "dotenv, cookie-parser, cors, body-parser, slugify",
            "Next.js",
            "MUI"
        ],
        role: "Conception et développement complet du backend et frontend (site web + Tableau de bord), modélisation MongoDB, sécurisation JWT, intégration emailing et Cloudinary, organisation et architecture modulaire.",
        challengesAndSolutions: [
            "Au départ, j’utilisais le localStorage pour stocker le token d’authentification, mais cette méthode posait des problèmes de sécurité. J’ai alors décidé de passer par les cookies HttpOnly envoyés depuis le backend. Tout fonctionnait bien sur PC, mais lors de la démonstration finale à la cliente, la connexion échouait sur iOS.",
            "Après investigation, j’ai découvert que la sécurité renforcée de Safari bloque l’envoi de cookies si le frontend et le backend sont sur des noms de domaine différents. Dans mon cas, le frontend et l’API avaient des URLs séparées.",
            "Solution : création d’un sous-domaine CNAME pointant vers l’API hébergée sur Render, j’ai configuré les cookies avec l’attribut SameSite=None et Secure=true, ce qui permet leur envoi sur des domaines différents à condition que la connexion soit sécurisée (HTTPS). J’ai également veillé à ce que les deux serveurs utilisent HTTPS.",
        ],
        impact: "Gestion automatisée des rendez-vous et notifications, expérience client fluide et personnalisée, valorisation de la marque via articles, galerie et bannières, backend robuste et évolutif prêt pour la production.",
        links: {
            demo: "https://nanaheadspa.com",
            code: ""
        }
    },
    {
        "id": 2,
        "img": "/images/hero-landing.png",
        "title": "📌 💳 NFC Digital Business Cards – Plateforme MERN complète",
        "images": [
            { "src": "/images/landing-hero.png", "alt": "Page d’accueil - partage de cartes NFC" },
            { "src": "/images/admin-dashboard.png", "alt": "Tableau de bord admin - gestion utilisateurs et cartes NFC" },
            { "src": "/images/contact-detail.png", "alt": "Page publique de contact accessible via puce NFC" }
        ],
        "tag": "Freelance / MERN Stack / NFC / Dashboard Admin",
        "context": "Projet freelance réalisé pour la startup ELYKA. L’objectif était de concevoir une plateforme complète permettant la création, la gestion et le partage de cartes de visite numériques connectées à des puces NFC. Le système devait offrir une expérience fluide et sécurisée, sans nécessiter d’application mobile.",
        "objective": "Permettre à chaque professionnel de générer sa carte de visite numérique unique, accessible instantanément via une puce NFC ou un QR code, tout en donnant aux administrateurs un tableau de bord pour superviser les utilisateurs, cartes et statistiques d’usage.",
        "mainFeatures": [
            "Création, édition et suppression de cartes NFC avec identifiant unique (nfcId) et statut d’activation.",
            "Partage de contact sans application via lien public /contact-detail/:nfcId.",
            "Authentification sécurisée JWT avec gestion des rôles (utilisateur / administrateur).",
            "Espace Admin complet : gestion utilisateurs, cartes NFC, statistiques (nombre total, récents).",
            "Fonctionnalités d’authentification : inscription, connexion, mot de passe oublié et réinitialisation sécurisée par email.",
            "Design moderne et responsive avec Material-UI et structure React Router optimisée."
        ],
        "techStack": [
            "Frontend : React, Redux, Material-UI (MUI)",
            "Backend : Node.js, Express, MongoDB (Mongoose), JWT",
        ],
        "role": "Développeur Fullstack Freelance – Conception, architecture et développement complet du produit pour ELYKA.",
        "responsibilities": [
            "🧭 Définition du parcours utilisateur et de la logique produit (création et partage via NFC).",
            "🗂️ Conception des modèles de données Mongoose (User, Card) et implémentation de l’API REST Express.",
            "🔐 Sécurisation complète : JWT, bcrypt, middleware d’accès admin et validation Joi.",
            "🖼️ Mise en place de l’upload d’images avec Multer et gestion des fichiers publics.",
            "🧱 Développement de l’interface Admin React avec MUI et intégration complète avec l’API.",
            "⚙️ Gestion du state global (Redux), validation des formulaires (Formik + Yup), appels API (Axios).",
            "🚀 Préparation et automatisation du déploiement (client, environnement backend distinct)."
        ],
        "challengesAndSolutions": [
            "🧩 Sécurisation des routes sensibles : middleware d’auth JWT avec vérification isAdmin sur les endpoints critiques.",
            "🖼️ Upload sécurisé d’images : filtrage MIME, renommage fichiers, et dossiers statiques Express pour servir les médias.",
            "🌐 CORS multi-environnements : configuration dynamique via variables d’environnement selon environnement (local/prod).",
            "📱 Partage sans installation d’application : génération automatique d’URL publique accessible via NFC ou QR code."
        ],
        "impact": "La solution permet aux utilisateurs de partager leurs coordonnées en un simple geste via NFC ou QR code, renforçant l’image professionnelle et moderne des clients ELYKA. L’administration bénéficie d’un suivi clair de l’activité (créations, connexions, utilisateurs récents). L’architecture MERN modulaire offre une base évolutive prête à accueillir de nouvelles fonctionnalités comme les paiements Stripe ou des analytics avancées.",
        "link": "https://github.com/hanseroland/nfc"
    },
    {
        "id": 3,
        "img": "/images/cv_icon_129114.png",
        "title": "📌 🧠 Resume AI — Générateur et éditeur de CV intelligent assisté par IA",
        "images": [
            { "src": "/images/pexels-tubarones-3754438.jpg", "alt": "Aperçu interface principale Resume AI" },
            { "src": "/images/Photo-2.webp", "alt": "Capture d’écran de l’éditeur et de l’aperçu du CV" },
            { "src": "/images/curriculumresume_portofolio.png", "alt": "Illustration d’un modèle de CV généré" }
        ],
        "tag": "MERN · OpenAI · Full-Stack",
        "context": "Resume AI est une application full-stack (React + Node.js + MongoDB) qui permet aux utilisateurs de créer, éditer et personnaliser leurs CV grâce à l’assistance d’une intelligence artificielle. Elle combine génération automatique de texte, aperçu en temps réel et gestion complète du profil utilisateur dans une interface moderne et intuitive.",
        "objective": "Simplifier la création de CV professionnels grâce à l’IA, en générant automatiquement les sections clés (profil, expériences, compétences) tout en offrant un éditeur visuel en temps réel et des modèles prêts à l’emploi.",
        "mainFeatures": [
            "Authentification sécurisée avec JWT stocké en cookie httpOnly (login / inscription).",
            "CRUD complet sur les CV : informations personnelles, expériences, formations, compétences, projets, langues, hobbies, certifications.",
            "Génération de texte IA via OpenAI (résumé de profil, expériences, variantes).",
            "Éditeur riche (WYSIWYG) pour la saisie et modification des expériences avec intégration directe de la génération IA.",
            "Aperçu temps réel du CV (ResumePreview) synchronisé via Context API.",
            "Interface responsive et moderne avec Material UI, composants réutilisables et formulaires dynamiques."
        ],
        "techStack": [
            "Frontend: React",
            "Backend: Node.js, Express, MongoDB (Mongoose)",
            "Authentification: JWT (cookies httpOnly), bcrypt",
            "OpenAI API",
        ],
        "role": "Développeur Full-Stack — conception du produit, architecture technique, développement complet (frontend + backend) et intégration IA.",
        "responsibilities": [
            "Concevoir l’expérience utilisateur complète : parcours guidé de création et d’aperçu du CV.",
            "Définir le modèle de données Resume (schéma Mongoose) avec sections modulables.",
            "Implémenter les API REST sécurisées (authRoutes, resumeRoutes, userRoutes) et middleware JWT.",
            "Intégrer OpenAI pour la génération de contenu textuel structuré et gérer le parsing JSON.",
            "Développer le frontend avec React + MUI, formulaires dynamiques et aperçu en direct synchronisé via Context.",
            "Superviser la cohérence entre UX, logique métier et performance applicative."
        ],
        "challengesAndSolutions": [
            "Transformation des réponses IA en contenu JSON structuré et valide → utilisation du function calling OpenAI et parsing robuste côté backend avec gestion d’erreurs et fallback automatique.",
            "Maintien de la synchronisation temps réel entre formulaire et aperçu sans rechargement → utilisation de Context API (ResumeInfoContext, ResumeStyleContext) pour le partage d’état global.",
            "Offrir une expérience d’édition fluide et intuitive des expériences professionnelles → intégration d’un éditeur WYSIWYG avec boutons de génération IA injectant automatiquement le contenu généré.",
        ],
        "impact": "Resume AI accélère la création de CV en combinant génération de contenu IA et modèles pré-formatés. L’application aide les utilisateurs à produire des CV professionnels en quelques minutes, améliore la qualité rédactionnelle et réduit le stress de la rédaction manuelle. Projet prêt pour la production et extensible avec de nouveaux templates et export PDF.",
        "link": "https://github.com/hanseroland/resume-ai"
    },
    {
        id: 4,
        img: '/images/blood-dash.png',
        title: "📌 🩸 Blood Bank – Écosystème complet de gestion des dons de sang (Web + Mobile + API)",
        images: [
            { src: '/images/blood-mobile-muck.png', alt: "Acceuil application mobile (donneur)" },
            { src: '/images/blood-dash.png', alt: "Tableau de bord principal" },
            { src: '/images/blood-sign.png', alt: "Page de connexion" }
        ],
        tag: "Fullstack / Node.js / React / Expo / MongoDB ",
        context: "Blood Bank est une plateforme complète de gestion et de suivi des dons de sang. Elle connecte donneurs, hôpitaux, centres de collecte et administrateurs via une API centralisée, une interface web et une application mobile. Le projet vise à améliorer la coordination et la réactivité face aux urgences médicales liées au manque de sang.",
        objective: "Ce projet de fin d'étude a remporté le deuxième prix de l'Excellence SUP MTI au Maroc. Un projet ayant pour but de concevoir une solution fullstack intégrée (API, web, mobile) permettant la gestion des dons, demandes, rendez-vous, stocks et notifications, tout en garantissant la sécurité et la fiabilité des échanges de données entre les différents acteurs.",
        mainFeatures: [
            "👥 Gestion multi-rôles : donneurs (mobile), hôpitaux, centres et administrateurs (web).",
            "🩸 Suivi complet des dons, demandes, inventaires et transactions (création, affectation, validation).",
            "📍 Géolocalisation des centres de collecte via coordonnées GeoJSON.",
            "📅 Système de rendez-vous synchronisé avec les centres.",
            "📢 Annonces et alertes filtrées par groupe sanguin et localisation, avec notifications push Expo.",
            "🔒 Authentification sécurisée par JWT et middleware Express.",
            "📱 Application mobile Expo dédiée aux donneurs avec inscription, suivi et alertes temps réel."
        ],
        techStack: [
            "Node.js, Express, MongoDB, JWT, Expo Server SDK",
            "React, Redux, Axios",
            "Expo React Native, React-Native-Maps, Notifications Expo",
        ],
        role: "Développeur Fullstack principal – conception de l’architecture complète du projet :",
        responsibilities: [
            "• Développement et déploiement de l’API REST Node.js/Express.",
            "• Création de l’interface web pour hôpitaux, centres et administrateurs (React + MUI).",
            "• Développement de l’application mobile Expo pour les donneurs.",
            "• Intégration des notifications push Expo connectées aux alertes backend.",
            "• Gestion de la sécurité (JWT, cookies sécurisés, CORS, validations).",
            "• Mise en place du routage, des modèles de données et du système d’upload média."
        ],
        challengesAndSolutions: [
            "📱 Lors de l'émulation du projet en local, on a utilisé le client Expo Go sur mobile. Expo Go nous dispence d'un émulateur sur notre machine. Ma collègue étant au Maroc elle devait aussi tester à distance, alors nous avons installé ngrok pour généré une IP public ainsi elle a pu coonecter son client Expo Go à ma machine et simuler l'application à distance",
            "🗺️ Gestion des centres et annonces géolocalisées → stockage GeoJSON et endpoints extensibles pour recherche par proximité.",
            "📦 Synchronisation des stocks et transactions → conception des modèles Inventory et Transaction pour relier efficacement dons et demandes.",
            "📲 Notifications push → intégration de Expo Server SDK pour alerter les donneurs selon leur groupe sanguin et leur ville."
        ],
        impact: "Plateforme complète prête pour un déploiement à grande échelle : elle connecte efficacement les donneurs et les centres, réduit les délais de réponse en cas d’urgence et apporte une meilleure visibilité aux structures médicales locales. Le projet démontre une expertise fullstack avec un fort impact social.",
        links: {
            demo: "",
            backend: "",
            frontend: "",
            mobile: ""
        }
    },
    {
        id: 5,
        img: '/images/shine-web-1.png',
        title: "📌 Shine Skin Bar – Site vitrine optimisé et SEO",
        images: [
            {
                src: '/images/shine-mobile.png',
                alt: 'Capture d\'écran mobile de Shine Skin bar'
            },
            {
                src: '/images/shine-web-1.png',
                alt: 'Capture d\'écran site web de Shine Skin bar'
            },
            {
                src: '/images/seo-shine-1.png',
                alt: 'Capture d\'écran résulta SEO de Shine Skin bar'
            }
        ],
        tag: 'Freelance / WordPress / SEO',
        context: "Projet freelance réalisé pour un institut de beauté. La cliente voulait reprendre le contrôle de son site (hébergement, design, SEO) après une mauvaise expérience avec son ancienne agence.",
        objective: "Migrer et redéployer le site sur un nouvel hébergeur, améliorer la performance, rendre le site responsive, harmoniser le design et augmenter sa visibilité via SEO et Google My Business.",
        mainFeatures: [
            "Site vitrine + boutique en ligne WooCommerce.",
            "Commandes redirigées via WhatsApp Business.",
            "Optimisation SEO (balises, images, Google Search Console).",
            "Design responsive et harmonisé (navigation, couleurs).",
            "Fiche Google My Business pour visibilité locale."
        ],
        techStack: [
            "WordPress",
            "Elementor",
            "WooCommerce",
            "SEO (Google Search Console, optimisation manuelle)",
            "Ubuntu (optimisation images et serveur)"
        ],
        role: "Migration d’hébergement, refonte design responsive, optimisation SEO, intégration e-commerce via WooCommerce et WhatsApp Business.",
        challengesAndSolutions: [
            "Optimisation de plus de 50 images trop lourdes : Photoshop était inefficace → utilisation d’outils en ligne et commandes Ubuntu pour compression rapide.",
            "Temps de chargement lent avec Elementor/WooCommerce → optimisation cache et configuration serveur.",
            "Manque de visibilité locale → création fiche Google My Business + intégration SEO Search Console."
        ],
        impact: "Site modernisé, rapide et responsive. Résultat concret : passage de 1 clic/mois à 533 clics pour 7 830 impressions en 6 mois.",
        links: {
            demo: "https://shineskinbar.com/",
            code: ""
        }
    },

];