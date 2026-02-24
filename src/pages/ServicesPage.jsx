const ServicesPage = () => (
  <div id="services-page">
    <section
      id="services-hero"
      className="pt-270 pb-140 bg--fixed page-hero-section division"
      style={{ padding: "400px 0", marginTop: "80px" }}
    ></section>

    <section className="pt-120 pb-120 service-page-section division">
      <div className="container-xxl">
        <div className="d-flex">
          {/* SIDEBAR */}
          <aside
            className="col-lg-4 position-sticky"
            style={{ top: "120px" }}
            id="services-sidebar"
          >
            <div id="sidebar">
              {/* SIDEBAR MENU */}
              <div className="sidebar-menu darker-old-lace r-14">
                <h4 className="fs-25">Serviços</h4>
                <ul className="menu-list ico-10 color--bruswick-green">
                  <li>
                    <h5 className="fs-19">
                      <a href="#telepsicologia">Telepsicologia</a>
                    </h5>
                    <span className="flaticon-next"></span>
                  </li>
                  <li>
                    <h5 className="fs-19">
                      <a href="#conformidade-nr1">Conformidade NR-1</a>
                    </h5>
                    <span className="flaticon-next"></span>
                  </li>
                  <li>
                    <h5 className="fs-19">
                      <a href="#consultoria">Consultoria em Saúde Mental</a>
                    </h5>
                    <span className="flaticon-next"></span>
                  </li>
                  <li>
                    <h5 className="fs-19">
                      <a href="#treinamentos">Treinamentos Corporativos</a>
                    </h5>
                    <span className="flaticon-next"></span>
                  </li>
                  <li>
                    <h5 className="fs-19">
                      <a href="#saas">Plataforma SaaS</a>
                    </h5>
                    <span className="flaticon-next"></span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="d-flex flex-column color--black" id="telepsicologia">
            {/* SERVICE DESCRIPTION */}
            <div className="txt-block">
              <h2 className="fs-48 color--rich-black">Telepsicologia</h2>
              {/* <div className="inner-img"> */}
              {/*   <img */}
              {/*     className="img-fluid r-20" */}
              {/*     src="images/ophthalmology-service.jpg" */}
              {/*     alt="service-image" */}
              {/*   /> */}
              {/* </div> */}
              <p>
                A telepsicologia é o nosso principal recurso para levar apoio
                psicológico aos colaboradores de forma acessível e prática. Por
                meio da nossa plataforma, profissionais da psicologia
                credenciados realizam atendimentos individuais ou em grupo, com
                total sigilo e respaldo ético.
              </p>

              <p>
                Essa modalidade permite que o colaborador tenha suporte
                emocional sem precisar sair do ambiente de trabalho ou de casa,
                reduzindo barreiras geográficas e custos para a empresa. Além
                disso, a telepsicologia possibilita acompanhamento contínuo,
                tornando-se uma ferramenta essencial na prevenção do adoecimento
                mental e no fortalecimento do bem-estar corporativo.
              </p>
            </div>

            <hr id="conformidade-nr1" className="divisor py-60" />

            <div className="txt-block">
              <h2 className="fs-48 color--rich-black">Conformidade NR-1</h2>
              <p>
                A Norma Regulamentadora NR-1 estabelece diretrizes obrigatórias
                relacionadas à saúde e segurança do trabalhador. Muitas empresas
                ainda não sabem, mas os aspectos psicossociais – como estresse,
                ansiedade e riscos relacionados ao ambiente de trabalho – também
                fazem parte dessa exigência.
              </p>

              <p>
                Nosso app ajuda sua empresa a estar em conformidade com a NR-1,
                oferecendo:
              </p>

              <ul className="services-list">
                <li>
                  <span className="flaticon-check-2"></span>
                  Avaliação psicossocial dos colaboradores;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>
                  Relatórios completos que identificam fatores de risco;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Recomendações
                  práticas para gestores e RH;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>
                  Documentação que auxilia a reduzir riscos de passivos
                  trabalhistas.
                </li>
              </ul>
            </div>

            <hr id="consultoria" className="divisor py-60" />

            <div className="txt-block">
              <h2 className="fs-48 color--rich-black">
                Consultoria em Saúde Mental
              </h2>
              <p>
                Cada empresa possui desafios únicos quando o assunto é saúde
                mental no ambiente de trabalho. Nossa consultoria especializada
                oferece uma visão estratégica para identificar pontos críticos,
                mapear riscos e implementar soluções eficazes.
              </p>

              <p>Atuamos lado a lado com a liderança e o RH para:</p>

              <ul className="services-list">
                <li>
                  <span className="flaticon-check-2"></span>Desenvolver
                  políticas de bem-estar alinhadas às necessidades da
                  organização;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Reduzir afastamentos
                  e absenteísmo;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Melhorar o clima
                  organizacional e a produtividade;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Promover uma cultura
                  de cuidado e respeito à saúde emocional.
                </li>
              </ul>
            </div>

            <hr id="treinamentos" className="divisor py-60" />

            <div className="txt-block">
              <h2 className="fs-48 color--rich-black">
                Treinamentos Corporativos
              </h2>
              <p>
                Investir em treinamentos é investir no crescimento e na saúde da
                equipe. Oferecemos programas de capacitação sob medida para
                líderes, gestores e colaboradores, com foco em temas
                fundamentais, como:
              </p>

              <ul className="services-list">
                <li>
                  <span className="flaticon-check-2"></span>Inteligência
                  emocional e resiliência;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Gestão de conflitos
                  e comunicação assertiva;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Prevenção do
                  estresse e do burnout;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Liderança humanizada
                  e motivadora.
                </li>
              </ul>

              <p>
                Os treinamentos podem ser realizados de forma presencial ou
                online, garantindo flexibilidade. Eles não apenas desenvolvem
                habilidades, mas também fortalecem a cultura organizacional,
                tornando os colaboradores mais preparados para enfrentar os
                desafios do dia a dia.
              </p>
            </div>

            <hr id="saas" className="divisor py-60" />

            <div className="txt-block">
              <h2 className="fs-48 color--rich-black">Plataforma SaaS</h2>
              <p>
                Nosso diferencial é oferecer uma plataforma SaaS (Software as a
                Service) completa, que coloca a saúde mental em primeiro plano
                na gestão corporativa.
              </p>

              <p>Com ela, sua empresa pode:</p>

              <ul className="services-list">
                <li>
                  <span className="flaticon-check-2"></span>Gerenciar
                  atendimentos psicológicos de forma prática e segura;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Acompanhar
                  indicadores de saúde mental dos colaboradores;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Emitir relatórios
                  psicossociais conforme exigências legais;
                </li>
                <li>
                  <span className="flaticon-check-2"></span>Centralizar
                  treinamentos, avaliações e planos de ação em um só lugar.
                </li>
              </ul>

              <p>
                A plataforma foi desenvolvida pensando na simplicidade de uso e
                na segurança dos dados, garantindo que gestores tenham uma visão
                clara e estratégica, enquanto os colaboradores recebem
                atendimento humanizado e acessível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
