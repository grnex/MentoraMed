import { useRef, useEffect, useState } from "react";

function ServicesItem({ service, isOpen, onToggle }) {
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

export default ServicesItem;
