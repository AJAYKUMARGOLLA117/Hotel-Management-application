import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user data and role

  const login = async (email, password) => {
    // Add login logic here, call authService.login(email, password)
    setUser({ email, role: "User" }); // Example user role; replace with actual role
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
