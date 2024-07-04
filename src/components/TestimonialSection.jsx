import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Thumb4 from '../assets/images/thumb3-4.jpg';
import Thumb3 from '../assets/images/thumb3-3.jpg';
import Thumb2 from '../assets/images/thumb3-2.jpg';
import Thumb1 from '../assets/images/thumb3-1.jpg';

const items = [
  {
    id: 1,
    text: "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.",
    name: "Jessica Brown",
    designation: "CEO & Founder",
    rating: 5,
  },
  {
    id: 2,
    text: "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.",
    name: "Kevin Martin",
    designation: "Designer",
    rating: 5,
  },
  {
    id: 3,
    text: "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.",
    name: "Jessica Brown",
    designation: "CEO & Founder",
    rating: 5,
  },
  {
    id: 4,
    text: "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology.",
    name: "Jessica Brown",
    designation: "CEO & Founder",
    rating: 5,
  },
];

const renderItems = () => {
  return items.map((item) => (
    <div key={item.id} className="testimonial-block-three">
      <div className="inner-box">
        <div className="image-box">
          <div className="text">{item.text}</div>
          <div className="info-box">
            <h6 className="name">{item.name}</h6>
            <span className="designation">{item.designation}</span>
            <span className="icon icon-quote" />
          </div>
          <div className="rating">
            {[...Array(item.rating)].map((_, index) => (
              <i key={index} className="fa fa-star" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};




const TestimonialSection = () => {


  const renderDots = ({ isActive }) => {
    return (
      <div className="owl-dots">
  <div className={`owl-dot ${isActive ? 'active' : ''}`}>
        <span></span>
      </div>
      </div>
      
    );
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
                   mouseTracking
                   items={renderItems()}
                   infinite
                  //  responsive={responsive}
                   disableButtonsControls
                   controlsStrategy="alternate"
                   renderDotsItem={renderDots}
                  />
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
