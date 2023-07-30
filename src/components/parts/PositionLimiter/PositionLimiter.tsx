import { FC, PropsWithChildren } from 'react';
import './PositionLimiter.style.scss';

const PositionLimiter: FC<PropsWithChildren> = ({ children }) => {
  return <div className={'container'}>{children}</div>;
};

export default PositionLimiter;
