import { useRef, useEffect, useState } from "react";

const FAQNR1Item = ({ number, question, summary, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`nr1faq-item ${isOpen ? "nr1faq-open" : ""}`}>
      <button className="nr1faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="nr1faq-trigger-left">
          <span className="nr1faq-num">{number}</span>
          <div>
            <span className="nr1faq-title">{question}</span>
            {summary && <span className="nr1faq-summary">{summary}</span>}
          </div>
        </div>
        <span className="nr1faq-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className="nr1faq-panel" style={{ height: `${height}px` }} aria-hidden={!isOpen}>
        <div ref={contentRef} className="nr1faq-panel-inner">
          <p className="nr1faq-desc">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQNR1Item;
