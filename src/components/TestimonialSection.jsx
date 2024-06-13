import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Thumb4 from '../assets/images/thumb3-4.jpg'
import Thumb3 from '../assets/images/thumb3-3.jpg'
import Thumb2 from '../assets/images/thumb3-2.jpg'
import Thumb1 from '../assets/images/thumb3-1.jpg'

const items = [
  <div key={'item1'} className="testimonial-block-three">
    <div className="inner-box">
      <div className="image-box">
        <div className="text">
          We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.
        </div>
        <div className="info-box">
          <h6 className="name">Jessica Brown</h6>
          <span className="designation">CEO &amp; Founder</span>
          <span className="icon icon-quote" />
        </div>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  </div>,
  <div key={'item2'} className="testimonial-block-three">
    <div className="inner-box">
      <div className="image-box">
        <div className="text">
          We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.
        </div>
        <div className="info-box">
          <h6 className="name">Kevin Martin</h6>
          <span className="designation">Designer</span>
          <span className="icon icon-quote" />
        </div>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  </div>,
  <div key={'item3'} className="testimonial-block-three">
    <div className="inner-box">
      <div className="image-box">
        <div className="text">
          We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.
        </div>
        <div className="info-box">
          <h6 className="name">Jessica Brown</h6>
          <span className="designation">CEO &amp; Founder</span>
          <span className="icon icon-quote" />
        </div>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  </div>,
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTo = (i) => {
    setActiveIndex(i);
  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  return (
    <section className="testimonial-section-three">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12">
            <div className="inner-column">
              <div className="image-box">
                <div className="bg-shape" />
                <figure className="image image-4">
                  <img src={Thumb4} alt="" />
                </figure>
                <figure className="image image-3">
                  <img src={Thumb3} alt="" />
                </figure>
                <figure className="image image-2">
                  <img src={Thumb2} alt="" />
                </figure>
                <figure className="image image-1">
                  <img src={Thumb1} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="testimonial-column col-lg-6 col-md-12">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Our Testimonials</span>
                <h2>
                  What they’re talking <br />
                  about us
                </h2>
              </div>
              <div className="carousel-outer">
                <div className="testimonial-carousel-three default-dots">
                  <AliceCarousel 
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    autoPlay
                    infinite
                    autoPlayInterval={6000}
                    activeIndex={activeIndex}
                    onSlideChanged={handleSlideChanged}
                  />
                  <div className="owl-dots">
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`owl-dot ${activeIndex === index ? 'active' : ''}`} 
                        onClick={() => slideTo(index)}
                      >
                        <span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
