const AboutOption = ({ title, text }) => (
  <div className="cbox-1">
    <div className="ico-wrap color--green">
      <div className="cbox-1-ico">
        <span className="flaticon-check-2"></span>
      </div>
    </div>
    <div className="cbox-1-txt">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default AboutOption;
