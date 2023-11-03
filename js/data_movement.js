data_movement = [
  {
      title: "Déplacement",
      icon: "run",
      subtitle: "Coût : 1,50 mètre par 1,50 mètre",
      description: "Coût de déplacement : 1,50 mètre par 1,50 mètre déplacé",
      reference: "PHB, pg. 190.",
      bullets: [
          "Si vous avez plus d'une vitesse, comme une vitesse de marche et une vitesse de vol, vous pouvez alterner entre vos vitesses pendant votre déplacement. À chaque fois que vous changez, soustrayez la distance déjà parcourue de la nouvelle vitesse.",
          "Vous pouvez vous déplacer à travers l'espace d'une créature non hostile.",
          "Vous pouvez vous déplacer à travers l'espace d'une créature hostile seulement si la créature est au moins deux tailles plus grande ou plus petite que vous.",
          "L'espace d'une autre créature est un terrain difficile pour vous.",
          "Que la créature soit un ami ou un ennemi, vous ne pouvez pas volontairement terminer votre déplacement dans son espace."
      ]
  },
  {
      title: "Escalade",
      icon: "crags",
      subtitle: "Coût : 3 mètres par 1,50 mètre",
      description: "Coût de déplacement : 3 mètres par 1,50 mètre escaladé",
      reference: "PHB, pg. 182.",
      bullets: [
          "Peut nécessiter un jet de Force (Athlétisme) si l'escalade est difficile"
      ]
  },
  {
      title: "Nage",
      icon: "at-sea",
      subtitle: "Coût : 3 mètres par 1,50 mètre",
      description: "Coût de déplacement : 3 mètres par 1,50 mètre nagé",
      reference: "PHB, pg. 182.",
      bullets: [
          "Peut nécessiter un jet de Force (Athlétisme) si la nage est difficile"
      ]
  },
  {
      title: "Se mettre à terre",
      icon: "falling",
      subtitle: "Coût : 0 mètre",
      description: "Coût de déplacement : 0 mètre (gratuit)",
      reference: "PHB, pgs. 190-191,292.",
      bullets: [
          "Vous pouvez vous mettre à terre sans utiliser aucune de votre vitesse",
          "Pour vous déplacer en étant à terre, vous devez ramper ou utiliser de la magie comme la téléportation",
          "Se mettre à terre ajoute la condition <i>À terre</i> (les attaques en mêlée contre vous ont un avantage, les attaques à distance contre vous ont un désavantage, vos propres attaques ont un désavantage)"
      ]
  },
  {
      title: "Ramper",
      icon: "crawl",
      subtitle: "Coût : 3 mètres par 1,50 mètre",
      description: "Coût de déplacement : 3 mètres par 1,50 mètre rampé",
      reference: "PHB, pg. 182.",
      bullets: [

      ]
  },
  {
      title: "Se relever",
      icon: "strong",
      subtitle: "Coût : la moitié de la vitesse de déplacement",
      description: "Coût de déplacement : la moitié de votre vitesse",
      reference: "PHB, pg. 190-191.",
      bullets: [
          "Vous ne pouvez pas vous relever si vous n'avez pas assez de mouvement restant ou si votre vitesse est de 0"
      ]
  },
  {
      title: "Saut en hauteur",
      icon: "wingfoot",
      subtitle: "Coût : 1,50 mètre par 1,50 mètre",
      description: "Coût de déplacement : 1,50 mètre par 1,50 mètre sauté",
      reference: "PHB, pg. 182.",
      bullets: [
          "Vous bondissez dans les airs d'un nombre de mètres égal à <b>1 + (votre modificateur de Force(min. 0)/3)</b> si vous vous déplacez d'au moins 3 mètres à pied immédiatement avant le saut.",
          "Lorsque vous faites un saut en hauteur sur place, vous pouvez sauter seulement la moitié de cette distance.",
          "Vous pouvez étendre vos bras à la moitié de votre taille au-dessus de vous pendant le saut.",
          "Dans certaines circonstances, votre MJ peut vous permettre de faire un jet de Force (Athlétisme) pour sauter plus haut que vous ne le pouvez normalement."
      ]
  },
  {
      title: "Saut en longueur",
      icon: "wingfoot",
      subtitle: "Coût : 1,50 mètre par 1,50 mètre",
      description: "Coût de déplacement : 1,50 mètre par 1,50 mètre sauté",
      reference: "PHB, pg. 182.",
      bullets: [
          "Vous couvrez un nombre de mètres jusqu'à <b>(valeur de Force/3)</b> si vous vous déplacez d'au moins 3 mètres à pied immédiatement avant le saut.",
          "Lorsque vous faites un saut en longueur sur place, vous pouvez sauter seulement la moitié de cette distance",
          "Peut nécessiter un jet de Force (Athlétisme) de DD 10 pour franchir un obstacle bas (pas plus haut qu'un quart de la distance du saut). Vous heurtez l'obstacle en cas d'échec au jet.",
          "Peut nécessiter un jet de Dextérité (Acrobaties) de DD 10 pour atterrir sur vos pieds en terrain difficile. Vous atterrissez à terre en cas d'échec au jet."
      ]
  },
  {
      title: "Improvisation",
      icon: "juggler",
      subtitle: "Toute cascade non listée ici",
      description: "Effectuez tout mouvement ou cascade que vous pouvez imaginer",
      bullets: [
          "Lorsque vous décrivez un type de mouvement non détaillé ailleurs dans les règles, le MJ décide si le mouvement est possible et quel type de jet est requis, le cas échéant, pour le réaliser. Cela inclut des cascades comme glisser, sauter sur un chariot, balancer sur une corde, sauter sur un chandelier, etc."
      ]
  },
  {
      title: "Terrain difficile",
      icon: "stone-pile",
      subtitle: "Coût : 3 mètres par 1,50 mètre",
      description: "Se déplacer en terrain difficile coûte 3 mètres supplémentaires par 1,50 mètre de déplacement",
      reference: "PHB, pg. 182.",
      bullets: [

      ]
  },
  {
      title: "Déplacement en luttant",
      icon: "grab",
      subtitle: "Modificateur : vitesse réduite de moitié",
      description: "Traînez ou portez la créature saisie avec vous",
      reference: "PHB, pg. 195.",
      bullets: [
          "Si vous vous déplacez tout en luttant avec une autre créature, votre vitesse est réduite de moitié, à moins que la créature ne soit plus petite que vous de 2 tailles ou plus.",
          "Voir l'action d'attaque pour savoir comment saisir une créature."
      ]
  }
]