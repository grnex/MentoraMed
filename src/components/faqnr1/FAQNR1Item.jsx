const FAQNR1Item = ({ question, answer, isActive }) => (
  <li className={`accordion-item ${isActive ? 'is-active' : ''} wow animate__animated animate__fadeInUp`}>
    <div className="accordion-thumb">
      <h5 className="fs-22 color--bruswick-green">{question}</h5>
    </div>
    <div className="accordion-panel">
      <p>{answer}</p>
    </div>
  </li>
);

export default FAQNR1Item;
