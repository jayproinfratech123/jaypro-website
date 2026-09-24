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

  // ----------------------------------------------------
  // RESET ADMIN AUTH WHEN LEAVING ADMIN AREA
  // ----------------------------------------------------

  useEffect(() => {
    if (
      !/^\/admin(?:\/|$)/.test(pathname) ||
      pathname === "/admin/preview-login"
    ) {
      setAdminAuthenticated(false);
    }
  }, [pathname]);

  // ----------------------------------------------------
  // CHECK EXISTING LOGIN
  // ----------------------------------------------------

  useEffect(() => {
    let isMounted = true;

    const token = localStorage.getItem("bcp_access_token");

    // Remove bad/invalid stored token
    if (
      !token ||
      token === "undefined" ||
      token === "null" ||
      token.trim() === ""
    ) {
      localStorage.removeItem("bcp_access_token");
      localStorage.removeItem("bcp_refresh_token");

      if (isMounted) {
        setUser(null);
        setAdminAuthenticated(false);
        setLoading(false);
      }

      return;
    }

    api
      .get("/auth/me")
      .then(({ data }) => {
        if (!isMounted) return;

        // Some APIs return { user: {...} }
        // Others return the user directly.
        const currentUser = data?.user || data;

        setUser(currentUser);

        setAdminAuthenticated(
          currentUser?.role === "admin"
        );
      })
      .catch(() => {
        if (!isMounted) return;

        setUser(null);
        setAdminAuthenticated(false);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // ----------------------------------------------------
  // LOGIN
  // ----------------------------------------------------

  const login = useCallback(async (email, password) => {
    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    // Make sure backend actually returned access token
    if (!data?.accessToken) {
      throw new Error(
        "Login successful but access token was not returned by backend."
      );
    }

    // Save access token
    localStorage.setItem(
      "bcp_access_token",
      data.accessToken
    );

    // Save refresh token only if backend returned one
    if (data?.refreshToken) {
      localStorage.setItem(
        "bcp_refresh_token",
        data.refreshToken
      );
    } else {
      localStorage.removeItem(
        "bcp_refresh_token"
      );
    }

    const loggedInUser = data?.user;

    if (!loggedInUser) {
      throw new Error(
        "User information was not returned by backend."
      );
    }

    setUser(loggedInUser);

    setAdminAuthenticated(
      loggedInUser.role === "admin"
    );

    return loggedInUser;
  }, []);

  // ----------------------------------------------------
  // REGISTER
  // ----------------------------------------------------

  const register = useCallback(async (payload) => {
    const { data } = await api.post(
      "/auth/register",
      payload
    );

    if (data?.confirmationRequired) return data;

    if (!data?.accessToken) {
      throw new Error(
        "Registration successful but access token was not returned."
      );
    }

    localStorage.setItem(
      "bcp_access_token",
      data.accessToken
    );

    if (data?.refreshToken) {
      localStorage.setItem(
        "bcp_refresh_token",
        data.refreshToken
      );
    } else {
      localStorage.removeItem(
        "bcp_refresh_token"
      );
    }

    const registeredUser = data?.user;

    if (!registeredUser) {
      throw new Error(
        "User information was not returned by backend."
      );
    }

    setUser(registeredUser);

    setAdminAuthenticated(
      registeredUser.role === "admin"
    );

    return registeredUser;
  }, []);

  // ----------------------------------------------------
  // LOGOUT
  // ----------------------------------------------------

  const logout = useCallback(async () => {
    setAdminAuthenticated(false);

    const refreshToken =
      localStorage.getItem("bcp_refresh_token");

    try {
      if (
        refreshToken &&
        refreshToken !== "undefined" &&
        refreshToken !== "null"
      ) {
        await api.post("/auth/logout", {
          refreshToken,
        });
      }
    } catch (error) {
      console.warn(
        "Logout API request failed:",
        error?.message
      );
    }

    localStorage.removeItem(
      "bcp_access_token"
    );

    localStorage.removeItem(
      "bcp_refresh_token"
    );

    setUser(null);
  }, []);

  // ----------------------------------------------------
  // CONTEXT VALUE
  // ----------------------------------------------------

  const value = useMemo(
    () => ({
      user,
      adminAuthenticated,
      loading,
      login,
      register,
      logout,
    }),
    [
      user,
      adminAuthenticated,
      loading,
      login,
      register,
      logout,
    ]
  );

  // ----------------------------------------------------
  // PROVIDER
  // ----------------------------------------------------

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
