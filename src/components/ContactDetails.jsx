import React from 'react'

const ContactDetails = () => {
  return (
    <section className="contact-details">
  <div className="container ">
    <div className="row">
      <div className="col-xl-6 col-lg-6 mb-md-60">
        <div className="contact-details__right">
          <div className="sec-title">
            <span className="sub-title">Need any help?</span>
            <h2>Get in touch with us</h2>
            <div className="text">
              Lorem ipsum is simply free text available dolor sit amet,
              consectetur notted adipisicing elit sed do eiusmod tempor
              incididunt simply free ut labore et dolore magna aliqua.
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
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
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
      <div className="col-xl-6 col-lg-6">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
          width="100%"
          height={550}
          frameBorder={0}
          allowFullScreen=""
        /> */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57378.242957827344!2d79.41793327068218!3d25.99622486300036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7edf1179b633%3A0x12b04864e0a7107c!2sOrai%2C%20Uttar%20Pradesh%20285001!5e0!3m2!1sen!2sin!4v1718701520104!5m2!1sen!2sin"
        width='100%'
        height='550'
        style={{ border: 0 }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        />


      </div>
    </div>
  </div>
</section>

  )
}

export default ContactDetails