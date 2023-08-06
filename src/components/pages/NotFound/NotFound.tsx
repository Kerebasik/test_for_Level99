import {Suspense } from 'react';
import './NotFound.style.css';
import PreLoader from '../../parts/PreLoader/PreLoader';

const NotFound = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <div className={'notfound'}>
        <div className={'notfound__content'}>
          <h1>404</h1>
          <p>Not Found</p>
          <PreLoader />
        </div>
      </div>
    </Suspense>
  );
};

export default NotFound;
