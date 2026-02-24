import brandsData from './brandsData';
import BrandLogo from './BrandLogo';

const BrandsSection = () => (
  <div className="py-120 brands-4 brands-section division">
    <div className="container-xxl darker-old-lace r-20 py-30 pb-60">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="brands-title">
            <h5 className="fs-28">Nossos Clientes</h5>
          </div>
        </div>
      </div>

      <div className="brands-4-wrapper">
        <div className="row row-cols-2 row-cols-md-4">
          {brandsData.map((brand) => (
            <BrandLogo key={brand.id} {...brand} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BrandsSection;
