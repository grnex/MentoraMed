import { useState, useRef, useEffect } from "react";

const servicesData = [
  {
    number: "01",
    title: "Telepsicologia",
    summary: "Atendimento psicológico online para colaboradores",
    description:
      "Sessões individuais por videochamada com psicólogos especializados em saúde ocupacional. Reduz absenteísmo, melhora o clima organizacional e aumenta a produtividade — tudo com total sigilo profissional.",
    benefits: [
      "Sessões individuais por videochamada",
      "Psicólogos especializados em saúde ocupacional",
      "Relatórios gerenciais sem quebra de sigilo",
      "Agendamento 24h pela plataforma",
    ],
  },
  {
    number: "02",
    title: "Conformidade NR-1",
    summary: "Gestão de riscos psicossociais com respaldo legal",
    description:
      "Adequação completa à NR-1 atualizada: mapeamento de riscos psicossociais, plano de ação documentado e suporte em caso de fiscalização. Sua empresa protegida e em conformidade.",
    benefits: [
      "Diagnóstico de riscos psicossociais",
      "Plano de ação documentado",
      "Treinamentos obrigatórios incluídos",
      "Suporte em caso de fiscalização",
    ],
  },
  {
    number: "03",
    title: "Consultoria em Saúde Mental",
    summary: "Estratégia personalizada para o seu negócio",
    description:
      "Estruturamos programas de bem-estar corporativo sob medida: análise da cultura organizacional, desenvolvimento de políticas de saúde mental e acompanhamento contínuo com indicadores de resultado.",
    benefits: [
      "Diagnóstico organizacional aprofundado",
      "Programa personalizado de bem-estar",
      "Indicadores e métricas de resultado",
      "Reuniões de acompanhamento mensais",
    ],
  },
  {
    number: "04",
    title: "Treinamentos Corporativos",
    summary: "Capacitação prática para líderes e equipes",
    description:
      "Workshops sobre saúde mental, liderança humanizada, gestão de conflitos e prevenção ao burnout. Conteúdo aplicável no dia a dia, disponível ao vivo ou gravado, com certificado de participação.",
    benefits: [
      "Workshops ao vivo ou gravados",
      "Conteúdo adaptado ao seu setor",
      "Certificado de participação",
      "Material de apoio incluso",
    ],
  },
  {
    number: "05",
    title: "Plataforma SaaS",
    summary: "Tecnologia para gestão de saúde ocupacional",
    description:
      "Dashboard completo para gestão do programa de saúde mental: agendamentos, comunicados, relatórios automáticos e indicadores em tempo real — tudo em um só lugar, acessível de qualquer dispositivo.",
    benefits: [
      "Dashboard em tempo real",
      "Gestão de agendamentos integrada",
      "Comunicação interna centralizada",
      "Relatórios automáticos em PDF",
    ],
  },
];

function AccordionItem({ service, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`sv-item ${isOpen ? "sv-open" : ""}`}>
      <button className="sv-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="sv-trigger-left">
          <span className="sv-num">{service.number}</span>
          <div>
            <span className="sv-title">{service.title}</span>
            <span className="sv-summary">{service.summary}</span>
          </div>
        </div>
        <span className="sv-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className="sv-panel" style={{ height: `${height}px` }} aria-hidden={!isOpen}>
        <div ref={contentRef} className="sv-panel-inner">
          <p className="sv-desc">{service.description}</p>
          <ul className="sv-benefits">
            {service.benefits.map((b, i) => (
              <li key={i} className="sv-benefit">
                <span className="sv-dot" />
                {b}
              </li>
            ))}
          </ul>
          <a href="#contato" className="sv-cta">
            Solicitar apresentação →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .sv-section {
          background: #0f2419;
          padding: 80px 40px;
        }

        .sv-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }

        /* ── COLUNA ESQUERDA (título) ── */
        .sv-left {
          flex: 0 0 42%;
          max-width: 42%;
        }

        .sv-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a9e7a;
          margin-bottom: 16px;
        }

        .sv-heading {
          font-size: 50px;
          font-weight: 700;
          color: #f5f0e8;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .sv-heading span { color: #4a9e7a; }

        .sv-subtitle {
          font-size: 0.95rem;
          color: rgba(245,240,232,0.5);
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
        }

        /* ── COLUNA DIREITA (accordion) ── */
        .sv-right {
          flex: 1;
        }

        .sv-item {
          border-bottom: 1px solid rgba(245,240,232,0.1);
        }

        .sv-item:first-child {
          border-top: 1px solid rgba(245,240,232,0.1);
        }

        .sv-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }

        .sv-trigger-left {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .sv-num {
          font-size: 0.85rem;
          color: rgba(245,240,232,0.2);
          min-width: 22px;
          padding-top: 2px;
          flex-shrink: 0;
          transition: color 0.2s;
        }

        .sv-item.sv-open .sv-num { color: #4a9e7a; }

        .sv-title {
          display: block;
          font-size: 22px;
          font-weight: 600;
          color: #f5f0e8;
          line-height: 1.3;
          transition: color 0.2s;
        }

        .sv-trigger:hover .sv-title,
        .sv-item.sv-open .sv-title { color: #4a9e7a; }

        .sv-summary {
          display: block;
          font-size: 0.8rem;
          color: rgba(245,240,232,0.35);
          font-weight: 300;
          margin-top: 3px;
        }

        .sv-icon {
          font-size: 1.4rem;
          color: rgba(245,240,232,0.4);
          flex-shrink: 0;
          line-height: 1;
          transition: color 0.2s;
        }

        .sv-item.sv-open .sv-icon { color: #4a9e7a; }

        /* ── PAINEL ── */
        .sv-panel {
          overflow: hidden;
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .sv-panel-inner {
          padding: 0 0 24px 40px;
        }

        .sv-desc {
          font-size: 0.9rem;
          color: rgba(245,240,232,0.6);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .sv-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .sv-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(245,240,232,0.7);
          line-height: 1.4;
        }

        .sv-dot {
          width: 6px;
          height: 6px;
          background: #4a9e7a;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .sv-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #4a9e7a;
          color: #0f2419;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          margin-top: 8px;
        }

        .sv-cta:hover { 
          background: #f5f0e8;
          color: #0f2419;
          transform: translateY(-2px);
        }

        /* ── RESPONSIVO ── */
        @media (max-width: 900px) {
          .sv-layout { flex-direction: column; gap: 40px; }
          .sv-left { flex: none; max-width: 100%; }
          .sv-heading { font-size: 36px; }
        }

        @media (max-width: 560px) {
          .sv-section { padding: 60px 20px; }
          .sv-benefits { grid-template-columns: 1fr; }
          .sv-panel-inner { padding-left: 0; }
        }
      `}</style>

      <section className="sv-section" id="servicos">
        <div className="sv-layout">

          {/* ESQUERDA */}
          <div className="sv-left">
            <span className="sv-eyebrow">O que oferecemos</span>
            <h2 className="sv-heading">
              Nossas <span>Soluções</span>
            </h2>
            <p className="sv-subtitle">
              Combinamos tecnologia e cuidado humano para promover saúde mental,
              conformidade legal e alta performance dentro da sua empresa.
            </p>
          </div>

          {/* DIREITA */}
          <div className="sv-right">
            {servicesData.map((service, i) => (
              <AccordionItem
                key={service.number}
                service={service}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}