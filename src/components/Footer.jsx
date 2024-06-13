const Footer = () => {
  return (
    <footer className="main-footer">
    <div className="pattern-2" />
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget about-widget">
              <h6 className="widget-title">About</h6>
              <div className="text">
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed
                do eiusmod tempor incididunt ut labore.
              </div>
              <ul className="social-icon-two">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget links-widget">
              <h6 className="widget-title">Explore</h6>
              <ul className="user-links">
                <li>
                  <a href="#">About Company</a>
                </li>
                <li>
                  <a href="#">Meet the Team</a>
                </li>
                <li>
                  <a href="#">News &amp; Media</a>
                </li>
                <li>
                  <a href="#">Our Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget gallery-widget">
              <h6 className="widget-title">Portfolio</h6>
              <div className="widget-content">
                <div className="outer clearfix">
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-1.jpg" alt="" />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-2.jpg" alt="" />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-3.jpg" alt="" />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-4.jpg" alt="" />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-5.jpg" alt="" />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img src="images/resource/project-thumb-6.jpg" alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget contacts-widget">
              <h6 className="widget-title">Contact</h6>
              <div className="text">
                66 Road Broklyn Street, 600
                <br /> New York, USA
              </div>
              <ul className="contact-info">
                <li>
                  <i className="fa fa-envelope" />{" "}
                  <a href="/cdn-cgi/l/email-protection#452b2020212d20293505352a312c36202b6b262a28">
                    <span
                      className="__cf_email__"
                      data-cfemail="9bf5fefefff3fef7ebdbf8f4f6ebfaf5e2b5f8f4f6"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                  <br />
                </li>
                <li>
                  <i className="fa fa-phone-square" />{" "}
                  <a href="tel:+926668880000">+92 666 888 0000</a>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">
            © Copyright 2024 by <a href="index.html">Company.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
