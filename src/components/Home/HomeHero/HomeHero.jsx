import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import "./HomeHero.scss";

const HomeHero = () => {
  const { openDemoModal } = useDemoModal();

  const stats = [
    { number: "100%", label: "Satisfaction client" },
    { number: "99.9%", label: "Temps de disponibilité" },
    { number: "24/7", label: "Support client" },
  ];

  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-background"></div>

      {/* Animated Background Elements */}
      <div className="hero-effects">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-container"
        >
          <h1 className="hero-title">
            Révolutionnez votre
            <span className="text-gradient"> relation client</span>
          </h1>

          <p className="hero-description">
            mySmartCRM combine la puissance d'un CRM moderne avec l'intelligence
            artificielle pour transformer votre façon de gérer vos clients et
            prospects.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={openDemoModal}>
              Demander une démonstation
              <ArrowRight className="icon" />
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
