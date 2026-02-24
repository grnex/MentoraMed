const FooterBottom = () => (
  <div className="bottom-footer">
    <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
      <div className="col">
        <div className="footer-copyright">
          <p className="fs-15">
            &copy; 2025 MentoraMed. <span>Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
      <div className="col">
        <ul className="bottom-footer-list ico-10 text-end clearfix">
          <li>
            <p className="fs-15">
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </p>
          </li>
          <li>
            <p className="fs-15">
              <a href="/termos-de-uso">Termos de Uso</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FooterBottom;
