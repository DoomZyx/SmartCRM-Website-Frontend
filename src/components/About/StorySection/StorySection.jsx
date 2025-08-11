import React from "react";
import { motion } from "framer-motion";
import "./StorySection.scss";

const StorySection = ({ title, gradientText, paragraphs, stats }) => {
  return (
    <div className="story-grid">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="story-content"
      >
        <h2 className="story-title">
          {title}
          {gradientText && (
            <span className="text-gradient">{gradientText}</span>
          )}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="story-text">
            {paragraph}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="stats-container"
      >
        <div className="stats-card">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StorySection;
