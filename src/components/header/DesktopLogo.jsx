const DesktopLogo = ({ logoLight, logoDark }) => (
  <>
    <div className="desktoplogo">
      <a href="/" className="logo-black">
        <img src={logoLight} alt="logo" />
      </a>
    </div>

    <div className="desktoplogo">
      <a href="/" className="logo-black">
        <img className="logo-white" src={logoDark} alt="logo" />
      </a>
    </div>
  </>
);

export default DesktopLogo;
