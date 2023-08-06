import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {FC, ReactNode} from 'react';
import {PublicRoutes} from "../constants/routes";

interface PrivateRoute{
  children:ReactNode
}

export const PrivateRoute: FC<PrivateRoute> = ({ children }) => {
  const { auth } = useAuth();

  if (auth) {
    return <>{children}</>;
  }

  return <Navigate to={PublicRoutes.LOGIN} />;
};
