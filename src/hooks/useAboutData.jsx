export const useAboutData = () => {
  const storyData = {
    title: "Notre ",
    gradientText: "Histoire",
    paragraphs: [
      "SmartCRM est né d'une vision simple : démocratiser l'intelligence artificielle pour toutes les entreprises, quelle que soit leur taille. En 2025, le fondateur a constaté que les solutions CRM traditionnelles étaient trop complexes et coûteuses pour la plupart des PME.",
      "Il a donc décidé de créer une plateforme qui combine la puissance d'un CRM moderne avec l'intelligence artificielle, le tout dans une interface intuitive et accessible. L'objectif ? Permettre à chaque entreprise de bénéficier des mêmes outils que les grandes corporations.",
    ],
    stats: [
      { number: "10,000+", label: "Clients satisfaits" },
      { number: "50+", label: "Pays desservis" },
      { number: "99.9%", label: "Disponibilité" },
      { number: "24/7", label: "Support client" },
    ],
  };

  const teamMembers = [
    {
      name: "Axel Cella",
      role: "Fondateur",
      description:
        "Entrepreneur passionné de tech issu d'une famille d'experts dans le commerce, Axel combine une vision business héritée de 2 générations avec des solutions technologiques modernes. Son expertise du terrain lui permet de créer des CRM et IA Voice parfaitement adaptés aux besoins réels des professionnels",
    },
  ];

  const missionData = {
    title: "Notre ",
    gradientText: "Mission",
    description:
      "Nous croyons que chaque entreprise mérite d'avoir accès aux meilleures technologies pour développer sa relation client. Notre mission est de rendre l'IA accessible, simple et efficace pour tous.",
    buttonText: "Rejoindre l'aventure",
  };

  return {
    storyData,
    teamMembers,
    missionData,
  };
};



   {/* {
      name: "Marie Laurent",
      role: "CTO",
      description:
        "Architecte logiciel de talent, Marie supervise le développement technique et assure la scalabilité de notre plateforme.",
    },
    {
      name: "Thomas Moreau",
      role: "Directeur Commercial",
      description:
        "Spécialiste du développement commercial, Thomas accompagne nos clients dans leur transformation digitale.",
    },
    {
      name: "Sophie Martin",
      role: "Directrice Marketing",
      description:
        "Experte en marketing digital, Sophie développe notre stratégie de croissance et notre présence en ligne.",
    },
    */}