import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import "./MapSection.scss";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="map-section"
    >
      <div className="map-card">
        <h2 className="map-title">
          Notre <span className="text-gradient">Localisation</span>
        </h2>
        <p className="map-description">
          Venez nous rencontrer dans nos bureaux parisiens pour discuter de
          votre projet en personne.
        </p>

        <div className="map-placeholder">
          <div className="map-content">
            <MapPin className="map-icon" />
            <p className="map-text">Carte interactive</p>
            <p className="map-address">123 Rue de l'Innovation, 75001 Paris</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;
