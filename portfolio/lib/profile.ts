// Références : CV MODIFIER TEST.pdf et précisions de Romain Beka du 27/10/2026
// sur les contributions, les compétences et les projets planifiés HELIX / PULSE.
// Une technologie de projet n’est pas un niveau de maîtrise.
// Liens sociaux conservés depuis le code source fourni, sans URL déduite.
export const profile = {
  email: "romainbeka@outlook.com", phone: "06 61 55 20 80", phoneHref: "+33661552080",
  cv: "/cv-romain-beka.pdf",
  linkedin: "https://www.linkedin.com/in/romain-beka-8330481a4/",
  github: "https://github.com/Niooxis",
};
export type Project = {
  id: string; name: string; category: string; description: string;
  status: "Fonctionnel en évolution" | "En attente de financement" | "En développement" | "Terminé" | "Planifié";
  technologies: string[]; features: string[]; practice: string;
  contributionType: "software" | "ai-assisted";
  contribution: string;
  responsibilities: string[];
};
export const projects: Project[] = [
  {
    id: "thalos", name: "THALOS", category: "IA locale / Automatisation",
    description: "Assistant IA personnel et plateforme d’automatisation.",
    status: "Fonctionnel en évolution",
    technologies: ["Electron", "React", "TypeScript", "Node.js", "LM Studio", "llama.cpp"],
    features: ["Reconnaissance et synthèse vocales, mémoire persistante.", "Orchestration d’agents IA et automatisation de tâches.", "Gestion de projets et exécution sécurisée d’actions système."],
    contributionType: "ai-assisted",
    contribution: "Conception de l’assistant, architecture fonctionnelle et pilotage du développement.",
    responsibilities: ["Définition des usages et des fonctionnalités de l’assistant.", "Organisation de l’architecture fonctionnelle et orientation des choix techniques.", "Expérimentation et validation des fonctionnalités."],
    practice: "Conception fonctionnelle, structuration des besoins et pilotage d’un projet d’IA locale et d’automatisation.",
  },
  {
    id: "viridian", name: "VIRIDIAN", category: "Desktop / Trading algorithmique",
    description: "Plateforme expérimentale de trading algorithmique centrée sur l’analyse EUR/USD.",
    status: "En développement",
    technologies: ["Electron", "React", "TypeScript", "Python", "MT5"],
    features: ["Analyse EUR/USD, micro-bougies et ticks, scoring et indicateurs.", "Gestion du risque, de l’allocation et de l’exposition.", "Migration vers MetaTrader 5 / MQL5."],
    contributionType: "ai-assisted",
    contribution: "Conception du système, définition des contraintes et pilotage des expérimentations.",
    responsibilities: ["Définition des objectifs, des stratégies et des contraintes.", "Organisation des expérimentations et analyse des résultats.", "Pilotage du développement d’une plateforme expérimentale, sans rentabilité ni validation en production revendiquée."],
    practice: "Conception de système, formalisation de stratégies et de contraintes, pilotage d’expérimentations.",
  },
  {
    id: "lucid", name: "LUCID", category: "Mobile / Intelligence artificielle",
    description: "Application mobile de rencontre assistée par IA.",
    status: "En attente de financement",
    technologies: ["React Native", "Expo", "Supabase", "IA"],
    features: ["Compatibilité, onboarding, profils et chat.", "Archétypes, dealbreakers, analyse linguistique et fonction Miroir.", "Premium, sécurité et localisation."],
    contributionType: "ai-assisted",
    contribution: "Conception du produit, définition des fonctionnalités et organisation de l’expérience utilisateur.",
    responsibilities: ["Définition des fonctionnalités de rencontre et de compatibilité.", "Organisation des parcours et de l’expérience utilisateur.", "Pilotage du développement du produit."],
    practice: "Conception produit, spécification fonctionnelle et orientation des parcours utilisateur.",
  },
  {
    id: "gemma-arena", name: "GEMMA ARENA", category: "Windows / IA locale",
    description: "Application Windows pour l’exécution et la comparaison de LLM locaux.",
    status: "En développement",
    technologies: ["C#", ".NET", "WinUI 3", "SQLite"],
    features: ["Exécution et comparaison de LLM locaux, arène A/B.", "Profils de prompts, mémoire et historique.", "Gestion de modèles via LM Studio."],
    contributionType: "ai-assisted",
    contribution: "Conception du projet, scénarios de comparaison et pilotage du développement.",
    responsibilities: ["Définition des objectifs et des fonctionnalités de comparaison.", "Organisation des scénarios d’expérimentation autour des LLM locaux.", "Pilotage des évolutions de l’application Windows."],
    practice: "Conception fonctionnelle, structuration des objectifs et organisation d’expérimentations.",
  },
  {
    id: "nexaris", name: "NEXARIS", category: "Web / Organisation",
    description: "Application web de gestion de projets et d’organisation, pensée comme un Second Brain.",
    status: "Terminé",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Kanban, calendrier, priorités et multi-assignation.", "Drag & drop, mode réunion et décisions.", "Workflow Idée → Prototype → Tâche."],
    practice: "Interfaces interactives et modélisation de workflows de gestion de projets.",
    contributionType: "software",
    contribution: "Développement des interfaces, des fonctionnalités et de la logique de gestion de projets.",
    responsibilities: ["Développement majoritaire du code de l’application.", "Conception et implémentation des fonctionnalités et des interfaces.", "Intégration de la logique applicative et des composants."],
  },
  {
    id: "nova-life-amnesia", name: "NOVA LIFE / AMNESIA", category: "C# / Systèmes métier",
    description: "Plugins C#/.NET et systèmes métier pour serveur RP : banque, permissions et administration.",
    status: "Terminé",
    technologies: ["C#", ".NET", "SQLite", "Harmony"],
    features: ["Système bancaire, transactions, crédits et TPE.", "SafeZones, restrictions et permissions.", "Outils d’administration."],
    practice: "Logique métier, persistance de données et gestion de permissions.",
    contributionType: "software",
    contribution: "Programmation des plugins, implémentation des règles métier et intégration des systèmes.",
    responsibilities: ["Développement majoritaire du code des plugins.", "Programmation des fonctionnalités et implémentation des règles métier.", "Intégration des systèmes et de la persistance des données."],
  },
  {
    id: "helix", name: "HELIX", category: "ERP / Application Full Stack",
    description: "Projet de plateforme ERP modulaire destiné à centraliser les opérations d’une petite ou moyenne entreprise. Développement non commencé.",
    status: "En développement", contributionType: "software",
    technologies: ["React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "API REST", "Docker", "xUnit", "Playwright"],
    contribution: "Projet personnel planifié, destiné à être développé principalement par moi-même afin d’approfondir mes compétences en développement Full Stack, architecture logicielle et applications métier.",
    responsibilities: ["Concevoir une plateforme modulaire pour les opérations d’une PME.", "Prévoir les interfaces, l’API REST et la persistance des données.", "Prévoir les tests et le conditionnement de l’application ; aucune implémentation à ce stade."],
    features: ["Gestion des clients et des collaborateurs.", "Gestion des produits et des stocks.", "Création de devis, gestion des factures et suivi des paiements.", "Tableau de bord administratif, rôles et permissions.", "Historique des opérations et exportation de documents.", "Paramétrage des modules."],
    practice: "À approfondir : développement Full Stack, architecture logicielle modulaire et applications métier. La stack envisagée ne constitue pas une expérience déjà acquise sur ce projet.",
  },
  {
    id: "pulse", name: "PULSE", category: "Communication / Full Stack temps réel",
    description: "Projet de plateforme de communication collaborative au sein d’organisations et d’espaces de travail. Développement non commencé.",
    status: "Planifié", contributionType: "software",
    technologies: ["React", "TypeScript", "C#", "ASP.NET Core", "PostgreSQL", "Entity Framework Core", "SignalR", "Redis", "ASP.NET Core Identity", "Docker", "xUnit", "Playwright"],
    contribution: "Projet personnel planifié, destiné à être développé principalement par moi-même afin de mettre en pratique les architectures temps réel, les API backend et la synchronisation multiutilisateur.",
    responsibilities: ["Concevoir les échanges au sein d’organisations et d’espaces de travail.", "Prévoir l’API backend, la synchronisation multiutilisateur et les permissions.", "Prévoir les tests et le conditionnement de l’application ; aucune implémentation à ce stade."],
    features: ["Inscription, authentification et gestion des profils.", "Création d’organisations et administration des espaces.", "Messagerie privée, conversations de groupe et salons textuels.", "Communication en temps réel et notifications.", "Gestion des membres et des permissions.", "Partage de fichiers, historique des conversations et recherche de messages."],
    practice: "À développer : architectures temps réel, API backend et synchronisation multiutilisateur. La stack envisagée ne constitue pas une expérience déjà acquise sur ce projet.",
  },
];
export const projectGroups = [
  {
    id: "developpement-logiciel",
    title: "Développement logiciel",
    description: "J’ai développé la majorité du code de NEXARIS et NOVA LIFE / AMNESIA, avec une assistance IA occasionnelle. HELIX et PULSE sont mes prochains projets personnels, encore au stade de la planification.",
    projects: projects.filter(project => project.contributionType === "software"),
  },
  {
    id: "projets-assistes-ia",
    title: "Conception et développement assisté par IA",
    description: "Quatre projets dont je définis les objectifs et les fonctionnalités et pilote les évolutions. Leur implémentation est principalement réalisée avec l’assistance de l’IA.",
    projects: projects.filter(project => project.contributionType === "ai-assisted"),
  },
];

// Les catégories indiquent le contexte documenté, jamais un score de maîtrise.
export type SkillGroup = {
  title: string;
  personal?: string[];
  independent?: string[];
  partial?: string[];
  project?: string[];
  cv?: string[];
};
export const skillContexts = [
  { key: "personal", label: "Pratique personnelle" },
  { key: "independent", label: "Pratique personnelle · sans IA" },
  { key: "partial", label: "Pratique personnelle · assistance partielle" },
  { key: "project", label: "Contexte de projet" },
  { key: "cv", label: "Parcours" },
] as const;
export const skillGroups: SkillGroup[] = [
  { title: "Langages", personal: ["C#", "TypeScript"], project: ["Python"] },
  { title: "Frontend", personal: ["React", "Tailwind CSS"], cv: ["Nuxt"] },
  { title: "Backend", partial: ["Node.js"] },
  { title: "Frameworks", personal: [".NET", "Harmony"], project: ["React Native", "Expo"] },
  { title: "Développement desktop", partial: ["WinUI 3"], project: ["Electron"] },
  { title: "Bases de données", personal: ["SQLite"], independent: ["Prisma"], partial: ["Supabase"], cv: ["Neon", "SQL", "JSON"] },
  { title: "Intelligence artificielle", project: ["LLM locaux", "LM Studio", "llama.cpp", "Agents IA", "Orchestration IA"], cv: ["Embeddings", "Prompt Engineering", "Whisper.cpp", "Piper TTS"] },
  { title: "Outils & déploiement", cv: ["Visual Studio", "VS Code", "Git", "GitHub", "npm", "PowerShell", "NVM", "Render", "OVH", "Obsidian", "Blender"], project: ["MT5"] },
];
export const experience = [
  {company: "MindOut", title: "Game Master en réalité virtuelle · Alternance", dates: "05/2023 – 01/2026", location: "Vélizy-Villacoublay, Île-de-France", description: "Installation, configuration et maintenance de matériel informatique et VR. Diagnostic et résolution d’incidents, support utilisateur, gestion CRM et gestion opérationnelle des sessions. Accueil et accompagnement client en environnement VR."},
  {company: "Orange", title: "Stagiaire en informatique", dates: "05/2019 – 06/2019", location: "Châtillon, Île-de-France", description: "Stage au sein du service IMT : approfondissement des connaissances réseaux, découverte de l’environnement informatique d’entreprise et développement front-end."},
];
export const education = [
  {school: "ISCOD", title: "BTS Services Informatiques aux Organisations – Développement informatique", dates: "09/2023 – 06/2025", description: "Formation en développement informatique : conception d’applications web et logicielles, programmation, gestion des bases de données, analyse des besoins et gestion de projets informatiques."},
  {school: "Lycée Léonard de Vinci · Bagneux", title: "Bac Professionnel Systèmes Numériques", dates: "2019 – 2020", description: "Formation à l’installation, la configuration et la maintenance des systèmes informatiques et réseaux, au diagnostic et à la résolution des pannes, à la sécurité et à l’administration des équipements numériques."},
];
