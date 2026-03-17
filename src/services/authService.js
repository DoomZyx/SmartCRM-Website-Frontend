/**
 * Service d'authentification OAuth Google.
 * Le token est géré côté backend via cookie HttpOnly : il n'apparaît jamais en frontend.
 * Les URLs sont en placeholder tant que le backend n'est pas prêt.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Redirige l'utilisateur vers l'endpoint backend qui lance le flow OAuth Google.
 * Le backend renverra une redirect vers Google, puis après auth définira un cookie
 * HttpOnly (token) et redirigera vers l'URL de callback du frontend (sans token dans l'URL).
 */
export const loginWithGoogle = () => {
  if (!API_BASE_URL) return;
  window.location.href = `${API_BASE_URL}/api/auth/google`;
};

export const getGoogleLoginUrl = () => {
  if (!API_BASE_URL) return null;
  return `${API_BASE_URL}/api/auth/google`;
};

/**
 * Inscription avec email et mot de passe. Crée le compte et définit le cookie.
 * @returns {Promise<{ id, email, name, ... }>}
 */
export const registerApi = async (email, password) => {
  if (!API_BASE_URL) throw new Error("API non configurée.");
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      email: (email || "").trim().toLowerCase(),
      password: password || "",
    }),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Inscription impossible.");
  }
  const data = await response.json();
  return data.user ?? data;
};

/**
 * Connexion avec email et mot de passe. Définit le cookie côté backend.
 * @returns {Promise<{ id, email, name, ... } | null>} Utilisateur ou null en cas d'échec
 */
export const loginWithEmailPassword = async (email, password) => {
  if (!API_BASE_URL) return null;
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: (email || "").trim(),
        password: password || "",
      }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || "Connexion impossible.");
    }
    const data = await response.json();
    return data.user ?? data;
  } catch (err) {
    throw err;
  }
};

/**
 * Définit le mot de passe de l'utilisateur connecté (après OAuth ou avant checkout).
 * @param {string} password Mot de passe (min. 8 caractères)
 */
export const setPasswordApi = async (password) => {
  if (!API_BASE_URL) throw new Error("API non configurée.");
  const response = await fetch(`${API_BASE_URL}/api/auth/set-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ password: (password || "").trim() }),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Impossible de définir le mot de passe.");
  }
};

/**
 * Récupère l'utilisateur courant via le cookie HttpOnly.
 * Le backend lit le cookie (token) et renvoie uniquement les infos user (jamais le token).
 * Retourne null si non authentifié (401, etc.), rejette en cas d'erreur réseau pour permettre au caller de logger.
 * @returns {Promise<{ id, email, name, picture?, ... } | null>}
 */
export const getCurrentUser = async () => {
  if (!API_BASE_URL) return null;
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.user ?? data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * Déconnexion : demande au backend d'invalider / supprimer le cookie.
 * À appeler avec credentials: 'include' pour envoyer le cookie à invalider.
 */
export const logoutApi = async () => {
  if (!API_BASE_URL) return;
  try {
    await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch {
    // ignore
  }
};
