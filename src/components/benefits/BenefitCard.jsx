const BenefitCard = ({ id, icon, title, text, highlight }) => {
  const iconPath = new URL(`../../assets/images/icons/${icon}`, import.meta.url).href;

  // Derivar os ids para os ícones e spans com base no id principal
  const iconId = `card-${id.replace('sb-', '')}-icon`;
  const spanId = `card-${id.replace('sb-', '')}-span`;

  return (
    <div className="col-md-6 col-lg-3">
      <div id={id} className="sbox-5 block--shadow r-20 wow animate__animated animate__fadeInUp animate__delay-1">
        <div className="mb-30">
          <img
            src={iconPath}
            className="r-20 beneficios-icon"
            id={iconId}
            alt=""
            width="40"
            height="40"
          />
        </div>
        <h5 className="fs-20 color--coal">{title}</h5>
        <p className="fs-15">{text}</p>
        <div className="sbox-ico ico-65 color--green">
          <span id={spanId} className="r-10 beneficios-span">{highlight}</span>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
