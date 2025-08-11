import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = ({ title, description, gradientText, children = null }) => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            {title}
            {gradientText && (
              <span className="text-gradient">{gradientText}</span>
            )}
          </h1>
          <p className="hero-description">{description}</p>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
