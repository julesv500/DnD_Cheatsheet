data_condition = [
    {
        title: "Aveuglé",
        icon: "one-eyed",
        subtitle: "Vous ne pouvez pas voir",
        description: "Vous ne pouvez pas voir",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous échouez automatiquement à tout test de capacité qui nécessite la vue.",
            "Vous avez un désavantage sur les jets d'attaque.",
            "Les jets d'attaque contre vous ont un avantage."
        ]
    },
    {
        title: "Charmé",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes charmé par une autre créature",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ne pouvez pas attaquer votre charmeur ou le cibler avec des capacités nocives ou des effets magiques.",
            "Votre charmeur a un avantage sur les tests de capacité pour interagir socialement avec vous."
        ]
    },
    {
        title: "Assourdi",
        icon: "elf-ear",
        subtitle: "Vous ne pouvez pas entendre",
        description: "Vous ne pouvez pas entendre",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous échouez automatiquement à tout test de capacité qui nécessite l'ouïe."
        ]
    },
    {
        title: "Épuisé",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "L'épuisement est mesuré en six niveaux",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Niveau</th><th></th><th></th><th style='text-align:left'>Effet</th></tr><tr><td>1</td><td></td><td></td><td>Désavantage sur les tests de capacité</td></tr><tr><td>2</td><td></td><td></td><td>Vitesse réduite de moitié</td></tr><tr><td>3</td><td></td><td></td><td>Désavantage sur les jets d'attaque et les jets de sauvegarde</td></tr><tr><td>4</td><td></td><td></td><td>Maximum de points de vie réduit de moitié</td></tr><tr><td>5</td><td></td><td></td><td>Vitesse réduite à 0</td></tr><tr><td>6</td><td></td><td></td><td>Mort</td></tr></table>",
            "Vous subissez l'effet de votre niveau actuel d'épuisement ainsi que tous les niveaux inférieurs.",
            "Terminer un long repos réduit votre niveau d'épuisement de 1, à condition que vous ayez également mangé et bu.",
            "De plus, être ramené à la vie réduit le niveau d'épuisement d'une créature de 1."
        ]
    },
    {
        title: "Effrayé",
        icon: "sharp-smile",
        subtitle: "Vous êtes effrayé",
        description: "Vous êtes effrayé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous avez un désavantage sur les tests de capacité et les jets d'attaque tant que la source de votre peur est dans votre champ de vision.",
            "Vous ne pouvez pas volontairement vous rapprocher de la source de votre peur."
        ]
    },
    {
        title: "Agrippé",
        icon: "grab",
        subtitle: "Vous êtes agrippé",
        description: "Vous êtes agrippé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Votre vitesse devient 0, et vous ne pouvez pas bénéficier d'un bonus à votre vitesse.",
            "La condition se termine si votre agrippeur est incapacité.",
            "La condition se termine également si vous êtes retiré de la portée de votre agrippeur."
        ]
    },
    {
        title: "Incapacité",
        icon: "internal-injury",
        subtitle: "Vous ne pouvez pas effectuer de (ré)actions",
        description: "Vous ne pouvez pas effectuer d'actions ou de réactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Vous êtes invisible",
        description: "Vous êtes invisible sans l'aide de magie ou d'un sens spécial",
        reference: "PHB, pg. 291.",
        bullets: [
            "Pour les fins de se cacher, vous êtes considéré comme étant dans une zone fortement obscurcie.",
            "Vous pouvez toujours être détecté par le bruit que vous faites ou les traces que vous laissez.",
            "Vous avez un avantage sur les jets d'attaque.",
            "Les jets d'attaque contre vous ont un désavantage."
        ]
    },
    {
        title: "Paralysé",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Vous ne pouvez rien faire",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes incapacité, et incapable de bouger ou de parler.",
            "Vous échouez automatiquement aux jets de sauvegarde de Force et de Dextérité.",
            "Les attaques contre vous ont un avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 5 pieds de vous."
        ]
    },
    {
        title: "Pétrifié",
        icon: "stone-pile",
        subtitle: "Vous êtes changés en pierre",
        description: "Vous êtes transformé, avec tout ce que vous portez et transportez, en une substance solide inerte (généralement de la pierre).",
        reference: "PHB, pg. 291.",
        bullets: [
            "Votre poids est multiplié par dix, et vous cessez de vieillir.",
            "Vous êtes incapacité, incapable de bouger ou de parler, et vous ne remarquez pas ce qui se passe autour de vous.",
            "Les attaques contre vous ont un avantage.",
            "Vous échouez automatiquement aux jets de sauvegarde de Force et de Dextérité.",
            "Vous avez une résistance aux dommages de tous types.",
            "Vous êtes immunisé contre les poisons et les maladies, bien que le poison ou la maladie déjà présent dans votre système reste uniquement en suspend et n'est pas neutralisée."
        ]
    },
    {
        title: "Empoisonné",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Vous êtes empoisonné",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous avez un désavantage sur les tests de capacité et les jets d'attaque."
        ]
    },
    {
        title: "À terre",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes à terre",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre seul mouvement possible est de ramper, à moins que vous ne vous releviez et mettiez fin à la condition.",
            "Vous avez un désavantage sur les jets d'attaque.",
            "Les jets d'attaque contre vous ont un avantage si l'attaquant est à moins de 5 pieds de vous. Sinon, l'attaque a un désavantage."
        ]
    },
    {
        title: "Restreint",
        icon: "imprisoned",
        subtitle: "Vous êtes restreint",
        description: "Vous êtes restreint.",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre vitesse devient 0, et vous ne pouvez pas bénéficier d'un bonus à votre vitesse.",
            "Les attaques contre vous ont un avantage, et vos attaques ont un désavantage.",
            "Vous avez un désavantage sur les jets de sauvegarde de Dextérité."
        ]
    },
    {
        title: "Étourdi",
        icon: "internal-injury",
        subtitle: "Vous êtes étourdi",
        description: "Vous êtes étourdi",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes incapacité, vous ne pouvez pas bouger, et vous ne pouvez parler que de manière confuse.",
            "Vous échouez automatiquement aux jets de sauvegarde de Force et de Dextérité.",
            "Les attaques contre vous ont un avantage."
        ]
    },
    {
        title: "Inconscient",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes inconscient",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes incapacités, incapable de bouger ou de parler, et vous ne remarquez rien de ce qui se passe autour de vous.",
            "Vous laissez tomber tout ce que vous tenez et tombez à terre.",
            "Vous échouez automatiquement aux jets de sauvegarde de Force et de Dextérité.",
            "Les attaques contre vous ont un avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 5 pieds de vous."
        ]
    },
    {
        title: "Mourant",
        icon: "dead-head",
        subtitle: "Vous êtes entrain de mourir",
        description: "vos PV ont été réduit à 0 et vous êtes mourant",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si vos PV ont été réduit à 0 par des dégats qui ne vous tuent pas, vous êtes inconscient et vous êtes mourant.",
            "Si vous recevez des soins vous regagnez connaissance immédiatement et vous n'êtes plus mourant.",
            "Quand vous êtes mourant, au début de chacun de vos tours vous faites un jet de sauvegarde contre la mort. Lancez un d20 et n'y ajouter aucun modificateurs.",
            "Un 10 ou plus est un succes, un 9 ou moins est un échec.",
            "À votre troisième réussite, vous devenez stable.",
            "À votre troisième échec, vous êtes mort.",
            "Obtenir un 1 compte comme deux échecs.",
            "Obtenir un 20 vous fait regagner 1 PV et vous fait regagner connaissance, vous n'êtes plus mourant",
            "Vous pouvez aussi être soigné par un allié prenant l'action <i>stabiliser</i> et réussissant le jet de sagesse (Medecine) DD 10.",
            "Une fois stable vous regagnez 1 point de vie au bout de 1d4 heure(s)."
        ]
    }
]
