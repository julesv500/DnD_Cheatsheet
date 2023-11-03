data_action = [
    {
        title: "Attaquer",
        icon: "crossed-swords",
        subtitle: "Attaque au corps à corps ou à distance",
        description: "Effectuer une attaque au corps à corps ou à distance avec votre arme",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certaines caractéristiques, comme la caractéristique <i>Attaque supplémentaire</i> du guerrier, vous permettent de faire plus d'une attaque avec cette action. Chacune de ces attaques est un jet séparé et peut cibler différentes créatures. Vous pouvez vous déplacer entre ces attaques.",
            "Lorsque vous attaquez avec une arme légère au corps à corps, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus <i>Attaque avec la main libre</i>).",
            "Vous pouvez remplacer une de vos attaques au corps à corps par une <i>Lutte</i> ou une <i>Poussée</i>.",
            "Certaines conditions confèrent un avantage à l'attaque : attaques contre des cibles aveuglées, paralysées, pétrifiées, entravées, étourdies ou inconscientes ; attaques au corps à corps contre des cibles à terre ; attaques par des attaquants invisibles ou cachés.",
            "Certaines conditions confèrent un désavantage à l'attaque : attaques contre des cibles invisibles ou cachées ; attaques à distance contre des cibles à terre ; attaques par des attaquants aveuglés, effrayés, empoisonnés ou entravés."
        ]
    },
    {
        title: "Lutte",
        icon: "grab",
        subtitle: "Attaque au corps à corps spéciale",
        description: "Tenter de saisir une créature ou de lutter avec elle",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser l'action <i>Attaquer</i> pour effectuer une attaque au corps à corps spéciale, une lutte. Si vous êtes capable de faire plusieurs attaques avec l'action Attaquer, cette attaque en remplace une.",
            "La cible de votre lutte ne doit pas être plus d'une taille supérieure à la vôtre, et elle doit être à votre portée.",
            "En utilisant au moins une main libre, vous tentez de saisir la cible en faisant un jet de lutte, un jet de Force (Athlétisme) contesté par le jet de Force (Athlétisme) ou de Dextérité (Acrobaties) de la cible (la cible choisit l'aptitude à utiliser).",
            "Si vous réussissez, vous soumettez la cible à la condition de lutte (sa vitesse est réduite à 0)."
        ]
    },
    {
        title: "Poussée",
        icon: "hand",
        subtitle: "Attaque au corps à corps spéciale",
        description: "Pousser une créature, soit pour la faire tomber à terre, soit pour l'éloigner de vous",
        reference: "PHB, pg. 195.",
        bullets: [
            "En utilisant l'action <i>Attaquer</i>, vous pouvez effectuer une attaque au corps à corps spéciale pour pousser une créature. Si vous êtes capable de faire plusieurs attaques avec l'action Attaquer, cette attaque en remplace une.",
            "La cible de votre poussée ne doit pas être plus d'une taille supérieure à la vôtre, et elle doit être à votre portée.",
            "Vous effectuez un jet de Force (Athlétisme) contesté par le jet de Force (Athlétisme) ou de Dextérité (Acrobaties) de la cible (la cible choisit l'aptitude à utiliser).",
            "Si vous remportez le concours, vous faites soit tomber la cible à terre, soit la poussez à 5 pieds de vous."
        ]
    },
    {
        title: "Lancer un sort",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation de 1 action",
        description: "Lancer un sort ayant un temps d'incantation d'1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l'action est utilisée pour lancer un sortilège mineur.",
            "La cible d'un sort doit être à la portée du sort. Pour cibler quelque chose, vous devez avoir un chemin dégagé vers celle-ci, donc elle ne peut pas être derrière un abri total.",
            "Les sorts avec des composants matériels ne consomment pas le matériau à moins que cela soit explicitement indiqué. À moins que le coût d'un matériau soit donné, vous pouvez supposer que le coût est négligeable et que le matériau est simplement disponible dans une bourse à composants.",
            "Certains sorts exigent que vous mainteniez la concentration pour garder leur magie active. Si vous perdez la concentration, un tel sort prend fin. Vous perdez la concentration sur un sort si vous lancez un autre sort qui nécessite de la concentration ou lorsque vous êtes incapable d'agir. Chaque fois que vous subissez des dégâts, vous devez réussir un jet de sauvegarde de Constitution pour maintenir votre concentration. La DD est égale à 10 ou la moitié des dégâts que vous subissez, selon le nombre le plus élevé."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double vitesse de déplacement",
        description: "Obtenez du mouvement supplémentaire pour le tour en cours",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'augmentation équivaut à votre vitesse, après application de tout modificateur."
        ]
    },
    {
        title: "Se désengager",
        icon: "journey",
        subtitle: "Éviter les attaques d'opportunité",
        description: "Votre déplacement ne provoque pas d'attaques d'opportunité pour le reste du tour.",
        reference: "PHB, pg. 192.",
        bullets: []
    },
    {
        title: "Esquiver",
        icon: "aura",
        subtitle: "Augmente la défense",
        description: "Se concentrer uniquement sur le fait d'éviter les attaques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Jusqu'au début de votre prochain tour, chaque jet d'attaque contre vous a un désaventage si vous voyez l'attaquant, and vous faites vos jets de sauvegardes de dextérité avec avantage.",
            "Vous perdez ces effets si vous êtes <i>incapacité</i> ou si votre vitesse tombe à 0."
        ]
    },
    {
        title: "Se libérer",
        icon: "manacles",
        subtitle: "Se libérer d'une lutte",
        description: "Se libérer d'une lutte",
        reference: "PHB, pg. 195.",
        bullets: [
            "Pour vous libérer d'une lutte vous devez réussir un jet contesté de force (athlétisme) ou de dextérité (acrobatie) contre le jet de force du lutteur (Athlétisme).",
            "Se libérer d'autre Etats qui vous restreignent (comme des menottes) peut nécéssiter un test de Force ou d'agilité, comme spécifié par l'état."
        ]
    },    {
        title: "Aider",
        icon: "telepathy",
        subtitle: "Offrir un avantage à un allié",
        description: "Offrir un avantage à un allié sur un test de caractéristique, ou un jet d'attaque.",
        reference: "PHB, pg. 192.",
        bullets: [
            "La créature que vous aidez gagne un avantage au prochain jet de compétence qu'elle fait pour effectuer la tâche que vous aidez, à condition qu'elle fasse le jet avant le début de votre prochain tour.",
            "Ou bien votre alié obtient un avantage sur le prochain jet d'attaque contre une créature à 1.5m de vous."
        ]
    },    {
        title: "Utiliser un objet",
        icon: "snatch",
        subtitle: "Interagir, utiliser des capacités spéciales",
        description: "Interagir avec un second objet ou utiliser une capacité spéciale de l'objet.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous pouvez intéragir gratuitement avec un objet par tour, si vous voulez intéragir avec un second utilisez cette action.",
            "Si un objet précise qu'il a besoin d'une action pour être utilisé, vous prenez cette action."
        ]
    },
    {
        title: "Utiliser un bouclier",
        icon: "round-shield",
        subtitle: "Équipez ou deséquipez un bouclier",
        description: "Équipez ou deséquipez un bouclier",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un bouclier prend toujours une action à être équipé/deséquipé."
        ]
    },
    {
        title: "Se cacher",
        icon: "hood",
        subtitle: "Tenter de vous cacher",
        description: "Tenter de vous cacher de façon à ce que les autres ne puissent pas vous voir.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas vous cacher de quelqu'un qui peut vous voir clairement. Vous devez avoir une protection totale, être dans une zone fortement obscurcie, être incisible, ou bloquer le champ de vision de votre ennemi.",
            "Vous êtes révélé si vous faites du bruit, comme crier un avertissement ou renverser un vase.",
            "Quand vous tentez de vous cacher, faite un jet de dextérité (discrétion) et notez le résultat. Jusqu'à ce que vous soyez découvert ou que vous arrêtez de vous cacher ce jet sera sontesté par un jet de sagesse (percéption) de toute créature qui cherche activement pour des traces de votre présence.",
            "Un adversaire réussit automatiquement à vous trouver si il a une perception passive plus haute que votre jet de discrétion.",
            "En dehors des combats, vous pouvez aussi faire un jet de dexterité (discrétion) pour des actes tel que vous cacher d'ennemis, passer outre des gardes, vous enfuir sans vous faire voir, ou vous approcher de quelqu'un sans être vu ou entendu."
        ]
    },    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "chercher quelque chose",
        description: "Consacrer votre attention à trouver quelque chose.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Selon la nature de votre recherche, le MJ peut vous demander de faire un jet de Sagesse (Perception) ou un jet d'Intelligence (Investigation)."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Choisir un déclencheur et une action",
        description: "Préparer une action spécifique en réponse à un déclencheur défini.",
        reference: "PHB, pg. 193.",
        bullets: [
            "Pour vous tenir prêt, vous devez définir un déclencheur perceptible pour votre réaction.",
            "Ensuite vous choisissez l'action qui arrivera en réponse à votre déclencheur",
            "Quand le déclencheur se produit, vous pouvez soit prendre votre réaction juste avant l'événement déclencheur, soit l'ignorer.",
            "Si vous préparez un sort, vous le lancez normalement mais retenez son énergie, que vous libérez avec votre réaction lorsque le déclencheur se produit. Pour être prêt, un sort doit avoir un temps d'incantation d'1 action.",
            "Se préparer à lancer un sort demande de la concentration."
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        icon: "embrassed-energy",
        subtitle: "utiliser une aptitude pour une action",
        description: "Utiliser une aptitude raciale ou de classe qui coute une action",
        reference: "Voir la page de classe pour plus d'informations.",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        icon: "first-aid",
        subtitle: "administrez les premiers soins",
        description: "Faites arrêtez à une créature mourante de lancer des jets de sauvegardes contre la mort",
        reference: "PHB, pg. 197.",
        bullets: [
            "Faites un jet de Sagesse (médecine) DD 10.",
            "Sur une réussite, la créature est stabilisée et n'a plus besoin de faire de jet de sauvegarde contre la mort.",
            "Une créature stable récupére 1 PV après 1d4 heure(s)."
        ]
    },
    {
        title: "Improviser",
        icon: "juggler",
        subtitle: "toute action n'étant pas dans la liste",
        description: "Faites toute action que vous pouvez imaginer",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quand vous décrivez une action qui n'est détaillée nulle part dans les règles, le MD vous dit si l'action est possible, si il y a besoin de faire un test de caractéristiques, et le cat échant quel type de charactéristique."
        ]
    }


]
