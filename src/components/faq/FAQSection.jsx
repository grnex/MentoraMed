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
    <section className="faqs-section division" id="como-funciona" style={{ padding: '80px 0' }}>
      <div className="container-xxl">
        <div className="row">
          <FAQTitle />
          <div className="col-lg-6">
            <ul style={{ padding: 0, margin: 0, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;