const PrivacyPolicy = () => (
  <section
    id="politica-de-privacidade"
    className="pt-230 pb-120 legal-page division"
  >
    <div className="container">
      {/* SECTION TITLE */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7">
          <div className="section-title title-01 mb-60">
            {/* TITLE */}
            <h2 className="fs-54">Política de Privacidade</h2>

            {/* Text */}
            <p className="fs-18">
              Última Atualização: <span>3 de setembro de 2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div className="row justify-content-center">
        <div className="col-xl-11">
          <div className="txt-block legal-info">
            {/* Text */}
            <p>
              O MentoraMed valoriza a{" "}
              <strong>privacidade e proteção dos dados pessoais</strong> de seus
              usuários. Esta Política explica como coletamos, utilizamos,
              armazenamos e protegemos suas informações.
            </p>

            {/* Small Title */}
            <h5 className="fs-28">
              <span>1.</span> Informações Coletadas
            </h5>

            <p>Podemos coletar:</p>

            {/* List */}
            <p>
              <ul className="simple-list">
                <li className="list-item">
                  Dados cadastrais (nome, e-mail, telefone, empresa).
                </li>
                <li className="list-item">Informações de uso do aplicativo.</li>
                <li className="list-item">
                  Dados de saúde mental <strong>não sensíveis</strong>,
                  relacionados ao acompanhamento corporativo.
                </li>
              </ul>
            </p>

            <p>
              <b>Obs.:</b> Não coletamos dados médicos detalhados nem
              diagnósticos clínicos.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>2.</span> Finalidade
            </h5>

            {/* Text */}
            <p>Os dados coletados são utilizados para:</p>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                Oferecer acesso e personalização da plataforma.
              </li>
              <li className="list-item">
                Emitir relatórios corporativos de conformidade com a NR-01.
              </li>
              <li className="list-item">
                Melhorar a experiência do usuário e aprimorar serviços.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>3.</span> Compartilhamento
            </h5>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                Informações{" "}
                <strong>individuais nunca serão compartilhadas</strong> com a
                empresa contratante.
              </li>
              <li className="list-item">
                Relatórios corporativos são fornecidos apenas de forma{" "}
                <strong>agregada e anônima.</strong>
              </li>
              <li className="list-item">Dados não são vendidos a terceiros.</li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>4.</span> Armazenamento e Segurança
            </h5>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                Os dados são armazenados em servidores seguros, com
                criptografia.
              </li>
              <li className="list-item">
                Adotamos medidas técnicas e administrativas para proteger as
                informações.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>5.</span> Direitos do Usuário
            </h5>

            {/* Text */}
            <p>O usuário pode, a qualquer momento:</p>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">Solicitar acesso aos seus dados.</li>
              <li className="list-item">Corrigir ou atualizar informações.</li>
              <li className="list-item">
                Requerer exclusão definitiva de sua conta.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>6.</span> Cookies e tecnologias de rastreamento
            </h5>

            {/* Text */}
            <p>
              Podemos usar cookies para melhorar a experiência de navegação e
              personalização dos serviços.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>7.</span> Alterações
            </h5>

            {/* Text */}
            <p>
              Esta Política pode ser atualizada periodicamente, e o usuário será
              notificado em caso de mudanças relevantes.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>8.</span> Contato
            </h5>

            {/* Text */}
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade, entre em
              contato pelo e-mail:{" "}
              <a href="mailto:contato@mentoramed.com.br">
                contato@mentoramed.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
