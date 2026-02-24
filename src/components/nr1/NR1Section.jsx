import NR1Intro from './NR1Intro';
import NR1Benefit from './NR1Benefit';
import nr1BenefitsData from './nr1BenefitsData';

const NR1Section = () => (
  <section className="bg--04 bg--fixed banner-2 banner-section division" id="nr-1">
    <div className="container-xxl">
      <div className="row justify-content-center">
        <NR1Intro />
        <div className="row text-center wow animate__animated animate__fadeInUp">
          {nr1BenefitsData.map((item, index) => (
            <NR1Benefit key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NR1Section;
