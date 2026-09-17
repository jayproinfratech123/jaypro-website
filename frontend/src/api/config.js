
// frontend/src/api/config.js

// Empty means same-origin /api (Vite proxies this during development).
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/api$/, "");

export const API_URL = `${API_BASE_URL}/api`;
