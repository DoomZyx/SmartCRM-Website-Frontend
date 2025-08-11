import { useMemo } from "react";

export const useOptimizedAnimation = (delay = 0, variant = "fadeUp") => {
  const animationProps = useMemo(() => {
    const baseProps = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: {
        duration: 0.15,
        delay: 0,
        ease: "easeOut",
      },
      viewport: {
        once: true, // Évite les doublons
        margin: "-300px",
        amount: 0.05,
      },
    };

    switch (variant) {
      case "fadeUp":
        return {
          ...baseProps,
          initial: { opacity: 0, y: 10 }, // Déplacement plus subtil
          whileInView: { opacity: 1, y: 0 },
        };

      case "fadeIn":
        return {
          ...baseProps,
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
        };

      case "scaleIn":
        return {
          ...baseProps,
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
        };

      case "slideIn":
        return {
          ...baseProps,
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
        };

      default:
        return baseProps;
    }
  }, [delay, variant]);

  return animationProps;
};
