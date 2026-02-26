import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import FooterSection from "./components/footer/FooterSection.jsx";
import WhatsappSticky from "./components/WhatsappSticky.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/legal/TermsOfUse.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BlogPage from "./pages/BlogPosts/BlogPage.jsx";
import BlogPostNR1 from "./pages/BlogPosts/BlogPostNR1.jsx";
import BlogPostPausa from "./pages/BlogPosts/BlogPostPausa.jsx";
import BlogPostNR1_2024 from "./pages/BlogPosts/BlogPostNR1_2024.jsx";
import BlogPostRiscos from "./pages/BlogPosts/BlogPostRiscos.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/nova-nr1" element={<BlogPostNR1 />} />
        <Route path="/blog/pausa" element={<BlogPostPausa />} />
        <Route path="/blog/nr1-2024" element={<BlogPostNR1_2024 />} />
        <Route path="/blog/riscos-psicossociais" element={<BlogPostRiscos />} />
      </Routes>

      <FooterSection />
      <WhatsappSticky />
    </Router>
  );
}

export default App;
