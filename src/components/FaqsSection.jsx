import React, { useState } from 'react';
import Image1 from '../assets/images/image-1.jpg'
const FaqsSection = () => {
  const [isActive, setIsActive] = useState('second');

  const handleShowMore = (box) => {
    setIsActive(box);
  };

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
              <ul className="accordion-box">
                {[
                  { id: 'first', question: 'How to get free immigration?' },
                  { id: 'second', question: 'Which country is good for residents?' },
                  { id: 'third', question: 'Canada study visa requirements?' },
                  { id: 'fourth', question: 'How to get free immigration?' },
                ].map((faq, index) => (
                  <li
                    key={faq.id}
                    className={`accordion block ${isActive === faq.id ? 'active-block' : ''}`}
                    onClick={() => handleShowMore(faq.id)}
                  >
                    <div className={`acc-btn ${isActive === faq.id ? 'active' : ''}`}>
                      <span>{`0${index + 1}.`}</span>{faq.question}
                      <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={`acc-content ${isActive === faq.id ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text">
                          Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.
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
                  <img src={Image1} alt="" />
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
