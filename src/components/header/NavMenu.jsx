import React from 'react';
import './NavMenu.css';

const NavMenu = ({ closeMobileMenu }) => {
  return (
    <nav className="wsmenu clearfix custom-navbar">
      <ul className="wsmenu-list nav-blue custom-nav-menu" id="nav-menu">
        <li aria-haspopup="true" className="h-link">
          <a href="/#sobre" className="h-scroll-link" onClick={closeMobileMenu}>
            Sobre
          </a>
        </li>

        <li aria-haspopup="true" className="h-link">
          <a href="/#quem-somos" className="h-scroll-link" onClick={closeMobileMenu}>
            Quem Somos
          </a>
        </li>


        <li aria-haspopup="true" className="h-link">
          <a href="/#servicos" className="h-scroll-link" onClick={closeMobileMenu}>
            Serviços
          </a>
        </li>


        <li aria-haspopup="true" className="h-link">
          <a href="/#como-funciona" className="h-scroll-link" onClick={closeMobileMenu}>
            Como Funciona
          </a>
        </li>


        <li aria-haspopup="true" className="h-link">
          <a href="/#beneficios" className="h-scroll-link" onClick={closeMobileMenu}>
            Beneficios
          </a>
        </li>



        <li aria-haspopup="true" className="h-link">
          <a href="/#blog" className="h-scroll-link" onClick={closeMobileMenu}>
            Blog
          </a>
        </li>

        <li aria-haspopup="true" className="h-link">
          <a href="/#contato" className="h-scroll-link" onClick={closeMobileMenu}>
            Contato
          </a>
        </li>

        <li aria-haspopup="true" className="h-link">
          <a
            href="https://mentoramed.app.br/"
            id="area-do-colaborador"
            className="h-scroll-link"
          >
            <span>Área do Colaborador</span>
          </a>
        </li>

        {/* <SocialLinks /> */}
      </ul>
    </nav>
  );
};

export default NavMenu;
