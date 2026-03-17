import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { provisionInstanceApi, getCurrentUser } from "../../../services/authService";
import "./InstanceSetupModal.scss";

const PAYS_OPTIONS = [
  { value: "", label: "Sélectionner un pays" },
  { value: "France", label: "France" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Belgique", label: "Belgique" },
];

const defaultFormData = {
  username: "",
  nomEtablissement: "",
  adresse: "",
  codePostal: "",
  ville: "",
  pays: "",
  telephone: "",
  email: "",
  nombreCouverts: "",
  typeCuisine: "",
};

const ACCEPTED_DOC_TYPES = ".pdf,image/jpeg,image/png,image/jpg";
const MAX_FILE_SIZE_MB = 5;

/**
 * Modale affichée après un paiement réussi : collecte les infos restaurant
 * et appelle le backend pour créer l'instance SmartCRM.
 */
const InstanceSetupModal = ({ isOpen, onClose }) => {
  const { setAuth, user } = useAuth();
  const [formData, setFormData] = useState(defaultFormData);
  const [idDocument, setIdDocument] = useState(null);
  const [addressDocument, setAddressDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [provisionResult, setProvisionResult] = useState(null);

  useEffect(() => {
    if (isOpen && user?.email) {
      const fromEmail = (user.email || "").split("@")[0].replace(/[^a-z0-9]/gi, "_").slice(0, 26) || "user";
      setFormData((prev) => ({
        ...defaultFormData,
        ...prev,
        email: user.email || "",
        username: prev.username || (fromEmail.length >= 3 ? fromEmail : fromEmail + "01"),
      }));
      setError(null);
    }
  }, [isOpen, user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = useCallback(() => {
    setError(null);
    setProvisionResult(null);
    setIdDocument(null);
    setAddressDocument(null);
    onClose();
  }, [onClose]);

  const handleFileChange = (name, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(`Fichier ${file.name} trop volumineux (max ${MAX_FILE_SIZE_MB} Mo).`);
      return;
    }
    if (name === "idDocument") setIdDocument(file);
    else setAddressDocument(file);
    setError(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setProvisionResult(null);
    setIsLoading(true);
    try {
      const data = await provisionInstanceApi(formData, idDocument, addressDocument);
      const apiUser = await getCurrentUser();
      if (apiUser) setAuth(apiUser);
      setProvisionResult({
        twilioNumber: data.instance?.twilioNumber ?? null,
        twilioTemporaryNumber: data.instance?.twilioTemporaryNumber ?? null,
        regulatoryBundlePending: data.instance?.regulatoryBundlePending ?? false,
        twilioNotes: data.instance?.twilioNotes ?? null,
      });
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="instance-setup-modal-overlay" onClick={handleClose}>
      <div className="instance-setup-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="instance-setup-modal-close"
          onClick={handleClose}
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        <div className="instance-setup-modal-content">
          <h2 className="instance-setup-modal-title">
            {provisionResult ? "Instance créée" : "Configuration de votre restaurant"}
          </h2>
          <p className="instance-setup-modal-subtitle">
            {provisionResult
              ? "Votre instance mySmartCRM est prête."
              : "Complétez les informations ci-dessous pour créer votre instance mySmartCRM. Ces données seront utilisées pour personnaliser l'application et l'IA téléphonique."}
          </p>

          {!provisionResult && (
            <div className="instance-setup-modal-info" role="status">
              <p>
                L&apos;attribution d&apos;un numéro local ou international nécessite une pièce d&apos;identité et un justificatif de domicile.
                Un numéro provisoire vous sera attribué immédiatement ; votre numéro définitif sera activé sous 24 à 72 h après vérification réglementaire.
              </p>
            </div>
          )}

          {provisionResult ? (
            <div className="instance-setup-result">
              {provisionResult.regulatoryBundlePending ? (
                <>
                  <p className="instance-setup-result-warning">
                    Votre numéro local sera activé après vérification réglementaire (24 à 72 h). Vous recevrez un email dès qu&apos;il sera attribué.
                  </p>
                  {provisionResult.twilioTemporaryNumber && (
                    <p className="instance-setup-result-success">
                      Numéro provisoire en service : <strong>{provisionResult.twilioTemporaryNumber}</strong>
                    </p>
                  )}
                </>
              ) : provisionResult.twilioNumber ? (
                <p className="instance-setup-result-success">
                  Numéro Twilio attribué : <strong>{provisionResult.twilioNumber}</strong>
                </p>
              ) : provisionResult.twilioNotes ? (
                <p className="instance-setup-result-warning">
                  Aucun numéro Twilio n&apos;a pu être attribué. Raison : {provisionResult.twilioNotes}
                </p>
              ) : null}
              <button type="button" className="instance-setup-form-submit" onClick={handleClose}>
                Fermer
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="instance-setup-form">
            <div className="instance-setup-form-group">
              <label htmlFor="instance-username" className="instance-setup-form-label">
                Nom d&apos;utilisateur (connexion à l&apos;application) *
              </label>
              <input
                type="text"
                id="instance-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={30}
                pattern="[a-zA-Z0-9_]+"
                title="Lettres, chiffres et tirets bas uniquement (3 à 30 caractères)"
                className="instance-setup-form-input"
                placeholder="Ex: jean_dupont"
                disabled={isLoading}
              />
            </div>
            <div className="instance-setup-form-row">
              <div className="instance-setup-form-group">
                <label htmlFor="instance-nomEtablissement" className="instance-setup-form-label">
                  Nom de l&apos;établissement *
                </label>
                <input
                  type="text"
                  id="instance-nomEtablissement"
                  name="nomEtablissement"
                  value={formData.nomEtablissement}
                  onChange={handleChange}
                  required
                  className="instance-setup-form-input"
                  placeholder="Ex: Le Bistrot du Marché"
                  disabled={isLoading}
                />
              </div>
              <div className="instance-setup-form-group">
                <label htmlFor="instance-typeCuisine" className="instance-setup-form-label">
                  Type de cuisine
                </label>
                <input
                  type="text"
                  id="instance-typeCuisine"
                  name="typeCuisine"
                  value={formData.typeCuisine}
                  onChange={handleChange}
                  className="instance-setup-form-input"
                  placeholder="Ex: Française, Italienne"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="instance-setup-form-group">
              <label htmlFor="instance-adresse" className="instance-setup-form-label">
                Adresse *
              </label>
              <input
                type="text"
                id="instance-adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                required
                className="instance-setup-form-input"
                placeholder="Numéro et nom de rue"
                disabled={isLoading}
              />
            </div>

            <div className="instance-setup-form-row">
              <div className="instance-setup-form-group">
                <label htmlFor="instance-codePostal" className="instance-setup-form-label">
                  Code postal *
                </label>
                <input
                  type="text"
                  id="instance-codePostal"
                  name="codePostal"
                  value={formData.codePostal}
                  onChange={handleChange}
                  required
                  className="instance-setup-form-input"
                  placeholder="75001"
                  maxLength={10}
                  disabled={isLoading}
                />
              </div>
              <div className="instance-setup-form-group">
                <label htmlFor="instance-ville" className="instance-setup-form-label">
                  Ville *
                </label>
                <input
                  type="text"
                  id="instance-ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  required
                  className="instance-setup-form-input"
                  placeholder="Paris"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="instance-setup-form-group">
              <label htmlFor="instance-pays" className="instance-setup-form-label">
                Pays *
              </label>
              <select
                id="instance-pays"
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                required
                className="instance-setup-form-input"
                disabled={isLoading}
              >
                {PAYS_OPTIONS.map((opt) => (
                  <option key={opt.value || "empty"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="instance-setup-form-row">
              <div className="instance-setup-form-group">
                <label htmlFor="instance-telephone" className="instance-setup-form-label">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="instance-telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="instance-setup-form-input"
                  placeholder="+33123456789"
                  disabled={isLoading}
                />
              </div>
              <div className="instance-setup-form-group">
                <label htmlFor="instance-email" className="instance-setup-form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="instance-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="instance-setup-form-input"
                  placeholder="contact@restaurant.fr"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="instance-setup-form-group">
              <label htmlFor="instance-nombreCouverts" className="instance-setup-form-label">
                Nombre de couverts (capacité)
              </label>
              <input
                type="number"
                id="instance-nombreCouverts"
                name="nombreCouverts"
                value={formData.nombreCouverts}
                onChange={handleChange}
                min={1}
                max={999}
                className="instance-setup-form-input"
                placeholder="Ex: 50"
                disabled={isLoading}
              />
            </div>

            <div className="instance-setup-form-group">
              <label htmlFor="instance-idDocument" className="instance-setup-form-label">
                Pièce d&apos;identité (PDF ou image, max {MAX_FILE_SIZE_MB} Mo)
              </label>
              <input
                type="file"
                id="instance-idDocument"
                name="idDocument"
                accept={ACCEPTED_DOC_TYPES}
                onChange={(e) => handleFileChange("idDocument", e)}
                className="instance-setup-form-input"
                disabled={isLoading}
              />
              {idDocument && (
                <span className="instance-setup-form-file-name">{idDocument.name}</span>
              )}
            </div>
            <div className="instance-setup-form-group">
              <label htmlFor="instance-addressDocument" className="instance-setup-form-label">
                Justificatif de domicile (PDF ou image, max {MAX_FILE_SIZE_MB} Mo)
              </label>
              <input
                type="file"
                id="instance-addressDocument"
                name="addressDocument"
                accept={ACCEPTED_DOC_TYPES}
                onChange={(e) => handleFileChange("addressDocument", e)}
                className="instance-setup-form-input"
                disabled={isLoading}
              />
              {addressDocument && (
                <span className="instance-setup-form-file-name">{addressDocument.name}</span>
              )}
            </div>

            {error && (
              <p className="instance-setup-form-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary instance-setup-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner" />
                  Création en cours...
                </>
              ) : (
                "Créer mon instance"
              )}
            </button>
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstanceSetupModal;
