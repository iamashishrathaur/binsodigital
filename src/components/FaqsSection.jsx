import React, { useState } from 'react';
import Image1 from '../assets/images/image-1.jpg';

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is my technology allowed on tech?",
      answer: "Yes, our platform supports a wide range of technologies. If you have specific questions about compatibility, please contact our support team."
    },
    {
      question: "How to soft launch your business?",
      answer: "To soft launch your business, start by targeting a smaller audience to test your product and gather feedback. This allows you to make necessary adjustments before a full-scale launch."
    },
    {
      question: "How to turn visitors into contributors?",
      answer: "Engage visitors by providing valuable content, creating a community atmosphere, and offering incentives for contributions. Encourage interaction and feedback to foster a sense of belonging."
    },
    {
      question: "How can I find my solutions?",
      answer: "Our platform offers a comprehensive search function and categorized content to help you find the solutions you need quickly and easily. If you need further assistance, our support team is here to help."
    }
  ];

  return (
    <section className="faqs-section">
      <div className="auto-container">
        <div className="row">
          <div className="faq-column col-xl-6">
            <div className="sec-title">
              <span className="sub-title">Why Choose us</span>
              <h2 className="title mb-0">
                Perfect IT Technology Solutions Here
              </h2>
            </div>
            <div className="inner-column">
              <ul className="accordion-box" style={{ padding: 0, margin: 0 }}>
                {faqData.map((item, index) => (
                  <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                    <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                      {item.question}
                      <div className={`icon fa fa-plus ${activeIndex === index ? 'open' : ''}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="image-column col-xl-6">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image m-0">
                  <img src={Image1} alt="Technology Solutions" />
                </figure>
                <span className="float-text">Why Choose us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
