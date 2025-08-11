import React from "react";
import { motion } from "framer-motion";
import { useOptimizedAnimation } from "../../../hooks/useOptimizedAnimation";
import "./TeamCard.scss";

const TeamCard = ({ member, delay = 0 }) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Utiliser l'index basé sur le delay pour garder la compatibilité
  const index = Math.round(delay / 0.1);
  const animationProps = useOptimizedAnimation(index);

  return (
    <motion.div {...animationProps} className="team-card">
      <div className="team-avatar">
        <span className="avatar-initials">{initials}</span>
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-description">{member.description}</p>
    </motion.div>
  );
};

export default TeamCard;
