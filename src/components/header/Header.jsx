import MobileHeader from './MobileHeader.jsx';
import DesktopLogo from './DesktopLogo.jsx';
import NavMenu from './NavMenu';
import logoLight from '../../assets/images/light-Logo-brand.svg';
import logoDark from '../../assets/images/dark-Logo-brand.svg';

const Header = () => (
  <header id='header' className='white-menu navbar-dark'>
    <div className='header-wrapper'>
      <MobileHeader logo={logoLight} />
      <div className="wsmainfull menu clearfix">
        <div className="wsmainwp clearfix">
          <DesktopLogo logoLight={logoLight} logoDark={logoDark} />
          <NavMenu />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
