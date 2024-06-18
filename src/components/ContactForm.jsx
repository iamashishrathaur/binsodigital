import React from 'react'

const ContactForm = () => {
  return (
    <section className="team-contact-form">
  <div className="container pb-100">
    <div className="sec-title text-center">
      <span className="sub-title">Contact With Us Now</span>
      <h2 className="section-title__title">
        Feel Free to Write Our <br /> Tecnology Experts
      </h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <form
          id="contact_form"
          name="contact_form"
          className=""
          action="includes/sendmail.php"
          method="post"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-sm-6 form-group">
              <div className="mb-3">
                <input
                  name="form_name"
                  className="form-control required"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="col-sm-6 form-group">
              <div className="mb-3">
                <input
                  name="form_email"
                  className="form-control required email"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <div className="mb-3">
                <input
                  name="form_subject"
                  className="form-control required"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="col-sm-6 form-group">
              <div className="mb-3">
                <input
                  name="form_phone"
                  className="form-control"
                  type="text"
                  placeholder="Enter Phone"
                />
              </div>
            </div>
          </div>
          <div className="mb-3 form-group">
            <textarea
              name="form_message"
              className="form-control required"
              rows={7}
              placeholder="Enter Message"
              defaultValue={""}
            />
          </div>
          <div className="mb-3 text-center">
            <input
              name="form_botcheck"
              className="form-control"
              type="hidden"
              defaultValue=""
            />
            <button
              type="submit"
              className="theme-btn btn-style-one"
              data-loading-text="Please wait..."
            >
              <span className="btn-title">Send message</span>
            </button>
            <button type="reset" className="theme-btn btn-style-one">
              <span className="btn-title">Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactForm
