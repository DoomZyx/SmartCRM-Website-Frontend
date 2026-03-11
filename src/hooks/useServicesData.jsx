import React from "react";
import {
  Phone,
  MessageCircle,
  BarChart3,
  UtensilsCrossed,
  Shield,
  Smartphone,
  ClipboardList,
  Bot,
  Clock,
  TrendingUp,
  Heart,
} from "lucide-react";

export const useServicesData = () => {
  const crmFeatures = [
    {
      icon: <UtensilsCrossed className="icon" />,
      title: "Carte et menus à votre image",
      description:
        "Personnalisez votre carte : composition des sandwichs, plats, suppléments. L'IA a accès à tout pour répondre précisément aux clients.",
    },
    {
      icon: <ClipboardList className="icon" />,
      title: "Réservations et commandes",
      description:
        "Prise de réservations et commandes via l'interface web. Tout centralisé.",
    },
    {
      icon: <BarChart3 className="icon" />,
      title: "CA générée par l'assistant",
      description:
        "Suivez les réservations et les commandes prises automatiquement par l'assistant vocal intelligent.",
    },
  ];

  const aiFeatures = [
    {
      icon: <Phone className="icon" />,
      title: "Accueil téléphonique 24/7",
      description:
        "Plus d'appels manqués. L'IA répond à chaque appel, même en coup de feu.",
    },
    {
      icon: <Bot className="icon" />,
      title: "IA entraînée restauration",
      description:
        "Pas un outil générique : l'IA comprend les besoins et contraintes des restaurateurs (horaires, capacité, imprévus).",
    },
    {
      icon: <Heart className="icon" />,
      title: "Gestion des imprévus",
      description:
        "Chaise haute, accueil des personnes en mobilité réduite. L'IA gère les demandes du quotidien.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Disponibilité et fiabilité",
      description:
        "Solution dédiée avec disponibilité 24/7. Réduisez le stress et ne perdez plus de CA sur les appels.",
    },
  ];

  const integrations = [
    {
      icon: <Smartphone className="icon" />,
      title: "Application web",
      description:
        "Interface et architecture conçues pour personnaliser la carte et piloter l'assistant vocal.",
    },
    {
      icon: <Clock className="icon" />,
      title: "Abonnement mensuel",
      description:
        "Minutes d'appel incluses par mois. Formule d'essai à petit budget pour tester sans s'engager.",
    },
    {
      icon: <TrendingUp className="icon" />,
      title: "Différenciation concurrents",
      description:
        "Contrairement à ElevenLabs, Ringover ou Vapi, une solution spécialisée restauration, pas générique.",
    },
  ];

  return {
    crmFeatures,
    aiFeatures,
    integrations,
  };
};
