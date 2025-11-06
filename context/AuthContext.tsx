"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  user: any;
  loading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Example: load user from localStorage or fetch
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);

    // Simulated authentication
    if (email === "admin@example.com" && password === "123456") {
      const userData = { email, role: "admin" };
      localStorage.setItem("adminUser", JSON.stringify(userData));
      setUser(userData);
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("adminUser");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
