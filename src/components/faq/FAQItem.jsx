import { useRef, useEffect, useState } from "react";

const FAQItem = ({ number, question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`fq-item ${isOpen ? "fq-open" : ""}`}>
      <button className="fq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="fq-trigger-left">
          <span className="fq-num">{number}</span>
          <div>
            <span className="fq-title">{question}</span>
          </div>
        </div>
        <span className="fq-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className="fq-panel" style={{ height: `${height}px` }} aria-hidden={!isOpen}>
        <div ref={contentRef} className="fq-panel-inner">
          {Array.isArray(answer)
            ? answer.map((text, index) => (
                <p key={index} className="fq-desc">{text}</p>
              ))
            : <p className="fq-desc">{answer}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default FAQItem;