import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo-2.webp'
import Logo2 from '../assets/images/logo.png'
const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <header className={`main-header header-style-two ${isMobileMenu ? 'mobile-menu-visible':''}`}>
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            <ul className="list-style-one">
              <li>
              <i className="fa fa-clock"></i>
                Mon - Fri: 09.00am - 10.00 pm
              </li>
              <li>
              <i className="fa fa-map-marker-alt"></i>
                Richardson, California
                62639{" "}
              </li>
              <li>
              <i className="fa fa-envelope"></i>
                {" "}
                <a href="#" className="mailto:soliur@mail.com">
                  <span
                    className="__cf_email__"
                    data-cfemail="bdeed2d1d4c8cffdd0dcd4d193ded2d0"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="top-right">
            <a href="tel:+92(8800)9806" className="info-btn">
              {" "}

              <i className="icon fa fa-phone"></i>
              <strong>+36 55 540 069</strong>{" "}
            </a>
            <ul className="social-icon-one">
              <li>
                <a href="#">
                <i className="icon fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i className="icon fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i className="icon fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i className="icon fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i className="icon fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <a href="index.html">
                <img src={Logo} alt="Logo" title="Soliur" />
              </a>
            </div>
          </div>
          <div className="nav-outer">
            <nav className="main-menu">
              <ul className="navigation">
                <li className="current"><a href="index.html">Home</a></li>
                <li className=""><a href="index.html">Services</a></li>
                <li className=""><a href="index.html">Project</a></li>
                <li className=""><a href="index.html">About</a></li>
                <li className=""><a href="index.html">Team</a></li>
                <li className=""><a href="index.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="outer-box">
            <div className="mobile-nav-toggler">
            <i className='fa fa-bars' onClick={()=>setIsMobileMenu(true)}></i>
            </div>
          </div>
          <div className="btn-box">
            {" "}
            <a
              href="page-contact.html"
              className="theme-btn btn-style-one hover-light"
            >
              <span className="btn-title">Request a quote</span>
            </a>{" "}
          </div>
        </div>
      </div>
      {/* <div className="mobile-menu">
        <div className="menu-backdrop" />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/logo-2.png" alt="" title="" />
              </a>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times" />
            </div>
          </div>
          <ul className="navigation clearfix"></ul>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                {" "}
                <i className="icon lnr-icon-phone-handset" />{" "}
                <span className="title">Call Now</span>{" "}
                <a href="tel:+92880098670">+92 (8800) - 98670</a>{" "}
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                {" "}
                <span className="icon lnr-icon-envelope1" />{" "}
                <span className="title">Send Email</span>{" "}
                <a href="/cdn-cgi/l/email-protection#97fff2fbe7d7f4f8fae7f6f9eeb9f4f8fa">
                  <span
                    className="__cf_email__"
                    data-cfemail="95fdf0f9e5d5f6faf8e5f4fbecbbf6faf8"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>{" "}
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                {" "}
                <span className="icon lnr-icon-clock" />{" "}
                <span className="title">Send Email</span> Mon - Sat 8:00 - 6:30,
                Sunday - CLOSED{" "}
              </div>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
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
        </nav>
      </div> */}
      <div className="mobile-menu">
       <div className="menu-backdrop" onClick={()=>setIsMobileMenu(false)}></div>

          <nav className="menu-box">
          <div className="upper-box">
          <div className="nav-logo"><a href="index.html"><img alt="" title="" data-cfsrc="images/logo-2.png" src="https://html.kodesolution.com/2024/binso-html/images/logo-2.png"/></a></div>
          <div className="close-btn"><i className="icon fa fa-times" onClick={()=>setIsMobileMenu(false)}></i></div>
          </div>
          <ul className="navigation clearfix">
          <li className="current"><a href="index.html">Home</a></li>
                <li className=""><a href="index.html">Services</a></li>
                <li className=""><a href="index.html">Project</a></li>
                <li className=""><a href="index.html">About</a></li>
                <li className=""><a href="index.html">Team</a></li>
                <li className=""><a href="index.html">Contact</a></li>
            </ul>
            <ul className="contact-list-one">
            <li>

        <div className="contact-info-box"> <i className="icon lnr-icon-phone-handset"></i> <span className="title">Call Now</span> <a href="tel:+92880098670">+92 (8800) - 98670</a> </div>
        </li>
        <li>

        <div className="contact-info-box"> <span className="icon lnr-icon-envelope1"></span> <span className="title">Send Email</span> <a href="mailto:help@company.com">help@company.com</a> </div>
        </li>
        <li>

        <div className="contact-info-box"> <span className="icon lnr-icon-clock"></span> <span className="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div>
        </li>
        </ul>
        <ul className="social-links">
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
       </nav>
     </div>
      <div className={`sticky-header sticky-header-style-two ${isHeaderActive ? 'fixed-header animated slideInDown':''}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              {" "}
              <a href="index.html" title="">
                <img src={Logo2} alt="" title="" />
              </a>{" "}
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                <ul className="navigation clearfix">
                <li className="current"><a href="index.html">Home</a></li>
                <li className=""><a href="index.html">Services</a></li>
                <li className=""><a href="index.html">Project</a></li>
                <li className=""><a href="index.html">About</a></li>
                <li className=""><a href="index.html">Team</a></li>
                <li className=""><a href="index.html">Contact</a></li>
                </ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler">
                <i className='fa fa-bars' onClick={()=>setIsMobileMenu(true)}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> 
  )
}

export default Header
