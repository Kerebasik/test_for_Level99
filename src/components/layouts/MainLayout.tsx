import {Header} from '../parts/Header/Header';
import { Outlet } from 'react-router-dom';
import {PositionLimiter} from '../parts/PositionLimiter/PositionLimiter';
import Footer from '../parts/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <PositionLimiter>
          <Outlet />
        </PositionLimiter>
      </main>
      <Footer />
    </>
  );
};

export {MainLayout};
