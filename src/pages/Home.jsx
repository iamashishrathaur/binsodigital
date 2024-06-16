import React from 'react'
import Logo from '../assets/images/logo-2.webp'
import Slider2 from '../assets/images/bg-slider2.jpg'
import ServiceSection from '../components/ServiceSection'
import ClientsSection from '../components/ClientSection'
import FeaturesSection from '../components/FeaturesSection'
import FaqsSection from '../components/FaqsSection'
import TestimonialSection from '../components/TestimonialSection'
import TeamSection from '../components/TeamSection'
import NewsSection from '../components/NewsSection'
import ContractSection from '../components/ContractSection'
import MapSection from '../components/MapSection'
import Header from '../components/Header'
import MainSlider from '../components/MainSlider'
import Preloader from '../components/Preloader'
import AboutSection from '../components/AboutSection'
import ServicesSection4 from '../components/ServicesSection4'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
const Home1 = () => {
  return (
    <>
  <div className="page-wrapper">
    <Preloader/>
    <Header/>
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
    <Footer/>
  </div>
  <ScrollToTop/>
</>

  )
}

export default Home1
