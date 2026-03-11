import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import "./HomeHero.scss";

const HomeHero = () => {
  const { openDemoModal } = useDemoModal();

  const stats = [
    { number: "24/7", label: "Accueil téléphonique" },
    { number: "0", label: "Appel manqué" },
    { number: "100%", label: "IA spécialisée restauration" },
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
            Révolutionnez l'accueil téléphonique
            <span className="text-gradient"> de votre restaurant</span>
          </h1>

          <p className="hero-description">
            Récupérez le chiffre d'affaires perdu à cause des appels manqués.
            Une IA conversationnelle branchée sur une application web, disponible
            24h/24 et 7j/7, conçue pour les restaurateurs et la restauration
            rapide.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={openDemoModal}>
              Demander une démonstration
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
