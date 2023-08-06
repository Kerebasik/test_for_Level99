import {FC, PropsWithChildren} from 'react';
import './PositionLimiter.style.css';

const PositionLimiter: FC<PropsWithChildren> = ({ children }) => {
  return <div className={'container'}>{children}</div>;
};

export {PositionLimiter};
