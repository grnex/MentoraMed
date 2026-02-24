const ContactInfo = () => (
  <div className="col-lg-5">
    <div className="contact-info wow animate__animated animate__fadeInRight">
      <h2 className="fs-50">Solicite uma Consulta Gratuita</h2>
      <p className="fs-17">
        Preencha o formulário e, em até 24 horas, nossa equipe entrará em
        contato para agendar uma reunião de apresentação. Nessa conversa, vamos
        conhecer os desafios da sua empresa e mostrar, de forma clara e
        personalizada, como nossos serviços podem contribuir para mais saúde,
        segurança e produtividade dentro da sua organização.
      </p>
      <div className="cnt_b cbox-contacts ico-15">
        <h5 className="fs-22">Meios de Contato:</h5>
        <p>
          <span className="flaticon-phone-call"></span>{" "}
          <a className="color--bruswick-green" href="tel:5541997170175">
            41 9 9717-0175
          </a>
        </p>
        <p>
          <span className="flaticon-email"></span>{" "}
          <a
            className="color--bruswick-green"
            href="mailto:contato@mentoramed.com.br"
          >
            contato@mentoramed.com.br
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ContactInfo;
