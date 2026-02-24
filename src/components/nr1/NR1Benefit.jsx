const NR1Benefit = ({ icon, title, text }) => {
  const iconPath = new URL(`../../assets/images/icons/${icon}`, import.meta.url).href;

  return (
    <div className="col-md-4 mb-4">
      <div className="p-4c bg-white shadow rounded">
        <div className="mb-3">
          <img src={iconPath} alt="" width="40" height="40" />
        </div>
        <h5 className="fw-bold mb-30">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NR1Benefit;
