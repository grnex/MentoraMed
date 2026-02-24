import logo from "./footerLogo.svg";

const FooterInfo = () => (
  <div className="col-lg-3">
    <div className="footer-info">
      <a href="/">
        <img className="footer-logo" src={logo} alt="footer-logo" />
      </a>
      <p>
        Especialistas em telepsicologia empresarial para manter sua empresa em
        conformidade e seus colaboradores saudáveis.
      </p>
      <br />
      <p>
        Plataforma SaaS em conformidade com a NR-01, oferecendo saúde, segurança
        e produtividade para empresas.
      </p>
    </div>
  </div>
);

export default FooterInfo;
