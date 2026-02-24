const ResponsabilidadeBox = ({ number, title, text }) => (
  <div className="cbox-3 process-step">
    <div className="ico-wrap">
      <div className="cbox-3-ico bg--blue color--rich-black">{number}</div>
      {number !== '3' && <span className="cbox-3-line"></span>}
    </div>
    <div className="cbox-3-txt">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default ResponsabilidadeBox;
