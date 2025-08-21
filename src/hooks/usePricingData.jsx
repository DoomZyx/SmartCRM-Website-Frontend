export const usePricingData = () => {
  const plans = [
    {
      name: "Starter",
      price: "49€/mois",
      period: "Maintenance incluse",
      description: "Parfait pour les petites entreprises",
      API: "+ 0.26€/min HT",
      features: [
        "1 ligne téléphonique IA",
        "Multi-langues",
        "Conversations spontanées et fluide",
        "Dashboard de suivi des appels",
        "Assistance 24/7",
        "Prise de rendez-vous et confirmation",
      ],
      isNew: false,
      popular: false,
      isDevelopment: false,
    },
    {
      name: "Semi-Pro",
      price: "129/mois",
      period: "Maintenance incluse",
      API: "+ 0.22€/min HT",
      description: "Idéal pour les équipes en croissance",
      features: [
        "1 ligne téléphonique IA",
        "Multi-langues",
        "Conversations téléphoniques et fluide",
        "Dashboard de suivi des appels",
        "Prise de rendez-vous et confirmation",
        "Assistance 24/7",
        "5 appels simultanées",
        "Export des données",
      ],
      popular: true,
      isNew: false,
      isDevelopment: false,
    },
    {
      name: "Pro",
      price: "349€/mois",
      period: "Maintenance incluse",
      API: "+ 0.20€/min HT",
      description: "Pour les grandes entreprises",
      features: [
        "1 ligne téléphonique IA",
        "Multi-langues",
        "Conversations téléphoniques et fluide",
        "Dashboard de suivi des appels + Analytics",
        "Intégration Google Calendar",
        "Assistance 24/7",
        "10 appels simultanées",
        "Export des données",
      ],
      popular: false,
      isNew: false,
      isDevelopment: true, // Ajout du booléen pour Enterprise
    },
  ];

  const addons = [
    {
      name: "Chatbot IA Premium",
      price: "49",
      period: "mois",
      description: "Chatbot IA avancé avec personnalisation complète",
      features: [
        "Personnalisation avancée",
        "Multi-langues",
        "Intégrations CRM",
        "Analytics conversationnels",
      ],
    },
    {
      name: "Support Premium",
      price: "99",
      period: "mois",
      description: "Support prioritaire avec gestionnaire de compte dédié",
      features: [
        "Gestionnaire de compte",
        "Support téléphonique",
        "Temps de réponse garanti",
        "Formation équipe",
      ],
    },
    {
      name: "API Enterprise",
      price: "149",
      period: "mois",
      description: "Accès complet à notre API avec documentation détaillée",
      features: [
        "API complète",
        "Documentation détaillée",
        "Support technique",
        "Intégrations personnalisées",
      ],
    },
    {
      name: "Analytics Pro",
      price: "79",
      period: "mois",
      description: "Tableaux de bord avancés et reporting détaillé",
      features: [
        "Dashboards personnalisés",
        "Rapports automatisés",
        "Prédictions IA",
        "Export données",
      ],
    },
  ];

  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer:
        "Oui, vous pouvez changer de plan à tout moment. Les modifications seront appliquées au prochain cycle de facturation.",
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer:
        "Non, nos tarifs sont transparents. Le prix affiché est le prix que vous payez, sans frais cachés.",
    },
    {
      question: "Proposez-vous une formation pour mon équipe ?",
      answer:
        "Oui, la formation de votre équipe est incluse dans nos tarifs, ainsi que le support technique pour vous accompagner dans la prise en main de la solution.",
    },
    {
      question: "Proposez-vous des tarifs personnalisés ?",
      answer:
        "Oui, pour les grandes entreprises, nous proposons des tarifs personnalisés. Contactez-nous pour en discuter.",
    },
  ];

  return {
    plans,
    addons,
    faqs,
  };
};
