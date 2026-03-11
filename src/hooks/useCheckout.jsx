import { useState } from "react";

const API_BASE_URL = "https://smartcrm-website.onrender.com/api";

/**
 * Appelle le backend pour créer une session Stripe Checkout et redirige vers l'URL renvoyée.
 * Le backend doit exposer POST /api/checkout/create-session avec body { planId } et retourner { url }.
 */
export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCheckoutSession = async (planId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/checkout/create-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ planId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Impossible de créer la session de paiement");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de paiement manquante");
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    createCheckoutSession,
    isLoading,
    error,
    clearError,
  };
};
