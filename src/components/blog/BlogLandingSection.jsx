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
                        {/* ── Hero Image Header ── */}
                        <div className="blog-modal-hero">
                            <img
                                src={activePost.thumbnail}
                                alt={activePost.title}
                                className="blog-modal-hero-img"
                            />
                            <div className="blog-modal-hero-overlay" />

                            {/* Top bar: Voltar + icons */}
                            <div className="blog-modal-topbar">
                                <button
                                    type="button"
                                    className="blog-modal-back"
                                    onClick={closeModal}
                                >
                                    ← Voltar
                                </button>
                                <div className="blog-modal-actions">
                                    <button type="button" className="blog-modal-action-btn" aria-label="Compartilhar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                                    </button>
                                    <button type="button" className="blog-modal-action-btn" aria-label="Salvar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Category + Title on hero */}
                            <div className="blog-modal-hero-content">
                                <span className="blog-modal-hero-badge">{activePost.category}</span>
                                <h1 className="blog-modal-hero-title">{activePost.title}</h1>
                            </div>
                        </div>

                        {/* ── Meta bar: date + author ── */}
                        <div className="blog-modal-meta-bar">
                            <span className="blog-modal-meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                {activePost.date}
                            </span>
                            <span className="blog-modal-meta-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                Equipe MentoraMed
                            </span>
                        </div>

                        {/* ── Post body ── */}
                        <div className="blog-modal-body">
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
