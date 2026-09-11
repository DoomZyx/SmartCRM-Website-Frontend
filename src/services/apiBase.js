export function apiBaseUrl() {
  const raw = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "";
  return String(raw).replace(/\/+$/, "");
}
