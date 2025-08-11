import { useState } from 'react';

const API_BASE_URL = 'http://localhost:8080/api';

export const useDemoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitDemoForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi de la demande de démo');
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

  return { submitDemoForm, isLoading, error, success, resetForm };
}; 