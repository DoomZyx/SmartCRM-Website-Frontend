import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Clock } from "lucide-react";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import { useOptimizedAnimation } from "../../../hooks/useOptimizedAnimation";
import "./PricingCard.scss";

const PricingCard = ({ plan, delay = 0 }) => {
  const animationProps = useOptimizedAnimation(delay, "fadeUp");
  const { openDemoModal } = useDemoModal();

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

      {plan.isNew && (
        <div className="new-badge">
          <div className="badge-content">
            <Sparkles className="icon" />
            Nouveau
          </div>
        </div>
      )}

      {plan.isDevelopment && (
        <div className="development-badge">
          <div className="badge-content">
            <Clock className="icon" />
            En développement
          </div>
        </div>
      )}

      <div className="pricing-header">
        <h3 className="pricing-title">{plan.name}</h3>
        <p className="pricing-description">{plan.description}</p>

        <div className="pricing-price">
          <span className="price-amount">{plan.price}</span>
          <div className="maintenance-price">{plan.period}</div>
          <div className="API-price">{plan.API}</div>
        </div>

        <button
          onClick={openDemoModal}
          className={`btn pricing-btn ${
            plan.popular ? "btn-primary" : "btn-secondary"
          }`}
        >
          Demander une démonstration
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
