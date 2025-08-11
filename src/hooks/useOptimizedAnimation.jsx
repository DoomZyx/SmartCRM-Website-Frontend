import { useMemo } from "react";

const useOptimizedAnimation = (index = 0, baseDelay = 0.05) => {
  const animationProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        duration: 0.4, // Durée plus courte
        delay: Math.min(index * baseDelay, 0.3), // Délai max de 0.3s
        ease: "easeOut",
      },
      viewport: {
        once: true,
        margin: "0px 0px -50px 0px", // Déclenche plus tôt
      },
    }),
    [index, baseDelay]
  );

  return animationProps;
};

export default useOptimizedAnimation;
