import React from "react";
import { motion } from "framer-motion";
import { useOptimizedAnimation } from "../../../hooks/useOptimizedAnimation";
import "./StorySection.scss";

const StorySection = ({ title, gradientText, paragraphs, stats }) => {
  const leftAnimation = useOptimizedAnimation(0, "fadeUp");
  const rightAnimation = useOptimizedAnimation(0, "fadeUp");

  return (
    <div className="story-grid">
      <motion.div {...leftAnimation} className="story-content">
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

      <motion.div {...rightAnimation} className="stats-container">
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
