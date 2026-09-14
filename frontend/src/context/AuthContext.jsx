import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import api from "../api/axios.js";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!/^\/admin(?:\/|$)/.test(pathname) || pathname === "/admin/preview-login") {
      setAdminAuthenticated(false);
    }
  }, [pathname]);

  useEffect(() => {
    let isMounted = true;

    const token = localStorage.getItem("bcp_access_token");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then(({ data }) => {
        if (isMounted) setUser(data);
      })
      .catch(() => {
        if (isMounted) setUser(null);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const login = useCallback(async (email, password) => {
    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("bcp_access_token", data.accessToken);
    localStorage.setItem("bcp_refresh_token", data.refreshToken);

    setUser(data.user);

    setAdminAuthenticated(data.user.role === "admin");

    return data.user;
  }, []);

  const register = useCallback(async (payload) => {
    const { data } = await api.post("/auth/register", payload);

    localStorage.setItem("bcp_access_token", data.accessToken);
    localStorage.setItem("bcp_refresh_token", data.refreshToken);

    setUser(data.user);

    return data.user;
  }, []);

  const logout = useCallback(async () => {
    setAdminAuthenticated(false);
    try {
      await api.post("/auth/logout", { refreshToken: localStorage.getItem("bcp_refresh_token") });
    } catch {
      // Ignore logout API errors
    }

    localStorage.removeItem("bcp_access_token");
    localStorage.removeItem("bcp_refresh_token");

    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      adminAuthenticated,
      loading,
      login,
      register,
      logout,
    }),
    [user, adminAuthenticated, loading, login, register, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
