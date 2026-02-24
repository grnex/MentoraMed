const FAQItem = ({ question, answer, isActive }) => (
  <li className={`accordion-item ${isActive ? 'is-active' : ''} wow animate__animated animate__fadeInUp`}>
    <div className="accordion-thumb">
      <h5 className="fs-22">{question}</h5>
    </div>
    <div className="accordion-panel">
      {Array.isArray(answer)
        ? answer.map((text, index) => <p key={index}>{text}</p>)
        : <p>{answer}</p>}
    </div>
  </li>
);

export default FAQItem;
