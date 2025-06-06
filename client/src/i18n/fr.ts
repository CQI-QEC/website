import globals from "../stores/globalInfoNumbers"

const HostingUniversityName = "Université du Québec à Trois-Rivières, campus de Drummondville"

const homePage = {
    home: `Accueil`,
    days: `jours`,
    hours: `heures`,
    minutes: `minutes`,
    seconds: `secondes`,
    countdown: "Décompte avant le début de la compétition!",
    cqi: `Compétition Québécoise d'Ingénierie`,
    edition: `${globals.EDITION_NUMBER}e édition`,
    date: `${globals.FIRST_DAY_COMPETITION} au ${globals.LAST_DAY_COMPETITION} janvier ${globals.YEAR}`,
    location:`${HostingUniversityName}`,
    description:
        `La CQI est une compétition réunissant ${globals.QUANTITY_UNIVERSITIES} universités de la province et des centaines de membres de la communauté étudiante en génie qui excellent et se démarquent dans le domaine. La CQI vise à faire rayonner le savoir-faire et le savoir-être des futur(e)s ingénieur(e)s par le biais d'épreuves techniques multidisciplinaires.`,
}

const aboutPage = {
    about: `À propos`,
    description1:
        `La ${globals.EDITION_NUMBER}e édition de la CQI se tiendra du ${globals.FIRST_DAY_COMPETITION} au ${globals.LAST_DAY_COMPETITION} janvier ${globals.YEAR} à l'${HostingUniversityName}. Cette compétition d’ingénierie réunit ${globals.QUANTITY_DELEGATIONS} campus de ${globals.QUANTITY_UNIVERSITIES} universités différentes partout au Québec pour que des centaines d’étudiants en génie de la province s’affronte.`,
    description2:
        `La Compétition Québécoise d’Ingénierie (CQI) est chapeautée par la Confédération pour le Rayonnement Étudiant en Ingénierie du Québec (CRÉIQ) et permet aux étudiants en génie de démontrer leurs talents par le biais d’épreuves théoriques et pratiques.`,
    description3:
        `La compétition est mise sur pied par un comité organisateur regroupant des étudiant.e.s au 1er cycle ainsi qu’au 2e cycle qui ont à coeur l’implication étudiante.`,
    delegations: {
        title: `Les délégations`,
        description:
            `La Compétition Québécoise d’Ingénierie regroupe ${globals.QUANTITY_DELEGATIONS} délégations de ${globals.QUANTITY_UNIVERSITIES} Universités différentes. Chaque délégation est chapeautée par son association étudiante.`,
    },
    thematic: {
        title: `Thématique`,
        description:
            `Dans une approche littéraire, l’expression « sortons des sentiers battus » évoque le cadre naturel dans lequel s’ancre le campus, renforçant son lien avec l’environnement boisé qui l’entoure.`,
        description2:
            "Par ailleurs, cette phrase illustre une volonté d’innovation et de dépassement des conventions, soulignant une démarche audacieuse et créative.",
        description3: "Formulé de manière inclusive, ce thème encourage la solidarité entre les participants et reflète l’esprit de cohésion et d’entraide propre à la communauté étudiante drummondvilloise, véritable « famille tissée serrée »."
    },
}

const competitionsPage = {
    competitions: `Compétitions`,
    description:
        `La Compétition Québécoise d’Ingénierie regroupe 9 compétitions visant différentes compétences reliées au génie.`,
    senior: {
        title: `Conception senior`,
        description:
            `La conception senior consiste à fabriquer une solution robotique, qui devra répondre à la problématique imposée le jour de la compétition. Chaque équipe présentera l’ingéniosité de leur solution en complétant, devant un public et le jury, la tâche demandée.`,
    },
    junior: {
        title: `Conception junior`,
        description:
            `La conception junior similaire à la conception senior, consiste à fabriquer une solution mécanique, qui devra répondre à la problématique imposée le jour de la compétition. Cette épreuve est réservée aux participants ayant complété moins de 60 crédits accumulés dans leur baccalauréat.`,
    },
    debate: {
        title: `Débats oratoires`,
        description:
            `La compétition de débat oratoire permet de faire ressortir les talents en argumentation et en persuasion de la communauté étudiante en ingénierie. Grâce à leur éloquence et leur pensée critique, les participantes et participants doivent défendre une position dans un thème qui leur est imposée.`,
    },
    reengineering: {
        title: `Reingénierie`,
        description:
            `La compétition de réingénierie vise à tester les capacités des équipes à améliorer et à optimiser de produits existants placés dans de nouvelles contraintes. Les solutions sont présentées devant un jury permettant de faire valoir leurs compétences techniques, créativité et talents oratoires.`,
    },
    consulting: {
        title: `Génie-conseil`,
        description:
            `La consultation est une des disciplines les plus populaires du génie dans le monde. Chaque équipe doit proposer une solution complète ainsi que réaliste à un problème complexe et devra présenter cette solution devant un jury mettant à profit leur talent de communication.`,
    },
    scientific: {
        title: `Communication scientifique`,
        description:
            `La compétition de communication scientifique permet aux équipes de démontrer leur capacité de vulgarisation en expliquant de la façon la plus claire possible un concept complexe relevant de l’ingénierie devant un jury.`,
    },
    programming: {
        title: `Programmation`,
        description:
            `La compétition de programmation met à l’épreuve les équipes avec un défi regroupant plusieurs compétences du génie informatique et logiciel comme:  l’algorithmique, la résolution de problème, l’architecture logicielle, etc... La solution est évaluée sur son fonctionnement et son originalité.`,
    },
    design: {
        title: `Conception innovatrice`,
        description:
            `La compétition de conception innovatrice permet aux équipes de faire valoir leur esprit entrepreneurial en concevant un produit, service ou procédé innovant. Les différents produits sont présentés à tous grâce à des kiosques. La créativité et l’innovation de la solution sont évalués par les membres du jury.`,
    },
    superiorcycle: {
        title: `Projet de recherche au cycle supérieur`,
        description:
            `Cette compétition permet aux participants.es de présenter leur projet de recherche d’études aux cycles supérieurs. Elle se déroule sous trois volets : la rédaction d’un court article résumé, une présentation devant un public et une évaluation par les juges dans une rencontre à huis clos.`,
    },
}

const documents = {
    documents: `Documents`,
    description:
        `Vous trouverez ici les documents importants pour la compétition.`,
}

const loginPage = {
    requiredEmail: `Entrez votre courriel`,
    requiredPassword: `Entrez votre mot de passe`,
    badLogin: `Mauvais identifiants`,
    invalidEmail: `Courriel invalide`,
    email: `Courriel`,
    password: `Mot de passe`,
    signIn: `Se connecter`,
    forgotPassword: `Mot de passe oublié?`,
    resetEmailSent: `Courriel de réinitialisation envoyé`,
}

const additionalInfo = {
    medicalConditions: `Conditions médicales`,
    medicalConditionsLabel:
        `Veuillez spécifier toutes conditions médicales dont nous devrions être informés.`,
    allergies: `Allergies`,
    allergiesLabel: `Avez-vous des allergies/intolérances? Si oui, lesquelles?`,
    pronouns: `Pronoms`,
    pronounsLabel: `Quel(s) pronoms souhaitez-vous utiliser?`,
    dietaryRestrictions: `Avez-vous d'autres restrictions alimentaires?`,
    phoneNumber: `Numéro de téléphone`,
    phoneNumberLabel: `Votre téléphone`,
    tshirtSize: `Taille de T-shirt`,
    emergencyContact:
        `Veuillez fournir les informations de votre contact d'urgence`,
    emergencyContactNameLabel: `Nom complet du contact d'urgence`,
    emergencyContactPhoneLabel: `Numéro de téléphone du contact d'urgence`,
    emergencyContactRelationshipLabel: `Relation avec le contact d'urgence`,
    hasMonthlyOpusCard:
        `Avez-vous, au moment de la CQI, une passe OPUS mensuelle pour la région de Montréal?`,
    reducedMobilityLabel:
        `Avez-vous besoin d'aménagement pour mobilité réduite? Si oui, veuillez spécifier ci-dessous.`,
    studyProofLabel: `Preuve d'études avec nombre de crédits (pdf)`,
    photoLabel: `Photo 512x512: (png)`,
    cvLabel: `CV (pdf)`,
    success: `Informations ajoutées avec succès`,
    error: `Erreur lors de l'ajout des informations`,
    file: `Cliquer ou glissez-déposez un fichier`,
    yes: `Oui`,
    no: `Non`,
    required: `Cette information est requise`,
    food: `Je confirme avoir rempli le formulaire de nourriture ci-dessus.`,
}

const dashboard = {
    dashboard: `Tableau de bord`,
    goback: `Retour`,
}

const participantsList = {
    confirmDelete: `Êtes-vous sûr de vouloir supprimer cette personne?`,
    delete: `Supprimer`,
    cancel: `Annuler`,
    confirmDeleteTitle: `Confirmer la suppression`,
}

export const dict = {
    cqi: `CQI`,
    lang: `FR`,
    homePage: homePage,
    aboutPage: aboutPage,
    competitionsPage: competitionsPage,
    team: `Exécutif`,
    partners: `Partenaires`,
    documents: documents,
    login: `Connexion`,
    madeBy: `Créé par`,
    loginPage: loginPage,
    dashboard: dashboard,
    participantsList: participantsList,
    additionalInfo: additionalInfo,
}
