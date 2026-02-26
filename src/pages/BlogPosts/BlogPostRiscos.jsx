const BlogPostRiscos = () => {
    return (
        <div id="page" className="page">
            <section className="bg--white py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="post-meta mb-40 text-center">
                                <span className="badge bg-warning mb-2" style={{ backgroundColor: '#F0AD4E' }}>Gestão</span>
                                <h1 className="s-48 w-700" style={{ color: "#0A5046" }}>Gestão de Riscos Psicossociais no Trabalho</h1>
                                <p className="p-md mt-20" style={{ color: "#7AB49E" }}>Publicado em 05 de Abril de 2024 • Por Equipe MentoraMed</p>
                            </div>

                            <div className="post-featured-img mb-60">
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
                                    alt="Gestão de Riscos"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                                />
                            </div>

                            <div className="post-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.1rem" }}>
                                <p className="lead">
                                    Identificar riscos psicossociais é o primeiro passo para uma cultura de prevenção real. Saiba como mapear esses indicadores na sua organização.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046" }}>O que são riscos psicossociais?</h3>
                                <p>
                                    São aspectos do design, organização e gestão do trabalho que têm o potencial de causar danos físicos ou psicológicos. Eles incluem desde o ambiente físico até as relações interpessoais.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046" }}>Como gerenciar?</h3>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Mapeamento:</strong> Aplicação de pesquisas de clima e saúde mental.</li>
                                    <li className="mb-2"><strong>Análise:</strong> Cruzamento de dados de faltas, produtividade e feedback direto.</li>
                                    <li className="mb-2"><strong>Plano de Ação:</strong> Intervenções focadas na melhoria de processos e suporte individual.</li>
                                </ul>

                                <div className="cta-box mt-80 p-50 rounded-4 text-center" style={{ backgroundColor: "#f2f7f8", border: "1px solid #7AB49E" }}>
                                    <h4 className="w-700 mb-20" style={{ color: "#0A5046" }}>Deseja um mapeamento completo dos riscos da sua empresa?</h4>
                                    <p className="mb-30">Nossa plataforma SaaS automatiza a coleta e análise de dados psicossociais.</p>
                                    <a href="/#contato" className="btn btn--tra-black hover--theme" style={{ backgroundColor: '#0A5046', color: '#fff', padding: '12px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
                                        Agendar Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostRiscos;
