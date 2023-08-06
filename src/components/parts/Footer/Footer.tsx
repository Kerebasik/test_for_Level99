import './Footer.style.css';
import {PositionLimiter} from '../PositionLimiter/PositionLimiter';

const Footer = () => {
  return (
    <>
      <footer className={'footer'}>
        <PositionLimiter>
          <div className={'footer__content'}>
            <p>@ Copyright 2023</p>
          </div>
        </PositionLimiter>
      </footer>
    </>
  );
};

export default Footer;
