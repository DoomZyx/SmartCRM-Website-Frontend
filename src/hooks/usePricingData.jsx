export const usePricingData = () => {
  const plans = [
    {
      name: "Starter",
      price: "21 600",
      period: "+ 3 600€/an",
      description: "Parfait pour les petites entreprises",
      API: "+ Frais API selon volume d'appels",
      features: [
        "1 ligne téléphonique IA",
        "Dashboard analytics de base",
        "Gestion des appels reçus",
        "Formation équipe (1 session)",
        "Support email standard",
      ],
      isNew: false,
      popular: true,
      isDevelopment: false,
    },
    {
      name: "Business",
      price: "42 000",
      period: "+ 6 000€/an",
      API: "+ Frais API selon volume d'appels",
      description: "Idéal pour les équipes en croissance",
      features: [
        "Multi-lignes téléphoniques",
        "Intégration Calendly",
        "CRM complet intégré",
        "Analytics avancés + exports",
        "Intégrations sur-mesure (2 max)",
        "Application desktop + web",
      ],
      popular: false,
      isNew: false,
      isDevelopment: true, // Ajout du booléen pour Business
    },
    {
      name: "Enterprise",
      price: "66 000",
      period: "+ 9 600€/an",
      API: "+ Frais API selon volume d'appels",
      description: "Pour les grandes entreprises",
      features: [
        "Solution 100% personnalisée",
        "Intégrations ERP/CRM existants (illimitées)",
        "Audits sécurité trimestriels",
        "SLA 99,9% garanti",
        "Account manager dédié",
        "API développeur + webhooks custom",
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
