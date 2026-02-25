import Header from "../components/header/Header.jsx";
import FooterSection from "../components/footer/FooterSection.jsx";

const BlogPage = () => {
    return (
        <div id="page" className="page">
            <section className="bg--old-lace py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title text-center mb-60">
                                <h2 className="s-52 w-700">Nosso Blog</h2>
                                <p className="p-lg">Fique por dentro das atualizações, notícias e dicas sobre saúde mental e NR-1.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Exemplo de Card de Blog */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post mb-40">
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x400" alt="blog-post-image" />
                                </div>
                                <div className="blog-post-txt">
                                    <h5 className="s-24 w-700">Implementação da NR-1: O que mudou em 2024?</h5>
                                    <p className="p-md">Entenda as novas exigências da norma e como sua empresa pode se adequar rapidamente...</p>
                                    <a href="#" className="btn btn--tra-black hover--theme mt-20">Ler mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post mb-40">
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x400" alt="blog-post-image" />
                                </div>
                                <div className="blog-post-txt">
                                    <h5 className="s-24 w-700">Gestão de Riscos Psicossociais</h5>
                                    <p className="p-md">Saiba como identificar e mitigar os principais riscos à saúde mental dos seus colaboradores...</p>
                                    <a href="#" className="btn btn--tra-black hover--theme mt-20">Ler mais</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post mb-40">
                                <div className="blog-post-img">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x400" alt="blog-post-image" />
                                </div>
                                <div className="blog-post-txt">
                                    <h5 className="s-24 w-700">Bem-estar Cooperativo</h5>
                                    <p className="p-md">A importância de uma cultura organizacional voltada para o cuidado e acolhimento humano...</p>
                                    <a href="#" className="btn btn--tra-black hover--theme mt-20">Ler mais</a>
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
