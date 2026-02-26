const BlogPage = () => {
    const posts = [
        {
            title: "NOVA NR-1 2025",
            fullTitle: "NR-1 e Saúde Mental: O que Muda em 2025?",
            desc: "Entenda a obrigatoriedade dos riscos psicossociais no PGR e como preparar sua empresa.",
            link: "/blog/nova-nr1",
            color: "#0A5046",
            textColor: "#f2f7f8"
        },
        {
            title: "NR-1 EM FOCO",
            fullTitle: "IMPLEMENTAÇÃO DA NR-1: O QUE MUDOU EM 2024?",
            desc: "Entenda as exigências da norma e como sua empresa se adequou às mudanças mais recentes.",
            link: "/blog/nr1-2024",
            color: "#7AB49E",
            textColor: "#0A5046"
        },
        {
            title: "BEM-ESTAR",
            fullTitle: "GESTÃO DE RISCOS PSICOSSOCIAIS",
            desc: "Saiba como identificar e mitigar os principais riscos à saúde mental dos seus colaboradores.",
            link: "/blog/riscos-psicossociais",
            color: "#f2f7f8",
            textColor: "#8cb588",
            border: "1px solid #7AB49E"
        },
        {
            title: "PAUSA",
            fullTitle: "SUA MENTE PRECISA DE PAUSA",
            desc: "Entenda a importância fisiológica do descanso estratégico para a produtividade.",
            link: "/blog/pausa",
            color: "#0A5046",
            textColor: "#f2f7f8"
        }
    ];

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
                        {posts.map((post, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-40">
                                <div className="blog-grid-card h-100 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
                                    <div className="blog-grid-card-img" style={{
                                        height: '220px',
                                        backgroundColor: post.color,
                                        border: post.border || 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: '20px'
                                    }}>
                                        <h3 style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1.2', color: post.textColor }}>{post.title}</h3>
                                    </div>
                                    <div className="blog-grid-card-content p-30" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <span className="blog-grid-badge mb-15" style={{ fontSize: '12px', fontWeight: '700', color: '#7AB49E', textTransform: 'uppercase' }}>Artigo</span>
                                        <h5 className="blog-grid-title mb-15" style={{ fontSize: '18px', fontWeight: '700', color: '#0A5046', minHeight: '54px' }}>{post.fullTitle}</h5>
                                        <p className="blog-grid-desc mb-20" style={{ fontSize: '15px', color: '#666', flexGrow: 1 }}>{post.desc}</p>
                                        <a href={post.link} className="btn-link" style={{ color: '#0A5046', fontWeight: '700', textDecoration: 'none', borderBottom: '2px solid #7AB49E', alignSelf: 'flex-start' }}>Ler mais</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
