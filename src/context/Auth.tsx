import React, { createContext, useContext, useState } from "react";

interface IAuthProviderState {
  email: string;
  password: string;
  confirmPassword: string;
  rememberLogin: boolean;
  acceptTerms: boolean;
}

interface IAuthContext {
  fields: IAuthProviderState;
  setFields: React.Dispatch<React.SetStateAction<IAuthProviderState>>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode | React.ReactElement | any;
}) {
  const [fields, setFields] = useState<IAuthProviderState>({
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
