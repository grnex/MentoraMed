const BlogPostNR1 = () => {
    return (
        <div id="page" className="page">

            <section className="bg--white py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">

                            {/* Meta Informações */}
                            <div className="post-meta mb-40 text-center">
                                <span className="badge bg-success mb-2" style={{ backgroundColor: '#0A5046' }}>NR-1</span>
                                <h1 className="s-48 w-700" style={{ color: "#0A5046" }}>NR-1 e Saúde Mental: O que Muda em 2025?</h1>
                                <p className="p-md mt-20" style={{ color: "#7AB49E" }}>Publicado em 25 de Fevereiro de 2026 • Por Equipe MentoraMed</p>
                            </div>

                            {/* Imagem de Capa */}
                            <div className="post-featured-img mb-60">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                                    alt="NR-1 e Saúde Mental"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Conteúdo do Post */}
                            <div className="post-content" style={{ color: "#444", lineHeight: "1.8", fontSize: "1.1rem" }}>
                                <p className="lead" style={{ fontWeight: '500' }}>
                                    A atualização da <strong>Norma Regulamentadora nº 1 (NR-1)</strong> estabelece um novo marco para o mercado corporativo brasileiro. A partir de 2025, a gestão de <strong>riscos psicossociais</strong> torna-se obrigatória dentro do Programa de Gerenciamento de Riscos (PGR).
                                </p>

                                <p>
                                    Na MentoraMed, ajudamos sua organização a realizar essa transição de forma estruturada, garantindo conformidade legal e proteção ao capital humano. Confira a seguir os pontos principais desta mudança.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046", fontWeight: "700" }}>1. Atualização da NR-1 e os Riscos Psicossociais</h3>
                                <p>
                                    A NR-1 rege o Gerenciamento de Riscos Ocupacionais (GRO). Com a atualização, o <strong>PGR (Programa de Gerenciamento de Riscos)</strong> deve agora contemplar obrigatoriamente os fatores psicossociais.
                                </p>

                                <p><strong>O que deve ser monitorado:</strong></p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Organização do trabalho:</strong> Sobrecarga de tarefas e metas irreais.</li>
                                    <li className="mb-2"><strong>Relações interpessoais:</strong> Casos de assédio, violência psicológica ou falta de suporte.</li>
                                    <li className="mb-2"><strong>Conteúdo das tarefas:</strong> Falta de clareza de papéis e autonomia reduzida.</li>
                                </ul>
                                <p>
                                    O objetivo é identificar preventivamente fatores que levam ao estresse crônico, ansiedade e ao Burnout, integrando-os ao PGR como riscos ocupacionais reais.
                                </p>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046", fontWeight: "700" }}>2. Por que a conformidade é urgente</h3>
                                <p>
                                    Ignorar as diretrizes da nova NR-1 traz riscos imediatos que vão além da saúde do colaborador:
                                </p>

                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Impacto Financeiro:</strong> O descumprimento pode elevar o Fator Acidentário de Prevenção (FAP), aumentando a carga tributária previdenciária da empresa.</li>
                                    <li className="mb-2"><strong>Riscos Jurídicos:</strong> Aumento de ações trabalhistas e custos com indenizações relacionadas a doenças mentais ocupacionais.</li>
                                    <li className="mb-2"><strong>Fiscalização:</strong> Embora haja um período educativo até maio de 2026, a ausência de um plano de ação estruturado já prejudica auditorias e indicadores de ESG.</li>
                                </ul>

                                <h3 className="mt-50 mb-20" style={{ color: "#0A5046", fontWeight: "700" }}>3. Benefícios e ROI da Saúde Mental Corporativa</h3>
                                <p>
                                    Cuidar da saúde mental não é apenas uma obrigação, mas um investimento estratégico com retorno direto (ROI):
                                </p>

                                <ul style={{ paddingLeft: '20px' }}>
                                    <li className="mb-2"><strong>Redução de custos:</strong> Diminuição no turnover (rotatividade) e no absenteísmo (faltas).</li>
                                    <li className="mb-2"><strong>Performance:</strong> Aumento do engajamento e da produtividade das equipes.</li>
                                    <li className="mb-2"><strong>Cultura Saudável:</strong> Melhoria no clima organizacional e na segurança psicológica.</li>
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

export default BlogPostNR1;
