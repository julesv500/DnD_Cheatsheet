data_environment_obscurance = [
    {
        title: "Légèrement obscurci",
        icon: "bleeding-eye",
        subtitle: "Désavantage en Perception",
        description: "Lumière tamisée, brouillard clairsemé, feuillage modéré",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures ont un <b>désavantage aux jets de Sagesse (Perception)</b> qui dépendent de la vue."
        ]
    },
    {
        title: "Fortement obscurci",
        icon: "lightning-tear",
        subtitle: "Effectivement aveugle",
        description: "Obscurité, brouillard opaque, feuillage dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature dans une zone fortement obscurcie souffre  de l'état <b>aveuglé</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumière vive",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "La lumière vive permet à la plupart des créatures de voir normalement",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les jours sombres fournissent encore une lumière vive, tout comme les torches, les lanternes, les feux et autres sources d'illumination dans un rayon spécifique."
        ]
    },
    {
        title: "Lumière faible",
        icon: "semi-closed-eye",
        subtitle: "Légèrement obscurci",
        description: "Lumière faible, également appelée ombres",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone <b>légèrement obscurcie</b>.",
            "Une zone de lumière faible est généralement une frontière entre une source de lumière vive, comme une torche, et les ténèbres environnantes.",
            "La douce lumière du crépuscule et de l'aube compte également comme lumière faible. Une pleine lune particulièrement brillante pourrait baigner la terre dans une lumière faible."
        ]
    },
    {
        title: "Ténèbres",
        icon: "worried-eyes",
        subtitle: "Fortement obscurci",
        description: "Les ténèbres créent une zone fortement obscurcie",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone <b>fortement obscurcie</b>.",
            "Les personnages font face aux ténèbres à l'extérieur la nuit (même la plupart des nuits de clair de lune), dans les confins d'un donjon non éclairé ou d'une voûte souterraine, ou dans une zone d'obscurité magique."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        icon: "one-eyed",
        subtitle: "Percevoir sans voir",
        description: "Percevoir votre environnement sans compter sur la vue, dans un certain rayon",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures sans yeux et les créatures avec écholocation ou sens aiguisés, tels que les chauves-souris et les vrais dragons, ont ce sens."
        ]
    },
    {
        title: "Vision dans le noir",
        icon: "semi-closed-eye",
        subtitle: "Vision limitée dans l'obscurité",
        description: "Une créature avec la vision dans le noir peut mieux voir dans l'obscurité ou dans des conditions de faible lumière, dans un certain rayon",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Dans une portée spécifiée, une créature avec la vision dans le noir peut <b>voir dans l'obscurité comme si l'obscurité était une lumière faible</b>, donc les zones d'obscurité sont seulement légèrement obscurcies en ce qui concerne cette créature.",
            "Cependant, la créature ne peut pas discerner les couleurs dans l'obscurité, seulement les nuances de gris.",
            "De nombreuses créatures dans les mondes de D&D, en particulier celles qui vivent sous terre, ont la vision dans le noir."
        ]
    },
    {
        title: "Vision véritable",
        icon: "eye-shield",
        subtitle: "Voir dans l'obscurité",
        description: "Une créature avec la vision véritable peut voir tout dans sa véritable forme, indépendamment de l'environnement",
        reference: "PHB, pg. 184.",
        bullets: [
            "Une créature avec la vision véritable peut, jusqu'à une portée spécifique, voir dans l'obscurité normale et magique, voir les créatures et objets invisibles, détecter automatiquement les illusions visuelles et réussir les jets de sauvegarde contre elles, et perçoit la forme originale d'un changeur de forme ou d'une créature transformée par magie.",
            "De plus, la créature peut voir dans le Plan Éthéré."
        ]
    }
]

data_environment_cover = [
    {
        title: "Demi-protection",
        icon: "broken-shield",
        subtitle: "Mur bas, meubles, créatures",
        description: "Une cible a une demi-protection si un obstacle bloque au moins la moitié de son corps",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle pourrait être un mur bas, un grand meuble, un tronc d'arbre étroit, ou une créature, que cette créature soit un ennemi ou un ami.",
            "Une cible avec une demi-protection a un <b>bonus de +2 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            " Si une cible se trouve derrière plusieurs sources de protection, seul le degré de protection le plus protecteur s'applique"
        ]
    },
    {
        title: "Trois-quarts de protection",
        icon: "cracked-shield",
        subtitle: "Herses, meurtrière",
        description: "Une cible a trois-quarts de protection si environ les trois-quarts de celle-ci sont couverts par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle pourrait être une herse, une meurtrière ou un tronc d'arbre épais.",
            "Une cible avec trois-quarts de protection a un <b>bonus de +5 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            " Si une cible se trouve derrière plusieurs sources de protection, seul le degré de protection le plus protecteur s'applique"
        ]
    },
    {
        title: "Protection totale",
        icon: "shield",
        subtitle: "Complètement dissimulé",
        description: "Une cible a une protection totale si elle est complètement dissimulée par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Une cible avec une protection totale <b>ne peut pas être visée directement</b> par une attaque ou un sort, bien que certains sorts puissent atteindre une telle cible en l'incluant dans une zone d'effet.",
            "Si une cible se trouve derrière plusieurs sources de protection, seul le degré de protection le plus protecteur s'applique"
        ]
    }
]