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
              Prêt à transformer votre{" "}
              <span className="text-gradient">business</span> ?
            </h2>
            <p className="cta-description">
            Optimisez vos coûts et votre efficacité
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={openDemoModal}>
                Demander une démonstation
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
