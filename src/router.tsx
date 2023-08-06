import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { lazy } from 'react';
import {LogIn} from './components/pages/LogIn/LogIn';
import {MainLayout} from './components/layouts/MainLayout';
import {Profile} from './components/pages/Profile/Profile';
import { PrivateRoute } from './hoc/PrivateRoute';
import {PublicRoutes, PrivateRoutes} from "./constants/routes";

const NotFound = lazy(() => import('./components/pages/NotFound/NotFound'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={PublicRoutes.LOGIN} element={<LogIn />} />
      <Route path={PrivateRoutes.ROOT} element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={PublicRoutes.NOTFOUND} element={<NotFound />} />
    </Route>
  )
);
