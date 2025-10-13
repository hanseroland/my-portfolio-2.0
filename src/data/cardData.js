export const cardData = [
    /*{
        id: 1,
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Fullstack MERN / Next.js',
        title: '📌 Application web pour un institut de Head Spa (Nana Head Spa)',
        contexte: 'Création d’une solution digitale moderne pour gérer les clients et centraliser les informations de soins',
        description: `Création d’une solution digitale moderne pour gérer les clients et centraliser les informations de soins.
    Développement d’un site vitrine et d’un tableau de bord administrateur avec gestion des fiches clients (rendez-vous et soins).
    Authentification sécurisée via JWT cookies et déploiement full production (Render, Vercel, Gandi).`,
        result: 'Application complète en ligne qui centralise la gestion des clients et facilite le suivi des rendez-vous.',
        stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Render', 'Vercel'],
    },*/
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
        id: 2,
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

    {
        id: 3,
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'MERN',
        title: '📌 Application MERN – Gestion de cartes NFC',
        contexte: 'Développement d’une solution de gestion de cartes de visite NFC pour les entreprises.',
        description: `Développement d’une solution de gestion de cartes de visite NFC pour les entreprises.
    Inclut un site client et un tableau de bord administrateur, gestion des utilisateurs et attribution des cartes NFC.`,
        result: 'Statut : en cours d’expérimentation avec les premiers utilisateurs.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
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
    }

];