export const usePricingData = () => {
  const plans = [
    {
      id: 1,  
      name: "L'Echauffement",
      price: "60",
      priceSuffix: "€/mois",
      period: "Abonnement mensuel",
      minutes: 180,
      callsCount: 60,
      description: "Idéal pour tester et démarrer",
      features: [
        "Accueil téléphonique 24/7 par l'IA",
        "Carte et menus personnalisables",
        "Prise de réservations et commandes à emporter",
        "~60 appels de 3 min inclus",
        "Dashboard suivi des appels",
        "Récupération du CA des appels manqués",
      ],
      isNew: true,
      popular: false,
      isDevelopment: false,
    },
    {
      id: 2,
      name: "La Mise en Place",
      price: "180",
      priceSuffix: "€/mois",
      period: "Abonnement mensuel",
      minutes: 500,
      callsCount: 165,
      description: "Pour les établissements en croissance",
      features: [
        "Accueil téléphonique 24/7 par l'IA",
        "Carte et menus personnalisables",
        "~165 appels de 3 min inclus",
        "Prise de réservations et commandes à emporter",
        "CA générée par l'assistant vocal",
        "Gestion des imprévus (chaise haute, PMR)",
      ],
      isNew: false,
      popular: true,
      isDevelopment: false,
    },
    {
      id: 3,
      name: "Le Coup de Feu",
      price: "260",
      priceSuffix: "€/mois",
      period: "Abonnement mensuel",
      minutes: 800,
      callsCount: 265,
      description: "Pour les pics d'activité",
      features: [
        "Accueil téléphonique 24/7 par l'IA",
        "Carte et menus personnalisables",
        "~265 appels de 3 min inclus",
        "Prise de réservations et commandes à emporter",
        "CA générée par l'assistant vocal",
        "Gestion des imprévus (chaise haute, PMR)",
      ],
      isNew: false,
      popular: false,
      isDevelopment: false,
    },
    {
      id: 4,
      name: "Le Service Continu",
      price: "380",
      priceSuffix: "€/mois",
      period: "Abonnement mensuel",
      minutes: 1250,
      callsCount: 415,
      description: "Pour un volume soutenu",
      features: [
        "Accueil téléphonique 24/7 par l'IA",
        "Carte et menus personnalisables",
        "~415 appels de 3 min inclus",
        "Prise de réservations et commandes à emporter",
        "CA générée par l'assistant vocal",
        "Gestion des imprévus (chaise haute, PMR)",
      ],
      isNew: false,
      popular: false,
      isDevelopment: false,
    },
    {
      id: 5,
      name: "La Carte Blanche",
      price: "570",
      priceSuffix: "€/mois",
      period: "Abonnement mensuel",
      minutes: 2000,
      callsCount: 665,
      description: "Pour les plus gros volumes",
      features: [
        "Accueil téléphonique 24/7 par l'IA",
        "Carte et menus personnalisables",
        "~665 appels de 3 min inclus",
        "Prise de réservations et commandes à emporter",
        "CA générée par l'assistant vocal",
        "Gestion des imprévus (chaise haute, PMR)",
        "Support prioritaire",
      ],
      isNew: false,
      popular: false,
      isDevelopment: false,
    },
  ];

  const addons = [];

  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer:
        "Oui, vous pouvez changer de plan à tout moment. Les modifications seront appliquées au prochain cycle de facturation. Les minutes non utilisées ne sont pas reportées.",
    },
    {
      question: "Comment sont comptabilisées les minutes ?",
      answer:
        "Les minutes sont consommées par durée d'appel réelle. Une base de 3 minutes par appel est utilisée pour estimer le nombre d'appels inclus dans chaque formule.",
    },
    {
      question: "L'IA connaît-elle ma carte et mes plats ?",
      answer:
        "Oui. L'interface est conçue pour personnaliser votre carte : composition des sandwichs, plats, suppléments. L'IA a accès à ces informations pour répondre précisément aux clients.",
    },
    {
      question: "Proposez-vous un essai ou une formule pour tester ?",
      answer:
        "Oui. L'Echauffement à 60€/mois avec 180 minutes permet de tester la solution à moindre coût avant de passer à un volume plus important.",
    },
  ];

  return {
    plans,
    addons,
    faqs,
  };
};
