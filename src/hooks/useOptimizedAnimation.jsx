import { useMemo } from "react";
import { useAnimationContext } from "../components/Shared/AnimationProvider/AnimationProvider";

export const useOptimizedAnimation = (delay = 0, variant = "fadeUp") => {
  const { isMobile, isTablet, shouldDisableAnimations, animationConfig } =
    useAnimationContext();

  const animationProps = useMemo(() => {
    // Si les animations sont désactivées, retourner des props minimales
    if (shouldDisableAnimations) {
      return {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0 },
        viewport: { once: true, margin: "-50px" },
      };
    }

    const isTouchDevice = isMobile || isTablet;

    const baseProps = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: {
        duration: animationConfig.duration,
        delay: isTouchDevice ? Math.min(delay, 0.1) : delay,
        ease: animationConfig.ease,
      },
      viewport: {
        once: true,
        margin: isTouchDevice ? "-100px" : "-300px",
        amount: isTouchDevice ? 0.1 : 0.05,
      },
    };

    // Animations simplifiées pour mobile et tablette
    if (isTouchDevice) {
      switch (variant) {
        case "fadeUp":
          return {
            ...baseProps,
            initial: { opacity: 0, y: 15 },
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
            initial: { opacity: 0, scale: 0.98 },
            whileInView: { opacity: 1, scale: 1 },
          };

        case "slideIn":
          return {
            ...baseProps,
            initial: { opacity: 0, x: -8 },
            whileInView: { opacity: 1, x: 0 },
          };

        default:
          return {
            ...baseProps,
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
          };
      }
    }

    // Animations normales pour desktop
    switch (variant) {
      case "fadeUp":
        return {
          ...baseProps,
          initial: { opacity: 0, y: 10 },
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
  }, [
    delay,
    variant,
    isMobile,
    isTablet,
    shouldDisableAnimations,
    animationConfig,
  ]);

  return animationProps;
};
