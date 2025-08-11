import { useState } from "react";

const API_BASE_URL = "http://localhost:8080/api";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi du message");
      }

      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    submitContactForm,
    isLoading,
    error,
    success,
    resetForm,
  };
};
