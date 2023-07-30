import { useState, createContext } from 'react';
import { getItemFromLocalStorage } from '../sevices/localStorageService';
import { USERNAMEKEY } from '../varibles';

export type TAuthContextInitial = {
  auth: boolean;
  login: Function;
  logout: Function;
};

const initialContext: TAuthContextInitial = {
  auth: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<TAuthContextInitial>(initialContext);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<boolean>(
    !!getItemFromLocalStorage(USERNAMEKEY)
  );

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };

  const value: TAuthContextInitial = { auth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
