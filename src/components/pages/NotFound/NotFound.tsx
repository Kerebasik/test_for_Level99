import { FC, Suspense } from 'react';
import './NotFound.style.scss';
import PreLoader from '../../parts/PreLoader/PreLoader';

const NotFound: FC = () => {
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
