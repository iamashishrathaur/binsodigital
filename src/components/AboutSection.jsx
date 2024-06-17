import React from 'react'
import About1 from '../assets/images/about-1.jpg'
import About2 from '../assets/images/about-2.jpg'
import Auther1 from '../assets/images/auther1.jpg'

const AboutSection = () => {
  return (
    <section className="about-section-six">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6">
            <div className="inner-column">
              <div className="image-box">
                <figure className="image overlay-anim m-0">
                  <img src={About1} alt="Image" />
                </figure>
                <figure className="image-2 overlay-anim bounce-y m-0">
                  <img src={About2} alt="Image" />
                </figure>
                <div className="exp-box bounce-x">
                  <div className="inner">
                    <div className="icon-box">
                      {" "}
                      <i className="icon fa fa-laptop-code"></i>
                      {/* <i className="icon flaticon-design" />{" "} */}
                      <span className="count">90+</span>{" "}
                    </div>
                    <h6 className="title">Years of Experience</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-lg-6">
            <div className="inner-box">
              <div className="sec-title">
                <span className="sub-title">get to know us</span>
                <h2 className="title">
                  Your Best digital Solution <span>Service</span> Partner
                </h2>
                <div className="text">
                  There are many variations of simply free text passages of
                  available but the majority have suffered alteration in some
                  form, by injected hum randomised words which don't slightly.
                </div>
              </div>
              <div className="about-block">
                <div className="inner-box">
                  <h6 className="title">90+</h6>
                  <span>
                    Years of working Experience <br />
                    in this company
                  </span>
                </div>
              </div>
              <div className="btn-box">
                <div className="auther-info">
                  <figure className="image">
                    <img src={Auther1} alt="" />
                  </figure>
                  <div className="content-box">
                    {" "}
                    <span>CO Founder</span>
                    <h6 className="title">Aleesha brown</h6>
                  </div>
                </div>
                <a href="page-about.html" className="theme-btn btn-style-two">
                  <span className="btn-title">Discover More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
