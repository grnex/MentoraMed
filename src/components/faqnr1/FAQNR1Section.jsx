import { useState } from "react";
import FAQNR1Title from "./FAQNR1Title";
import FAQNR1Item from "./FAQNR1Item";
import faqNR1Data from "./faqNR1Data";

const FAQNR1Section = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .nr1faq-section {
          padding: 80px 40px;
        }

        .nr1faq-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }

        /* ── COLUNA ESQUERDA (título) ── */
        .nr1faq-left {
          flex: 0 0 42%;
          max-width: 42%;
        }

        .nr1faq-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4a9e7a;
          margin-bottom: 16px;
        }

        .nr1faq-heading {
          font-size: 50px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .nr1faq-heading span { color: #4a9e7a; }

        .nr1faq-subtitle {
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
        }

        /* ── COLUNA DIREITA (accordion) ── */
        .nr1faq-right {
          flex: 1;
        }

        .nr1faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.10);
        }

        .nr1faq-item:first-child {
          border-top: 1px solid rgba(0,0,0,0.10);
        }

        .nr1faq-trigger {
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

        .nr1faq-trigger-left {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .nr1faq-num {
          font-size: 0.85rem;
          color: rgba(0,0,0,0.20);
          min-width: 22px;
          padding-top: 2px;
          flex-shrink: 0;
          font-weight: 600;
          transition: color 0.2s;
        }

        .nr1faq-item.nr1faq-open .nr1faq-num { color: #4a9e7a; }

        .nr1faq-title {
          display: block;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          transition: color 0.2s;
        }

        .nr1faq-trigger:hover .nr1faq-title,
        .nr1faq-item.nr1faq-open .nr1faq-title { color: #4a9e7a; }

        .nr1faq-summary {
          display: block;
          font-size: 0.8rem;
          font-weight: 300;
          margin-top: 3px;
          opacity: 0.45;
        }

        .nr1faq-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          line-height: 1;
          opacity: 0.4;
          transition: color 0.2s, opacity 0.2s;
        }

        .nr1faq-item.nr1faq-open .nr1faq-icon {
          color: #4a9e7a;
          opacity: 1;
        }

        /* ── PAINEL ── */
        .nr1faq-panel {
          overflow: hidden;
          transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .nr1faq-panel-inner {
          padding: 0 0 24px 40px;
        }

        .nr1faq-desc {
          font-size: 0.9rem;
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
          opacity: 0.7;
        }

        /* ── RESPONSIVO ── */
        @media (max-width: 900px) {
          .nr1faq-layout { flex-direction: column; gap: 40px; }
          .nr1faq-left { flex: none; max-width: 100%; }
          .nr1faq-heading { font-size: 36px; }
        }

        @media (max-width: 560px) {
          .nr1faq-section { padding: 60px 20px; }
          .nr1faq-panel-inner { padding-left: 0; }
        }
      `}</style>

      <section className="nr1faq-section" id="faq-nr1">
        <div className="nr1faq-layout">

          <FAQNR1Title />

          <div className="nr1faq-right">
            {faqNR1Data.map((item, i) => (
              <FAQNR1Item
                key={i}
                number={item.number}
                question={item.question}
                summary={item.summary}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQNR1Section;
