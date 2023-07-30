import logo from '../../../assets/Ethereum-Logo-PNG-Image.png';
import PositionLimiter from '../PositionLimiter/PositionLimiter';
import './Header.style.scss';

const Header = () => {
  return (
    <>
      <header className={'header'}>
        <PositionLimiter>
          <div className={'logo'}>
            <img src={logo} alt={'logo'} />
          </div>
        </PositionLimiter>
      </header>
    </>
  );
};

export default Header;
