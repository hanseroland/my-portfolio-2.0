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
        img: 'https://picsum.photos/800/450?random=4',
        tag: 'MERN / React Native / Expo',
        title: '📌 Application Web et Mobile – Plateforme de Gestion de don de sang',
        contexte: 'Projet de fin d\'étude Développement d’une solution de gestion de don de Sang.',
        description: `Développement d’une plateforme mobile et web complète dédiée à la gestion du don de sang. 
        L'objectif principal est de connecter les donneurs avec les centres de transfusion sanguine et les hôpitaux, 
        en rendant le processus de don et de réception du sang plus efficace, transparent et réactif.`,
        fonctionnalités: [
            {
                fonctionnalite: "Gestion des Utilisateurs et des Rôles",
                details: "Une architecture robuste gère plusieurs types d'utilisateurs (donneurs, administrateurs, hôpitaux, centres de transfusion), chacun ayant des permissions spécifiques."
            },
            {
                fonctionnalite: "Inventaire en Temps Réel",
                details: "Le stock de sang est suivi avec précision, enregistrant les entrées et les sorties par groupe sanguin et quantité."
            },
            {
                fonctionnalite: "Système de Requêtes et de Dons",
                details: "Les hôpitaux peuvent émettre des demandes de sang qui sont ensuite gérées par les centres. Les dons sont suivis de la collecte jusqu'à leur mise en stock, avec des statuts et des dates d'expiration."
            },
            {
                fonctionnalite: "Géolocalisation et Rendez-vous",
                details: "Les donneurs peuvent facilement trouver le centre de don le plus proche grâce à la géolocalisation et prendre des rendez-vous pour organiser leur don, réduisant ainsi les temps d'attente."
            },
            {
                fonctionnalite: "Alertes et Annonces",
                details: "En cas d'urgence, des alertes ciblées sont envoyées aux donneurs d'un groupe sanguin spécifique dans une zone géographique donnée."
            }
        ],
        result: 'Statut : Prix d\'Excellence SUP MTI 2025.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Expo'],
    },
];