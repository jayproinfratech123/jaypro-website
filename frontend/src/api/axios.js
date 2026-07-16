import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("bcp_access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const refreshToken = localStorage.getItem("bcp_refresh_token");
        if (!refreshToken) throw new Error("no refresh token");
        const { data } = await axios.post("/api/auth/refresh", { refreshToken });
        localStorage.setItem("bcp_access_token", data.accessToken);
        original.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(original);
      } catch (refreshErr) {
        localStorage.removeItem("bcp_access_token");
        localStorage.removeItem("bcp_refresh_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
