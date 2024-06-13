import React from 'react'
import Logo from '../assets/images/logo-2.webp'
import Slider2 from '../assets/images/bg-slider2.jpg'
import ServiceSection from './ServiceSection'
import ClientsSection from './ClientSection'
import FeaturesSection from './FeaturesSection'
import FaqsSection from './FaqsSection'
import TestimonialSection from './TestimonialSection'
import TeamSection from './TeamSection'
import NewsSection from './NewsSection'
import ContractSection from './ContractSection'
import MapSection from './MapSection'
import Header from './Header'
import MainSlider from './MainSlider'
import Preloader from './Preloader'
import AboutSection from './AboutSection'
import ServicesSection4 from './ServicesSection4'
import ScrollToTop from './ScrollToTop'
const Home1 = () => {
  return (
    <>
  <div className="page-wrapper">
    <Preloader/>
    <Header/>
    {/* <header className="main-header header-style-two">
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
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className="current dropdown">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home page 01</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home page 02</a>
                    </li>
                    <li className="dropdown">
                      <a href="index.html">New Home</a>
                      <ul>
                        <li>
                          <a href="index-3.html">Home Page 03</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page 04</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home Page 05</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index-1-single.html">Single Styles</a>
                      <ul>
                        <li>
                          <a href="index-1-single.html">Single Page 01</a>
                        </li>
                        <li>
                          <a href="index-2-single.html">Single Page 02</a>
                        </li>
                        <li>
                          <a href="index-3-single.html">Single Page 03</a>
                        </li>
                        <li>
                          <a href="index-4-single.html">Single Page 04</a>
                        </li>
                        <li>
                          <a href="index-1-single.html">Single Page 05</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index-1-dark.html">Dark Styles</a>
                      <ul>
                        <li>
                          <a href="index-1-dark.html">Dark Page 01</a>
                        </li>
                        <li>
                          <a href="index-2-dark.html">Dark Page 02</a>
                        </li>
                        <li>
                          <a href="index-3-dark.html">Dark Page 03</a>
                        </li>
                        <li>
                          <a href="index-4-dark.html">Dark Page 04</a>
                        </li>
                        <li>
                          <a href="index-1-dark.html">Dark Page 05</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index-1-rtl.html">RTL Style One</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  {" "}
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="page-about.html">About</a>
                    </li>
                    <li className="dropdown">
                      {" "}
                      <a href="#">Projects</a>
                      <ul>
                        <li>
                          <a href="page-projects.html">Projects List</a>
                        </li>
                        <li>
                          <a href="page-project-details.html">
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      {" "}
                      <a href="#">Team</a>
                      <ul>
                        <li>
                          <a href="page-team.html">Team List</a>
                        </li>
                        <li>
                          <a href="page-team-details.html">Team Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-testimonial.html">Testimonial</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="page-faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="page-404.html">Page 404</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  {" "}
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="page-services.html">Services List</a>
                    </li>
                    <li>
                      <a href="page-service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  {" "}
                  <a href="#">Shop</a>
                  <ul>
                    <li>
                      <a href="shop-products.html">Products</a>
                    </li>
                    <li>
                      <a href="shop-products-sidebar.html">
                        Products with Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="shop-checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  {" "}
                  <a href="#">News</a>
                  <ul>
                    <li>
                      <a href="news-grid.html">News Grid</a>
                    </li>
                    <li>
                      <a href="news-details.html">News Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="outer-box">
            <button className="ui-btn ui-btn search-btn">
              {" "}
              <span className="icon lnr lnr-icon-search" />{" "}
            </button>
            <span className="divider" />
            <button className="ui-btn ui-btn cart-btn">
              {" "}
              <i className="icon lnr lnr-icon-cart" />{" "}
              <span className="count">0</span>{" "}
            </button>
            <div className="mobile-nav-toggler">
              <span className="icon lnr-icon-bars" />
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
      <div className="mobile-menu">
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
      </div>
      <div className="search-popup">
        {" "}
        <span className="search-back-drop" />
        <button className="close-search">
          <span className="fa fa-times" />
        </button>
        <div className="search-inner">
          <form method="post" action="index.html">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search..."
                required=""
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="sticky-header sticky-header-style-two fixed-header animated slideInDown">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              {" "}
              <a href="index.html" title="">
                <img src="images/logo.png" alt="" title="" />
              </a>{" "}
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix"></ul>
                </div>
              </nav>
              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}
    
    <section className="main-slider slider-style-one">
      <div
        className="rev_slider_wrapper fullwidthbanner-container"
        id="rev_slider_two_wrapper"
        data-source="gallery"
      >
        <div
          className="rev_slider fullwidthabanner"
          id="rev_slider_two"
          data-version="5.4.1"
        >
          <ul>
            <li data-index="rs-1" data-transition="zoomout">
              <img
                src="images/main-slider/bg-slider1.jpg"
                alt=""
                className="rev-slidebg"
              />
              <div
                className="tp-caption"
                data-paddingbottom="[15,15,15,15]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[0,0,0,0]"
                data-paddingtop="[10,10,10,10]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['750','750','750','750']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['-130','-100','-160','-110']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <span className="sub-title">
                  The best digital marketing agency
                </span>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['1050','750','750','480']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['20','30','-20','0']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <h1 className="title">
                  Grow Your <br />
                  <span>business</span>
                </h1>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,0,5]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['700','750','700','450']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['185','180','170','150']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <button
                  type="submit"
                  className="theme-btn btn-style-one hover-light"
                >
                  <span className="btn-title">Discover More</span>
                </button>
              </div>
            </li>
            <li data-index="rs-2" data-transition="zoomout">
              <img
                src={Slider2}
                alt=""
                className="rev-slidebg"
              />
              <div
                className="tp-caption"
                data-paddingbottom="[15,15,15,15]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[0,0,0,0]"
                data-paddingtop="[10,10,10,10]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['750','750','750','750']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['-130','-100','-160','-110']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <span className="sub-title">
                  The best digital marketing agency
                </span>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,15,15]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['1050','750','750','480']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['20','30','-20','0']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <h1 className="title">
                  Grow Your <br />
                  <span>business</span>
                </h1>
              </div>
              <div
                className="tp-caption"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[15,15,0,5]"
                data-paddingright="[15,15,15,15]"
                data-paddingtop="[0,0,0,0]"
                data-responsive_offset="on"
                data-type="text"
                data-height="none"
                data-width="['700','750','700','450']"
                data-whitespace="normal"
                data-hoffset="['0','0','0','0']"
                data-voffset="['185','180','170','150']"
                data-x="['center','center','center','center']"
                data-y="['middle','middle','middle','middle']"
                data-textalign="['top','top','top','top']"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                <button
                  type="submit"
                  className="theme-btn btn-style-one hover-light"
                >
                  <span className="btn-title">Discover More</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* <MainSlider/> */}
   
   
  <ServiceSection/>

 <AboutSection/>
   <ServicesSection4/>
     <ClientsSection/>
     <FeaturesSection/>
     <FaqsSection/>
     <TestimonialSection/>
     <TeamSection/>
     <NewsSection/>
   
   <ContractSection/>
    <MapSection/>
  </div>
  <ScrollToTop/>
</>

  )
}

export default Home1
