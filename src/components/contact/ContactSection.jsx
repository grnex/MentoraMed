import ContactHero from './ContactHero.jsx';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <>
    <ContactHero />
    <section className="pt-120 pb-70 contact-1 contact-section division" id="contato">
      <div className="container-xxl">
        <div className="contact-1-wrapper">
          <div className="row">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactSection;
