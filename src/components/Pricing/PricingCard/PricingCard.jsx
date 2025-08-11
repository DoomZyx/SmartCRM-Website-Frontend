import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useOptimizedAnimation } from "../../../hooks/useOptimizedAnimation";
import "./PricingCard.scss";

const PricingCard = ({ plan, delay = 0 }) => {
  const animationProps = useOptimizedAnimation(delay, "fadeUp");
  
  return (
    <motion.div
      {...animationProps}
      className={`pricing-card ${plan.popular ? "popular" : ""}`}
    >
      {plan.popular && (
        <div className="popular-badge">
          <div className="badge-content">
            <Star className="icon" />
            Le plus populaire
          </div>
        </div>
      )}

      <div className="pricing-header">
        <h3 className="pricing-title">{plan.name}</h3>
        <p className="pricing-description">{plan.description}</p>

        <div className="pricing-price">
          <span className="price-amount">{plan.price}€</span>
          <div className="maintenance-price">{plan.period}</div>
        </div>

        <button
          className={`btn pricing-btn ${
            plan.popular ? "btn-primary" : "btn-secondary"
          }`}
        >
          Commencer l'essai gratuit
        </button>
      </div>

      <div className="pricing-features">
        <h4 className="pricing-title">Inclus dans ce plan :</h4>
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="feature-item">
            <Check className="check-icon" />
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard; 