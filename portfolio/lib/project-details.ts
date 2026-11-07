import { projects } from "./profile";

export type ProjectImage = { src: string; alt: string; caption: string; width: number; height: number };
type Block = { title: string; text: string };
export type ProjectDetail = {
  slug: string; projectId: string; lead: string; audience: string; objective: string;
  evidence: string; technologies?: string[]; functions: Block[];
  architecture?: { title: string; nodes: Block[]; note: string };
  backstage?: Block[]; challenges: string; outlook: string;
  images: ProjectImage[]; missingImages: string; pdf?: string; demo?: string;
  roadmap?: string[]; sources: string[];
};

const nexaris: ProjectDetail = {
  slug: "nexaris", projectId: "nexaris",
  lead: "Un espace pour relier les tâches, les idées et les décisions.",
  audience: "Personnes et équipes souhaitant organiser leurs projets dans un même espace de travail.",
  objective: "Rassembler le suivi quotidien, la planification et la documentation pour garder le contexte d’un projet à portée de main.",
  evidence: "Sources locales examinées. Tableau, fiche de tâche et calendrier observés en mode local, en lecture seule, avec les exemples inclus dans le code. Le site public demande une connexion ; les écritures et la synchronisation cloud n’ont pas été testées.",
  technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Zustand", "dnd-kit", "Supabase"],
  functions: [
    { title: "Suivre le travail", text: "Tableau Kanban, priorités, étiquettes, multi-assignation et sous-tâches. Le tableau et la consultation des tâches ont été observés en mode local." },
    { title: "Planifier", text: "Calendrier accessible depuis la navigation. Le code comprend aussi des jalons et une vue roadmap ; leur édition n’a pas été testée." },
    { title: "Déplacer et retrouver", text: "Le code implémente le déplacement des cartes avec dnd-kit et une navigation par fragment d’URL vers les vues et les tâches. Aucun déplacement n’a été effectué pendant cette inspection." },
    { title: "Conserver le contexte", text: "Modules de documentation, inspirations et réunions présents dans les sources. Les réunions comportent des décisions et une action de création de tâche ; ces écritures n’ont pas été exécutées." },
  ],
  architecture: {
    title: "Deux modes de persistance",
    nodes: [
      { title: "Interface React", text: "Vues, composants de tâches et routeur par fragment d’URL." },
      { title: "État Zustand", text: "Données du tableau et actions métier ; persistance locale via le middleware persist." },
      { title: "Stockage local", text: "localStorage dans le navigateur. Mode disponible sans configuration Supabase." },
      { title: "Mode cloud optionnel", text: "useCloudSync relie l’état à Supabase : table boards, données JSONB, contrôle updated_at et événements temps réel." },
    ],
    note: "L’interface alimente le store. Le store persiste localement ; lorsque Supabase est configuré, le hook synchronise aussi le tableau distant. Le schéma SQL décrit PostgreSQL ; son état réel en production n’a pas été contrôlé.",
  },
  backstage: [
    { title: "Une tâche, plusieurs points d’entrée", text: "Le routeur lit la vue et l’identifiant de tâche dans l’URL. Il vérifie que la tâche existe dans le tableau chargé avant d’ouvrir sa fiche. La navigation arrière peut refermer cette fiche." },
    { title: "Réconcilier des modifications", text: "mergeBoards compare une base commune, l’état local et l’état distant, collection par collection. Les changements compatibles sont fusionnés ; une collision sur la même entité déclenche la gestion de conflit." },
    { title: "Déposer sans modifier pendant le glissement", text: "Board.tsx applique le déplacement à la fin du geste. Le commentaire source explique ce choix par une boucle de mesures et de rendus rencontrée pendant le glissement. Ce mécanisme a été lu, pas soumis à un test de charge." },
  ],
  challenges: "Les commentaires de Board.tsx documentent un problème de boucle de rendu pendant le glissement. La solution présente dans le code diffère les mutations jusqu’au dépôt et privilégie la détection sous le pointeur pour les colonnes vides. Le mécanisme de fusion traite aussi les états divergents. Aucun résultat de performance ou de test multiutilisateur n’est revendiqué ici.",
  outlook: "Compléter la démonstration par un compte dédié et vérifier les parcours d’édition, la persistance après rechargement et les conflits entre utilisateurs dans un environnement de test autorisé.",
  images: [
    { src: "/projets/nexaris/tableau-local.png", alt: "Tableau Kanban NEXARIS en mode local, avec quatre colonnes et les tâches d’exemple du projet", caption: "Tableau Kanban — mode local, exemples inclus dans les sources. L’interface porte encore le nom Nova.", width: 1280, height: 720 },
    { src: "/projets/nexaris/tache-locale.png", alt: "Fiche d’une tâche NEXARIS consultée en lecture seule, avec priorité, assignation et sous-tâches", caption: "Consultation d’une tâche — données d’exemple locales, contrôles d’édition désactivés.", width: 1280, height: 720 },
    { src: "/projets/nexaris/calendrier-local.png", alt: "Calendrier NEXARIS affichant les tâches d’exemple planifiées du mode local", caption: "Calendrier — navigation observée en mode local, sans modification des tâches.", width: 1280, height: 720 },
  ],
  missingImages: "Les parcours cloud authentifiés ne sont pas illustrés.",
  // demo: "https://kanban-e378.onrender.com/#/board", 
  pdf: "/dossiers/nexaris.pdf",
  sources: ["CV et précisions de Romain Beka : objectif, statut et contribution.", "Sources NEXARIS : package.json, App.tsx, Board.tsx, router.ts, useBoardStore.ts, useCloudSync.ts, merge.ts et schéma SQL.", "Inspection du 28 octobre 2026 : site public limité à la connexion ; captures du mode local isolé."],
};

const nova: ProjectDetail = {
  slug: "nova-life", projectId: "nova-life-amnesia",
  lead: "Des règles métier au cœur d’un serveur de jeu de rôle.",
  audience: "Joueurs et équipes d’administration d’un serveur Nova Life / AMNESIA.",
  objective: "Proposer des interactions en jeu et traduire des règles de fonctionnement en plugins C# : examens, commandes, livraison et interfaces d’administration.",
  evidence: "Analyse statique d’une sélection des sources fournies. Aucun serveur de jeu n’a été lancé. Le statut global « Terminé » est conservé selon le CV ; le module de permis analysé comporte une attribution encore à compléter, limite confirmée par Romain Beka.",
  technologies: ["C#", ".NET Framework 4.8", "API Nova Life", "Unity", "Harmony", "SQLite", "Newtonsoft.Json"],
  functions: [
    { title: "Questionnaires de permis", text: "AmnesiaPermis sépare les questions, la session et les panneaux de réponse. Le permis B calcule le score et affiche le résultat ; l’attribution du permis reste signalée par un TODO dans la version fournie." },
    { title: "Commandes et livraisons", text: "Innov_MCDO définit des commandes, des ingrédients et un suivi de livraison. Le traitement final vérifie le rôle de l’employé, l’état de paiement et les fonds du client avant le transfert des objets." },
    { title: "Menu personnalisé", text: "Le plugin F4 utilise un patch Harmony sur l’entrée clavier pour ouvrir ou fermer un panneau personnalisé et mémoriser le panneau associé au joueur." },
    { title: "Données de terrain", text: "MapConfig utilise une entité ModKit annotée pour SQLite et sérialise les objets du terrain en JSON. Ce modèle a été examiné ; la base du serveur n’a pas été consultée." },
  ],
  architecture: {
    title: "Des plugins intégrés au jeu",
    nodes: [
      { title: "Interactions en jeu", text: "Panneaux UIPanel, réponses aux questions et entrées clavier." },
      { title: "Plugins C#", text: "Sessions de permis, gestion des commandes et menu F4 ; modules distincts." },
      { title: "API Nova Life / Unity", text: "Joueurs, inventaires, entreprises et panneaux du jeu. Interception ciblée avec Harmony pour F4." },
      { title: "Persistance selon le module", text: "Sauvegardes via l’API du jeu ; entité ModKit / SQLite et JSON observée pour MapConfig." },
    ],
    note: "Vue d’ensemble des modules examinés, pas une chaîne unique ni une base commune à tous les plugins. Les dépendances au jeu sont nécessaires à une validation en exécution.",
  },
  backstage: [
    { title: "Séparer une session de ses écrans", text: "La session du permis conserve la liste des questions, l’index courant et le nombre de bonnes réponses. Le panneau affiche la question puis transmet le choix au traitement de la réponse. L’état de progression reste distinct de sa présentation." },
    { title: "Contrôler une livraison au dernier moment", text: "CompleteDelivery relit les fonds du client au moment de livrer. Le débit précède le transfert d’objets, puis le code marque la commande comme payée et répartit le montant entre entreprise et livreur. Cette lecture ne garantit pas une transaction atomique." },
  ],
  challenges: "Aucun récit de difficulté résolue n’a été fourni. Les contrôles métier sont visibles dans le code, mais leur robustesse en jeu reste à tester. Deux points relevés : l’attribution du permis est incomplète ; CompleteDelivery consulte customer.isInGame après une recherche susceptible de renvoyer null. Les sources externes n’ont pas été corrigées.",
  outlook: "Valider la version du plugin déployée, compléter l’attribution du permis, traiter le cas du client absent et enregistrer une démonstration sur un serveur de test autorisé.",
  images: [], missingImages: "À ajouter : questionnaire du permis, panneau de commande et livraison en jeu. Aucune capture du serveur n’a été fournie ; aucun écran n’a été reconstitué.",
  pdf: "/dossiers/nova-life-amnesia.pdf",
  sources: ["CV et précisions de Romain Beka : contribution, périmètre général et maintien du statut avec la limite du permis.", "AmnesiaPermis : projet .NET, session et panneau Permis B.", "Innov_MCDO_corrige : McDoOrder et McDoManager ; InnovationRP : patch F4 et MapConfig.", "Banque, crédits, TPE et SafeZones figurent au CV ; leur ensemble n’a pas été vérifié dans cette sélection de sources."],
};

function documented(slug: string, lead: string, audience: string, objective: string, outlook: string): ProjectDetail {
  const project = projects.find(p => p.id === slug)!;
  return {
    slug, projectId: slug, lead, audience, objective, outlook,
    evidence: "Présentation fondée sur le CV et les précisions de Romain Beka. Les sources de ce projet et une démonstration n’ont pas été examinées. Les éléments ci-dessous décrivent son périmètre documenté ; leur disponibilité effective n’est pas validée.",
    functions: project.features.map((text, i) => ({ title: ["Périmètre principal", "Fonctions complémentaires", "Intégrations et évolutions"][i], text })),
    challenges: "Aucune difficulté technique accompagnée de preuves n’est disponible pour cette version. Aucun résultat de test, de performance ou de validation en production n’est présenté.",
    images: [], missingImages: "Captures réelles en attente : vue principale et parcours représentatif. La galerie pourra les accueillir dès leur disponibilité.",
    sources: ["CV actualisé et précisions de Romain Beka sur les contributions.", "Code, captures, version exécutable et validation fonctionnelle à documenter avant l’ajout d’un dossier technique PDF."],
  };
}

const viridian = documented("viridian", "Explorer un système de trading algorithmique.", "Usage expérimental autour de l’analyse EUR/USD.", "Structurer l’analyse de marché et les contraintes de risque dans une plateforme expérimentale.", "Documenter la migration MT5 / MQL5 et les protocoles d’expérimentation. Aucune rentabilité ni performance de trading n’est démontrée.");
const lucid = documented("lucid", "Concevoir des rencontres autour de la compatibilité.", "Personnes recherchant une expérience de rencontre fondée sur les profils et la compatibilité.", "Organiser le parcours de rencontre et explorer une assistance par IA dans l’analyse des affinités.", "Le projet attend un financement. La distinction entre fonctionnalités déjà développées et envisagées doit être confirmée par une version inspectable ; aucune des fonctions listées n’est annoncée comme opérationnelle ici.");
const gemma = documented("gemma-arena", "Comparer des modèles locaux dans un même espace.", "Utilisateurs souhaitant expérimenter avec des LLM sur Windows.", "Réunir des scénarios de comparaison et un historique pour explorer le comportement de modèles locaux.", "Confirmer la version technique actuelle avant de détailler l’architecture. C#, .NET, WinUI 3 et SQLite sont les technologies indiquées au CV, sans vérification d’une version exécutable.");

function planned(slug: "helix" | "pulse"): ProjectDetail {
  const project = projects.find(p => p.id === slug)!;
  const helix = slug === "helix";
  return {
    slug, projectId: slug,
    lead: helix ? "Centraliser les opérations d’une PME." : "Organiser les échanges d’une équipe en temps réel.",
    audience: helix ? "Petites et moyennes entreprises ; utilisateurs de gestion et administrateurs." : "Équipes et organisations disposant d’espaces de communication partagés.",
    objective: helix ? "Prévoir un ERP modulaire reliant clients, gestion commerciale et stocks." : "Prévoir une plateforme collaborative associant conversations, organisations et recherche.",
    evidence: "Planifié — développement non commencé. Technologies, fonctions, étapes et architecture ci-dessous sont envisagées. Aucun backend, base de données ou test n’est présenté comme existant.",
    functions: [...project.features, ...(helix ? [] : ["Présence en ligne des membres."])].map((text, i) => ({ title: `Fonction prévue ${String(i + 1).padStart(2, "0")}`, text })),
    architecture: {
      title: "Architecture envisagée",
      nodes: [
        { title: "Frontend prévu", text: "React et TypeScript pour les interfaces." },
        { title: "Backend prévu", text: helix ? "API REST C# / ASP.NET Core, modules métier et permissions." : "C# / ASP.NET Core, SignalR pour les échanges temps réel et Identity pour les comptes." },
        { title: "Données prévues", text: helix ? "SQL Server et Entity Framework Core." : "PostgreSQL, Entity Framework Core ; Redis envisagé pour les besoins temps réel, rôle précis à définir." },
        { title: "Validation prévue", text: "Conditionnement Docker ; tests xUnit et Playwright envisagés. Aucun test existant." },
      ],
      note: "Schéma de conception prévisionnel, à confirmer lors des premiers développements. Il ne représente pas un système implémenté.",
    },
    roadmap: helix ? ["Cadrer les modules, les entités métier et les droits d’accès.", "Prévoir un premier parcours clients / produits / stocks.", "Étendre aux devis, à la facturation et au tableau de bord.", "Développer puis vérifier les parcours, les tests et le conditionnement."] : ["Cadrer les organisations, les membres et les permissions.", "Prévoir un premier parcours de messagerie privée et de salons.", "Étendre à la présence, aux notifications, aux fichiers et à la recherche.", "Développer puis vérifier la synchronisation, les tests et le conditionnement."],
    challenges: "Les enjeux à explorer concernent la modélisation des données et les permissions" + (helix ? " entre modules métier." : ", la synchronisation et la présence multiutilisateur.") + " Ce sont des objectifs techniques, pas des difficultés déjà résolues.",
    outlook: project.practice,
    images: [], missingImages: "Les captures seront ajoutées après le début du développement. Aucun écran fictif ne représente ce projet.",
    sources: ["Brief de Romain Beka : concept, technologies envisagées, fonctionnalités prévues et contribution future.", "Feuille de route proposée pour organiser le développement ; sans échéance ni réalisation revendiquée."],
  };
}

export const projectDetails: ProjectDetail[] = [nexaris, nova, viridian, lucid, gemma, planned("helix"), planned("pulse")];
export function detailForProject(id: string) { return projectDetails.find(detail => detail.projectId === id); }
