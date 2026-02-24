import AboutOption from './AboutOption';

const AboutText = () => (
  <div className="col-lg-6 order-last order-lg-2 wow animate__animated animate__fadeInRight">
    <div className="ct-06-txt color--white right-column">
      <h2 className="fs-48">Quem Somos</h2>

      <div className="cbox-1">
        <div className="cbox-1-txt">
          <p>
            Uma empresa visionária que chegou para redefinir os padrões de excelência no setor de saúde mental.
          </p>
          <p>
            Somos uma plataforma SaaS, com soluções 100% em nuvem — seguras, acessíveis e sem necessidade de instalação.
          </p>
        </div>
      </div>

      <div className="row cbox-1-wrapper">
        <AboutOption
          title="Nossa Missão"
          text="Transformar a saúde mental nas empresas através da inovação, oferecendo soluções de psicologia que elevam o bem-estar dos colaboradores e superam as expectativas dos gestores, estabelecendo novos padrões de qualidade no cuidado com as pessoas."
        />
        <AboutOption
          title="Nossos Valores"
          text="Excelência, inovação e compromisso com a vida. Cada decisão que tomamos é guiada pela busca incansável de resultados que beneficiem tanto os colaboradores quanto os líderes das empresas."
        />
        <AboutOption
          title="Nossa Visão"
          text="Ser reconhecida como a principal referência em soluções de saúde mental corporativa, combinando expertise em psicologia e tecnologia para oferecer experiências que encantem gestores e promovam o bem-estar de todos os colaboradores."
        />
      </div>
    </div>
  </div>
);

export default AboutText;
