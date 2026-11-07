// All the site's text lives here, French and English side by side.
// To update the site, edit this file; the page layout does not need to change.

export const links = {
  email: 'diaamar757@gmail.com',
  phone: '514 770-7757',
  phoneHref: 'tel:+15147707757',
  github: 'https://github.com/IBNOUDIA',
  linkedin: 'https://linkedin.com/in/amar-dia',
  acafis: 'https://www.acafis.ca',
  acafisCode: 'https://github.com/IBNOUDIA/AcafisCanada',
  netbelset: 'https://netbelset.ca',
  formspree: 'https://formspree.io/f/mzdoqvlw',
};

export const content = {
  fr: {
    meta: {
      title: 'Amar Dia | Développeur full stack à Montréal',
      description:
        'Développeur full stack à Montréal. Je conçois et mets en ligne des applications web complètes : React, TypeScript, Node.js, PostgreSQL et assistants IA.',
    },
    cvUrl: '/CV_Amar_Dia_FR.pdf',
    nav: { projects: 'Projets', skills: 'Compétences', path: 'Parcours', contact: 'Contact', cv: 'CV', switchLabel: 'EN', switchHref: '/en/', switchName: 'Read in English' },
    hero: {
      kicker: 'Développeur full stack · Montréal',
      title: "Des applications complètes, de la base de données à l'écran.",
      lead: "Je m'appelle Amar Dia. J'analyse le besoin, je modélise les données, je développe et je mets en ligne. Mes projets répondent à de vrais besoins : une association au service des familles et une entreprise de commerce en ligne.",
      primary: 'Voir mes projets',
      secondary: 'Me contacter',
      status: 'Ouvert aux postes et aux mandats en développement',
    },
    proof: [
      { value: '2', label: 'plateformes web en ligne' },
      { value: '39', label: 'tables de données modélisées' },
      { value: '2', label: 'assistants IA intégrés' },
      { value: '6 ans', label: 'à coordonner les opérations chez Groupe ALDO' },
    ],
    projects: {
      label: 'Projets',
      title: 'Du travail que vous pouvez ouvrir et tester.',
      visit: 'Voir le site',
      code: 'Voir le code',
      decisions: 'Décisions techniques',
      featured: 'Projet phare',
      acafis: {
        name: 'ACAFIS',
        tagline: "La plateforme d'une association au service des familles sénégalaises du Canada.",
        summary:
          "J'ai cofondé cette association, puis j'ai conçu et développé sa plateforme bilingue : site public, espace membre, inscriptions aux activités, administration du bureau et assistant IA pour les jeunes.",
        alt: "L'assistant Kocc Barma sur acafis.ca, avec ses thèmes et son message d'accueil",
        facts: [
          ['15', 'tables PostgreSQL'],
          ['18 600', 'lignes de TypeScript'],
          ['143', 'commits'],
          ['FR · EN', 'site bilingue'],
        ],
        decisions: [
          ['Inscriptions sans surréservation', "Le verrouillage de la ligne de l'activité dans une transaction PostgreSQL empêche deux personnes de prendre la dernière place. Quand une place se libère, la liste d'attente avance dans l'ordre."],
          ['Connexion sans mot de passe', 'Les membres reçoivent un code à usage unique par courriel. Le code est conservé sous forme hachée, et les routes sensibles ont une limite de requêtes.'],
          ['Un assistant vraiment utile', "Kocc Barma, basé sur Gemini, aide aux devoirs, au code et à l'orientation, en français, en anglais et en wolof."],
          ['Un budget maîtrisé', 'Le site tourne sur les offres gratuites de Vercel et de Supabase. Une tâche planifiée quotidienne évite la mise en veille de la base de données.'],
        ],
        stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel Functions', 'Gemini', 'Resend'],
      },
      netbelset: {
        name: 'Netbelset',
        status: 'Lancement prochain',
        tagline: 'Mon entreprise de commerce en ligne, entre Montréal et Dakar.',
        summary:
          'Plateforme de commerce bilingue pour des cosmétiques, des produits pour bébés et de la mode sur mesure. Elle gère le panier, les prix en dollars canadiens ou en francs CFA et le suivi des commandes. Le paiement Stripe est en cours de finalisation. L\'entreprise offre aussi la création de sites web.',
        alt: "Page d'accueil de netbelset.ca",
        highlights: [
          "Configurateur sur mesure : modèle, tissu, mensurations guidées et message à l'artisan",
          'Assistante Mbaya : français, anglais et wolof, voix, analyse de photos et de PDF, suivi de commande',
          '24 modèles de données avec Prisma et validation des requêtes avec Zod',
        ],
        stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'OpenAI', 'Zustand', 'Zod'],
      },
    },
    skills: {
      label: 'Compétences',
      title: "Ce que j'utilise, et où je l'ai appris.",
      groups: [
        { name: 'Utilisé sur mes projets en ligne', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'API REST', 'PostgreSQL', 'Supabase', 'Prisma', 'API OpenAI', 'API Gemini', 'Vercel', 'Git'] },
        { name: 'Acquis en formation', items: ['Express', 'PHP', 'Python', 'MySQL', 'SQLite', 'MongoDB', 'Kotlin', 'Android Studio', 'WordPress'] },
        { name: 'Méthode', items: ['Analyse des besoins', 'Modélisation des données', 'Prototypage', 'Documentation', 'Lean Six Sigma'] },
      ],
    },
    path: {
      label: 'Parcours',
      title: 'Un développeur qui connaît le terrain.',
      intro: "Avant le code, j'ai coordonné des équipes et formé des collègues. Je sais ce qu'un outil doit faire pour les gens qui s'en servent chaque jour.",
      items: [
        { when: '2024 – 2026', what: 'AEC Analyste-programmeur', where: 'CDI Collège, Montréal', detail: 'Analyse, modélisation, développement web et mobile, bases de données et documentation.' },
        { when: 'Depuis 2026', what: 'Fondateur et développeur', where: 'Netbelset, Montréal', detail: 'Lancement d\'une entreprise immatriculée au Québec : boutique en ligne et services numériques, dont la création de sites web.' },
        { when: 'Depuis mai 2024', what: 'Instructeur de conduite', where: 'Tecnic Driving School, Montréal', detail: "Évaluer chaque élève, adapter l'enseignement et suivre sa progression." },
        { when: '2018 – 2024', what: 'Coordonnateur, réception et expédition', where: 'Groupe ALDO, Montréal', detail: 'Coordination des opérations, gestion des stocks dans SAP, optimisation des flux et formation des employés.' },
        { when: 'Membre fondateur', what: 'Cofondateur', where: 'ACAFIS, Montréal', detail: "Création d'un organisme sans but lucratif, coordination des activités, développement de la plateforme et gestion du site de la Coop-ACAFIS." },
      ],
      extras: [
        ['Certifications', 'MARPPP · Lean Six Sigma White Belt (2023)'],
        ['Langues', 'Français courant · Anglais fonctionnel'],
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Un poste ou un projet à me proposer ?',
      lead: 'Écrivez-moi quelques lignes sur votre besoin. Je vous répondrai personnellement.',
      cvLabel: 'Télécharger mon CV',
      name: 'Nom',
      email: 'Courriel',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours…',
      sent: 'Merci, votre message est bien parti.',
      error: "L'envoi a échoué. Écrivez-moi directement à diaamar757@gmail.com.",
      privacy: 'Vos coordonnées servent uniquement à vous répondre. Le formulaire est transmis par le service Formspree.',
    },
    footer: 'Conçu et développé par Amar Dia',
  },
  en: {
    meta: {
      title: 'Amar Dia | Full stack developer in Montreal',
      description:
        'Full stack developer in Montreal. I design and ship complete web applications with React, TypeScript, Node.js, PostgreSQL and AI assistants.',
    },
    cvUrl: '/CV_Amar_Dia_EN.pdf',
    nav: { projects: 'Projects', skills: 'Skills', path: 'Background', contact: 'Contact', cv: 'Resume', switchLabel: 'FR', switchHref: '/', switchName: 'Lire en français' },
    hero: {
      kicker: 'Full stack developer · Montreal',
      title: 'Complete applications, from the database to the screen.',
      lead: "I'm Amar Dia. I analyze the need, model the data, build the application and put it online. My projects meet real needs: an association serving families and an online commerce business.",
      primary: 'See my projects',
      secondary: 'Contact me',
      status: 'Open to development jobs and contracts',
    },
    proof: [
      { value: '2', label: 'web platforms online' },
      { value: '39', label: 'data tables modeled' },
      { value: '2', label: 'AI assistants integrated' },
      { value: '6 yrs', label: 'coordinating operations at ALDO Group' },
    ],
    projects: {
      label: 'Projects',
      title: 'Work you can open and try.',
      visit: 'Visit the site',
      code: 'View the code',
      decisions: 'Technical decisions',
      featured: 'Featured project',
      acafis: {
        name: 'ACAFIS',
        tagline: 'The platform of an association serving Senegalese families in Canada.',
        summary:
          'I co-founded this association, then designed and built its bilingual platform: public site, member area, activity registration, board administration and an AI assistant for young people.',
        alt: 'The Kocc Barma assistant on acafis.ca, with its topics and welcome message',
        facts: [
          ['15', 'PostgreSQL tables'],
          ['18,600', 'lines of TypeScript'],
          ['143', 'commits'],
          ['FR · EN', 'bilingual site'],
        ],
        decisions: [
          ['Registration without overbooking', 'Locking the activity row inside a PostgreSQL transaction stops two people from taking the last seat. When a seat opens up, the waitlist moves forward in order.'],
          ['Passwordless sign-in', 'Members receive a one-time code by email. The code is stored hashed, and sensitive routes are rate limited.'],
          ['An assistant that truly helps', 'Kocc Barma, built on Gemini, helps with homework, coding and career choices in French, English and Wolof.'],
          ['A controlled budget', 'The site runs on the free plans of Vercel and Supabase. A daily scheduled job keeps the database from going to sleep.'],
        ],
        stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel Functions', 'Gemini', 'Resend'],
      },
      netbelset: {
        name: 'Netbelset',
        status: 'Launching soon',
        tagline: 'My online commerce business, between Montreal and Dakar.',
        summary:
          'A bilingual commerce platform for cosmetics, baby products and made-to-measure fashion. It handles the cart, prices in Canadian dollars or CFA francs and order tracking. Stripe payments are being finalized. The business also offers website creation.',
        alt: 'Home page of netbelset.ca',
        highlights: [
          'Made-to-measure configurator: style, fabric, guided measurements and a message to the artisan',
          'Mbaya assistant: French, English and Wolof, voice, photo and PDF analysis, order tracking',
          '24 data models with Prisma and request validation with Zod',
        ],
        stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'OpenAI', 'Zustand', 'Zod'],
      },
    },
    skills: {
      label: 'Skills',
      title: 'What I use, and where I learned it.',
      groups: [
        { name: 'Used on my live projects', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma', 'OpenAI API', 'Gemini API', 'Vercel', 'Git'] },
        { name: 'Learned in training', items: ['Express', 'PHP', 'Python', 'MySQL', 'SQLite', 'MongoDB', 'Kotlin', 'Android Studio', 'WordPress'] },
        { name: 'Method', items: ['Requirements analysis', 'Data modeling', 'Prototyping', 'Documentation', 'Lean Six Sigma'] },
      ],
    },
    path: {
      label: 'Background',
      title: 'A developer who knows the field.',
      intro: 'Before code, I coordinated teams and trained colleagues. I know what a tool has to do for the people who use it every day.',
      items: [
        { when: '2024 – 2026', what: 'AEC, Analyst-Programmer', where: 'CDI College, Montreal', detail: 'Analysis, modeling, web and mobile development, databases and documentation.' },
        { when: 'Since 2026', what: 'Founder and developer', where: 'Netbelset, Montreal', detail: 'Launching a Quebec-registered business: online store and digital services, including website creation.' },
        { when: 'Since May 2024', what: 'Driving instructor', where: 'Tecnic Driving School, Montreal', detail: 'Assessing each student, adapting the teaching and tracking progress.' },
        { when: '2018 – 2024', what: 'Receiving and shipping coordinator', where: 'ALDO Group, Montreal', detail: 'Coordinating operations, managing inventory in SAP, improving flows and training employees.' },
        { when: 'Founding member', what: 'Co-founder', where: 'ACAFIS, Montreal', detail: 'Creating a non-profit, coordinating activities, building the platform and managing the Coop-ACAFIS website.' },
      ],
      extras: [
        ['Certifications', 'MARPPP · Lean Six Sigma White Belt (2023)'],
        ['Languages', 'French: fluent · English: functional'],
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Have a job or a project in mind?',
      lead: 'Send me a few lines about what you need. I will reply personally.',
      cvLabel: 'Download my resume',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      sent: 'Thank you, your message has been sent.',
      error: 'Sending failed. Please write to me at diaamar757@gmail.com.',
      privacy: 'Your details are used only to reply to you. The form is delivered by the Formspree service.',
    },
    footer: 'Designed and built by Amar Dia',
  },
} as const;
