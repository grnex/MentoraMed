import Header from "../components/header/Header.jsx";
import FooterSection from "../components/footer/FooterSection.jsx";
import "./BlogPage.css"; // Estilos customizados da Content Grid

const BlogPage = () => {
    return (
        <div id="page" className="page">
            <section className="bg--old-lace py-100" style={{ backgroundColor: "#f2f7f8" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title text-center mb-60">
                                <h2 className="s-52 w-700" style={{ color: "#0A5046" }}>Nosso Blog</h2>
                                <p className="p-lg" style={{ color: "#7AB49E" }}>Fique por dentro das atualizações, notícias e dicas sobre saúde mental e NR-1.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Card 1 */}
                        <div className="col-md-6 mb-40">
                            <div className="blog-grid-card">
                                <div className="blog-grid-card-img" style={{ backgroundColor: '#0A5046' }}>
                                    {/* Usando cores de base onde imagens de placeholder poderiam estar para já dar o tom visual. O usuário pode depois substituir os placeholders por imagens reais */}
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0A5046', color: '#f2f7f8', textAlign: 'center', padding: '20px' }}>
                                        <h3 style={{ fontSize: '30px', fontWeight: '800', lineHeight: '1.1' }}>SUA MENTE<br />PRECISA<br />DE PAUSA</h3>
                                    </div>
                                </div>
                                <div className="blog-grid-card-content">
                                    <span className="blog-grid-badge">ARTICLE</span>
                                    <h5 className="blog-grid-title">PAUSA</h5>
                                    <p className="blog-grid-desc">SUA MENTE PRECISA DE PAUSA</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6 mb-40">
                            <div className="blog-grid-card">
                                <div className="blog-grid-card-img" style={{ backgroundColor: '#8cb588' }}>
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#8cb588', backgroundImage: 'url("https://via.placeholder.com/600x400/8cb588/0a5046?text=Burnout+e+Stress")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                </div>
                                <div className="blog-grid-card-content">
                                    <span className="blog-grid-badge">ARTICLE</span>
                                    <h5 className="blog-grid-title">BURNOUT E STRESS: COMO A EMPRESA PODE FAZER A DIFERENÇA</h5>
                                    <p className="blog-grid-desc" style={{ textTransform: 'none' }}>O burnout não é apenas um cansaço físico, mas um esgotamento mental que afeta toda a empresa. Saiba como agir e como a MentoraMed é sua aliada.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-6 mb-40">
                            <div className="blog-grid-card">
                                <div className="blog-grid-card-img" style={{ backgroundColor: '#7AB49E' }}>
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7AB49E', color: '#0A5046', textAlign: 'center', padding: '20px' }}>
                                        <h3 style={{ fontSize: '30px', fontWeight: '800', lineHeight: '1.1' }}>NR-1 EM FOCA<br />E SAÚDE MENTAL</h3>
                                    </div>
                                </div>
                                <div className="blog-grid-card-content">
                                    <span className="blog-grid-badge">ARTICLE</span>
                                    <h5 className="blog-grid-title">IMPLEMENTAÇÃO DA NR-1: O QUE MUDOU EM 2024?</h5>
                                    <p className="blog-grid-desc" style={{ textTransform: 'none' }}>Entenda as novas exigências da norma e como sua empresa pode se adequar rapidamente às mudanças mais recentes.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-6 mb-40">
                            <div className="blog-grid-card">
                                <div className="blog-grid-card-img" style={{ backgroundColor: '#f2f7f8' }}>
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f7f8', color: '#8cb588', textAlign: 'center', padding: '20px' }}>
                                        <h3 style={{ fontSize: '30px', fontWeight: '800', lineHeight: '1.1' }}>BEM-ESTAR<br />COOPERATIVO</h3>
                                    </div>
                                </div>
                                <div className="blog-grid-card-content">
                                    <span className="blog-grid-badge">ARTICLE</span>
                                    <h5 className="blog-grid-title">GESTÃO DE RISCOS PSICOSSOCIAIS</h5>
                                    <p className="blog-grid-desc" style={{ textTransform: 'none' }}>Saiba como identificar e mitigar os principais riscos à saúde mental dos seus colaboradores e criar uma cultura saudável.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
