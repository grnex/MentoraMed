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
    <li style={{ borderTop: "1px solid rgba(0,0,0,0.12)", listStyle: "none" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{
            fontSize: "0.75rem",
            color: "#4caf89",
            fontWeight: "600",
            minWidth: "24px",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}>
            {number}
          </span>
          <span style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#0d1f1a",
          }}>
            {question}
          </span>
        </div>

        <div style={{
          width: "24px",
          height: "24px",
          border: isOpen ? "none" : "1px solid rgba(0,0,0,0.25)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: isOpen ? "#0d1f1a" : "transparent",
          color: isOpen ? "#f0ebe0" : "#0d1f1a",
          fontSize: "18px",
          lineHeight: 1,
          transition: "background 0.2s, border-color 0.2s",
        }}>
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {/* Painel animado — mesmo padrão do ServicesAccordion */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} style={{ padding: "0 0 20px 40px" }}>
          {Array.isArray(answer)
            ? answer.map((text, index) => (
              <p key={index} style={{
                fontSize: "0.875rem",
                color: "#4a6b5d",
                lineHeight: "1.65",
                marginBottom: index < answer.length - 1 ? "10px" : 0,
              }}>
                {text}
              </p>
            ))
            : <p style={{ fontSize: "0.875rem", color: "#4a6b5d", lineHeight: "1.65", margin: 0 }}>
              {answer}
            </p>
          }
        </div>
      </div>
    </li>
  );
};

export default FAQItem;