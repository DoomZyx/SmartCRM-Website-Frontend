import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, BarChart3, Zap } from "lucide-react";
import { useOptimizedAnimation } from "../../../hooks/useOptimizedAnimation";
import "./HomeFeatures.scss";

const HomeFeatures = () => {
  const features = [
    {
      icon: <MessageCircle className="icon" />,
      title: "Plus d'appels manqués",
      description:
        "Accueil téléphonique 24/7. L'IA répond à chaque appel et ne laisse plus passer une commande ou une réservation.",
    },
    {
      icon: <Users className="icon" />,
      title: "Carte et menus personnalisables",
      description:
        "Interface pensée pour la restauration : composition des sandwichs, plats, suppléments. L'IA a accès à votre carte pour répondre avec précision.",
    },
    {
      icon: <Zap className="icon" />,
      title: "Réservations, commandes et imprévus",
      description:
        "Prise de réservations et commandes via l'interface. Gestion des imprévus : chaise haute, accueil PMR.",
    },
  ];

  const headerAnimation = useOptimizedAnimation(0);

  return (
    <section className="features-section">
      <div className="features-content">
        <motion.div {...headerAnimation} className="features-header">
          <h2 className="features-title">
            Une solution <span className="text-gradient">pensée pour la restauration</span>
          </h2>
          <p className="features-description">
            Comprendre les besoins et contraintes des restaurateurs, ce que les
            outils génériques (ElevenLabs, Ringover, Vapi) ne font pas. Une IA
            entraînée sur le cas d'usage des restaurants.
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
