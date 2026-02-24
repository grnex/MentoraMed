const TermsOfUse = () => (
  <section id="termos-de-uso" className="pt-230 pb-120 legal-page division">
    <div className="container">
      {/* SECTION TITLE */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7">
          <div className="section-title title-01 mb-60">
            {/* TITLE */}
            <h2 className="fs-54">Termos de Uso</h2>

            {/* Text */}
            <p className="fs-18">
              Última atualização: <span>03 de setembro de 2025</span>
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
              Bem-vindo ao <b>MentoraMed</b>, uma plataforma digital de{" "}
              <strong>saúde mental corporativa</strong> voltada para auxiliar
              empresas no cumprimento da <b>Lei NR-01</b> e na promoção do
              bem-estar de seus colaboradores.
            </p>

            <p>
              Ao utilizar o aplicativo MentoraMed, você declara ter lido,
              compreendido e concordado com os presentes Termos de Uso. Caso não
              esteja de acordo, recomendamos que não utilize a plataforma.
            </p>

            {/* Small Title */}
            <h5 className="fs-28">
              <span>1.</span> Definições
            </h5>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                <b>Usuário</b>: toda pessoa física que acessa e utiliza o
                aplicativo.
              </li>
              <li className="list-item">
                <b>Cliente</b>: empresas ou organizações que contratam o
                serviço.
              </li>
              <li className="list-item">
                <b>MentoraMed</b>: software de apoio em saúde mental e gestão de
                conformidade da NR-01.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>2.</span> Objeto
            </h5>

            {/* Text */}
            <p>
              O MentoraMed é um <b>Software as a Service (SaaS)</b> que
              disponibiliza recursos digitais para apoio psicológico, educação
              em saúde mental, acompanhamento corporativo e relatórios de
              conformidade legal.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>3.</span> Elegibilidade
            </h5>

            <p>
              O uso da plataforma é destinado a maiores de 18 anos ou a
              colaboradores indicados pela empresa contratante.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>4.</span> Cadastro
            </h5>

            <p>
              Para acessar determinadas funcionalidades, é necessário realizar
              um cadastro fornecendo informações verdadeiras, completas e
              atualizadas.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>5.</span> Responsabilidades
            </h5>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                O <b>Usuário</b> compromete-se a utilizar o aplicativo de forma
                ética, sem fins ilegais.
              </li>
              <li className="list-item">
                O <b>MentoraMed</b> não substitui consultas médicas,
                terapêuticas ou emergenciais.
              </li>
              <li className="list-item">
                O <b>Usuário</b> deve procurar ajuda especializada em casos de
                urgência psicológica.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>6.</span> Direitos Autorais
            </h5>

            {/* Text */}
            <p>
              Todos os conteúdos, marcas e tecnologias disponíveis no MentoraMed
              pertencem à empresa responsável e são protegidos pela legislação
              aplicável.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>7.</span> Limitação de Responsabilidade
            </h5>

            {/* Text */}
            <p>
              O MentoraMed não garante a ausência de falhas, interrupções ou
              erros técnicos, embora se comprometa a corrigi-los sempre que
              possível.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>8.</span> Cancelamento e Rescisão
            </h5>

            {/* List */}
            <ul className="simple-list">
              <li className="list-item">
                O Usuário pode encerrar sua conta a qualquer momento.
              </li>
              <li className="list-item">
                A empresa contratante poderá rescindir o contrato de acordo com
                as condições comerciais firmadas.
              </li>
            </ul>

            {/* Title */}
            <h5 className="fs-28">
              <span>9.</span> Alterações
            </h5>

            <p>
              Estes Termos podem ser alterados a qualquer momento, sendo a
              versão atual sempre publicada no aplicativo.
            </p>

            {/* Title */}
            <h5 className="fs-28">
              <span>10.</span> Foro
            </h5>

            <p>
              Fica eleito o foro da comarca de [sua cidade/estado], com renúncia
              de qualquer outro, para dirimir dúvidas oriundas destes Termos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TermsOfUse;
