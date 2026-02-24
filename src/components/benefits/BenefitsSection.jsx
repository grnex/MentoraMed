import BenefitsTitle from './BenefitsTitle';
import BenefitCard from './BenefitCard';
import BenefitsImage from './BenefitsImage';
import benefitsData from './benefitsData';

const BenefitsSection = () => (
  <section id="beneficios" className="py-120 services-5 services-section division">
    <div className="container-xxl">
      <BenefitsTitle />
      <div className="sbox-5-wrapper theme-green">
        <div className="row d-flex align-items-end">
          {benefitsData.slice(0, 2).map((item) => (
            <BenefitCard key={item.id} {...item} />
          ))}
          <BenefitsImage />
          {benefitsData.slice(2).map((item) => (
            <BenefitCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
