import FAQTitle from './FAQTitle';
import FAQItem from './FAQItem';
import faqData from './faqData';

const FAQSection = () => (
  <section className="pt-120 pb-40 faqs-1 faqs-section division" id="como-funciona">
    <div className="container-xxl">
      <div className="row">
        <FAQTitle />
        <div className="col-lg-6">
          <div className="accordion-wrapper">
            <ul className="accordion">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isActive={index === 0}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
