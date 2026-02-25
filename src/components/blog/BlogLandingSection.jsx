import React, { useState } from 'react';
import './BlogLandingSection.css';

const blogPosts = [
    {
        id: 1,
        category: "NR-1",
        title: "Implementação da NR-1: O que mudou em 2024?",
        description: "Entenda as novas exigências da norma e como sua empresa pode ser adequar rapidamente às mudanças mais recentes mantendo o bem-estar da equipe.",
        date: "15 Fev 2024",
        link: "/blog", // you can route to specific post later
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        type: "image"
    },
    {
        id: 2,
        category: "Vídeo",
        title: "Como identificar o Burnout na equipe?",
        description: "Assista nosso vídeo exclusivo detalhando os principais sintomas de esgotamento, como líderes podem intervir antecipadamente e promover a saúde ocupacional.",
        date: "10 Mar 2024",
        link: "https://www.youtube.com/watch?v=Eqjqwrm1mfA", // Exemplo, pode ser trocado
        videoId: "Eqjqwrm1mfA",
        type: "video"
    },
    {
        id: 3,
        category: "Saúde Ocupacional",
        title: "Gestão de Riscos Psicossociais no Trabalho",
        description: "Saiba como mapear, identificar e mitigar efetivamente os principais riscos à saúde mental dos seus colaboradores e criar uma cultura de trabalho muito mais saudável.",
        date: "05 Abr 2024",
        link: "/blog",
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        type: "image"
    }
];

const categories = ["Todos", "NR-1", "Saúde Ocupacional", "Vídeo"];

const BlogLandingSection = () => {
    const [activeFilter, setActiveFilter] = useState("Todos");

    const filteredPosts = activeFilter === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeFilter);

    return (
        <section id="blog" className="blog-landing-section py-100">
            <div className="container">

                {/* Header da Seção */}
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title text-center mb-50">
                            <h2 className="blog-landing-title">Blog</h2>
                            <p className="blog-landing-subtitle">
                                Atualizações, novidades e conteúdos para sua saúde ocupacional
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filtros */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="blog-filters">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    className={`blog-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid de Posts */}
                <div className="row">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="col-md-6 col-lg-4 mb-40">
                            <div className="blog-l-card">

                                {/* Imagem / Video */}
                                <div className="blog-l-thumb">
                                    {post.type === "video" ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${post.videoId}?rel=0`}
                                            title={post.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img src={post.thumbnail} alt={post.title} />
                                    )}
                                </div>

                                {/* Conteúdo do Card */}
                                <div className="blog-l-content">
                                    <div className="blog-l-meta">
                                        <span className="blog-l-category">{post.category}</span>
                                        <span className="blog-l-date">{post.date}</span>
                                    </div>

                                    <h5 className="blog-l-title">{post.title}</h5>
                                    <p className="blog-l-desc">{post.description}</p>

                                    <div className="blog-l-btn-wrapper">
                                        <a href={post.link} className="blog-l-btn">Ler mais</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogLandingSection;
