import AboutText from './AboutText';
import AboutImage from './AboutImage';

const AboutSection = () => (
  <section className="ct-06 ws-wrapper content-section division" id="quem-somos">
    <div className="container-xxl">
      <div className="ct-06-wrapper r-20 bg--07 bg--fixed">
        <div className="row d-flex align-items-end">
          <AboutText />
          <AboutImage />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
