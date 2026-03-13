import { useState } from 'react';
import FAQTitle from './FAQTitle';
import FAQItem from './FAQItem';
import faqData from './faqData';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .fq-section {
          background: #0f2419;
          padding: 80px 40px;
        }

        .fq-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }

        /* ── COLUNA ESQUERDA (título) ── */
        .fq-left {
          flex: 0 0 42%;
          max-width: 42%;
        }

        .fq-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a9e7a;
          margin-bottom: 16px;
        }

        .fq-heading {
          font-size: 50px;
          font-weight: 700;
          color: #f5f0e8;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .fq-heading span { color: #4a9e7a; }

        .fq-subtitle {
          font-size: 0.95rem;
          color: rgba(245,240,232,0.5);
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
        }

        /* ── COLUNA DIREITA (accordion) ── */
        .fq-right {
          flex: 1;
        }

        .fq-item {
          border-bottom: 1px solid rgba(245,240,232,0.1);
        }

        .fq-item:first-child {
          border-top: 1px solid rgba(245,240,232,0.1);
        }

        .fq-trigger {
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

        .fq-trigger-left {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .fq-num {
          font-size: 0.85rem;
          color: rgba(245,240,232,0.2);
          min-width: 22px;
          padding-top: 2px;
          flex-shrink: 0;
          font-weight: 600;
          transition: color 0.2s;
        }

        .fq-item.fq-open .fq-num { color: #4a9e7a; }

        .fq-title {
          display: block;
          font-size: 22px;
          font-weight: 600;
          color: #f5f0e8;
          line-height: 1.3;
          transition: color 0.2s;
        }

        .fq-trigger:hover .fq-title,
        .fq-item.fq-open .fq-title { color: #4a9e7a; }

        .fq-summary {
          display: block;
          font-size: 0.8rem;
          font-weight: 300;
          margin-top: 3px;
          color: rgba(245,240,232,0.35);
        }

        .fq-icon {
          font-size: 1.4rem;
          color: rgba(245,240,232,0.4);
          flex-shrink: 0;
          line-height: 1;
          transition: color 0.2s, opacity 0.2s;
        }

        .fq-item.fq-open .fq-icon {
          color: #4a9e7a;
          opacity: 1;
        }

        /* ── PAINEL ── */
        .fq-panel {
          overflow: hidden;
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .fq-panel-inner {
          padding: 0 0 24px 40px;
        }

        .fq-desc {
          font-size: 0.9rem;
          color: rgba(245,240,232,0.6);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 10px;
        }

        .fq-desc:last-child { margin-bottom: 0; }

        /* ── RESPONSIVO ── */
        @media (max-width: 900px) {
          .fq-layout { flex-direction: column; gap: 40px; }
          .fq-left { flex: none; max-width: 100%; }
          .fq-heading { font-size: 36px; }
        }

        @media (max-width: 560px) {
          .fq-section { padding: 60px 20px; }
          .fq-panel-inner { padding-left: 0; }
        }
      `}</style>

      <section className="fq-section" id="como-funciona">
        <div className="fq-layout">

          <FAQTitle />

          <div className="fq-right">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                number={item.number}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQSection;