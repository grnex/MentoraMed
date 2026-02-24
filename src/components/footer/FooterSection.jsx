import FooterInfo from './FooterInfo';
import FooterServices from './FooterServices';
import FooterLinks from './FooterLinks';
import FooterContacts from './FooterContacts';
import FooterBottom from './FooterBottom';

const FooterSection = () => (
  <footer id="footer" className="bg--rich-black bg--fixed pt-120 footer-1 footer division">
    <div className="container-xxl color--old-lace">
      <div className="row">
        <FooterInfo />
        <FooterServices />
        <FooterLinks />
        <FooterContacts />
      </div>
      <hr />
      <FooterBottom />
    </div>
  </footer>
);

export default FooterSection;
