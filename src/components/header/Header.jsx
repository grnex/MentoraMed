import React, { useState } from 'react';
import MobileHeader from './MobileHeader.jsx';
import DesktopLogo from './DesktopLogo.jsx';
import NavMenu from './NavMenu';
import logoLight from '../../assets/images/light-Logo-brand.svg';
import logoDark from '../../assets/images/dark-Logo-brand.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (newState) {
      document.body.classList.add('wsactive');
    } else {
      document.body.classList.remove('wsactive');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('wsactive');
  };

  return (
    <header id='header' className='white-menu navbar-dark'>
      <div className='header-wrapper'>
        <MobileHeader
          logo={logoLight}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <DesktopLogo logoLight={logoLight} logoDark={logoDark} />
            <NavMenu closeMobileMenu={closeMobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
