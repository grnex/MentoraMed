const NavMenu = () => (
  <nav className="wsmenu clearfix">
    <ul className="wsmenu-list nav-blue">
      <li aria-haspopup="true" className="h-link">
        <a href="/#sobre" className="h-scroll-link">
          Sobre
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#quem-somos" className="h-scroll-link">
          Quem Somos
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#como-funciona" className="h-scroll-link">
          Como Funciona
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#beneficios" className="h-scroll-link">
          Beneficios
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#contato" className="h-scroll-link">
          Contato
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#nr-1" className="h-scroll-link">
          NR-1
        </a>
      </li>

      <li aria-haspopup="true" className="h-link">
        <a href="/#blog" className="h-scroll-link">
          Blog
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

export default NavMenu;
