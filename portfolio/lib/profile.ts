// Référence : CV MODIFIER TEST.pdf fourni par Romain Beka.
// Liens sociaux conservés depuis le code source fourni, sans URL déduite.
export const profile = {
  email: "romainbeka@outlook.com", phone: "06 61 55 20 80", phoneHref: "+33661552080",
  cv: "/cv-romain-beka.pdf",
  linkedin: "https://www.linkedin.com/in/romain-beka-8330481a4/",
  github: "https://github.com/Niooxis",
};
export type Project = {
  id: string; name: string; category: string; description: string;
  status: "Fonctionnel en évolution" | "En attente de financement" | "En développement" | "Terminé";
  technologies: string[]; features: string[]; practice: string; featured: boolean;
};
export const projects: Project[] = [
  {
    id: "thalos", name: "THALOS", category: "IA locale / Automatisation",
    description: "Assistant IA personnel et plateforme d’automatisation.",
    status: "Fonctionnel en évolution", featured: true,
    technologies: ["Electron", "React", "TypeScript", "Node.js", "LM Studio", "llama.cpp"],
    features: ["Reconnaissance et synthèse vocales, mémoire persistante.", "Orchestration d’agents IA et automatisation de tâches.", "Gestion de projets et exécution sécurisée d’actions système."],
    practice: "Application desktop, intégration de modèles locaux et orchestration d’agents IA.",
  },
  {
    id: "viridian", name: "VIRIDIAN", category: "Desktop / Trading algorithmique",
    description: "Plateforme de trading algorithmique centrée sur l’analyse EUR/USD.",
    status: "En développement", featured: true,
    technologies: ["Electron", "React", "TypeScript", "Python", "MT5"],
    features: ["Analyse EUR/USD, micro-bougies et ticks, scoring et indicateurs.", "Gestion du risque, de l’allocation et de l’exposition.", "Migration vers MetaTrader 5 / MQL5."],
    practice: "Interfaces desktop, traitement de données de marché et logique de gestion du risque.",
  },
  {
    id: "lucid", name: "LUCID", category: "Mobile / Intelligence artificielle",
    description: "Application mobile de rencontre assistée par IA.",
    status: "En attente de financement", featured: true,
    technologies: ["React Native", "Expo", "Supabase", "IA"],
    features: ["Compatibilité, onboarding, profils et chat.", "Archétypes, dealbreakers, analyse linguistique et fonction Miroir.", "Premium, sécurité et localisation."],
    practice: "Développement mobile, parcours utilisateur et intégration de fonctionnalités IA.",
  },
  {
    id: "gemma-arena", name: "GEMMA ARENA", category: "Windows / IA locale",
    description: "Application Windows pour l’exécution et la comparaison de LLM locaux.",
    status: "En développement", featured: false,
    technologies: ["C#", ".NET", "WinUI 3", "SQLite"],
    features: ["Exécution et comparaison de LLM locaux, arène A/B.", "Profils de prompts, mémoire et historique.", "Gestion de modèles via LM Studio."],
    practice: "Développement Windows, persistance de données et intégration de modèles locaux.",
  },
  {
    id: "nexaris", name: "NEXARIS", category: "Web / Organisation",
    description: "Second Brain et gestion de projets en ligne.",
    status: "Terminé", featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Kanban, calendrier, priorités et multi-assignation.", "Drag & drop, mode réunion et décisions.", "Workflow Idée → Prototype → Tâche."],
    practice: "Interfaces interactives et modélisation de workflows de gestion de projets.",
  },
  {
    id: "nova-life-amnesia", name: "NOVA LIFE / AMNESIA", category: "C# / Systèmes métier",
    description: "Systèmes métier pour serveur RP.",
    status: "Terminé", featured: false,
    technologies: ["C#", ".NET", "SQLite", "Harmony"],
    features: ["Système bancaire, transactions, crédits et TPE.", "SafeZones, restrictions et permissions.", "Outils d’administration."],
    practice: "Logique métier, persistance de données et gestion de permissions.",
  },
];
export const skillGroups = [
  {title: "Langages & interfaces", items: ["C#", "React", "TypeScript", "Python", "React Native", "Tailwind CSS"]},
  {title: "Frameworks & plateformes", items: [".NET", "Electron", "WinUI 3", "Node.js", "Nuxt", "Expo", "Harmony", "MT5"]},
  {title: "Données", items: ["Neon", "SQL", "Prisma", "JSON", "SQLite", "Supabase"]},
  {title: "Intelligence artificielle", items: ["LLM locaux", "LM Studio", "llama.cpp", "Agents IA", "Orchestration IA", "Embeddings", "Prompt Engineering", "Whisper.cpp", "Piper TTS"]},
  {title: "Développement & déploiement", items: ["Visual Studio", "VS Code", "Git", "GitHub", "npm", "PowerShell", "Render", "OVH", "NVM"]},
  {title: "Autres outils", items: ["Obsidian", "Blender"]},
];
export const experience = [
  {company: "MindOut", title: "Game Master en réalité virtuelle · Alternance", dates: "05/2023 – 01/2026", location: "Vélizy-Villacoublay, Île-de-France", description: "Installation, configuration et maintenance de matériel informatique et VR. Diagnostic et résolution d’incidents, support utilisateur, gestion CRM et gestion opérationnelle des sessions. Accueil et accompagnement client en environnement VR."},
  {company: "Orange", title: "Stagiaire en informatique", dates: "05/2019 – 06/2019", location: "Châtillon, Île-de-France", description: "Stage au sein du service IMT : approfondissement des connaissances réseaux, découverte de l’environnement informatique d’entreprise et développement front-end."},
];
export const education = [
  {school: "ISCOD", title: "BTS Services Informatiques aux Organisations – Développement informatique", dates: "09/2023 – 06/2025", description: "Formation en développement informatique : conception d’applications web et logicielles, programmation, gestion des bases de données, analyse des besoins et gestion de projets informatiques."},
  {school: "Lycée Léonard de Vinci · Bagneux", title: "Bac Professionnel Systèmes Numériques", dates: "2019 – 2020", description: "Formation à l’installation, la configuration et la maintenance des systèmes informatiques et réseaux, au diagnostic et à la résolution des pannes, à la sécurité et à l’administration des équipements numériques."},
];
