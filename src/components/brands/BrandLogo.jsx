import React from 'react';

const BrandLogo = ({ id, src, link }) => {
  const imagePath = new URL(`../../assets/images/brand_logos/${src}`, import.meta.url).href;

  return (
    <div className="col">
      <div id={id} className="brand-logo">
        {link ? (
          <a href={link}>
            <img className="img-fluid" src={imagePath} alt="brand-logo" />
          </a>
        ) : (
          <img className="img-fluid" src={imagePath} alt="brand-logo" />
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
