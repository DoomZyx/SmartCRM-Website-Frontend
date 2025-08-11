import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, BarChart3, Zap } from "lucide-react";
import useOptimizedAnimation from "../../../hooks/useOptimizedAnimation";
import "./HomeFeatures.scss";

const HomeFeatures = () => {
  const features = [
    {
      icon: <Users className="icon" />,
      title: "Gestion CRM Avancée",
      description:
        "Gérez vos clients, prospects et opportunités avec une interface intuitive et puissante.",
    },
    {
      icon: <MessageCircle className="icon" />,
      title: "Chatbot AI Intelligent",
      description:
        "Automatisez vos conversations client avec notre IA conversationnelle de pointe.",
    },
    {
      icon: <BarChart3 className="icon" />,
      title: "Analytics en Temps Réel",
      description:
        "Suivez vos performances et prenez des décisions éclairées avec nos tableaux de bord.",
    },
    {
      icon: <Zap className="icon" />,
      title: "Automatisation Complète",
      description:
        "Automatisez vos processus de vente et marketing pour maximiser votre productivité.",
    },
  ];

  const headerAnimation = useOptimizedAnimation(0);

  return (
    <section className="features-section">
      <div className="features-content">
        <motion.div {...headerAnimation} className="features-header">
          <h2 className="features-title">
            Une solution <span className="text-gradient">complète</span>
          </h2>
          <p className="features-description">
            Découvrez comment SmartCRM peut transformer votre entreprise avec
            des outils puissants et une IA conversationnelle de pointe.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const cardAnimation = useOptimizedAnimation(index + 1);
            return (
              <motion.div
                key={index}
                {...cardAnimation}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
