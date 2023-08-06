import {useState, createContext, ReactNode} from 'react';
import { StoreServiceInstance } from '../sevices/storeService';
import { USER_NAME_KEY } from '../constants/varibles';

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

interface AuthProviderProps{
  children:ReactNode
}

export const AuthProvider = ({children}:AuthProviderProps) => {
  const [auth, setAuth] = useState<boolean>(
    !!StoreServiceInstance.getItem(USER_NAME_KEY)
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
