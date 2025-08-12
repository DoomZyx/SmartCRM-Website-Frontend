import React, { createContext, useContext, useEffect, useState } from 'react';

const AnimationContext = createContext();

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
};

export const AnimationProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Détection de la taille d'écran
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    // Détection du mode économie d'énergie
    const checkLowPowerMode = () => {
      if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
          setIsLowPowerMode(battery.level < 0.2);
        });
      }
    };

    // Détection de la préférence de réduction de mouvement
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    // Initialisation
    checkScreenSize();
    checkLowPowerMode();
    checkReducedMotion();

    // Écouteurs d'événements
    window.addEventListener('resize', checkScreenSize);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);

    // Vérification périodique du niveau de batterie
    const batteryCheckInterval = setInterval(checkLowPowerMode, 30000);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', checkReducedMotion);
      clearInterval(batteryCheckInterval);
    };
  }, []);

  // Déterminer si les animations doivent être désactivées
  const shouldDisableAnimations = isLowPowerMode || prefersReducedMotion || isMobile;

  const value = {
    isMobile,
    isTablet,
    isLowPowerMode,
    prefersReducedMotion,
    shouldDisableAnimations,
    animationConfig: {
      duration: shouldDisableAnimations ? 0.1 : (isMobile ? 0.3 : 0.15),
      delay: shouldDisableAnimations ? 0 : (isMobile ? 0.1 : 0),
      ease: "easeOut",
    }
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}; 