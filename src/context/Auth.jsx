import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    rememberLogin: false,
    acceptTerms: false,
  });

  return (
    <AuthContext.Provider value={{ fields, setFields }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
