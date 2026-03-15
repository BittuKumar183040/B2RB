import { createContext, useContext, useState, useEffect } from "react";
import backendAPI from "../helper/apiRequstsHelper";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await backendAPI.get(`${import.meta.env.VITE_API_URL}/auth/me`, { withCredentials: true })
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyAuth();
  }, []);

  const login = async (email, password) => {
    const formData = { email, password };
    const res = await backendAPI.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      formData,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(res)

    if (res.status !== 200) {
      throw new Error(res.data.message || "Login failed");
    }

    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await backendAPI.post(
      `${import.meta.env.VITE_API_URL}/auth/logout`, {},
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);