const DesktopLogo = ({ logoLight, logoDark }) => (
  <div className="desktoplogo" style={{ display: 'flex', alignItems: 'center' }}>
    <a href="/" className="logo-black">
      <img src={logoLight} alt="logo" />
    </a>
    <a href="/" className="logo-black">
      <img className="logo-white" src={logoDark} alt="logo" />
    </a>
  </div>
);

export default DesktopLogo;
