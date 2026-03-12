import PreloadSpinner from "../components/PreloadSpinner.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import BrandsSection from "../components/brands/BrandsSection.jsx";
import NR1Section from "../components/nr1/NR1Section.jsx";
import ResponsabilidadeSection from "../components/responsabilidade/ResponsabilidadeSection.jsx";
import FAQSection from "../components/faq/FAQSection.jsx";
import ServicesSection from "../components/services/ServicesSection.jsx";
import BenefitsSection from "../components/benefits/BenefitsSection.jsx";
import FAQNR1Section from "../components/faqnr1/FAQNR1Section.jsx";
import BlogLandingSection from "../components/blog/BlogLandingSection.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";

function LandingPage() {
  return (
    <div id="page" className="page">
      <PreloadSpinner />
      <Hero />
      <AboutSection />
      <NR1Section />
      <ResponsabilidadeSection />
      <FAQSection />
      <ServicesSection />
      <BenefitsSection />
      <FAQNR1Section />
      <BlogLandingSection />
      <ContactSection />
      <BrandsSection />
    </div>
  );
}

export default LandingPage;
