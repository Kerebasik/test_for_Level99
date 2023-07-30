import { FC } from 'react';
import Header from '../parts/Header/Header';
import { Outlet } from 'react-router-dom';
import PositionLimiter from '../parts/PositionLimiter/PositionLimiter';
import Footer from '../parts/Footer/Footer';

const MainLayouts: FC = () => {
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

export default MainLayouts;
