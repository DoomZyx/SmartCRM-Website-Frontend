export const usePricingData = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "mois",
      description: "Parfait pour les petites entreprises qui débutent",
      features: [
        "Jusqu'à 1,000 contacts",
        "CRM de base",
        "Chatbot IA (100 conversations/mois)",
        "Support email",
        "Intégrations de base",
        "1 utilisateur",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "79",
      period: "mois",
      description: "Idéal pour les équipes en croissance",
      features: [
        "Jusqu'à 10,000 contacts",
        "CRM complet",
        "Chatbot IA (1,000 conversations/mois)",
        "Support prioritaire",
        "Toutes les intégrations",
        "Jusqu'à 5 utilisateurs",
        "Analytics avancés",
        "Automatisations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      period: "mois",
      description: "Pour les grandes entreprises",
      features: [
        "Contacts illimités",
        "CRM personnalisé",
        "Chatbot IA illimité",
        "Support dédié 24/7",
        "API personnalisée",
        "Utilisateurs illimités",
        "Analytics premium",
        "Formation sur mesure",
        "SLA garanti",
      ],
      popular: false,
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
      question: "L'essai gratuit est-il vraiment gratuit ?",
      answer:
        "Absolument ! Vous pouvez tester toutes les fonctionnalités pendant 14 jours sans engagement.",
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
