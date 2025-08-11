import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import "./MissionSection.scss";

const MissionSection = ({ title, gradientText, description, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mission-section"
    >
      <div className="mission-card">
        <div className="mission-icon">
          <Globe className="icon" />
        </div>
        <h2 className="mission-title">
          {title}
          {gradientText && (
            <span className="text-gradient">{gradientText}</span>
          )}
        </h2>
        <p className="mission-description">{description}</p>
        {buttonText && (
          <button className="btn btn-primary">{buttonText}</button>
        )}
      </div>
    </motion.div>
  );
};

export default MissionSection;
