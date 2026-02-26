const BlogPostPausa = () => {
    return (
        <div id="page" className="page">
            <section className="bg--white py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="post-meta mb-40 text-center">
                                <span className="badge bg-info mb-2" style={{ backgroundColor: '#7AB49E' }}>Bem-estar</span>
                                <h1 className="s-48 w-700" style={{ color: "#0A5046" }}>Sua Mente Precisa de Pausa: A Ciência do Descanso</h1>
                                <p className="p-md mt-20" style={{ color: "#7AB49E" }}>Publicado em 10 de Janeiro de 2026 • Por Equipe MentoraMed</p>
                            </div>

                            <div className="post-featured-img mb-60">
                                <img
                                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
                                    alt="Mente em Pausa"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                                />
                            </div>

                            <div className="post-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.1rem" }}>
                                <p className="lead">
                                    Em um mundo hiperconectado, a pausa não é um luxo, mas uma necessidade fisiológica. O descanso estratégico é a chave para manter a alta performance sem comprometer a saúde mental.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046" }}>Por que pausar é produtivo?</h3>
                                <p>
                                    Estudos mostram que o cérebro humano não foi projetado para manter o foco total por períodos superiores a 90-120 minutos. Pausas curtas ajudam a restaurar a atenção e prevenir a "fadiga de decisão".
                                </p>

                                <h3 className="mt-40 mb-20" style={{ color: "#0A5046" }}>Dicas para pausas efetivas:</h3>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Micro-pausas:</strong> 2 a 5 minutos a cada hora para alongar ou beber água.</li>
                                    <li className="mb-2"><strong>Desconexão Digital:</strong> Afaste-se das telas durante o intervalo de almoço.</li>
                                    <li className="mb-2"><strong>Natureza:</strong> Se possível, olhe para o verde ou sinta a luz do sol; isso reduz os níveis de cortisol.</li>
                                </ul>

                                <div className="cta-box mt-80 p-50 rounded-4 text-center" style={{ backgroundColor: "#f2f7f8", border: "1px solid #7AB49E" }}>
                                    <h4 className="w-700 mb-20" style={{ color: "#0A5046" }}>Quer implementar uma cultura de bem-estar?</h4>
                                    <p className="mb-30">A MentoraMed ajuda sua empresa a criar ambientes que valorizam o equilíbrio.</p>
                                    <a href="/#contato" className="btn btn--tra-black hover--theme" style={{ backgroundColor: '#0A5046', color: '#fff', padding: '12px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
                                        Ver Soluções
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

export default BlogPostPausa;
