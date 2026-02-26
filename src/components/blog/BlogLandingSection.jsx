import React, { useState, useEffect, useCallback } from 'react';
import './BlogLandingSection.css';

import BlogPostNR1 from '../../pages/BlogPosts/BlogPostNR1.jsx';
import BlogPostNR1_2024 from '../../pages/BlogPosts/BlogPostNR1_2024.jsx';
import BlogPostRiscos from '../../pages/BlogPosts/BlogPostRiscos.jsx';
import BlogPostPausa from '../../pages/BlogPosts/BlogPostPausa.jsx';

/* ── helper: excerpt ~120 chars ── */
const excerpt = (text, max = 120) =>
    text.length <= max ? text : text.slice(0, max).trimEnd() + '...';

/* ── mapa link → componente de conteúdo ── */
const postContentMap = {
    '/blog/nr1-2024': <BlogPostNR1_2024 />,
    '/blog/nova-nr1': <BlogPostNR1 />,
    '/blog/riscos-psicossociais': <BlogPostRiscos />,
    '/blog/pausa': <BlogPostPausa />,
};

const blogPosts = [
    {
        id: 1,
        category: "NR-1",
        title: "Implementação da NR-1: O que mudou em 2024?",
        description: "Entenda as novas exigências da norma e como sua empresa pode ser adequar rapidamente às mudanças mais recentes mantendo o bem-estar da equipe.",
        date: "15 Fev 2024",
        link: "/blog/nr1-2024",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        type: "image"
    },
    {
        id: 2,
        category: "Vídeo",
        title: "Entender a NR-1",
        description: "Assita o video para entender a NR-1 não e apenas estar em comformidade com a lei, mas também garantir a segurança e saúde dos trabalhadores.",
        date: "10 Agosto 2025",
        link: "https://www.youtube.com/shorts/9X5i9tw8N8I",
        videoId: "9X5i9tw8N8I",
        type: "video"
    },
    {
        id: 3,
        category: "Saúde Ocupacional",
        title: "Gestão de Riscos Psicossociais no Trabalho",
        description: "Saiba como mapear, identificar e mitigar efetivamente os principais riscos à saúde mental dos seus colaboradores e criar uma cultura de trabalho muito mais saudável.",
        date: "05 Abr 2024",
        link: "/blog/riscos-psicossociais",
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        type: "image"
    },
    {
        id: 4,
        category: "NR-1",
        title: "NR-1 e Saúde Mental: O que Muda em 2025?",
        description: "Entenda a obrigatoriedade dos riscos psicossociais no PGR e como preparar sua empresa para a nova atualização da NR-1.",
        date: "25 Fev 2026",
        link: "/blog/nova-nr1",
        thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
        type: "image"
    }
];

const categories = ["Todos", "NR-1", "Saúde Ocupacional", "Vídeo"];

const BlogLandingSection = () => {
    const [activeFilter, setActiveFilter] = useState("Todos");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(
        window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1
    );
    const [activePost, setActivePost] = useState(null);

    const filteredPosts = activeFilter === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeFilter);

    // Update itemsToShow on resize
    React.useEffect(() => {
        const handleResize = () => {
            setItemsToShow(window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < filteredPosts.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(Math.max(0, filteredPosts.length - itemsToShow)); // Loop to end
        }
    };

    /* ── Modal: fechar ── */
    const closeModal = useCallback(() => setActivePost(null), []);

    /* Escape key */
    useEffect(() => {
        if (!activePost) return;
        const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [activePost, closeModal]);

    /* Bloquear scroll do body quando modal aberto */
    useEffect(() => {
        if (activePost) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [activePost]);

    /* ── Abrir post no modal ── */
    const handleReadMore = (post) => {
        // Vídeos continuam abrindo normalmente no link externo
        if (post.type === 'video') {
            window.open(post.link, '_blank');
            return;
        }
        setActivePost(post);
    };

    return (
        <>
            <section id="blog" className="blog-landing-section py-100">
                <div className="container overflow-hidden">

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
                                        onClick={() => {
                                            setActiveFilter(cat);
                                            setCurrentIndex(0); // Reset index on filter change
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div className="blog-carousel-wrapper">
                        {/* Botões de Navegação */}
                        <button className="carousel-nav-btn prev" onClick={prevSlide}>
                            <span>&#10094;</span>
                        </button>
                        <button className="carousel-nav-btn next" onClick={nextSlide}>
                            <span>&#10095;</span>
                        </button>

                        <div className="blog-carousel-track" style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                        }}>
                            {filteredPosts.map(post => (
                                <div key={post.id} className="blog-carousel-item">
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
                                            <p className="blog-l-desc">{excerpt(post.description)}</p>

                                            <div className="blog-l-btn-wrapper">
                                                <button
                                                    type="button"
                                                    className="blog-l-btn"
                                                    onClick={() => handleReadMore(post)}
                                                >
                                                    {post.type === "video" ? "Assistir" : "Ler mais"}
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Modal / Overlay ── */}
            {activePost && (
                <div
                    className="blog-modal-overlay"
                    onClick={closeModal}
                >
                    <div
                        className="blog-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão fechar */}
                        <button
                            type="button"
                            className="blog-modal-close"
                            onClick={closeModal}
                            aria-label="Fechar"
                        >
                            ✕
                        </button>

                        {/* Conteúdo do post */}
                        <div className="blog-modal-body">
                            {/* Overrides de alta especificidade para os posts embarcados */}
                            <style>{`
                                .blog-modal-body .page > section.bg--white,
                                .blog-modal-body .page > section,
                                .blog-modal-body #page > section.bg--white,
                                .blog-modal-body #page > section {
                                    background-color: #e6f2ed !important;
                                    padding-top: 40px !important;
                                    padding-bottom: 40px !important;
                                }
                                .blog-modal-body .container {
                                    max-width: 100% !important;
                                    padding-left: 30px !important;
                                    padding-right: 30px !important;
                                }
                                .blog-modal-body [class*="col-lg"],
                                .blog-modal-body [class*="col-xl"] {
                                    flex: 0 0 100% !important;
                                    max-width: 100% !important;
                                    width: 100% !important;
                                }
                                .blog-modal-body .post-meta {
                                    text-align: center !important;
                                }
                                .blog-modal-body .post-featured-img {
                                    text-align: center !important;
                                }
                                .blog-modal-body .post-featured-img img {
                                    border-radius: 12px !important;
                                    max-height: 320px !important;
                                }
                                .blog-modal-body .post-meta h1,
                                .blog-modal-body .post-meta .s-48 {
                                    font-size: 26px !important;
                                    line-height: 1.3 !important;
                                }
                                .blog-modal-body .post-meta .p-md {
                                    font-size: 14px !important;
                                }
                                .blog-modal-body .cta-box,
                                .blog-modal-body div.cta-box,
                                .blog-modal-content .cta-box,
                                .blog-modal-overlay .cta-box {
                                    display: none !important;
                                }
                                .blog-modal-body .post-content h3 {
                                    margin-top: 30px !important;
                                    margin-bottom: 14px !important;
                                    font-size: 20px !important;
                                }
                            `}</style>
                            {postContentMap[activePost.link] || (
                                <div style={{ padding: '60px 30px', textAlign: 'center', color: '#666' }}>
                                    <p>Conteúdo não disponível.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogLandingSection;
