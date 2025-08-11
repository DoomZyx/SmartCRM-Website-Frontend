import React from "react";
import { motion } from "framer-motion";
import "./HomeCTA.scss";

const HomeCTA = () => {
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
              Prêt à transformer votre{" "}
              <span className="text-gradient">business</span> ?
            </h2>
            <p className="cta-description">
              Rejoignez des milliers d'entreprises qui font confiance à SmartCRM
              pour optimiser leur relation client.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Essai gratuit 14 jours
              </button>
              <button className="btn btn-secondary">Parler à un expert</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
