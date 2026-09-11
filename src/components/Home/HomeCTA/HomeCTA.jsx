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
              Moins de stress en salle.{" "}
              <span className="text-gradient">Plus de clients servis.</span>
            </h2>
            <p className="cta-description">
              On installe l&apos;assistant sur votre ligne, votre équipe garde
              la salle. Offre beta à 150 €/mois, pour tester pendant le service.
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
