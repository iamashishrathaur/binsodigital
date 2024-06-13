import React from 'react'

const ContractSection = () => {
  return (
    <section className="why-choose-us-three pull-up pb-0">
    <div
      className="bg bg-image"
      style={{ backgroundImage: "url(./images/background/bg-3.jpg)" }}
    />
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="contact-details__right">
              <div className="sec-title light">
                <span className="sub-title">Need any help?</span>
                <h2>Get in touch with us</h2>
                <div className="text">
                  Lorem ipsum is simply free text available dolor sit amet,
                  consectetur notted labore et dolore magna aliqua.
                </div>
              </div>
              <ul className="list-unstyled contact-details__info">
                <li>
                  <div className="icon">
                    <span className="lnr-icon-phone-plus" />
                  </div>
                  <div className="text">
                    <h6>Have any question?</h6>
                    <a href="tel:980089850">
                      <span>Free</span> +92 (020)-9850
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="lnr-icon-envelope1" />
                  </div>
                  <div className="text">
                    <h6>Write email</h6>
                    <a href="/cdn-cgi/l/email-protection#402e25252428252c3000232f2d30212e396e232f2d">
                      <span
                        className="__cf_email__"
                        data-cfemail="325c5757565a575e4272515d5f42535c4b1c515d5f"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="lnr-icon-location" />
                  </div>
                  <div className="text">
                    <h6>Visit anytime</h6>
                    <span>66 broklyn golden street. New York</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="contact-form wow fadeInLeft">
              <h4 className="title">
                Fell Free To Enquire About Any Questions You Got
              </h4>
              <form method="post" action="get" id="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="your-name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="your-email"
                      placeholder="Enter Email"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="your-country"
                      placeholder="Country Code"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="your-name"
                      placeholder="Your Phone"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <select className="custom-select">
                      <option value="">Select</option>
                      <option value="">Air Freight</option>
                      <option value="">Ocean Freight</option>
                      <option value="">Rail transport</option>
                      <option value="">Cargo ship</option>
                      <option value="">Bulk cargo</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <select className="custom-select">
                      <option value="">Select</option>
                      <option value="">Door to Door</option>
                      <option value="">International shipping</option>
                      <option value="">Multi Modal</option>
                    </select>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      name="form_message"
                      className="form-control required"
                      rows={5}
                      placeholder="Write a Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button
                      className="theme-btn btn-style-one hover-light"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="btn-title">Send a Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContractSection
