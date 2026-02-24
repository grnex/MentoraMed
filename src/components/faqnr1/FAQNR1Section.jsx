import FAQNR1Title from "./FAQNR1Title";
import FAQNR1Item from "./FAQNR1Item";
import faqNR1Data from "./faqNR1Data";

const FAQNR1Section = () => (
  <section className="pt-60 mb-120 faqs-3 faqs-section division" id="faq-nr1">
    <div className="container-xxl">
      <FAQNR1Title />
      <div className="faqs-3-questions">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion-wrapper">
              <ul className="accordion">
                {faqNR1Data.map((item, index) => (
                  <FAQNR1Item
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
    </div>
  </section>
);

export default FAQNR1Section;
