import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("bcp_access_token");
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .get("/auth/me")
      .then(({ data }) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("bcp_access_token", data.accessToken);
    localStorage.setItem("bcp_refresh_token", data.refreshToken);
    setUser(data.user);
    return data.user;
  };

  const register = async (payload) => {
    const { data } = await api.post("/auth/register", payload);
    localStorage.setItem("bcp_access_token", data.accessToken);
    localStorage.setItem("bcp_refresh_token", data.refreshToken);
    setUser(data.user);
    return data.user;
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch {}
    localStorage.removeItem("bcp_access_token");
    localStorage.removeItem("bcp_refresh_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
