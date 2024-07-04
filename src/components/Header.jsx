import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo-2.webp'
import Logo2 from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isPricingActive, setIsPricingActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);

  const handleServicesToggle = () => {
    setIsServicesActive(!isServicesActive);
  };

  const handlePricingToggle = () => {
    setIsPricingActive(!isPricingActive);
  };

  const handleProjectToggle = () => {
    setIsProjectActive(!isProjectActive);
  };
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
  useEffect(()=>{
    isMobileMenu ? document.body.classList.toggle("mobile-menu-visible"): document.body.classList.remove("mobile-menu-visible")
  },[isMobileMenu])
  return (
   <>
    <header className={`main-header header-style-two`}>
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
                    gmail@gamil.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="top-right">
            <a href="tel:+92(8800)9806" className="info-btn">
              {" "}

              <i className="icon fa fa-phone"></i>
              <small>Make a Call</small>
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
                <li className={location.pathname === '/' ? 'current':''}><Link to={'/'}>Home</Link></li>
                <li className={location.pathname === '/about' ? 'current':''}><Link to={'/about'}>About</Link></li>
                <li className={`${location.pathname === '/services' ? 'current':'' || location.pathname === '/service-details' ? 'current':''} dropdown`}><Link to={'/services'}>Services</Link>
                <ul>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/service-details'}>Service Details</Link></li>
                </ul>
                </li>
                <li className={`${location.pathname === '/pricing' ? 'current':''} dropdown`}><Link to={'/pricing'}>Pricing</Link>
                 <ul>
                 <li><NavLinkWithQuery to="/pricing" category="staticWebsite">Static Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="dynamicWebsite">Dynamic Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="eCommerceWebsite">E-Commerce Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="appDevelopment">App Development</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="seo">SEO Service</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="hosting">Hosting</NavLinkWithQuery></li>
                 </ul>
                </li>
                <li className={`${location.pathname === '/projects' ? 'current':''} dropdown`}><Link to={'/projects'}>Projects</Link>
                  <ul>
                    <li>
                       <Link to={'/projects'}>Projects</Link>
                    </li>
                    <li>
                      <Link to={'/project-details'}>Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li className={location.pathname === '/contact' ? 'current':''}><Link to={'/contact'}>Contact</Link></li>
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
    
      <div className="mobile-menu">
       <div className="menu-backdrop" onClick={()=>setIsMobileMenu(false)}></div>

          <nav className="menu-box">
          <div className="upper-box">
          <div className="nav-logo"><a href="index.html"><img alt="" title="" data-cfsrc="images/logo-2.png" src="https://html.kodesolution.com/2024/binso-html/images/logo-2.png"/></a></div>
          <div className="close-btn"><i className="icon fa fa-times" onClick={()=>setIsMobileMenu(false)}></i></div>
          </div>
          <ul className="navigation clearfix">
          <li className={location.pathname === '/' ? 'current':''}><Link to={'/'}>Home</Link></li>
                <li className={location.pathname === '/about' ? 'current':''}><Link to={'/about'}>About</Link></li>
                <li className={`${location.pathname === '/services' ? 'current':'' || location.pathname === '/service-details' ? 'current':''} dropdown`}>
                <Link to={'#'} onClick={handleServicesToggle}>Services</Link>
                <ul className={`mobile-dropdown-list ${isServicesActive ? 'active' : ''}`}>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/service-details">Service Details</Link></li>
                </ul>
                <div className={`dropdown-btn ${isServicesActive ? 'active' : ''}`} onClick={handleServicesToggle}>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className={`${location.pathname === '/pricing' ? 'current':''} dropdown`}>
                <Link to={'#'} onClick={handlePricingToggle}>Pricing</Link>
                <ul className={`mobile-dropdown-list ${isPricingActive ? 'active' : ''}`}>
                <li><NavLinkWithQuery to="/pricing" category="staticWebsite">Static Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="dynamicWebsite">Dynamic Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="eCommerceWebsite">E-Commerce Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="appDevelopment">App Development</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="seo">SEO Service</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="hosting">Hosting</NavLinkWithQuery></li>
                </ul>
                <div className={`dropdown-btn ${isPricingActive ? 'active' : ''}`} onClick={handlePricingToggle}>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className={`${location.pathname === '/projects' ? 'current':''} dropdown`}><Link to={'/projects'}>Projects</Link>
                  <ul className={`mobile-dropdown-list ${isProjectActive ? 'active' : ''}`}>
                    <li>
                       <Link to={'/projects'}>Projects</Link>
                    </li>
                    <li>
                      <Link to={'/project-details'}>Project Details</Link>
                    </li>
                  </ul>
                  <div className={`dropdown-btn ${isProjectActive ? 'active' : ''}`} onClick={handleProjectToggle}>
                  <i className="fa fa-angle-down"></i>
                </div>
                </li>
                <li className={location.pathname === '/contact' ? 'current':''}><Link to={'/contact'}>Contact</Link></li>
            </ul>
            <ul className="contact-list-one">
            <li>

        <div className="contact-info-box"> <i className="icon fa fa-phone"></i> <span className="title">Call Now</span> <a href="tel:+92880098670">+92 (8800) - 98670</a> </div>
        </li>
        <li>

        <div className="contact-info-box"> <i className='icon fa fa-envelope'></i> <span className="title">Send Email</span> <a href="mailto:help@company.com">help@company.com</a> </div>
        </li>
        <li>

        <div className="contact-info-box"> <span className="icon fa fa-clock"></span> <span className="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div>
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
      <div className={ `sticky-header sticky-header-style-two ${isHeaderActive ? 'fixed-header animated slideInDown':''}`}>
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
                <li className={location.pathname === '/' ? 'current':''}><Link to={'/'}>Home</Link></li>
                <li className={location.pathname === '/about' ? 'current':''}><Link to={'/about'}>About</Link></li>
                <li className={`${location.pathname === '/services' ? 'current':'' || location.pathname === '/service-details' ? 'current':''} dropdown`}><Link to={'/services'}>Services</Link>
                <ul>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/service-details'}>Service Details</Link></li>
                </ul>
                </li>
                <li className={`${location.pathname === '/pricing' ? 'current':''} dropdown`}><Link to={'/pricing'}>Pricing</Link>
                 <ul>
                 <li><NavLinkWithQuery to="/pricing" category="staticWebsite">Static Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="dynamicWebsite">Dynamic Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="eCommerceWebsite">E-Commerce Website</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="appDevelopment">App Development</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="seo">SEO Service</NavLinkWithQuery></li>
                <li><NavLinkWithQuery to="/pricing" category="hosting">Hosting</NavLinkWithQuery></li>
                 </ul>
                 
                </li>
                <li className={`${location.pathname === '/projects' ? 'current':''} dropdown`}><Link to={'/projects'}>Projects</Link>
                  <ul>
                    <li>
                       <Link to={'/projects'}>Projects</Link>
                    </li>
                    <li>
                      <Link to={'/project-details'}>Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li className={location.pathname === '/contact' ? 'current':''}><Link to={'/contact'}>Contact</Link></li>
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
   </>
  )
}

function NavLinkWithQuery({ to, category, children }) {
  const location = useLocation();
  const isActive = location.pathname === to && new URLSearchParams(location.search).get('category') === category;
  return (
    <Link to={`{ pathname: to, search: ?category=${category} }`} className={isActive ? 'active' : ''}>{children}</Link>
  );
}

export default Header;