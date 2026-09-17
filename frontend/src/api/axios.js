import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------------------------------------------------
// REQUEST INTERCEPTOR
// ----------------------------------------------------

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("bcp_access_token");

    // Do not send invalid tokens
    if (
      token &&
      token !== "undefined" &&
      token !== "null" &&
      token.trim() !== ""
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ----------------------------------------------------
// RESPONSE INTERCEPTOR
// ----------------------------------------------------

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config;

    const excludedRoutes = [
      "/auth/login",
      "/auth/register",
      "/auth/refresh",
    ];

    if (
      error.response?.status === 401 &&
      original &&
      !original._retry &&
      !excludedRoutes.includes(original.url)
    ) {
      original._retry = true;

      try {
        const refreshToken =
          localStorage.getItem("bcp_refresh_token");

        // Check refresh token
        if (
          !refreshToken ||
          refreshToken === "undefined" ||
          refreshToken === "null" ||
          refreshToken.trim() === ""
        ) {
          throw new Error("No valid refresh token");
        }

        // Get new access token
        const { data } = await axios.post(
          `${API_URL}/auth/refresh`,
          {
            refreshToken,
          }
        );

        if (!data?.accessToken) {
          throw new Error("No access token returned");
        }

        // Save new access token
        localStorage.setItem(
          "bcp_access_token",
          data.accessToken
        );

        // Update original request
        original.headers =
          original.headers || {};

        original.headers.Authorization =
          `Bearer ${data.accessToken}`;

        // Retry original request
        return api(original);

      } catch (refreshError) {

        // Remove invalid tokens
        localStorage.removeItem(
          "bcp_access_token"
        );

        localStorage.removeItem(
          "bcp_refresh_token"
        );

        // Redirect to login
        if (
          window.location.pathname !==
          "/admin/preview-login"
        ) {
          window.location.href =
            "/admin/preview-login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;