import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import FooterSection from "./components/footer/FooterSection.jsx";
import WhatsappSticky from "./components/WhatsappSticky.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/legal/TermsOfUse.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/servicos" element={<ServicesPage />} />
      </Routes>

      <FooterSection />
      <WhatsappSticky />
    </Router>
  );
}

export default App;
