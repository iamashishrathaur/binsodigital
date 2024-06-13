import React from 'react'
import PageTittle from '../assets/images/page-title.jpg'

const ServicesSection4 = () => {
  return (
    <section className="services-section-four">
      <div
        className="bg"
        style={{ backgroundImage: `url(${PageTittle})` }}
      />
      <div className="auto-container">
        <div className="sec-title light text-center">
          <div className="logo">
            <img src="images/icons/transofrm1-1.png" alt="" />
          </div>
          <h2>
            IT Solutions &amp; Services <br />
            at your Fingertips
          </h2>
        </div>
        <div className="row">
          <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-programmer" />
                <h6 className="title">
                  <a href="page-service-details.html">IT Management</a>
                </h6>
                <div className="text">
                  Lorem Ipsum. Proin nibh vel velit auctor
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-front-end" />
                <h6 className="title">
                  <a href="page-service-details.html">Cyber Security</a>
                </h6>
                <div className="text">
                  Lorem Ipsum. Proin nibh vel velit auctor
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <i className="icon flaticon-concept" />
                <h6 className="title">
                  <a href="page-service-details.html">Software Development</a>
                </h6>
                <div className="text">
                  Lorem Ipsum. Proin nibh vel velit auctor
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box">
          Digima provides best Web Design SErvices for your business.{" "}
          <a href="page-services.html">Find Your Solution</a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection4
