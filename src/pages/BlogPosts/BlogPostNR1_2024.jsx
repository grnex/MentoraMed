const BlogPostNR1_2024 = () => {
    return (
        <div id="page" className="page">
            <section className="bg--white py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="post-meta mb-40 text-center">
                                <span className="badge bg-secondary mb-2" style={{ backgroundColor: '#8cb588' }}>Legislação</span>
                                <h1 className="s-48 w-700" style={{ color: "#0A5046" }}>Implementação da NR-1: O que Mudou em 2024?</h1>
                                <p className="p-md mt-20" style={{ color: "#7AB49E" }}>Publicado em 15 de Fevereiro de 2024 • Por Equipe MentoraMed</p>
                            </div>

                            <div className="post-featured-img mb-60">
                                <img
                                    src="https://images.unsplash.com/photo-1454165833767-027ffea702be?q=80&w=1200&auto=format&fit=crop"
                                    alt="NR-1 2024"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                                />
                            </div>

                            <div className="post-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.1rem" }}>
                                <p className="lead">
                                    O ano de 2024 consolidou a transição para o Gerenciamento de Riscos Ocupacionais (GRO) e a digitalização dos processos de segurança e saúde no trabalho.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046" }}>Destaques da implementação:</h3>
                                <p>
                                    As principais mudanças focaram na integração de dados e na necessidade de um inventário de riscos robusto, onde a saúde mental começou a ganhar espaço nas avaliações ergonômicas.
                                </p>

                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Digitalização:</strong> Envio de informações via eSocial tornou-se crítico.</li>
                                    <li className="mb-2"><strong>Avaliação de Riscos:</strong> Foco em perigos reais, não apenas conformidade documental.</li>
                                    <li className="mb-2"><strong>Treinamentos:</strong> Exigência de métodos que garantam a absorção do conhecimento.</li>
                                </ul>

                                <div className="cta-box mt-80 p-50 rounded-4" style={{ backgroundColor: "#FFF8E1", border: "1px solid #0A5046" }}>
                                    <p className="mb-20">Quer saber mais sobre como implementar uma cultura de prevenção na sua empresa? Entre em contato com a equipe MentoraMed e descubra como podemos ajudar.</p>
                                    <a href="/#contato" className="btn" style={{ backgroundColor: '#0A5046', color: '#fff', padding: '12px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                                        Fale com um especialista
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

export default BlogPostNR1_2024;
