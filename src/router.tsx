import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { lazy } from 'react';
import LogIn from './components/pages/LogIn/LogIn';
import MainLayouts from './components/layouts/MainLayouts';
import Profile from './components/pages/Profile/Profile';
import { PrivateRoutes } from './hoc/PrivateRoute';

const NotFound = lazy(() => import('./components/pages/NotFound/NotFound'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={'/login'} element={<LogIn />} />
      <Route path={'/'} element={<MainLayouts />}>
        <Route
          index
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Route>
  )
);
