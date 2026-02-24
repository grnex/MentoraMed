const ContactForm = () => (
  <div className="col-lg-7 darker-old-lace r-20">
    <div className="contact-form-wrapper wow animate__animated animate__fadeInLeft">
      <form name="contactform" className="row contact-form">
        <div className="col-md-6">
          <label htmlFor="fullname">Nome completo</label>
          <input type="text" id="fullname" name="fullname" className="form-control fullname" placeholder="Seu nome completo" autoComplete="off" />
        </div>
        <div className="col-md-6">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" className="form-control email" placeholder="seu@email.com" autoComplete="off" />
        </div>
        <div className="col-md-6">
          <label htmlFor="companyname">Empresa</label>
          <input type="text" id="companyname" name="companyname" className="form-control companyname" placeholder="Nome da sua empresa" autoComplete="off" />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" className="form-control phone" placeholder="(11) 99999-9999" autoComplete="off" />
        </div>
        <div className="col-md-12">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" className="form-control message" rows="6" placeholder="Conte-nos sobre suas necessidades..." autoComplete="off" />
        </div>
        <div className="col-md-12 form-btn">
          <button type="submit" className="btn btn-md r-36 btn--theme hover--royal submit">Enviar</button>
        </div>
        <div className="col-md-12 contact-form-msg">
          <div className="sending-msg"><span className="loading"></span></div>
        </div>
      </form>
    </div>
  </div>
);

export default ContactForm;
