import React, { useState, useEffect } from "react";
import { Save, CheckCircle, AlertCircle } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useRestaurateurProfile } from "../../hooks/useRestaurateurProfile";
import NotificationToast from "../Shared/NotificationToast/NotificationToast";
import "./RestaurateurProfilForm.scss";

const defaultFormData = {
  nomEtablissement: "",
  adresse: "",
  codePostal: "",
  ville: "",
  telephone: "",
  email: "",
  nombreCouverts: "",
  typeCuisine: "",
};

const RestaurateurProfilForm = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState(defaultFormData);
  const [showNotification, setShowNotification] = useState(false);
  const {
    profile,
    loadProfile,
    submitProfile,
    isLoading,
    isLoadingProfile,
    error,
    success,
    resetForm,
  } = useRestaurateurProfile();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({ ...prev, email: user.email || "" }));
    }
  }, [user]);

  useEffect(() => {
    if (profile && (profile.nomEtablissement != null || profile.adresse != null || profile.email != null)) {
      setFormData((prev) => ({
        ...defaultFormData,
        ...prev,
        nomEtablissement: profile.nomEtablissement ?? "",
        adresse: profile.adresse ?? "",
        codePostal: profile.codePostal ?? "",
        ville: profile.ville ?? "",
        telephone: profile.telephone ?? "",
        email: profile.email ?? user?.email ?? prev.email,
        nombreCouverts: profile.nombreCouverts != null ? String(profile.nombreCouverts) : "",
        typeCuisine: profile.typeCuisine ?? "",
      }));
    }
  }, [profile]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitProfile(formData);
      setShowNotification(true);
    } catch (_) {
      // erreur gérée dans le hook
    }
  };

  if (isLoadingProfile) {
    return (
      <div className="restaurateur-profil-form restaurateur-profil-form--loading">
        <div className="spinner" />
        <span>Chargement des informations...</span>
      </div>
    );
  }

  return (
    <>
      <NotificationToast
        message="Informations enregistrées avec succès."
        visible={showNotification}
        onClose={() => setShowNotification(false)}
        autoHide={4000}
        type="success"
      />
      <form onSubmit={handleSubmit} className="restaurateur-profil-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nomEtablissement" className="form-label">
            Nom de l&apos;établissement *
          </label>
          <input
            type="text"
            id="nomEtablissement"
            name="nomEtablissement"
            value={formData.nomEtablissement}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Ex: Le Bistrot du Marché"
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeCuisine" className="form-label">
            Type de cuisine
          </label>
          <input
            type="text"
            id="typeCuisine"
            name="typeCuisine"
            value={formData.typeCuisine}
            onChange={handleChange}
            className="form-input"
            placeholder="Ex: Française, Italienne"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="adresse" className="form-label">
          Adresse *
        </label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Numéro et nom de rue"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="codePostal" className="form-label">
            Code postal *
          </label>
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            value={formData.codePostal}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="75001"
            maxLength={10}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ville" className="form-label">
            Ville *
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Paris"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="telephone" className="form-label">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="01 23 45 67 89"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="contact@restaurant.fr"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="nombreCouverts" className="form-label">
          Nombre de couverts (capacité)
        </label>
        <input
          type="number"
          id="nombreCouverts"
          name="nombreCouverts"
          value={formData.nombreCouverts}
          onChange={handleChange}
          min={1}
          max={999}
          className="form-input"
          placeholder="Ex: 50"
        />
      </div>

      {success && (
        <div className="form-message success">
          <CheckCircle className="icon" />
          <span>Informations enregistrées avec succès.</span>
        </div>
      )}

      {error && (
        <div className="form-message error">
          <AlertCircle className="icon" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="spinner" />
            Enregistrement...
          </>
        ) : (
          <>
            <Save className="icon" />
            Enregistrer les informations
          </>
        )}
      </button>
    </form>
    </>
  );
};

export default RestaurateurProfilForm;
