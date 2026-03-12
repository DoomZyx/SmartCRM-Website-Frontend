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
 * Récupère l'utilisateur courant via le cookie HttpOnly.
 * Le backend lit le cookie (token) et renvoie uniquement les infos user (jamais le token).
 * À appeler avec credentials: 'include' pour envoyer le cookie.
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
  } catch {
    return null;
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
