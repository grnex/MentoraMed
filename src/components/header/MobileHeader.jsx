const MobileHeader = ({ logo }) => (
  <div className="wsmobileheader clearfix no-header-strip">
    <span className="smllogo">
      <a href="#sobre"><img src={logo} alt="mobile-logo" /></a>
    </span>
    <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
  </div>
);

export default MobileHeader;
