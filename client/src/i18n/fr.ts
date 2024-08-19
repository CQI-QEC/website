const homePage = {
    home: "Accueil",
    days: "jours",
    hours: "heures",
    minutes: "minutes",
    seconds: "secondes",
    cqi: "Compétition Québécoise d'Ingénierie"
};

const aboutPage = {
    about: "À propos",
    description: "La CQI est une compétition réunissant 11 universités de la province et des centaines de membres de la communauté étudiante en génie qui excellent et se démarquent dans le domaine. La CQI vise à faire rayonner le savoir-faire et le savoir-être des futur(e)s ingénieur(e)s par le biais d'épreuves techniques multidisciplinaires.",
    delegations: {
        title: "Les délégations",
        description: "La Compétition Québécoise d’Ingénierie regroupe 14 délégations de 11 Universités différentes. Chaque délégation est chapeautée par son association étudiante.",
    },
    thematic: {
        title: "Thématique",
        description: "Voyage dans le temps est une thématique intéressante puisqu’il laisse place à un monde de souvenirs ou bien un monde d’idées futuristes, que ce soit l’invention de la roue ou bien les voitures volantes, tout est possible lorsqu’on voyage dans les différentes époques. Pour chaque découverte, la profession d’ingénieur a pris une place centrale pour permettre la réalisation d’idées novatrices qui semblaient, à un certain moment dans l’histoire, irréalistes.",
    }
};

const competitionsPage = {
    competitions: "Compétitions",
    description: "La Compétition Québécoise d’Ingénierie regroupe 9 compétitions visant différentes compétences reliées au génie.",
    senior: {
        title: "Conception senior",
        description: "La conception senior constitue la pierre angulaire de la Compétition québécoise d’ingénierie. Les équipes de quatre personnes inscrites dans cette catégorie ont douze heures pour fabriquer un prototype qui saura répondre à la problématique qui leur est présentée le jour de la compétition. Au terme de ce marathon, les équipes démontrent la pertinence de leur solution en complétant, devant public, la tâche demandée à l’aide de leur prototype.",
    },
    junior: {
        title: "Conception junior",
        description: "La compétition de conception junior se veut être, en quelque sorte, la petite soeur de la compétition senior. Le principe de la compétition demeure le même que celui de la compétition senior. La principale différence est le niveau de difficulté de l’épreuve, qui est moins élevé que celui de son homologue. En général, les équipes de quatre participants et participantes disposent de huit heures pour confectionner leur prototype. Cette compétition est réservée aux participant(e)s ayant complété moins de 60 crédits dans leur baccalauréat.",
    },
    debate: {
        title: "Débats oratoires",
        description: "Un ingénieur ne peut se fier uniquement qu’à ses talents de gestionnaire et de conceptrice; elle se doit aussi de parfaire ses aptitudes de communication afin d’évoluer efficacement dans un monde où l’on fait de plus en plus souvent appel à la multidisciplinarité. La compétition de débat oratoire se base sur ce principe afin de placer les futurs ingénieurs et ingénieures au cœur d’affrontements oraux les forçant à faire preuve de persuasion, d’éloquence et de répartie. Ici, les participant(e)s s’affrontent deux à deux en développant des argumentaires sur le vif en fonction d’une position et d’un thème qui leur sont imposés.",
    },
    reengineering: {
        title: "Reingénierie",
        description: "La technologie de l’humanité se raffine constamment au fil du temps et ce, à un point tel qu’il faut parfois prendre un peu de recul afin de mieux saisir la prochaine étape de la chaîne évolutive d’un produit. De plus en plus, les ingénieur(e)s sont appelés à améliorer et optimiser des produits qui nous entourent et qui nous semblent banals. La compétition de réingénierie vise à tester la capacité des participant(e)s, jumelés en équipes de deux, à améliorer des produits existants afin qu’ils puissent répondre à de nouvelles contraintes. Les équipes présentent leur solution devant jury, leur permettant non seulement de démontrer leur imagination et leur savoir-faire technique, mais aussi leurs talents oratoires.",
    },
    consulting: {
        title: "Génie-conseil",
        description: "La consultation étant l’une des plus populaires disciplines du génie, la Compétition québécoise d’ingénierie se fait un devoir de présenter, à chaque année, la compétition de génie conseil. Lors de cette compétition, les participant(e)s, jumelés en équipes de quatre, disposent d’environ six heures pour proposer une solution complète à un problème complexe. Leur solution doit ensuite être présentée devant jury, mettant ainsi à profit leur talents d’oration et de persuasion.",
    },
    scientific: {
        title: "Communication scientifique",
        description: "Souvent complexe, l’exercice des fonctions d’une personne en ingénierie la force à faire appel à des concepts abstraits et intangibles. Il est donc crucial pour elle de savoir vulgariser son art de façon claire, nette et précise afin de pouvoir communiquer son savoir. La compétition de communication scientifique permet aux participant(e)s, seuls ou en équipe de deux, de démontrer leur maîtrise de cet art en expliquant, devant un jury, un concept complexe traitant d’ingénierie.",
    },
    programming: {
        title: "Programmation",
        description: "La compétition de programmation met à l'épreuve différentes compétences importantes du génie informatique et logiciel telles l'architecture logicielle, l'algorithmie et la capacité de résolution de problèmes complexes. L'objectif de cette compétition est de concevoir un programme fonctionnel répondant à un cas réel puis de le présenter à un jury.",
    },
    design: {
        title: "Conception innovatrice",
        description: "La compétition de design innovateur permet aux équipes d'au plus six membres de démontrer leur créativité et leur esprit entrepreneurial en concevant un produit, un service ou un procédé commercialisable et vendable qui n'est pas actuellement disponible. Ces produits sont présentés à tous grâce à des kiosques montés par les participant(e)s. Les différents concepts sont évalués par les membres du jury.",
    },
    superiorcycle: {
        title: "Projet de recherche au cycle supérieur",
        description: "Dans cette compétition, les participant(e)s présentent leur projet de recherche d’études graduées du niveau de la maitrise ou du doctorat. Cette compétition se déroule sous la forme d’une conférence scientifique et comporte trois parties : la rédaction d’un court article résumé, une présentation devant public ainsi qu’une évaluation par les pairs (juges) dans une rencontre à huis clos.",
    }
};

export const dict = {
    cqi: "CQI",
    lang: "FR",
    homePage: homePage,
    aboutPage: aboutPage,
    competitionsPage: competitionsPage,
    team: "Exécutif",
    partners: "Partenaires",
    documents: "Documents",
    login: "Connexion",
    madeBy: "Créé par",
};