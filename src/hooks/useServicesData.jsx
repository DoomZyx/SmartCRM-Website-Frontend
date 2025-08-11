import React from "react";
import {
  Users,
  MessageCircle,
  BarChart3,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Database,
  Bot,
  Target,
  TrendingUp,
  Settings,
} from "lucide-react";

export const useServicesData = () => {
  const crmFeatures = [
    {
      icon: <Users className="icon" />,
      title: "Gestion des Contacts",
      description:
        "Centralisez tous vos contacts clients et prospects dans une base de données unifiée.",
    },
    {
      icon: <Target className="icon" />,
      title: "Suivi des Opportunités",
      description:
        "Suivez chaque opportunité de vente avec des pipelines personnalisables.",
    },
    {
      icon: <TrendingUp className="icon" />,
      title: "Analytics Avancés",
      description:
        "Analysez vos performances avec des tableaux de bord en temps réel.",
    },
    {
      icon: <Settings className="icon" />,
      title: "Automatisation des Tâches",
      description:
        "Automatisez vos processus de vente et marketing pour gagner du temps.",
    },
  ];

  const aiFeatures = [
    {
      icon: <Bot className="icon" />,
      title: "Chatbot IA Multilingue",
      description:
        "Chatbot intelligent capable de converser dans plusieurs langues.",
    },
    {
      icon: <MessageCircle className="icon" />,
      title: "Support 24/7",
      description:
        "Répondez à vos clients à toute heure avec notre IA conversationnelle.",
    },
    {
      icon: <Database className="icon" />,
      title: "Apprentissage Continu",
      description:
        "Le chatbot s'améliore constamment grâce au machine learning.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Sécurité Avancée",
      description: "Protection des données et conformité RGPD garanties.",
    },
  ];

  const integrations = [
    {
      icon: <Globe className="icon" />,
      title: "Intégrations Web",
      description: "Intégration facile sur votre site web et réseaux sociaux.",
    },
    {
      icon: <Smartphone className="icon" />,
      title: "Application Mobile",
      description:
        "Accédez à votre CRM depuis n'importe où avec notre app mobile.",
    },
    {
      icon: <Zap className="icon" />,
      title: "API Ouverte",
      description: "Connectez SmartCRM à vos outils existants via notre API.",
    },
  ];

  return {
    crmFeatures,
    aiFeatures,
    integrations,
  };
};
