import React from "react";
import { motion } from "framer-motion";
import useOptimizedAnimation from "../../../hooks/useOptimizedAnimation";
import "./CTASection.scss";

const CTASection = ({
  title,
  description,
  gradientText,
  primaryButton,
  secondaryButton,
}) => {
  const animationProps = useOptimizedAnimation(0);

  return (
    <section className="cta-section">
      <div className="container">
        <motion.div {...animationProps} className="cta-content">
          <div className="cta-card">
            <h2 className="cta-title">
              {title}
              {gradientText && (
                <span className="text-gradient">{gradientText}</span>
              )}
            </h2>
            <p className="cta-description">{description}</p>
            <div className="cta-buttons">
              {primaryButton && (
                <button className="btn btn-primary">{primaryButton}</button>
              )}
              {secondaryButton && (
                <button className="btn btn-secondary">{secondaryButton}</button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
