import React from "react";
import { motion } from "framer-motion";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import "./HomeCTA.scss";

const HomeCTA = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-card">
            <h2 className="cta-title">
              Prêt à ne plus perdre{" "}
              <span className="text-gradient">un seul appel</span> ?
            </h2>
            <p className="cta-description">
              Testez avec un abonnement à petit budget (dès 60€/mois) et
              récupérez le CA perdu grâce à l'accueil 24/7.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={openDemoModal}>
                Demander une démonstration
              </button>
              <button className="btn btn-secondary" onClick={openDemoModal}>
                Parler à un expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
