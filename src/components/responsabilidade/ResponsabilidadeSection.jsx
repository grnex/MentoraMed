import ResponsabilidadeImage from './ResponsabilidadeImage';
import ResponsabilidadeIntro from './ResponsabilidadeIntro';
import ResponsabilidadeBox from './ResponsabilidadeBox';
import ResponsabilidadeData from './ResponsabilidadeData';

const ResponsabilidadeSection = () => (
  <section className="ct-06 ws-wrapper content-section division mt-120" id="about">
    <div className="container-xxl">
      <div className="ct-06-wrapper r-20 bg--07 bg--fixed">
        <div className="row d-flex align-items-end">
          <ResponsabilidadeImage />
          <div className="col-lg-6 order-last order-lg-2 wow animate__animated animate__fadeInLeft">
            <div className="ct-06-txt color--white right-column" style={{ paddingBottom: '30px' }}>
              <ResponsabilidadeIntro />
              {ResponsabilidadeData.map((item, index) => (
                <ResponsabilidadeBox key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResponsabilidadeSection;
